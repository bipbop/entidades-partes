import levenshtein from 'js-levenshtein'
import { partes, TypeParte, TObjectPartes } from './partes'
import mapValues from 'lodash/mapValues'
import { Polo } from '.';

interface DistanceResponse extends Object {
  parte: TypeParte
  distance: number
}

interface IDistance {
  polo: Polo
  parte: TypeParte
  distance: number  
}

export function distance(str: string): IDistance {
  const items = mapValues<TObjectPartes, DistanceResponse>(partes, (a): DistanceResponse  => {
    const distances = mapValues(a, (n: TypeParte): number => {
      return levenshtein(str, n);
    })
    const parte = Object.entries(distances).sort((a, b) => a[1] - b[1])[0][0] as TypeParte
    return { parte, distance: distances[parte] }
  })

  const polo = Object.entries(items).sort((a, b) => a[1].distance - b[1].distance)[0][0] as Polo
  return { polo, ...items[polo] }
}