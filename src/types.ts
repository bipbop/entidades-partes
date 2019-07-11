export abstract class Parte<T> {
  toString(): {

  }
  description(): string
}

export type Polo = PartePoloPassivo | PartePoloTerceiro | PartePoloAtivoOuPassivo | PartePoloJuizoDesembargador

export class PartePoloPassivo extends Parte<Acusado | AcusadoPunibilidadeExtinta | Agravado | AgravadoRecorrente | AgravanteRecorrido | Apelado | ApelanteApelado | Apenado | Arguido | Autuado | Coator | Condenado | Consignatario | Demandado | Denunciado | Devedor | Embargado | Excipiente | Executado | Expropriado | Extraditado | Flagranteado | Impetrado | Impugnado | Indiciado | Infrator | Inquirido | Interditado | Interditando | Interpelado | Inventariado | InventariantePartePassiva | Investigado | LitisconsortePassivo | LitisconsortePassivoNecessario | MassaFalida | MassaInsolvente | Inventor | Nunciado | Passiva | PoloPassivo | Promovido | Querelado | Reclamado | Reconvinte | Recorrido | RecorridoAgravante | Reeducando | Requerido | Confinante | Requisitado | Reu | Sentenciado | SujeitoPassivo | Suscitado | Sustado> {
}

export type PartePoloTerceiro = Adolescente | Admterc | Assista | AssMP | Autoridade | Beneficiario | ChamadoAoProcesso | Comunicado | Comunicante | Corrigente | Corrigido | CriancaAdolescente | DeCujus | Dilig | EntidadeRelacionada | EntrePartes | Falecido | Habilitado | Habilitante | Informante | Infte | Interessado | Marca | Perito | Procurador | Representante | Inventariante | TerceiraPessoa | Terceiro | TerceiroInteressado | Terintcer | Terintinc | Testemunha
export type PartePoloAtivo = Agravante | ApeladoApelante | PrimeiroApelante | Apelante | Arguente | Ativa | Autor | AutorDoFato | Consignante | Credor | Demandante | Denunciante | Embargante | Excepto | Executante | Exequente | Expropriante | Impetrante | Impugnante | Interpelante | Interveniente | InventarianteParteAtiva | Nunciante | Oponente | Paciente | Plurima | PoloAtivo | Promovente | Proponente | Querelante | Reclamante | Reconvindo | Recorrente | PrimeiroRecorrente | SegundoRecorrente | Terceiro | RecorrenteAgravado | Requerente | Requisitante | Suscitante | Sustante | Vitima
export type PartePoloAtivoOuPassivo = Contratado | Contratante | ContribuintePrincipal | Inventariante | Litisconsorte | Depositante | Procurador | Titular | Noticiado | Noticiante | Notificado | Notificante | Oposto | Outros | OutrosNomes | RecorrenteRecorrido | RecorridoRecorrente | RecdoRecte | RecteRecdo | Remetente | Representado | Responsavel
export type PartePoloJuizoDesembargador = Deprecado | Deprecante | JuizoSentenciante | Jusrogante | JuizDeprecante | JustRog | Relator | Revisor

export enum PoloProvavel {
  Passivo,
  Terceiro,
  Ativo,
  AtivoOuPassivo,
  JuizoDesembargador,
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