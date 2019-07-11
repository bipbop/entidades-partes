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

let output = `export type Parte = ${Object.keys(polosProvaveis).map(pp => `PartePolo${pp}`).join(' | ')}\n`

mapValues(polosProvaveis, (polo, idx) => {
  output += `\nexport type PartePolo${idx} = ${polo.join(' | ')}`
})

output += '\n\nexport enum PoloProvavel {'

mapValues(polosProvaveis, (polo, idx) => {
  output += `\n  ${idx},`
})

output += '\n}'

mapValues(partes, (partes, idx) => {
  output += `\n\nexport enum ${idx} {
${partes.map(parte => `  ${parte} = "${parte}",`).join('\n')}
}`
})

writeFileSync('types.ts', output)