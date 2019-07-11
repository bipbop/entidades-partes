import { readFileSync } from 'fs'

// 330
const file = readFileSync('../lista - nomenclaturas - LUCAS - HELS..txt', 'utf8')
const lines = file.split('\n').filter(line => line.startsWith(' '))

lines.map(line => {
  const index0 = line.indexOf('"')
  const index1 = line.indexOf('"', index0 + 1)
  const index2 = line.indexOf('"', index1 + 1)
  const index3 = line.indexOf('"', index2 + 1)

  const word = line.substring(index0, index1)

  if (index3 !== -1) {
    
  }
})