export { default as TypeAtivoOuPassivo } from "./ativo-ou-passivo";
export { default as TypeAtivo } from "./ativo";
export { default as TypePassivo } from "./passivo";
export { default as TypeJuizoDesembargador } from "./juizo-desembargador";
export { default as TypeTerceiro } from "./terceiro";
export * from "./ativo-ou-passivo";
export * from "./ativo";
export * from "./passivo";
export * from "./juizo-desembargador";
export * from "./terceiro";
import { Polo } from "./index";
import { TypeAtivoOuPassivo } from "./ativo-ou-passivo";
import { TypeAtivo } from "./ativo";
import { TypePassivo } from "./passivo";
import { TypeJuizoDesembargador } from "./juizo-desembargador";
import { TypeTerceiro } from "./terceiro";
export declare type TypeParte = TypeTerceiro | TypeJuizoDesembargador | TypePassivo | TypeAtivo | TypeAtivoOuPassivo;
export interface DictParte {
    [name: string]: TypeParte;
}
export declare type ObjectPartes = {
    [key in Polo]: DictParte;
};
export declare const Partes: ObjectPartes;
