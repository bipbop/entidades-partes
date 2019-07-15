export { EnumDeprecado } from '../partes/deprecado';
export { EnumDeprecante } from '../partes/deprecante';
export { EnumJuizoSentenciante } from '../partes/juizo-sentenciante';
export { EnumJusrogante } from '../partes/jusrogante';
export { EnumJuizDeprecante } from '../partes/juiz-deprecante';
export { EnumJustRog } from '../partes/just-rog';
export { EnumRelator } from '../partes/relator';
export { EnumRevisor } from '../partes/revisor';
import { EnumDeprecado } from '../partes/deprecado';
import { EnumDeprecante } from '../partes/deprecante';
import { EnumJuizoSentenciante } from '../partes/juizo-sentenciante';
import { EnumJusrogante } from '../partes/jusrogante';
import { EnumJuizDeprecante } from '../partes/juiz-deprecante';
import { EnumJustRog } from '../partes/just-rog';
import { EnumRelator } from '../partes/relator';
import { EnumRevisor } from '../partes/revisor';
export declare type TypeJuizoDesembargador = EnumDeprecado | EnumDeprecante | EnumJuizoSentenciante | EnumJusrogante | EnumJuizDeprecante | EnumJustRog | EnumRelator | EnumRevisor;
export interface DictJuizoDesembargador {
    [name: string]: TypeJuizoDesembargador;
}
export declare const JuizoDesembargador: DictJuizoDesembargador;
export { JuizoDesembargador };
