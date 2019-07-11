import { readFileSync } from 'fs'
import { pascalCase } from 'change-case'
import { remove as removeDiacritics } from 'diacritics'
import groupBy from 'lodash/groupBy'
import mapValues from 'lodash/mapValues'
import uniq from 'lodash/uniq'

type TDictFromText = [string, string, string?]

interface IDescripton {
  sinonimoParte: string
  parte: string
  poloProvavel?: string
  cases?: IDescripton,
}

const lines = readFileSync('../nomenclatura.txt').toString('utf-8').split(/(\r)?\n/).filter(line => !!line)

const dict = lines.map((line): TDictFromText => {
    const splitString = line.split('"').map(item => item.replace(/[^a-zÀ-ú\/\.\s]/gi, '').toLocaleLowerCase().trim()).filter(item => !!item)
    return splitString as TDictFromText
}).filter(items => items.length >= 2).map(([sinonimoParte, parte, poloProvavel]: TDictFromText): IDescripton => ({
  sinonimoParte,
  parte,
  poloProvavel,
  cases: {
    sinonimoParte: pascalCase(removeDiacritics(sinonimoParte)),
    parte: pascalCase(removeDiacritics(parte)),
    poloProvavel: poloProvavel ? pascalCase(removeDiacritics(poloProvavel)) : pascalCase(removeDiacritics('terceiro')) 
  }
}))

const partes = mapValues(groupBy(dict, 'cases.parte'), (items, idx) => uniq(items.map(({ cases }) => cases ? cases.sinonimoParte : null).concat(idx)));
const polosProvaveis = mapValues(groupBy(dict, 'cases.poloProvavel'), (items) => uniq(items.map(({ cases }) => cases ? cases.parte : null)));

console.log(`type Parte = ${Object.keys(polosProvaveis).join(' | ')}`);

mapValues(polosProvaveis, (polo, idx) => {
  console.log(`type ${idx} = ${polo.join(' | ')}`)
})

mapValues(partes, (parte, idx) => {
  console.log(`type ${idx} = ${parte.map(parte => `"${parte}"`).join(' | ')}`)
})
