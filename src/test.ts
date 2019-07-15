import { Parte, PartePoloTerceiro, PartePoloJuizoDesembargador } from './entidades-partes'

let parte = Parte.find('decujos')!
console.log(parte.toString())

if (parte instanceof PartePoloTerceiro) {
  console.log('sinonimoParte:', parte.sinonimoParte)
  console.log('parte:', parte.parte)
  console.log('poloProvavel:', parte.poloProvavel)
}

parte = Parte.find('revisors')!
console.log(parte.toString())

if (parte instanceof PartePoloJuizoDesembargador) {
  console.log('sinonimoParte:', parte.sinonimoParte)
  console.log('parte:', parte.parte)
  console.log('poloProvavel:', parte.poloProvavel)
}