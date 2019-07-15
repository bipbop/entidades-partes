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
import { TypeAtivoOuPassivo, ObjectAtivoOuPassivo, default as AtivoOuPassivo } from "./ativo-ou-passivo";
import { TypeAtivo, ObjectAtivo, default as Ativo } from "./ativo";
import { TypePassivo, ObjectPassivo, default as Passivo } from "./passivo";
import { TypeJuizoDesembargador, ObjectJuizoDesembargador, default as JuizoDesembargador } from "./juizo-desembargador";
import { TypeTerceiro, ObjectTerceiro, default as Terceiro } from "./terceiro";

export type TypeParte = TypeTerceiro | TypeJuizoDesembargador | TypePassivo | TypeAtivo | TypeAtivoOuPassivo

export interface DictParte {[name: string]: TypeParte}
export type TObjectPartes = {[key in Polo]: DictParte}

export const Partes: TObjectPartes = {
  [AtivoOuPassivo]: ObjectAtivoOuPassivo,
  [Ativo]: ObjectAtivo,
  [Passivo]: ObjectPassivo,
  [Terceiro]: ObjectTerceiro,
  [JuizoDesembargador]: ObjectJuizoDesembargador
}

Object.freeze(Partes);
