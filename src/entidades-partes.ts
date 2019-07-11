import * as t from './types'

export enum PoloProvavel {
  Passivo = 'Passivo',
  Terceiro = 'Terceiro',
  Ativo = 'Ativo',
  AtivoOuPassivo = 'AtivoOuPassivo',
  JuizoDesembargador = 'JuizoDesembargador'
}

const enums = t as { 
  [type: string]: { [member: string]: string }
}

// const partes: { [type in PoloProvavel]: { [member: string]: string } } = {
//   Ativo: Agravante | ApeladoApelante | PrimeiroApelante | Apelante | Arguente | Ativa | Autor | AutorDoFato | Consignante | Credor | Demandante | Denunciante | Embargante | Excepto | Executante | Exequente | Expropriante | Impetrante | Impugnante | Interpelante | Interveniente | InventarianteParteAtiva | Nunciante | Oponente | Paciente | Plurima | PoloAtivo | Promovente | Proponente | Querelante | Reclamante | Reconvindo | Recorrente | PrimeiroRecorrente | SegundoRecorrente | Terceiro | RecorrenteAgravado | Requerente | Requisitante | Suscitante | Sustante | Vitima
// }

// export type TipoPassivo = Acusado | AcusadoPunibilidadeExtinta | Agravado | AgravadoRecorrente | AgravanteRecorrido | Apelado | ApelanteApelado | Apenado | Arguido | Autuado | Coator | Condenado | Consignatario | Demandado | Denunciado | Devedor | Embargado | Excipiente | Executado | Expropriado | Extraditado | Flagranteado | Impetrado | Impugnado | Indiciado | Infrator | Inquirido | Interditado | Interditando | Interpelado | Inventariado | InventariantePartePassiva | Investigado | LitisconsortePassivo | LitisconsortePassivoNecessario | MassaFalida | MassaInsolvente | Inventor | Nunciado | Passiva | PoloPassivo | Promovido | Querelado | Reclamado | Reconvinte | Recorrido | RecorridoAgravante | Reeducando | Requerido | Confinante | Requisitado | Reu | Sentenciado | SujeitoPassivo | Suscitado | Sustado
// export type TipoTerceiro = Adolescente | Admterc | Assista | AssMP | Autoridade | Beneficiario | ChamadoAoProcesso | Comunicado | Comunicante | Corrigente | Corrigido | CriancaAdolescente | DeCujus | Dilig | EntidadeRelacionada | EntrePartes | Falecido | Habilitado | Habilitante | Informante | Infte | Interessado | Marca | Perito | Procurador | Representante | Inventariante | TerceiraPessoa | Terceiro | TerceiroInteressado | Terintcer | Terintinc | Testemunha
// export type TipoAtivo = Agravante | ApeladoApelante | PrimeiroApelante | Apelante | Arguente | Ativa | Autor | AutorDoFato | Consignante | Credor | Demandante | Denunciante | Embargante | Excepto | Executante | Exequente | Expropriante | Impetrante | Impugnante | Interpelante | Interveniente | InventarianteParteAtiva | Nunciante | Oponente | Paciente | Plurima | PoloAtivo | Promovente | Proponente | Querelante | Reclamante | Reconvindo | Recorrente | PrimeiroRecorrente | SegundoRecorrente | Terceiro | RecorrenteAgravado | Requerente | Requisitante | Suscitante | Sustante | Vitima
// export type TipoAtivoOuPassivo = Contratado | Contratante | ContribuintePrincipal | Inventariante | Litisconsorte | Depositante | Procurador | Titular | Noticiado | Noticiante | Notificado | Notificante | Oposto | Outros | OutrosNomes | RecorrenteRecorrido | RecorridoRecorrente | RecdoRecte | RecteRecdo | Remetente | Representado | Responsavel
// export type TipoJuizoDesembargador = Deprecado | Deprecante | JuizoSentenciante | Jusrogante | JuizDeprecante | JustRog | Relator | Revisor

export default class Parte<> {

}

export class Parte<T extends string = t.Parte> {
  readonly parte?: t.Parte
  readonly poloProvavel?: PoloProvavel

  constructor(readonly sinonimoParte: T) {
    for (const type in enums) {
      for (const member in enums[name]) {
        if (enums[type][member] === sinonimoParte) {
          this.parte = type as t.Parte
          // this.poloProvavel = type as PoloProvavel
        }
      }
    }
  }

  toString() {
    return `Parte { sinonimoParte: '${this.sinonimoParte}', parte: '${this.parte}', poloProvavel: '${this.poloProvavel}'}`
  }
}