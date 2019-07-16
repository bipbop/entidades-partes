import { distance } from '..'

test('exact match', async () => {
  let dist = distance('Acusado')

  expect(dist.distance).toBe(0)
  expect(dist.parte).toBe('Acusado')
  expect(dist.polo).toBe('Passivo')
})

test('lower case', async () => {
  const dist = distance('beneficiario')

  expect(dist.distance).toBe(1)
  expect(dist.parte).toBe('Beneficiario')
  expect(dist.polo).toBe('Terceiro')
})

test('multipart space separated', async () => {
  const dist = distance('chamado ao processo')

  expect(dist.distance).toBe(5)
  expect(dist.parte).toBe('ChamadoAoProcesso')
  expect(dist.polo).toBe('Terceiro')
})

test('synonim', async () => {
  const dist = distance('Embargados')

  expect(dist.distance).toBe(0)
  expect(dist.parte).toBe('Embargados')
  expect(dist.polo).toBe('Passivo')
})

test('approximation 1 diference', async () => {
  const dist = distance('DeCujos')

  expect(dist.distance).toBe(1)
  expect(dist.parte).toBe('DeCujus')
  expect(dist.polo).toBe('Terceiro')
})
