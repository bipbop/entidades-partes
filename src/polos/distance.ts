import levenshtein from 'js-levenshtein'
import { Partes, TypeParte, ObjectPartes } from './partes'
import mapValues from 'lodash/mapValues'
import { Polo } from '.'
import { remove } from 'diacritics'

interface DistanceResponse {
  parte: TypeParte
  distance: number
}

interface Distance {
  polo: Polo
  parte: TypeParte
  distance: number
}

export function distance(str: string): Distance {
  str = remove(str)
    .replace(/^p[óÓo]lo/i, '')
    .replace(/\([^\)]+\)/, '')
    .replace(/ /g, '')
    .toLowerCase()
  const items = mapValues<ObjectPartes, DistanceResponse>(Partes, (a): DistanceResponse => {
    const distances = mapValues(a, (n: TypeParte): number => {
      return levenshtein(str, remove(n).toLowerCase())
    })
    const parte = Object.entries(distances).sort((a, b) => a[1] - b[1])[0][0] as TypeParte
    return { parte, distance: distances[parte] }
  })

  const polo = Object.entries(items).sort((a, b) => a[1].distance - b[1].distance)[0][0] as Polo
  return { polo, ...items[polo] }
}