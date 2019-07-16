# entidades-partes
[![npm version](https://badge.fury.io/js/entidades-partes.svg)](https://npmjs.org/package/entidades-partes)

Lista de possíveis nomeclaturas de partes em processos jurídicos.

Usado para encontrar o nome comum da parte e o polo provável,
através do fornecimento de um sinônimo/aproximação do nome da parte,
usando o algoritmo de Levenshtein.

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install entidades-partes --save
```

This package is provided in these module formats:

- CommonJS

## Using
```ts
import { distance } from 'entidades-partes'

console.log(distance('acusado'))
// { polo: 'Passivo', parte: 'Acusado', distance: 1 }
```

## Building

### Install Dependencies
```sh
npm install
```

### Compile
```sh
npm run compile
```

### Test
```sh
npm test
```

## Dependencies
- [js-levenshtein](https://github.com/gustf/js-levenshtein): The most efficient JS implementation calculating the Levenshtein distance, i.e. the difference between two strings.
- [lodash](https://github.com/lodash/lodash): A modern JavaScript utility library delivering modularity, performance, & extras.

## License
Released under the [MIT licence](http://escolhaumalicenca.com.br/licencas/mit/).