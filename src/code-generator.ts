import { readFileSync, writeFileSync } from 'fs'
import { pascalCase } from 'change-case'
import { remove as removeDiacritics } from 'diacritics'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'
import uniq from 'lodash/uniq'

type DictFromText = [string, string, string?]

interface Descripton {
  sinonimoParte: string
  parte: string
  poloProvavel?: string
  cases?: Descripton
}

const lines = readFileSync('../nomenclatura.txt').toString('utf-8').split(/(\r)?\n/).filter(line => !!line)

const dict = lines.map((line): DictFromText => {
  const splitString = line.split('"').map(item => item.replace(/[^a-zÀ-ú\/\.\s]/gi, '').toLocaleLowerCase().trim()).filter(item => !!item)

  return splitString as DictFromText
}).filter(items => items.length >= 2).map(([sinonimoParte, parte, poloProvavel]: DictFromText): Descripton => ({
  sinonimoParte,
  parte,
  poloProvavel,
  cases: {
    sinonimoParte: pascalCase(removeDiacritics(sinonimoParte)),
    parte: pascalCase(removeDiacritics(parte)),
    poloProvavel: poloProvavel ? pascalCase(removeDiacritics(poloProvavel)) : pascalCase(removeDiacritics('terceiro'))
  }
}))

const partes = mapValues(groupBy(dict, 'cases.parte'), (items, idx) => uniq(items.map(({ cases }) => cases ? cases.sinonimoParte : null).concat(idx)))
const polosProvaveis = mapValues(groupBy(dict, 'cases.poloProvavel'), (items) => uniq(items.map(({ cases }) => cases ? cases.parte : null)))

let output = `import flatMap from 'lodash/flatMap'
import levenshtein from 'js-levenshtein'`

output += '\n\nexport enum PoloProvavel {'

mapValues(polosProvaveis, (polo, idx) => {
  output += `\n  ${idx} = "${idx}",`
})

output += '\n}'

mapValues(partes, (partes, idx) => {
  output += `\n\nexport enum ${idx} {
${partes.map(parte => `  ${parte} = "${parte}",`).join('\n')}
}`
})

output += `\n\nexport abstract class Parte<T extends Polo['sinonimoParte']> {
  protected static partes: { [parte: string]: string[] }
  protected static sinonimos: string[]

  private _sinonimoParte!: string
  private _parte!: string

  get sinonimoParte(): T {
    return this._sinonimoParte as T
  }

  get parte() {
    return this._parte
  }

  get poloProvavel(): PoloProvavel {
    return this.constructor.name.substr(9) as PoloProvavel
  }

  private static getDistances(texto: string) {
    return this.sinonimos.map(s => levenshtein(texto, s));
  }

  private static getMinDistance(distances: number[]) {
    return Math.min(...distances)
  }

  private static getSinoninoParte(texto: string) {
    const distances = this.getDistances(texto)
    const minDistance = this.getMinDistance(distances)
    const index = distances.indexOf(minDistance)

    return this.sinonimos[index]
  }

  private static getParte(sinonimo: string) {
    return stringKeys(this.partes).find(p => this.partes[p].includes(sinonimo))!
  }

  static find<T extends Parte<any>>(texto: string): T {
    if (this === Parte) {
      const distances = [
        PartePoloPassivo.getDistances(texto),
        PartePoloTerceiro.getDistances(texto),
        PartePoloAtivo.getDistances(texto),
        PartePoloAtivoOuPassivo.getDistances(texto),
        PartePoloJuizoDesembargador.getDistances(texto)
      ]

      const minDistances = distances.map(this.getMinDistance)
      const minDistance = this.getMinDistance(minDistances)
      const index = minDistances.indexOf(minDistance)

      return [
        PartePoloPassivo,
        PartePoloTerceiro,
        PartePoloAtivo,
        PartePoloAtivoOuPassivo,
        PartePoloJuizoDesembargador
      ][index].find(texto)
    } else {
      const sinonimoParte = this.getSinoninoParte(texto)
      const parte = this.getParte(sinonimoParte)

      // @ts-ignore
      return new this(sinonimoParte, parte)
    }
  }

  protected constructor(sinonimoParte: string, parte: string) {
    this._sinonimoParte = sinonimoParte
    this._parte = parte
  }

  toString() {
    return \`\${this.constructor.name} { sinonimoParte: "\${this.sinonimoParte}", parte: "\${this.parte}", poloProvavel: "\${this.poloProvavel}" }\`
  }
}

function stringKeys<T>(e: T) {
  return Object.keys(e).filter(k => k[0] < '0' || k[0] > '9')
}`

mapValues(polosProvaveis, (polo, idx) => {
  output += `\n\nexport class PartePolo${idx} extends Parte<${polo.join(' | ')}> {
  protected static partes = {
    ${polo.map(p => `${p}: stringKeys(${p})`).join(',\n    ')}
  }

  protected static sinonimos = flatMap([${polo.join(', ')}], e => stringKeys(e))
}`
})

output += `\n\nexport type Polo = ${Object.keys(polosProvaveis).map(pp => `PartePolo${pp}`).join(' | ')}`

writeFileSync('entidades-partes.ts', output)