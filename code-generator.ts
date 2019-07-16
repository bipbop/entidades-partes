import { readFileSync, writeFileSync, writeFile } from 'fs'
import { pascalCase, paramCase } from 'change-case'
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

mapValues(partes, (partes, idx) => writeFileSync(`partes/${paramCase(idx)}.ts`, `export enum ${idx} {
${partes.map(parte => `  ${parte} = "${parte}",`).join('\n')}
}\n`))

writeFileSync('polos/index.ts', `export enum Polo {
${Object.keys(polosProvaveis).map(x => `  ${x} = '${x}',`).join('\n')}
}`)

mapValues(polosProvaveis, (values, idx) => {
  writeFileSync(`polos/${paramCase(idx)}.ts`, `${values.map(x => `export { ${x} } from '../partes/${paramCase(x || '')}'`).join('\n')}

${values.map(x => `import { ${x} } from '../partes/${paramCase(x || '')}'`).join('\n')}
import { Polo } from '.'

export type Type${idx} = ${values.map(x => `${x}`).join(' | ')}

export interface Dict${idx} { [name: string]: Type${idx} }
export const Object${idx}: Dict${idx} = Object.assign({}, ${values.map(x => `${x}`).join(', ')})
Object.freeze(Object${idx})

export default Polo.${idx}
`)
})
