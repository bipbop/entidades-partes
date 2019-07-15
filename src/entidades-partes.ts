import flatMap from 'lodash/flatMap'
import levenshtein from 'js-levenshtein'

export enum PoloProvavel {
  Passivo = "Passivo",
  Terceiro = "Terceiro",
  Ativo = "Ativo",
  AtivoOuPassivo = "AtivoOuPassivo",
  JuizoDesembargador = "JuizoDesembargador",
}

export enum Acusado {
  Acusado = "Acusado",
  Acusados = "Acusados",
}

export enum AcusadoPunibilidadeExtinta {
  AcusadoPunibilidadeExtinta = "AcusadoPunibilidadeExtinta",
}

export enum Adolescente {
  Adolescente = "Adolescente",
}

export enum Admterc {
  Admterc = "Admterc",
}

export enum Agravado {
  Agda = "Agda",
  Agdo = "Agdo",
  Agrdo = "Agrdo",
  Agvdo = "Agvdo",
  Agravada = "Agravada",
  Agravadas = "Agravadas",
  Agravado = "Agravado",
  Agravados = "Agravados",
  Agravadoa = "Agravadoa",
  Agravadoas = "Agravadoas",
  Agravdo = "Agravdo",
}

export enum AgravadoRecorrente {
  AgravadosERecorrentes = "AgravadosERecorrentes",
  AgravadoRecorrente = "AgravadoRecorrente",
}

export enum AgravanteRecorrido {
  AgravantesERecorridos = "AgravantesERecorridos",
  AgravanteRecorrido = "AgravanteRecorrido",
}

export enum Agravante {
  Agravante = "Agravante",
  Agravantes = "Agravantes",
  Agravte = "Agravte",
  Agrte = "Agrte",
  Agte = "Agte",
  Agvte = "Agvte",
}

export enum Apelado {
  Apda = "Apda",
  Apdo = "Apdo",
  Apelada = "Apelada",
  Apeladas = "Apeladas",
  Apelado = "Apelado",
  Apelados = "Apelados",
  Apeladoa = "Apeladoa",
  Apeladoas = "Apeladoas",
}

export enum ApeladoApelante {
  ApdoApte = "ApdoApte",
  ApeladoApelante = "ApeladoApelante",
}

export enum PrimeiroApelante {
  Apelante = "Apelante",
  PrimeiroApelante = "PrimeiroApelante",
}

export enum Apelante {
  Apelante = "Apelante",
  Apelantes = "Apelantes",
  Apte = "Apte",
}

export enum ApelanteApelado {
  ApteApdo = "ApteApdo",
  ApelanteApelado = "ApelanteApelado",
}

export enum Apenado {
  Apenado = "Apenado",
}

export enum Arguido {
  Arguido = "Arguido",
  Argdo = "Argdo",
  ArgdoAS = "ArgdoAS",
}

export enum Arguente {
  Arguente = "Arguente",
  Argte = "Argte",
  ArgteS = "ArgteS",
}

export enum Assista {
  Assista = "Assista",
}

export enum AssMP {
  AssMP = "AssMP",
}

export enum Ativa {
  Ativa = "Ativa",
}

export enum Autor {
  Autor = "Autor",
  Autora = "Autora",
  Autoras = "Autoras",
  Autores = "Autores",
  AutoraSes = "AutoraSes",
  Autors = "Autors",
  AutorS = "AutorS",
  Partea = "Partea",
  NomeDoAutor = "NomeDoAutor",
}

export enum AutorDoFato {
  AutorDoFato = "AutorDoFato",
}

export enum Autoridade {
  Autoridade = "Autoridade",
}

export enum Autuado {
  Autuado = "Autuado",
}

export enum Beneficiario {
  Beneficiario = "Beneficiario",
}

export enum ChamadoAoProcesso {
  ChamadoAoProcesso = "ChamadoAoProcesso",
}

export enum Coator {
  ACoatora = "ACoatora",
  AutoridCoatora = "AutoridCoatora",
  AutoridadeCoatora = "AutoridadeCoatora",
  Coator = "Coator",
  CoatoraSes = "CoatoraSes",
}

export enum Comunicado {
  Comunicado = "Comunicado",
}

export enum Comunicante {
  Comunicante = "Comunicante",
}

export enum Condenado {
  Condenada = "Condenada",
  Condenado = "Condenado",
}

export enum Consignante {
  Consignante = "Consignante",
  Consignantes = "Consignantes",
}

export enum Consignatario {
  Consignatario = "Consignatario",
  Consignatarios = "Consignatarios",
}

export enum Contratado {
  Contratada = "Contratada",
  Contratado = "Contratado",
  Contratadoa = "Contratadoa",
}

export enum Contratante {
  Contratante = "Contratante",
}

export enum ContribuintePrincipal {
  ContribuintePrincipal = "ContribuintePrincipal",
}

export enum Corrigente {
  Corrigente = "Corrigente",
}

export enum Corrigido {
  Corrigido = "Corrigido",
}

export enum Credor {
  Credor = "Credor",
}

export enum CriancaAdolescente {
  CriancaAdole = "CriancaAdole",
  CriancaAdolescente = "CriancaAdolescente",
}

export enum DeCujus {
  DeCujus = "DeCujus",
}

export enum Demandado {
  Demandado = "Demandado",
}

export enum Demandante {
  Demandante = "Demandante",
}

export enum Denunciado {
  Denunciado = "Denunciado",
  Denunciados = "Denunciados",
}

export enum Denunciante {
  Denunciante = "Denunciante",
  Denunciantes = "Denunciantes",
}

export enum Deprecado {
  Depcdo = "Depcdo",
  Deprecado = "Deprecado",
}

export enum Deprecante {
  Depcte = "Depcte",
  Deprecante = "Deprecante",
}

export enum Devedor {
  Devedor = "Devedor",
}

export enum Dilig {
  Dilig = "Dilig",
}

export enum Embargado {
  Embargado = "Embargado",
  Embargadoa = "Embargadoa",
  Embargadoas = "Embargadoas",
  Embargados = "Embargados",
  Embargda = "Embargda",
  Embargdo = "Embargdo",
}

export enum Embargante {
  Embargante = "Embargante",
  Embargantes = "Embargantes",
  Embargte = "Embargte",
}

export enum EntidadeRelacionada {
  EntidadeRelacionada = "EntidadeRelacionada",
  EntidadesRelacionadas = "EntidadesRelacionadas",
}

export enum EntrePartes {
  EntrePartes = "EntrePartes",
}

export enum Excepto {
  Excepta = "Excepta",
  Exceptas = "Exceptas",
  Excepto = "Excepto",
  Exceptos = "Exceptos",
  ExcptoAS = "ExcptoAS",
}

export enum Excipiente {
  Excipiente = "Excipiente",
  Excipientes = "Excipientes",
  ExcpteS = "ExcpteS",
}

export enum Executado {
  Excdo = "Excdo",
  Exectdo = "Exectdo",
  Executada = "Executada",
  Executadas = "Executadas",
  Executado = "Executado",
  Executados = "Executados",
  Executadosas = "Executadosas",
}

export enum Executante {
  Executante = "Executante",
  Executantes = "Executantes",
}

export enum Exequente {
  Exequente = "Exequente",
  Exequentes = "Exequentes",
  Exeqte = "Exeqte",
  Exqte = "Exqte",
}

export enum Expropriado {
  Expropriado = "Expropriado",
}

export enum Expropriante {
  Expropriante = "Expropriante",
}

export enum Extraditado {
  ExtdoAS = "ExtdoAS",
  Extraditado = "Extraditado",
}

export enum Falecido {
  Falecido = "Falecido",
}

export enum Flagranteado {
  Flagranteado = "Flagranteado",
}

export enum Habilitado {
  Habilitado = "Habilitado",
}

export enum Habilitante {
  Habilitante = "Habilitante",
}

export enum Impetrado {
  Impdo = "Impdo",
  ImpdoAS = "ImpdoAS",
  ImpdoS = "ImpdoS",
  Impetrada = "Impetrada",
  Impetradas = "Impetradas",
  Impetrado = "Impetrado",
  Impetrados = "Impetrados",
  Imptda = "Imptda",
  Imptdo = "Imptdo",
}

export enum Impetrante {
  Impetrante = "Impetrante",
  Impetrantes = "Impetrantes",
  Impte = "Impte",
  ImpteS = "ImpteS",
  Imptte = "Imptte",
}

export enum Impugnado {
  Impugdo = "Impugdo",
  Impugnada = "Impugnada",
  Impugnadas = "Impugnadas",
  Impugnado = "Impugnado",
  Impugnados = "Impugnados",
}

export enum Impugnante {
  Impugnante = "Impugnante",
  Impugnantes = "Impugnantes",
  Impugte = "Impugte",
}

export enum Indiciado {
  Indiciado = "Indiciado",
  Indiciadoa = "Indiciadoa",
}

export enum Informante {
  Informante = "Informante",
  Informantes = "Informantes",
}

export enum Infrator {
  Infrator = "Infrator",
}

export enum Infte {
  Infte = "Infte",
}

export enum Inquirido {
  Inquirido = "Inquirido",
  Inquiridos = "Inquiridos",
}

export enum Interditado {
  Interditado = "Interditado",
}

export enum Interditando {
  Interditando = "Interditando",
}

export enum Interessado {
  Intda = "Intda",
  Intdo = "Intdo",
  IntdoAS = "IntdoAS",
  Interesdo = "Interesdo",
  Interessad = "Interessad",
  Interessada = "Interessada",
  Interessadas = "Interessadas",
  Interessado = "Interessado",
  InteressadoProcedencia = "InteressadoProcedencia",
  Interessados = "Interessados",
  ParteInteressada = "ParteInteressada",
  NomeDoInteressado = "NomeDoInteressado",
}

export enum Interpelado {
  Interpelado = "Interpelado",
}

export enum Interpelante {
  Interpelante = "Interpelante",
}

export enum Interveniente {
  Interveniente = "Interveniente",
}

export enum Inventariado {
  Inventariado = "Inventariado",
}

export enum Inventariante {
  Inventariante = "Inventariante",
}

export enum InventarianteParteAtiva {
  InventarianteParteAtiva = "InventarianteParteAtiva",
}

export enum InventariantePartePassiva {
  InventariantePartePassiva = "InventariantePartePassiva",
}

export enum Investigado {
  Investigado = "Investigado",
  Investigados = "Investigados",
  InvestAS = "InvestAS",
}

export enum JuizoSentenciante {
  JuizoSentenciante = "JuizoSentenciante",
}

export enum Jusrogante {
  Jusrogante = "Jusrogante",
}

export enum JuizDeprecante {
  JDpcte = "JDpcte",
  JuizDeprecante = "JuizDeprecante",
}

export enum JustRog {
  JustRog = "JustRog",
}

export enum Litisconsorte {
  Litisconsorte = "Litisconsorte",
  Litisconsortes = "Litisconsortes",
  Litisc = "Litisc",
}

export enum LitisconsortePassivo {
  Litispas = "Litispas",
  LitPass = "LitPass",
  LitisconsortePassiv = "LitisconsortePassiv",
  LitisconsortePassivo = "LitisconsortePassivo",
}

export enum LitisconsortePassivoNecessario {
  LitisconsortePassivoNecessario = "LitisconsortePassivoNecessario",
}

export enum Marca {
  Marca = "Marca",
}

export enum MassaFalida {
  MassaFalida = "MassaFalida",
}

export enum MassaInsolvente {
  MassaInsolvente = "MassaInsolvente",
}

export enum Depositante {
  NomeDoDepositante = "NomeDoDepositante",
  Depositante = "Depositante",
}

export enum Inventor {
  NomeDoInventor = "NomeDoInventor",
  Inventor = "Inventor",
}

export enum Procurador {
  NomeDoProcurador = "NomeDoProcurador",
  Pge = "Pge",
  ProcASes = "ProcASes",
  Procurador = "Procurador",
  Procuradora = "Procuradora",
  Procuradores = "Procuradores",
  ProcGeral = "ProcGeral",
  ProcDoEstado = "ProcDoEstado",
}

export enum Titular {
  NomeDoTitular = "NomeDoTitular",
  Titular = "Titular",
}

export enum Noticiado {
  Noticiado = "Noticiado",
  Noticiados = "Noticiados",
}

export enum Noticiante {
  Noticiante = "Noticiante",
}

export enum Notificado {
  Notificado = "Notificado",
}

export enum Notificante {
  Notificante = "Notificante",
}

export enum Nunciado {
  Nunciado = "Nunciado",
}

export enum Nunciante {
  Nunciante = "Nunciante",
}

export enum Oponente {
  Oponente = "Oponente",
}

export enum Oposto {
  Oposto = "Oposto",
}

export enum Outros {
  Outros = "Outros",
}

export enum OutrosNomes {
  OutrosNomes = "OutrosNomes",
}

export enum Paciente {
  Paciente = "Paciente",
  Pacientes = "Pacientes",
  Pacte = "Pacte",
  PacteS = "PacteS",
}

export enum Passiva {
  Passiva = "Passiva",
}

export enum Perito {
  Perita = "Perita",
  Perito = "Perito",
}

export enum Plurima {
  Plurima = "Plurima",
  Plurimas = "Plurimas",
}

export enum PoloAtivo {
  PoloAtivo = "PoloAtivo",
}

export enum PoloPassivo {
  PoloPassivo = "PoloPassivo",
}

export enum Promovente {
  Promovente = "Promovente",
  Promoventes = "Promoventes",
}

export enum Promovido {
  Promovido = "Promovido",
  Promovidos = "Promovidos",
}

export enum Proponente {
  PropteS = "PropteS",
  Proponente = "Proponente",
}

export enum Querelado {
  QdoAS = "QdoAS",
  Querelado = "Querelado",
}

export enum Querelante {
  QteS = "QteS",
  Querelante = "Querelante",
}

export enum Reclamado {
  PlurimaDoReclamado = "PlurimaDoReclamado",
  Reclamada = "Reclamada",
  Reclamadas = "Reclamadas",
  ReclamadaS = "ReclamadaS",
  ReclamadaPrincipal = "ReclamadaPrincipal",
  Reclamado = "Reclamado",
  Reclamados = "Reclamados",
  ReclamadoS = "ReclamadoS",
  Recldo = "Recldo",
  RecldoAS = "RecldoAS",
}

export enum Reclamante {
  PlurimaDoReclamante = "PlurimaDoReclamante",
  Reclamante = "Reclamante",
  Reclamantes = "Reclamantes",
  ReclamanteS = "ReclamanteS",
  ReclamantePrincipal = "ReclamantePrincipal",
  Reclte = "Reclte",
  ReclteS = "ReclteS",
}

export enum Reconvindo {
  Reconvinda = "Reconvinda",
  Reconvindas = "Reconvindas",
  Reconvindo = "Reconvindo",
  Reconvindos = "Reconvindos",
}

export enum Reconvinte {
  Reconvinte = "Reconvinte",
  Reconvintes = "Reconvintes",
}

export enum Recorrente {
  Recorrente = "Recorrente",
  Recorrentes = "Recorrentes",
  Recte = "Recte",
  RecteS = "RecteS",
}

export enum PrimeiroRecorrente {
  Recorrente = "Recorrente",
  PrimeiroRecorrente = "PrimeiroRecorrente",
}

export enum SegundoRecorrente {
  Recorrente = "Recorrente",
  SegundoRecorrente = "SegundoRecorrente",
}

export enum Terceiro {
  Recorrente = "Recorrente",
  Terceiro = "Terceiro",
}

export enum RecorrenteRecorrido {
  RcrteRcrda = "RcrteRcrda",
  RcrteRcrdo = "RcrteRcrdo",
  RecorrenteERecorrido = "RecorrenteERecorrido",
  RecorrenteRecorrido = "RecorrenteRecorrido",
}

export enum RecorridoRecorrente {
  RcrdaRcrte = "RcrdaRcrte",
  RcrdoRcrte = "RcrdoRcrte",
  RecorridoRecorrente = "RecorridoRecorrente",
}

export enum RecorrenteAgravado {
  RecorrentesEAgravadoas = "RecorrentesEAgravadoas",
  RecorrenteSEAgravadoAS = "RecorrenteSEAgravadoAS",
  RecorrenteAgravado = "RecorrenteAgravado",
}

export enum Recorrido {
  Recdo = "Recdo",
  RecdoAS = "RecdoAS",
  Recorrida = "Recorrida",
  Recorridas = "Recorridas",
  Recorrido = "Recorrido",
  Recorridos = "Recorridos",
  Recorridoa = "Recorridoa",
  Recorridoas = "Recorridoas",
}

export enum RecorridoAgravante {
  RecorridosEAgravantes = "RecorridosEAgravantes",
  RecorridoAgravante = "RecorridoAgravante",
}

export enum RecdoRecte {
  RecdaRecte = "RecdaRecte",
  RecdoRecte = "RecdoRecte",
}

export enum RecteRecdo {
  RecteRecda = "RecteRecda",
  RecteRecdo = "RecteRecdo",
}

export enum Reeducando {
  Reeducando = "Reeducando",
}

export enum Relator {
  Relator = "Relator",
  Relatora = "Relatora",
  Relatores = "Relatores",
}

export enum Remetente {
  Remetente = "Remetente",
}

export enum Representante {
  Representante = "Representante",
  Representantepais = "Representantepais",
  Representantes = "Representantes",
  RepresentanteS = "RepresentanteS",
  RepresentanteDaSefa = "RepresentanteDaSefa",
  RepresentanteLegal = "RepresentanteLegal",
}

export enum Representado {
  Representada = "Representada",
  Representadas = "Representadas",
  Representado = "Representado",
  Representados = "Representados",
  Representadoa = "Representadoa",
  RepresentadoAS = "RepresentadoAS",
}

export enum Requerente {
  Reqte = "Reqte",
  ReqteS = "ReqteS",
  Requerente = "Requerente",
  Requerentes = "Requerentes",
}

export enum Requerido {
  Reqda = "Reqda",
  Reqdo = "Reqdo",
  ReqdoAS = "ReqdoAS",
  Requerida = "Requerida",
  Requeridas = "Requeridas",
  Requerido = "Requerido",
  Requeridoa = "Requeridoa",
  Requeridos = "Requeridos",
  Requeridoas = "Requeridoas",
}

export enum Confinante {
  Confte = "Confte",
  Confinante = "Confinante",
}

export enum Requisitado {
  Requisitado = "Requisitado",
  Requisitados = "Requisitados",
}

export enum Requisitante {
  Requisitante = "Requisitante",
  Requisitantes = "Requisitantes",
}

export enum Responsavel {
  Responsavel = "Responsavel",
}

export enum Reu {
  Reu = "Reu",
  Reus = "Reus",
  ReuS = "ReuS",
  Re = "Re",
  Res = "Res",
  Reues = "Reues",
  ReuPreso = "ReuPreso",
  Parter = "Parter",
}

export enum Revisor {
  Revisor = "Revisor",
  Revisora = "Revisora",
  Revisores = "Revisores",
}

export enum Sentenciado {
  Sentenciado = "Sentenciado",
}

export enum SujeitoPassivo {
  SujeitoPassivo = "SujeitoPassivo",
}

export enum Suscitado {
  Suscitado = "Suscitado",
}

export enum Suscitante {
  Suscitante = "Suscitante",
}

export enum Sustado {
  Susdo = "Susdo",
  Sustado = "Sustado",
}

export enum Sustante {
  Suste = "Suste",
  Sustante = "Sustante",
}

export enum TerceiraPessoa {
  Pessoa = "Pessoa",
  TerceiraPessoa = "TerceiraPessoa",
}

export enum TerceiroInteressado {
  TerceiroInteressado = "TerceiroInteressado",
}

export enum Terintcer {
  Terintcer = "Terintcer",
}

export enum Terintinc {
  Terintinc = "Terintinc",
}

export enum Testemunha {
  Testemunha = "Testemunha",
  TestemunhaDoAutor = "TestemunhaDoAutor",
  TestemunhaDoReu = "TestemunhaDoReu",
}

export enum Vitima {
  Vitima = "Vitima",
  Vitimas = "Vitimas",
}

export abstract class Parte<T extends Polo['sinonimoParte']> {
  protected static partes: { [parte: string]: string[] }
  protected static sinonimos: string[]

  private _sinonimoParte!: string
  private _parte!: string

  get sinonimoParte(): T {
    return this._sinonimoParte as T
  }

  get parte() {
    return this._parte
  }

  get poloProvavel(): PoloProvavel {
    return this.constructor.name.substr(9) as PoloProvavel
  }

  private static getDistances(texto: string) {
    return this.sinonimos.map(s => levenshtein(texto, s));
  }

  private static getMinDistance(distances: number[]) {
    return Math.min(...distances)
  }

  private static getSinoninoParte(texto: string) {
    const distances = this.getDistances(texto)
    const minDistance = this.getMinDistance(distances)
    const index = distances.indexOf(minDistance)

    return this.sinonimos[index]
  }

  private static getParte(sinonimo: string) {
    return stringKeys(this.partes).find(p => this.partes[p].includes(sinonimo))!
  }

  static find<T extends Parte<any>>(texto: string): T {
    if (this === Parte) {
      const distances = [
        PartePoloPassivo.getDistances(texto),
        PartePoloTerceiro.getDistances(texto),
        PartePoloAtivo.getDistances(texto),
        PartePoloAtivoOuPassivo.getDistances(texto),
        PartePoloJuizoDesembargador.getDistances(texto)
      ]

      const minDistances = distances.map(this.getMinDistance)
      const minDistance = this.getMinDistance(minDistances)
      const index = minDistances.indexOf(minDistance)

      return [
        PartePoloPassivo,
        PartePoloTerceiro,
        PartePoloAtivo,
        PartePoloAtivoOuPassivo,
        PartePoloJuizoDesembargador
      ][index].find(texto)
    } else {
      const sinonimoParte = this.getSinoninoParte(texto)
      const parte = this.getParte(sinonimoParte)

      // @ts-ignore
      return new this(sinonimoParte, parte)
    }
  }

  protected constructor(sinonimoParte: string, parte: string) {
    this._sinonimoParte = sinonimoParte
    this._parte = parte
  }

  toString() {
    return `${this.constructor.name} { sinonimoParte: "${this.sinonimoParte}", parte: "${this.parte}", poloProvavel: "${this.poloProvavel}" }`
  }
}

function stringKeys<T>(e: T) {
  return Object.keys(e).filter(k => k[0] < '0' || k[0] > '9')
}

export class PartePoloPassivo extends Parte<Acusado | AcusadoPunibilidadeExtinta | Agravado | AgravadoRecorrente | AgravanteRecorrido | Apelado | ApelanteApelado | Apenado | Arguido | Autuado | Coator | Condenado | Consignatario | Demandado | Denunciado | Devedor | Embargado | Excipiente | Executado | Expropriado | Extraditado | Flagranteado | Impetrado | Impugnado | Indiciado | Infrator | Inquirido | Interditado | Interditando | Interpelado | Inventariado | InventariantePartePassiva | Investigado | LitisconsortePassivo | LitisconsortePassivoNecessario | MassaFalida | MassaInsolvente | Inventor | Nunciado | Passiva | PoloPassivo | Promovido | Querelado | Reclamado | Reconvinte | Recorrido | RecorridoAgravante | Reeducando | Requerido | Confinante | Requisitado | Reu | Sentenciado | SujeitoPassivo | Suscitado | Sustado> {
  protected static partes = {
    Acusado: stringKeys(Acusado),
    AcusadoPunibilidadeExtinta: stringKeys(AcusadoPunibilidadeExtinta),
    Agravado: stringKeys(Agravado),
    AgravadoRecorrente: stringKeys(AgravadoRecorrente),
    AgravanteRecorrido: stringKeys(AgravanteRecorrido),
    Apelado: stringKeys(Apelado),
    ApelanteApelado: stringKeys(ApelanteApelado),
    Apenado: stringKeys(Apenado),
    Arguido: stringKeys(Arguido),
    Autuado: stringKeys(Autuado),
    Coator: stringKeys(Coator),
    Condenado: stringKeys(Condenado),
    Consignatario: stringKeys(Consignatario),
    Demandado: stringKeys(Demandado),
    Denunciado: stringKeys(Denunciado),
    Devedor: stringKeys(Devedor),
    Embargado: stringKeys(Embargado),
    Excipiente: stringKeys(Excipiente),
    Executado: stringKeys(Executado),
    Expropriado: stringKeys(Expropriado),
    Extraditado: stringKeys(Extraditado),
    Flagranteado: stringKeys(Flagranteado),
    Impetrado: stringKeys(Impetrado),
    Impugnado: stringKeys(Impugnado),
    Indiciado: stringKeys(Indiciado),
    Infrator: stringKeys(Infrator),
    Inquirido: stringKeys(Inquirido),
    Interditado: stringKeys(Interditado),
    Interditando: stringKeys(Interditando),
    Interpelado: stringKeys(Interpelado),
    Inventariado: stringKeys(Inventariado),
    InventariantePartePassiva: stringKeys(InventariantePartePassiva),
    Investigado: stringKeys(Investigado),
    LitisconsortePassivo: stringKeys(LitisconsortePassivo),
    LitisconsortePassivoNecessario: stringKeys(LitisconsortePassivoNecessario),
    MassaFalida: stringKeys(MassaFalida),
    MassaInsolvente: stringKeys(MassaInsolvente),
    Inventor: stringKeys(Inventor),
    Nunciado: stringKeys(Nunciado),
    Passiva: stringKeys(Passiva),
    PoloPassivo: stringKeys(PoloPassivo),
    Promovido: stringKeys(Promovido),
    Querelado: stringKeys(Querelado),
    Reclamado: stringKeys(Reclamado),
    Reconvinte: stringKeys(Reconvinte),
    Recorrido: stringKeys(Recorrido),
    RecorridoAgravante: stringKeys(RecorridoAgravante),
    Reeducando: stringKeys(Reeducando),
    Requerido: stringKeys(Requerido),
    Confinante: stringKeys(Confinante),
    Requisitado: stringKeys(Requisitado),
    Reu: stringKeys(Reu),
    Sentenciado: stringKeys(Sentenciado),
    SujeitoPassivo: stringKeys(SujeitoPassivo),
    Suscitado: stringKeys(Suscitado),
    Sustado: stringKeys(Sustado)
  }

  protected static sinonimos = flatMap([Acusado, AcusadoPunibilidadeExtinta, Agravado, AgravadoRecorrente, AgravanteRecorrido, Apelado, ApelanteApelado, Apenado, Arguido, Autuado, Coator, Condenado, Consignatario, Demandado, Denunciado, Devedor, Embargado, Excipiente, Executado, Expropriado, Extraditado, Flagranteado, Impetrado, Impugnado, Indiciado, Infrator, Inquirido, Interditado, Interditando, Interpelado, Inventariado, InventariantePartePassiva, Investigado, LitisconsortePassivo, LitisconsortePassivoNecessario, MassaFalida, MassaInsolvente, Inventor, Nunciado, Passiva, PoloPassivo, Promovido, Querelado, Reclamado, Reconvinte, Recorrido, RecorridoAgravante, Reeducando, Requerido, Confinante, Requisitado, Reu, Sentenciado, SujeitoPassivo, Suscitado, Sustado], e => stringKeys(e))
}

export class PartePoloTerceiro extends Parte<Adolescente | Admterc | Assista | AssMP | Autoridade | Beneficiario | ChamadoAoProcesso | Comunicado | Comunicante | Corrigente | Corrigido | CriancaAdolescente | DeCujus | Dilig | EntidadeRelacionada | EntrePartes | Falecido | Habilitado | Habilitante | Informante | Infte | Interessado | Marca | Perito | Procurador | Representante | Inventariante | TerceiraPessoa | Terceiro | TerceiroInteressado | Terintcer | Terintinc | Testemunha> {
  protected static partes = {
    Adolescente: stringKeys(Adolescente),
    Admterc: stringKeys(Admterc),
    Assista: stringKeys(Assista),
    AssMP: stringKeys(AssMP),
    Autoridade: stringKeys(Autoridade),
    Beneficiario: stringKeys(Beneficiario),
    ChamadoAoProcesso: stringKeys(ChamadoAoProcesso),
    Comunicado: stringKeys(Comunicado),
    Comunicante: stringKeys(Comunicante),
    Corrigente: stringKeys(Corrigente),
    Corrigido: stringKeys(Corrigido),
    CriancaAdolescente: stringKeys(CriancaAdolescente),
    DeCujus: stringKeys(DeCujus),
    Dilig: stringKeys(Dilig),
    EntidadeRelacionada: stringKeys(EntidadeRelacionada),
    EntrePartes: stringKeys(EntrePartes),
    Falecido: stringKeys(Falecido),
    Habilitado: stringKeys(Habilitado),
    Habilitante: stringKeys(Habilitante),
    Informante: stringKeys(Informante),
    Infte: stringKeys(Infte),
    Interessado: stringKeys(Interessado),
    Marca: stringKeys(Marca),
    Perito: stringKeys(Perito),
    Procurador: stringKeys(Procurador),
    Representante: stringKeys(Representante),
    Inventariante: stringKeys(Inventariante),
    TerceiraPessoa: stringKeys(TerceiraPessoa),
    Terceiro: stringKeys(Terceiro),
    TerceiroInteressado: stringKeys(TerceiroInteressado),
    Terintcer: stringKeys(Terintcer),
    Terintinc: stringKeys(Terintinc),
    Testemunha: stringKeys(Testemunha)
  }

  protected static sinonimos = flatMap([Adolescente, Admterc, Assista, AssMP, Autoridade, Beneficiario, ChamadoAoProcesso, Comunicado, Comunicante, Corrigente, Corrigido, CriancaAdolescente, DeCujus, Dilig, EntidadeRelacionada, EntrePartes, Falecido, Habilitado, Habilitante, Informante, Infte, Interessado, Marca, Perito, Procurador, Representante, Inventariante, TerceiraPessoa, Terceiro, TerceiroInteressado, Terintcer, Terintinc, Testemunha], e => stringKeys(e))
}

export class PartePoloAtivo extends Parte<Agravante | ApeladoApelante | PrimeiroApelante | Apelante | Arguente | Ativa | Autor | AutorDoFato | Consignante | Credor | Demandante | Denunciante | Embargante | Excepto | Executante | Exequente | Expropriante | Impetrante | Impugnante | Interpelante | Interveniente | InventarianteParteAtiva | Nunciante | Oponente | Paciente | Plurima | PoloAtivo | Promovente | Proponente | Querelante | Reclamante | Reconvindo | Recorrente | PrimeiroRecorrente | SegundoRecorrente | Terceiro | RecorrenteAgravado | Requerente | Requisitante | Suscitante | Sustante | Vitima> {
  protected static partes = {
    Agravante: stringKeys(Agravante),
    ApeladoApelante: stringKeys(ApeladoApelante),
    PrimeiroApelante: stringKeys(PrimeiroApelante),
    Apelante: stringKeys(Apelante),
    Arguente: stringKeys(Arguente),
    Ativa: stringKeys(Ativa),
    Autor: stringKeys(Autor),
    AutorDoFato: stringKeys(AutorDoFato),
    Consignante: stringKeys(Consignante),
    Credor: stringKeys(Credor),
    Demandante: stringKeys(Demandante),
    Denunciante: stringKeys(Denunciante),
    Embargante: stringKeys(Embargante),
    Excepto: stringKeys(Excepto),
    Executante: stringKeys(Executante),
    Exequente: stringKeys(Exequente),
    Expropriante: stringKeys(Expropriante),
    Impetrante: stringKeys(Impetrante),
    Impugnante: stringKeys(Impugnante),
    Interpelante: stringKeys(Interpelante),
    Interveniente: stringKeys(Interveniente),
    InventarianteParteAtiva: stringKeys(InventarianteParteAtiva),
    Nunciante: stringKeys(Nunciante),
    Oponente: stringKeys(Oponente),
    Paciente: stringKeys(Paciente),
    Plurima: stringKeys(Plurima),
    PoloAtivo: stringKeys(PoloAtivo),
    Promovente: stringKeys(Promovente),
    Proponente: stringKeys(Proponente),
    Querelante: stringKeys(Querelante),
    Reclamante: stringKeys(Reclamante),
    Reconvindo: stringKeys(Reconvindo),
    Recorrente: stringKeys(Recorrente),
    PrimeiroRecorrente: stringKeys(PrimeiroRecorrente),
    SegundoRecorrente: stringKeys(SegundoRecorrente),
    Terceiro: stringKeys(Terceiro),
    RecorrenteAgravado: stringKeys(RecorrenteAgravado),
    Requerente: stringKeys(Requerente),
    Requisitante: stringKeys(Requisitante),
    Suscitante: stringKeys(Suscitante),
    Sustante: stringKeys(Sustante),
    Vitima: stringKeys(Vitima)
  }

  protected static sinonimos = flatMap([Agravante, ApeladoApelante, PrimeiroApelante, Apelante, Arguente, Ativa, Autor, AutorDoFato, Consignante, Credor, Demandante, Denunciante, Embargante, Excepto, Executante, Exequente, Expropriante, Impetrante, Impugnante, Interpelante, Interveniente, InventarianteParteAtiva, Nunciante, Oponente, Paciente, Plurima, PoloAtivo, Promovente, Proponente, Querelante, Reclamante, Reconvindo, Recorrente, PrimeiroRecorrente, SegundoRecorrente, Terceiro, RecorrenteAgravado, Requerente, Requisitante, Suscitante, Sustante, Vitima], e => stringKeys(e))
}

export class PartePoloAtivoOuPassivo extends Parte<Contratado | Contratante | ContribuintePrincipal | Inventariante | Litisconsorte | Depositante | Procurador | Titular | Noticiado | Noticiante | Notificado | Notificante | Oposto | Outros | OutrosNomes | RecorrenteRecorrido | RecorridoRecorrente | RecdoRecte | RecteRecdo | Remetente | Representado | Responsavel> {
  protected static partes = {
    Contratado: stringKeys(Contratado),
    Contratante: stringKeys(Contratante),
    ContribuintePrincipal: stringKeys(ContribuintePrincipal),
    Inventariante: stringKeys(Inventariante),
    Litisconsorte: stringKeys(Litisconsorte),
    Depositante: stringKeys(Depositante),
    Procurador: stringKeys(Procurador),
    Titular: stringKeys(Titular),
    Noticiado: stringKeys(Noticiado),
    Noticiante: stringKeys(Noticiante),
    Notificado: stringKeys(Notificado),
    Notificante: stringKeys(Notificante),
    Oposto: stringKeys(Oposto),
    Outros: stringKeys(Outros),
    OutrosNomes: stringKeys(OutrosNomes),
    RecorrenteRecorrido: stringKeys(RecorrenteRecorrido),
    RecorridoRecorrente: stringKeys(RecorridoRecorrente),
    RecdoRecte: stringKeys(RecdoRecte),
    RecteRecdo: stringKeys(RecteRecdo),
    Remetente: stringKeys(Remetente),
    Representado: stringKeys(Representado),
    Responsavel: stringKeys(Responsavel)
  }

  protected static sinonimos = flatMap([Contratado, Contratante, ContribuintePrincipal, Inventariante, Litisconsorte, Depositante, Procurador, Titular, Noticiado, Noticiante, Notificado, Notificante, Oposto, Outros, OutrosNomes, RecorrenteRecorrido, RecorridoRecorrente, RecdoRecte, RecteRecdo, Remetente, Representado, Responsavel], e => stringKeys(e))
}

export class PartePoloJuizoDesembargador extends Parte<Deprecado | Deprecante | JuizoSentenciante | Jusrogante | JuizDeprecante | JustRog | Relator | Revisor> {
  protected static partes = {
    Deprecado: stringKeys(Deprecado),
    Deprecante: stringKeys(Deprecante),
    JuizoSentenciante: stringKeys(JuizoSentenciante),
    Jusrogante: stringKeys(Jusrogante),
    JuizDeprecante: stringKeys(JuizDeprecante),
    JustRog: stringKeys(JustRog),
    Relator: stringKeys(Relator),
    Revisor: stringKeys(Revisor)
  }

  protected static sinonimos = flatMap([Deprecado, Deprecante, JuizoSentenciante, Jusrogante, JuizDeprecante, JustRog, Relator, Revisor], e => stringKeys(e))
}

export type Polo = PartePoloPassivo | PartePoloTerceiro | PartePoloAtivo | PartePoloAtivoOuPassivo | PartePoloJuizoDesembargador