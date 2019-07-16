export { Deprecado } from '../partes/deprecado'
export { Deprecante } from '../partes/deprecante'
export { JuizoSentenciante } from '../partes/juizo-sentenciante'
export { Jusrogante } from '../partes/jusrogante'
export { JuizDeprecante } from '../partes/juiz-deprecante'
export { JustRog } from '../partes/just-rog'
export { Relator } from '../partes/relator'
export { Revisor } from '../partes/revisor'

import { Deprecado } from '../partes/deprecado'
import { Deprecante } from '../partes/deprecante'
import { JuizoSentenciante } from '../partes/juizo-sentenciante'
import { Jusrogante } from '../partes/jusrogante'
import { JuizDeprecante } from '../partes/juiz-deprecante'
import { JustRog } from '../partes/just-rog'
import { Relator } from '../partes/relator'
import { Revisor } from '../partes/revisor'
import { Polo } from '.'

export type TypeJuizoDesembargador = Deprecado | Deprecante | JuizoSentenciante | Jusrogante | JuizDeprecante | JustRog | Relator | Revisor

export interface DictJuizoDesembargador { [name: string]: TypeJuizoDesembargador }
export const ObjectJuizoDesembargador: DictJuizoDesembargador = Object.assign({}, Deprecado, Deprecante, JuizoSentenciante, Jusrogante, JuizDeprecante, JustRog, Relator, Revisor)
Object.freeze(ObjectJuizoDesembargador)

export default Polo.JuizoDesembargador
