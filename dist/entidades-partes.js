"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var flatMap_1 = __importDefault(require("lodash/flatMap"));
var js_levenshtein_1 = __importDefault(require("js-levenshtein"));
var PoloProvavel;
(function (PoloProvavel) {
    PoloProvavel["Passivo"] = "Passivo";
    PoloProvavel["Terceiro"] = "Terceiro";
    PoloProvavel["Ativo"] = "Ativo";
    PoloProvavel["AtivoOuPassivo"] = "AtivoOuPassivo";
    PoloProvavel["JuizoDesembargador"] = "JuizoDesembargador";
})(PoloProvavel = exports.PoloProvavel || (exports.PoloProvavel = {}));
var Acusado;
(function (Acusado) {
    Acusado["Acusado"] = "Acusado";
    Acusado["Acusados"] = "Acusados";
})(Acusado = exports.Acusado || (exports.Acusado = {}));
var AcusadoPunibilidadeExtinta;
(function (AcusadoPunibilidadeExtinta) {
    AcusadoPunibilidadeExtinta["AcusadoPunibilidadeExtinta"] = "AcusadoPunibilidadeExtinta";
})(AcusadoPunibilidadeExtinta = exports.AcusadoPunibilidadeExtinta || (exports.AcusadoPunibilidadeExtinta = {}));
var Adolescente;
(function (Adolescente) {
    Adolescente["Adolescente"] = "Adolescente";
})(Adolescente = exports.Adolescente || (exports.Adolescente = {}));
var Admterc;
(function (Admterc) {
    Admterc["Admterc"] = "Admterc";
})(Admterc = exports.Admterc || (exports.Admterc = {}));
var Agravado;
(function (Agravado) {
    Agravado["Agda"] = "Agda";
    Agravado["Agdo"] = "Agdo";
    Agravado["Agrdo"] = "Agrdo";
    Agravado["Agvdo"] = "Agvdo";
    Agravado["Agravada"] = "Agravada";
    Agravado["Agravadas"] = "Agravadas";
    Agravado["Agravado"] = "Agravado";
    Agravado["Agravados"] = "Agravados";
    Agravado["Agravadoa"] = "Agravadoa";
    Agravado["Agravadoas"] = "Agravadoas";
    Agravado["Agravdo"] = "Agravdo";
})(Agravado = exports.Agravado || (exports.Agravado = {}));
var AgravadoRecorrente;
(function (AgravadoRecorrente) {
    AgravadoRecorrente["AgravadosERecorrentes"] = "AgravadosERecorrentes";
    AgravadoRecorrente["AgravadoRecorrente"] = "AgravadoRecorrente";
})(AgravadoRecorrente = exports.AgravadoRecorrente || (exports.AgravadoRecorrente = {}));
var AgravanteRecorrido;
(function (AgravanteRecorrido) {
    AgravanteRecorrido["AgravantesERecorridos"] = "AgravantesERecorridos";
    AgravanteRecorrido["AgravanteRecorrido"] = "AgravanteRecorrido";
})(AgravanteRecorrido = exports.AgravanteRecorrido || (exports.AgravanteRecorrido = {}));
var Agravante;
(function (Agravante) {
    Agravante["Agravante"] = "Agravante";
    Agravante["Agravantes"] = "Agravantes";
    Agravante["Agravte"] = "Agravte";
    Agravante["Agrte"] = "Agrte";
    Agravante["Agte"] = "Agte";
    Agravante["Agvte"] = "Agvte";
})(Agravante = exports.Agravante || (exports.Agravante = {}));
var Apelado;
(function (Apelado) {
    Apelado["Apda"] = "Apda";
    Apelado["Apdo"] = "Apdo";
    Apelado["Apelada"] = "Apelada";
    Apelado["Apeladas"] = "Apeladas";
    Apelado["Apelado"] = "Apelado";
    Apelado["Apelados"] = "Apelados";
    Apelado["Apeladoa"] = "Apeladoa";
    Apelado["Apeladoas"] = "Apeladoas";
})(Apelado = exports.Apelado || (exports.Apelado = {}));
var ApeladoApelante;
(function (ApeladoApelante) {
    ApeladoApelante["ApdoApte"] = "ApdoApte";
    ApeladoApelante["ApeladoApelante"] = "ApeladoApelante";
})(ApeladoApelante = exports.ApeladoApelante || (exports.ApeladoApelante = {}));
var PrimeiroApelante;
(function (PrimeiroApelante) {
    PrimeiroApelante["Apelante"] = "Apelante";
    PrimeiroApelante["PrimeiroApelante"] = "PrimeiroApelante";
})(PrimeiroApelante = exports.PrimeiroApelante || (exports.PrimeiroApelante = {}));
var Apelante;
(function (Apelante) {
    Apelante["Apelante"] = "Apelante";
    Apelante["Apelantes"] = "Apelantes";
    Apelante["Apte"] = "Apte";
})(Apelante = exports.Apelante || (exports.Apelante = {}));
var ApelanteApelado;
(function (ApelanteApelado) {
    ApelanteApelado["ApteApdo"] = "ApteApdo";
    ApelanteApelado["ApelanteApelado"] = "ApelanteApelado";
})(ApelanteApelado = exports.ApelanteApelado || (exports.ApelanteApelado = {}));
var Apenado;
(function (Apenado) {
    Apenado["Apenado"] = "Apenado";
})(Apenado = exports.Apenado || (exports.Apenado = {}));
var Arguido;
(function (Arguido) {
    Arguido["Arguido"] = "Arguido";
    Arguido["Argdo"] = "Argdo";
    Arguido["ArgdoAS"] = "ArgdoAS";
})(Arguido = exports.Arguido || (exports.Arguido = {}));
var Arguente;
(function (Arguente) {
    Arguente["Arguente"] = "Arguente";
    Arguente["Argte"] = "Argte";
    Arguente["ArgteS"] = "ArgteS";
})(Arguente = exports.Arguente || (exports.Arguente = {}));
var Assista;
(function (Assista) {
    Assista["Assista"] = "Assista";
})(Assista = exports.Assista || (exports.Assista = {}));
var AssMP;
(function (AssMP) {
    AssMP["AssMP"] = "AssMP";
})(AssMP = exports.AssMP || (exports.AssMP = {}));
var Ativa;
(function (Ativa) {
    Ativa["Ativa"] = "Ativa";
})(Ativa = exports.Ativa || (exports.Ativa = {}));
var Autor;
(function (Autor) {
    Autor["Autor"] = "Autor";
    Autor["Autora"] = "Autora";
    Autor["Autoras"] = "Autoras";
    Autor["Autores"] = "Autores";
    Autor["AutoraSes"] = "AutoraSes";
    Autor["Autors"] = "Autors";
    Autor["AutorS"] = "AutorS";
    Autor["Partea"] = "Partea";
    Autor["NomeDoAutor"] = "NomeDoAutor";
})(Autor = exports.Autor || (exports.Autor = {}));
var AutorDoFato;
(function (AutorDoFato) {
    AutorDoFato["AutorDoFato"] = "AutorDoFato";
})(AutorDoFato = exports.AutorDoFato || (exports.AutorDoFato = {}));
var Autoridade;
(function (Autoridade) {
    Autoridade["Autoridade"] = "Autoridade";
})(Autoridade = exports.Autoridade || (exports.Autoridade = {}));
var Autuado;
(function (Autuado) {
    Autuado["Autuado"] = "Autuado";
})(Autuado = exports.Autuado || (exports.Autuado = {}));
var Beneficiario;
(function (Beneficiario) {
    Beneficiario["Beneficiario"] = "Beneficiario";
})(Beneficiario = exports.Beneficiario || (exports.Beneficiario = {}));
var ChamadoAoProcesso;
(function (ChamadoAoProcesso) {
    ChamadoAoProcesso["ChamadoAoProcesso"] = "ChamadoAoProcesso";
})(ChamadoAoProcesso = exports.ChamadoAoProcesso || (exports.ChamadoAoProcesso = {}));
var Coator;
(function (Coator) {
    Coator["ACoatora"] = "ACoatora";
    Coator["AutoridCoatora"] = "AutoridCoatora";
    Coator["AutoridadeCoatora"] = "AutoridadeCoatora";
    Coator["Coator"] = "Coator";
    Coator["CoatoraSes"] = "CoatoraSes";
})(Coator = exports.Coator || (exports.Coator = {}));
var Comunicado;
(function (Comunicado) {
    Comunicado["Comunicado"] = "Comunicado";
})(Comunicado = exports.Comunicado || (exports.Comunicado = {}));
var Comunicante;
(function (Comunicante) {
    Comunicante["Comunicante"] = "Comunicante";
})(Comunicante = exports.Comunicante || (exports.Comunicante = {}));
var Condenado;
(function (Condenado) {
    Condenado["Condenada"] = "Condenada";
    Condenado["Condenado"] = "Condenado";
})(Condenado = exports.Condenado || (exports.Condenado = {}));
var Consignante;
(function (Consignante) {
    Consignante["Consignante"] = "Consignante";
    Consignante["Consignantes"] = "Consignantes";
})(Consignante = exports.Consignante || (exports.Consignante = {}));
var Consignatario;
(function (Consignatario) {
    Consignatario["Consignatario"] = "Consignatario";
    Consignatario["Consignatarios"] = "Consignatarios";
})(Consignatario = exports.Consignatario || (exports.Consignatario = {}));
var Contratado;
(function (Contratado) {
    Contratado["Contratada"] = "Contratada";
    Contratado["Contratado"] = "Contratado";
    Contratado["Contratadoa"] = "Contratadoa";
})(Contratado = exports.Contratado || (exports.Contratado = {}));
var Contratante;
(function (Contratante) {
    Contratante["Contratante"] = "Contratante";
})(Contratante = exports.Contratante || (exports.Contratante = {}));
var ContribuintePrincipal;
(function (ContribuintePrincipal) {
    ContribuintePrincipal["ContribuintePrincipal"] = "ContribuintePrincipal";
})(ContribuintePrincipal = exports.ContribuintePrincipal || (exports.ContribuintePrincipal = {}));
var Corrigente;
(function (Corrigente) {
    Corrigente["Corrigente"] = "Corrigente";
})(Corrigente = exports.Corrigente || (exports.Corrigente = {}));
var Corrigido;
(function (Corrigido) {
    Corrigido["Corrigido"] = "Corrigido";
})(Corrigido = exports.Corrigido || (exports.Corrigido = {}));
var Credor;
(function (Credor) {
    Credor["Credor"] = "Credor";
})(Credor = exports.Credor || (exports.Credor = {}));
var CriancaAdolescente;
(function (CriancaAdolescente) {
    CriancaAdolescente["CriancaAdole"] = "CriancaAdole";
    CriancaAdolescente["CriancaAdolescente"] = "CriancaAdolescente";
})(CriancaAdolescente = exports.CriancaAdolescente || (exports.CriancaAdolescente = {}));
var DeCujus;
(function (DeCujus) {
    DeCujus["DeCujus"] = "DeCujus";
})(DeCujus = exports.DeCujus || (exports.DeCujus = {}));
var Demandado;
(function (Demandado) {
    Demandado["Demandado"] = "Demandado";
})(Demandado = exports.Demandado || (exports.Demandado = {}));
var Demandante;
(function (Demandante) {
    Demandante["Demandante"] = "Demandante";
})(Demandante = exports.Demandante || (exports.Demandante = {}));
var Denunciado;
(function (Denunciado) {
    Denunciado["Denunciado"] = "Denunciado";
    Denunciado["Denunciados"] = "Denunciados";
})(Denunciado = exports.Denunciado || (exports.Denunciado = {}));
var Denunciante;
(function (Denunciante) {
    Denunciante["Denunciante"] = "Denunciante";
    Denunciante["Denunciantes"] = "Denunciantes";
})(Denunciante = exports.Denunciante || (exports.Denunciante = {}));
var Deprecado;
(function (Deprecado) {
    Deprecado["Depcdo"] = "Depcdo";
    Deprecado["Deprecado"] = "Deprecado";
})(Deprecado = exports.Deprecado || (exports.Deprecado = {}));
var Deprecante;
(function (Deprecante) {
    Deprecante["Depcte"] = "Depcte";
    Deprecante["Deprecante"] = "Deprecante";
})(Deprecante = exports.Deprecante || (exports.Deprecante = {}));
var Devedor;
(function (Devedor) {
    Devedor["Devedor"] = "Devedor";
})(Devedor = exports.Devedor || (exports.Devedor = {}));
var Dilig;
(function (Dilig) {
    Dilig["Dilig"] = "Dilig";
})(Dilig = exports.Dilig || (exports.Dilig = {}));
var Embargado;
(function (Embargado) {
    Embargado["Embargado"] = "Embargado";
    Embargado["Embargadoa"] = "Embargadoa";
    Embargado["Embargadoas"] = "Embargadoas";
    Embargado["Embargados"] = "Embargados";
    Embargado["Embargda"] = "Embargda";
    Embargado["Embargdo"] = "Embargdo";
})(Embargado = exports.Embargado || (exports.Embargado = {}));
var Embargante;
(function (Embargante) {
    Embargante["Embargante"] = "Embargante";
    Embargante["Embargantes"] = "Embargantes";
    Embargante["Embargte"] = "Embargte";
})(Embargante = exports.Embargante || (exports.Embargante = {}));
var EntidadeRelacionada;
(function (EntidadeRelacionada) {
    EntidadeRelacionada["EntidadeRelacionada"] = "EntidadeRelacionada";
    EntidadeRelacionada["EntidadesRelacionadas"] = "EntidadesRelacionadas";
})(EntidadeRelacionada = exports.EntidadeRelacionada || (exports.EntidadeRelacionada = {}));
var EntrePartes;
(function (EntrePartes) {
    EntrePartes["EntrePartes"] = "EntrePartes";
})(EntrePartes = exports.EntrePartes || (exports.EntrePartes = {}));
var Excepto;
(function (Excepto) {
    Excepto["Excepta"] = "Excepta";
    Excepto["Exceptas"] = "Exceptas";
    Excepto["Excepto"] = "Excepto";
    Excepto["Exceptos"] = "Exceptos";
    Excepto["ExcptoAS"] = "ExcptoAS";
})(Excepto = exports.Excepto || (exports.Excepto = {}));
var Excipiente;
(function (Excipiente) {
    Excipiente["Excipiente"] = "Excipiente";
    Excipiente["Excipientes"] = "Excipientes";
    Excipiente["ExcpteS"] = "ExcpteS";
})(Excipiente = exports.Excipiente || (exports.Excipiente = {}));
var Executado;
(function (Executado) {
    Executado["Excdo"] = "Excdo";
    Executado["Exectdo"] = "Exectdo";
    Executado["Executada"] = "Executada";
    Executado["Executadas"] = "Executadas";
    Executado["Executado"] = "Executado";
    Executado["Executados"] = "Executados";
    Executado["Executadosas"] = "Executadosas";
})(Executado = exports.Executado || (exports.Executado = {}));
var Executante;
(function (Executante) {
    Executante["Executante"] = "Executante";
    Executante["Executantes"] = "Executantes";
})(Executante = exports.Executante || (exports.Executante = {}));
var Exequente;
(function (Exequente) {
    Exequente["Exequente"] = "Exequente";
    Exequente["Exequentes"] = "Exequentes";
    Exequente["Exeqte"] = "Exeqte";
    Exequente["Exqte"] = "Exqte";
})(Exequente = exports.Exequente || (exports.Exequente = {}));
var Expropriado;
(function (Expropriado) {
    Expropriado["Expropriado"] = "Expropriado";
})(Expropriado = exports.Expropriado || (exports.Expropriado = {}));
var Expropriante;
(function (Expropriante) {
    Expropriante["Expropriante"] = "Expropriante";
})(Expropriante = exports.Expropriante || (exports.Expropriante = {}));
var Extraditado;
(function (Extraditado) {
    Extraditado["ExtdoAS"] = "ExtdoAS";
    Extraditado["Extraditado"] = "Extraditado";
})(Extraditado = exports.Extraditado || (exports.Extraditado = {}));
var Falecido;
(function (Falecido) {
    Falecido["Falecido"] = "Falecido";
})(Falecido = exports.Falecido || (exports.Falecido = {}));
var Flagranteado;
(function (Flagranteado) {
    Flagranteado["Flagranteado"] = "Flagranteado";
})(Flagranteado = exports.Flagranteado || (exports.Flagranteado = {}));
var Habilitado;
(function (Habilitado) {
    Habilitado["Habilitado"] = "Habilitado";
})(Habilitado = exports.Habilitado || (exports.Habilitado = {}));
var Habilitante;
(function (Habilitante) {
    Habilitante["Habilitante"] = "Habilitante";
})(Habilitante = exports.Habilitante || (exports.Habilitante = {}));
var Impetrado;
(function (Impetrado) {
    Impetrado["Impdo"] = "Impdo";
    Impetrado["ImpdoAS"] = "ImpdoAS";
    Impetrado["ImpdoS"] = "ImpdoS";
    Impetrado["Impetrada"] = "Impetrada";
    Impetrado["Impetradas"] = "Impetradas";
    Impetrado["Impetrado"] = "Impetrado";
    Impetrado["Impetrados"] = "Impetrados";
    Impetrado["Imptda"] = "Imptda";
    Impetrado["Imptdo"] = "Imptdo";
})(Impetrado = exports.Impetrado || (exports.Impetrado = {}));
var Impetrante;
(function (Impetrante) {
    Impetrante["Impetrante"] = "Impetrante";
    Impetrante["Impetrantes"] = "Impetrantes";
    Impetrante["Impte"] = "Impte";
    Impetrante["ImpteS"] = "ImpteS";
    Impetrante["Imptte"] = "Imptte";
})(Impetrante = exports.Impetrante || (exports.Impetrante = {}));
var Impugnado;
(function (Impugnado) {
    Impugnado["Impugdo"] = "Impugdo";
    Impugnado["Impugnada"] = "Impugnada";
    Impugnado["Impugnadas"] = "Impugnadas";
    Impugnado["Impugnado"] = "Impugnado";
    Impugnado["Impugnados"] = "Impugnados";
})(Impugnado = exports.Impugnado || (exports.Impugnado = {}));
var Impugnante;
(function (Impugnante) {
    Impugnante["Impugnante"] = "Impugnante";
    Impugnante["Impugnantes"] = "Impugnantes";
    Impugnante["Impugte"] = "Impugte";
})(Impugnante = exports.Impugnante || (exports.Impugnante = {}));
var Indiciado;
(function (Indiciado) {
    Indiciado["Indiciado"] = "Indiciado";
    Indiciado["Indiciadoa"] = "Indiciadoa";
})(Indiciado = exports.Indiciado || (exports.Indiciado = {}));
var Informante;
(function (Informante) {
    Informante["Informante"] = "Informante";
    Informante["Informantes"] = "Informantes";
})(Informante = exports.Informante || (exports.Informante = {}));
var Infrator;
(function (Infrator) {
    Infrator["Infrator"] = "Infrator";
})(Infrator = exports.Infrator || (exports.Infrator = {}));
var Infte;
(function (Infte) {
    Infte["Infte"] = "Infte";
})(Infte = exports.Infte || (exports.Infte = {}));
var Inquirido;
(function (Inquirido) {
    Inquirido["Inquirido"] = "Inquirido";
    Inquirido["Inquiridos"] = "Inquiridos";
})(Inquirido = exports.Inquirido || (exports.Inquirido = {}));
var Interditado;
(function (Interditado) {
    Interditado["Interditado"] = "Interditado";
})(Interditado = exports.Interditado || (exports.Interditado = {}));
var Interditando;
(function (Interditando) {
    Interditando["Interditando"] = "Interditando";
})(Interditando = exports.Interditando || (exports.Interditando = {}));
var Interessado;
(function (Interessado) {
    Interessado["Intda"] = "Intda";
    Interessado["Intdo"] = "Intdo";
    Interessado["IntdoAS"] = "IntdoAS";
    Interessado["Interesdo"] = "Interesdo";
    Interessado["Interessad"] = "Interessad";
    Interessado["Interessada"] = "Interessada";
    Interessado["Interessadas"] = "Interessadas";
    Interessado["Interessado"] = "Interessado";
    Interessado["InteressadoProcedencia"] = "InteressadoProcedencia";
    Interessado["Interessados"] = "Interessados";
    Interessado["ParteInteressada"] = "ParteInteressada";
    Interessado["NomeDoInteressado"] = "NomeDoInteressado";
})(Interessado = exports.Interessado || (exports.Interessado = {}));
var Interpelado;
(function (Interpelado) {
    Interpelado["Interpelado"] = "Interpelado";
})(Interpelado = exports.Interpelado || (exports.Interpelado = {}));
var Interpelante;
(function (Interpelante) {
    Interpelante["Interpelante"] = "Interpelante";
})(Interpelante = exports.Interpelante || (exports.Interpelante = {}));
var Interveniente;
(function (Interveniente) {
    Interveniente["Interveniente"] = "Interveniente";
})(Interveniente = exports.Interveniente || (exports.Interveniente = {}));
var Inventariado;
(function (Inventariado) {
    Inventariado["Inventariado"] = "Inventariado";
})(Inventariado = exports.Inventariado || (exports.Inventariado = {}));
var Inventariante;
(function (Inventariante) {
    Inventariante["Inventariante"] = "Inventariante";
})(Inventariante = exports.Inventariante || (exports.Inventariante = {}));
var InventarianteParteAtiva;
(function (InventarianteParteAtiva) {
    InventarianteParteAtiva["InventarianteParteAtiva"] = "InventarianteParteAtiva";
})(InventarianteParteAtiva = exports.InventarianteParteAtiva || (exports.InventarianteParteAtiva = {}));
var InventariantePartePassiva;
(function (InventariantePartePassiva) {
    InventariantePartePassiva["InventariantePartePassiva"] = "InventariantePartePassiva";
})(InventariantePartePassiva = exports.InventariantePartePassiva || (exports.InventariantePartePassiva = {}));
var Investigado;
(function (Investigado) {
    Investigado["Investigado"] = "Investigado";
    Investigado["Investigados"] = "Investigados";
    Investigado["InvestAS"] = "InvestAS";
})(Investigado = exports.Investigado || (exports.Investigado = {}));
var JuizoSentenciante;
(function (JuizoSentenciante) {
    JuizoSentenciante["JuizoSentenciante"] = "JuizoSentenciante";
})(JuizoSentenciante = exports.JuizoSentenciante || (exports.JuizoSentenciante = {}));
var Jusrogante;
(function (Jusrogante) {
    Jusrogante["Jusrogante"] = "Jusrogante";
})(Jusrogante = exports.Jusrogante || (exports.Jusrogante = {}));
var JuizDeprecante;
(function (JuizDeprecante) {
    JuizDeprecante["JDpcte"] = "JDpcte";
    JuizDeprecante["JuizDeprecante"] = "JuizDeprecante";
})(JuizDeprecante = exports.JuizDeprecante || (exports.JuizDeprecante = {}));
var JustRog;
(function (JustRog) {
    JustRog["JustRog"] = "JustRog";
})(JustRog = exports.JustRog || (exports.JustRog = {}));
var Litisconsorte;
(function (Litisconsorte) {
    Litisconsorte["Litisconsorte"] = "Litisconsorte";
    Litisconsorte["Litisconsortes"] = "Litisconsortes";
    Litisconsorte["Litisc"] = "Litisc";
})(Litisconsorte = exports.Litisconsorte || (exports.Litisconsorte = {}));
var LitisconsortePassivo;
(function (LitisconsortePassivo) {
    LitisconsortePassivo["Litispas"] = "Litispas";
    LitisconsortePassivo["LitPass"] = "LitPass";
    LitisconsortePassivo["LitisconsortePassiv"] = "LitisconsortePassiv";
    LitisconsortePassivo["LitisconsortePassivo"] = "LitisconsortePassivo";
})(LitisconsortePassivo = exports.LitisconsortePassivo || (exports.LitisconsortePassivo = {}));
var LitisconsortePassivoNecessario;
(function (LitisconsortePassivoNecessario) {
    LitisconsortePassivoNecessario["LitisconsortePassivoNecessario"] = "LitisconsortePassivoNecessario";
})(LitisconsortePassivoNecessario = exports.LitisconsortePassivoNecessario || (exports.LitisconsortePassivoNecessario = {}));
var Marca;
(function (Marca) {
    Marca["Marca"] = "Marca";
})(Marca = exports.Marca || (exports.Marca = {}));
var MassaFalida;
(function (MassaFalida) {
    MassaFalida["MassaFalida"] = "MassaFalida";
})(MassaFalida = exports.MassaFalida || (exports.MassaFalida = {}));
var MassaInsolvente;
(function (MassaInsolvente) {
    MassaInsolvente["MassaInsolvente"] = "MassaInsolvente";
})(MassaInsolvente = exports.MassaInsolvente || (exports.MassaInsolvente = {}));
var Depositante;
(function (Depositante) {
    Depositante["NomeDoDepositante"] = "NomeDoDepositante";
    Depositante["Depositante"] = "Depositante";
})(Depositante = exports.Depositante || (exports.Depositante = {}));
var Inventor;
(function (Inventor) {
    Inventor["NomeDoInventor"] = "NomeDoInventor";
    Inventor["Inventor"] = "Inventor";
})(Inventor = exports.Inventor || (exports.Inventor = {}));
var Procurador;
(function (Procurador) {
    Procurador["NomeDoProcurador"] = "NomeDoProcurador";
    Procurador["Pge"] = "Pge";
    Procurador["ProcASes"] = "ProcASes";
    Procurador["Procurador"] = "Procurador";
    Procurador["Procuradora"] = "Procuradora";
    Procurador["Procuradores"] = "Procuradores";
    Procurador["ProcGeral"] = "ProcGeral";
    Procurador["ProcDoEstado"] = "ProcDoEstado";
})(Procurador = exports.Procurador || (exports.Procurador = {}));
var Titular;
(function (Titular) {
    Titular["NomeDoTitular"] = "NomeDoTitular";
    Titular["Titular"] = "Titular";
})(Titular = exports.Titular || (exports.Titular = {}));
var Noticiado;
(function (Noticiado) {
    Noticiado["Noticiado"] = "Noticiado";
    Noticiado["Noticiados"] = "Noticiados";
})(Noticiado = exports.Noticiado || (exports.Noticiado = {}));
var Noticiante;
(function (Noticiante) {
    Noticiante["Noticiante"] = "Noticiante";
})(Noticiante = exports.Noticiante || (exports.Noticiante = {}));
var Notificado;
(function (Notificado) {
    Notificado["Notificado"] = "Notificado";
})(Notificado = exports.Notificado || (exports.Notificado = {}));
var Notificante;
(function (Notificante) {
    Notificante["Notificante"] = "Notificante";
})(Notificante = exports.Notificante || (exports.Notificante = {}));
var Nunciado;
(function (Nunciado) {
    Nunciado["Nunciado"] = "Nunciado";
})(Nunciado = exports.Nunciado || (exports.Nunciado = {}));
var Nunciante;
(function (Nunciante) {
    Nunciante["Nunciante"] = "Nunciante";
})(Nunciante = exports.Nunciante || (exports.Nunciante = {}));
var Oponente;
(function (Oponente) {
    Oponente["Oponente"] = "Oponente";
})(Oponente = exports.Oponente || (exports.Oponente = {}));
var Oposto;
(function (Oposto) {
    Oposto["Oposto"] = "Oposto";
})(Oposto = exports.Oposto || (exports.Oposto = {}));
var Outros;
(function (Outros) {
    Outros["Outros"] = "Outros";
})(Outros = exports.Outros || (exports.Outros = {}));
var OutrosNomes;
(function (OutrosNomes) {
    OutrosNomes["OutrosNomes"] = "OutrosNomes";
})(OutrosNomes = exports.OutrosNomes || (exports.OutrosNomes = {}));
var Paciente;
(function (Paciente) {
    Paciente["Paciente"] = "Paciente";
    Paciente["Pacientes"] = "Pacientes";
    Paciente["Pacte"] = "Pacte";
    Paciente["PacteS"] = "PacteS";
})(Paciente = exports.Paciente || (exports.Paciente = {}));
var Passiva;
(function (Passiva) {
    Passiva["Passiva"] = "Passiva";
})(Passiva = exports.Passiva || (exports.Passiva = {}));
var Perito;
(function (Perito) {
    Perito["Perita"] = "Perita";
    Perito["Perito"] = "Perito";
})(Perito = exports.Perito || (exports.Perito = {}));
var Plurima;
(function (Plurima) {
    Plurima["Plurima"] = "Plurima";
    Plurima["Plurimas"] = "Plurimas";
})(Plurima = exports.Plurima || (exports.Plurima = {}));
var PoloAtivo;
(function (PoloAtivo) {
    PoloAtivo["PoloAtivo"] = "PoloAtivo";
})(PoloAtivo = exports.PoloAtivo || (exports.PoloAtivo = {}));
var PoloPassivo;
(function (PoloPassivo) {
    PoloPassivo["PoloPassivo"] = "PoloPassivo";
})(PoloPassivo = exports.PoloPassivo || (exports.PoloPassivo = {}));
var Promovente;
(function (Promovente) {
    Promovente["Promovente"] = "Promovente";
    Promovente["Promoventes"] = "Promoventes";
})(Promovente = exports.Promovente || (exports.Promovente = {}));
var Promovido;
(function (Promovido) {
    Promovido["Promovido"] = "Promovido";
    Promovido["Promovidos"] = "Promovidos";
})(Promovido = exports.Promovido || (exports.Promovido = {}));
var Proponente;
(function (Proponente) {
    Proponente["PropteS"] = "PropteS";
    Proponente["Proponente"] = "Proponente";
})(Proponente = exports.Proponente || (exports.Proponente = {}));
var Querelado;
(function (Querelado) {
    Querelado["QdoAS"] = "QdoAS";
    Querelado["Querelado"] = "Querelado";
})(Querelado = exports.Querelado || (exports.Querelado = {}));
var Querelante;
(function (Querelante) {
    Querelante["QteS"] = "QteS";
    Querelante["Querelante"] = "Querelante";
})(Querelante = exports.Querelante || (exports.Querelante = {}));
var Reclamado;
(function (Reclamado) {
    Reclamado["PlurimaDoReclamado"] = "PlurimaDoReclamado";
    Reclamado["Reclamada"] = "Reclamada";
    Reclamado["Reclamadas"] = "Reclamadas";
    Reclamado["ReclamadaS"] = "ReclamadaS";
    Reclamado["ReclamadaPrincipal"] = "ReclamadaPrincipal";
    Reclamado["Reclamado"] = "Reclamado";
    Reclamado["Reclamados"] = "Reclamados";
    Reclamado["ReclamadoS"] = "ReclamadoS";
    Reclamado["Recldo"] = "Recldo";
    Reclamado["RecldoAS"] = "RecldoAS";
})(Reclamado = exports.Reclamado || (exports.Reclamado = {}));
var Reclamante;
(function (Reclamante) {
    Reclamante["PlurimaDoReclamante"] = "PlurimaDoReclamante";
    Reclamante["Reclamante"] = "Reclamante";
    Reclamante["Reclamantes"] = "Reclamantes";
    Reclamante["ReclamanteS"] = "ReclamanteS";
    Reclamante["ReclamantePrincipal"] = "ReclamantePrincipal";
    Reclamante["Reclte"] = "Reclte";
    Reclamante["ReclteS"] = "ReclteS";
})(Reclamante = exports.Reclamante || (exports.Reclamante = {}));
var Reconvindo;
(function (Reconvindo) {
    Reconvindo["Reconvinda"] = "Reconvinda";
    Reconvindo["Reconvindas"] = "Reconvindas";
    Reconvindo["Reconvindo"] = "Reconvindo";
    Reconvindo["Reconvindos"] = "Reconvindos";
})(Reconvindo = exports.Reconvindo || (exports.Reconvindo = {}));
var Reconvinte;
(function (Reconvinte) {
    Reconvinte["Reconvinte"] = "Reconvinte";
    Reconvinte["Reconvintes"] = "Reconvintes";
})(Reconvinte = exports.Reconvinte || (exports.Reconvinte = {}));
var Recorrente;
(function (Recorrente) {
    Recorrente["Recorrente"] = "Recorrente";
    Recorrente["Recorrentes"] = "Recorrentes";
    Recorrente["Recte"] = "Recte";
    Recorrente["RecteS"] = "RecteS";
})(Recorrente = exports.Recorrente || (exports.Recorrente = {}));
var PrimeiroRecorrente;
(function (PrimeiroRecorrente) {
    PrimeiroRecorrente["Recorrente"] = "Recorrente";
    PrimeiroRecorrente["PrimeiroRecorrente"] = "PrimeiroRecorrente";
})(PrimeiroRecorrente = exports.PrimeiroRecorrente || (exports.PrimeiroRecorrente = {}));
var SegundoRecorrente;
(function (SegundoRecorrente) {
    SegundoRecorrente["Recorrente"] = "Recorrente";
    SegundoRecorrente["SegundoRecorrente"] = "SegundoRecorrente";
})(SegundoRecorrente = exports.SegundoRecorrente || (exports.SegundoRecorrente = {}));
var Terceiro;
(function (Terceiro) {
    Terceiro["Recorrente"] = "Recorrente";
    Terceiro["Terceiro"] = "Terceiro";
})(Terceiro = exports.Terceiro || (exports.Terceiro = {}));
var RecorrenteRecorrido;
(function (RecorrenteRecorrido) {
    RecorrenteRecorrido["RcrteRcrda"] = "RcrteRcrda";
    RecorrenteRecorrido["RcrteRcrdo"] = "RcrteRcrdo";
    RecorrenteRecorrido["RecorrenteERecorrido"] = "RecorrenteERecorrido";
    RecorrenteRecorrido["RecorrenteRecorrido"] = "RecorrenteRecorrido";
})(RecorrenteRecorrido = exports.RecorrenteRecorrido || (exports.RecorrenteRecorrido = {}));
var RecorridoRecorrente;
(function (RecorridoRecorrente) {
    RecorridoRecorrente["RcrdaRcrte"] = "RcrdaRcrte";
    RecorridoRecorrente["RcrdoRcrte"] = "RcrdoRcrte";
    RecorridoRecorrente["RecorridoRecorrente"] = "RecorridoRecorrente";
})(RecorridoRecorrente = exports.RecorridoRecorrente || (exports.RecorridoRecorrente = {}));
var RecorrenteAgravado;
(function (RecorrenteAgravado) {
    RecorrenteAgravado["RecorrentesEAgravadoas"] = "RecorrentesEAgravadoas";
    RecorrenteAgravado["RecorrenteSEAgravadoAS"] = "RecorrenteSEAgravadoAS";
    RecorrenteAgravado["RecorrenteAgravado"] = "RecorrenteAgravado";
})(RecorrenteAgravado = exports.RecorrenteAgravado || (exports.RecorrenteAgravado = {}));
var Recorrido;
(function (Recorrido) {
    Recorrido["Recdo"] = "Recdo";
    Recorrido["RecdoAS"] = "RecdoAS";
    Recorrido["Recorrida"] = "Recorrida";
    Recorrido["Recorridas"] = "Recorridas";
    Recorrido["Recorrido"] = "Recorrido";
    Recorrido["Recorridos"] = "Recorridos";
    Recorrido["Recorridoa"] = "Recorridoa";
    Recorrido["Recorridoas"] = "Recorridoas";
})(Recorrido = exports.Recorrido || (exports.Recorrido = {}));
var RecorridoAgravante;
(function (RecorridoAgravante) {
    RecorridoAgravante["RecorridosEAgravantes"] = "RecorridosEAgravantes";
    RecorridoAgravante["RecorridoAgravante"] = "RecorridoAgravante";
})(RecorridoAgravante = exports.RecorridoAgravante || (exports.RecorridoAgravante = {}));
var RecdoRecte;
(function (RecdoRecte) {
    RecdoRecte["RecdaRecte"] = "RecdaRecte";
    RecdoRecte["RecdoRecte"] = "RecdoRecte";
})(RecdoRecte = exports.RecdoRecte || (exports.RecdoRecte = {}));
var RecteRecdo;
(function (RecteRecdo) {
    RecteRecdo["RecteRecda"] = "RecteRecda";
    RecteRecdo["RecteRecdo"] = "RecteRecdo";
})(RecteRecdo = exports.RecteRecdo || (exports.RecteRecdo = {}));
var Reeducando;
(function (Reeducando) {
    Reeducando["Reeducando"] = "Reeducando";
})(Reeducando = exports.Reeducando || (exports.Reeducando = {}));
var Relator;
(function (Relator) {
    Relator["Relator"] = "Relator";
    Relator["Relatora"] = "Relatora";
    Relator["Relatores"] = "Relatores";
})(Relator = exports.Relator || (exports.Relator = {}));
var Remetente;
(function (Remetente) {
    Remetente["Remetente"] = "Remetente";
})(Remetente = exports.Remetente || (exports.Remetente = {}));
var Representante;
(function (Representante) {
    Representante["Representante"] = "Representante";
    Representante["Representantepais"] = "Representantepais";
    Representante["Representantes"] = "Representantes";
    Representante["RepresentanteS"] = "RepresentanteS";
    Representante["RepresentanteDaSefa"] = "RepresentanteDaSefa";
    Representante["RepresentanteLegal"] = "RepresentanteLegal";
})(Representante = exports.Representante || (exports.Representante = {}));
var Representado;
(function (Representado) {
    Representado["Representada"] = "Representada";
    Representado["Representadas"] = "Representadas";
    Representado["Representado"] = "Representado";
    Representado["Representados"] = "Representados";
    Representado["Representadoa"] = "Representadoa";
    Representado["RepresentadoAS"] = "RepresentadoAS";
})(Representado = exports.Representado || (exports.Representado = {}));
var Requerente;
(function (Requerente) {
    Requerente["Reqte"] = "Reqte";
    Requerente["ReqteS"] = "ReqteS";
    Requerente["Requerente"] = "Requerente";
    Requerente["Requerentes"] = "Requerentes";
})(Requerente = exports.Requerente || (exports.Requerente = {}));
var Requerido;
(function (Requerido) {
    Requerido["Reqda"] = "Reqda";
    Requerido["Reqdo"] = "Reqdo";
    Requerido["ReqdoAS"] = "ReqdoAS";
    Requerido["Requerida"] = "Requerida";
    Requerido["Requeridas"] = "Requeridas";
    Requerido["Requerido"] = "Requerido";
    Requerido["Requeridoa"] = "Requeridoa";
    Requerido["Requeridos"] = "Requeridos";
    Requerido["Requeridoas"] = "Requeridoas";
})(Requerido = exports.Requerido || (exports.Requerido = {}));
var Confinante;
(function (Confinante) {
    Confinante["Confte"] = "Confte";
    Confinante["Confinante"] = "Confinante";
})(Confinante = exports.Confinante || (exports.Confinante = {}));
var Requisitado;
(function (Requisitado) {
    Requisitado["Requisitado"] = "Requisitado";
    Requisitado["Requisitados"] = "Requisitados";
})(Requisitado = exports.Requisitado || (exports.Requisitado = {}));
var Requisitante;
(function (Requisitante) {
    Requisitante["Requisitante"] = "Requisitante";
    Requisitante["Requisitantes"] = "Requisitantes";
})(Requisitante = exports.Requisitante || (exports.Requisitante = {}));
var Responsavel;
(function (Responsavel) {
    Responsavel["Responsavel"] = "Responsavel";
})(Responsavel = exports.Responsavel || (exports.Responsavel = {}));
var Reu;
(function (Reu) {
    Reu["Reu"] = "Reu";
    Reu["Reus"] = "Reus";
    Reu["ReuS"] = "ReuS";
    Reu["Re"] = "Re";
    Reu["Res"] = "Res";
    Reu["Reues"] = "Reues";
    Reu["ReuPreso"] = "ReuPreso";
    Reu["Parter"] = "Parter";
})(Reu = exports.Reu || (exports.Reu = {}));
var Revisor;
(function (Revisor) {
    Revisor["Revisor"] = "Revisor";
    Revisor["Revisora"] = "Revisora";
    Revisor["Revisores"] = "Revisores";
})(Revisor = exports.Revisor || (exports.Revisor = {}));
var Sentenciado;
(function (Sentenciado) {
    Sentenciado["Sentenciado"] = "Sentenciado";
})(Sentenciado = exports.Sentenciado || (exports.Sentenciado = {}));
var SujeitoPassivo;
(function (SujeitoPassivo) {
    SujeitoPassivo["SujeitoPassivo"] = "SujeitoPassivo";
})(SujeitoPassivo = exports.SujeitoPassivo || (exports.SujeitoPassivo = {}));
var Suscitado;
(function (Suscitado) {
    Suscitado["Suscitado"] = "Suscitado";
})(Suscitado = exports.Suscitado || (exports.Suscitado = {}));
var Suscitante;
(function (Suscitante) {
    Suscitante["Suscitante"] = "Suscitante";
})(Suscitante = exports.Suscitante || (exports.Suscitante = {}));
var Sustado;
(function (Sustado) {
    Sustado["Susdo"] = "Susdo";
    Sustado["Sustado"] = "Sustado";
})(Sustado = exports.Sustado || (exports.Sustado = {}));
var Sustante;
(function (Sustante) {
    Sustante["Suste"] = "Suste";
    Sustante["Sustante"] = "Sustante";
})(Sustante = exports.Sustante || (exports.Sustante = {}));
var TerceiraPessoa;
(function (TerceiraPessoa) {
    TerceiraPessoa["Pessoa"] = "Pessoa";
    TerceiraPessoa["TerceiraPessoa"] = "TerceiraPessoa";
})(TerceiraPessoa = exports.TerceiraPessoa || (exports.TerceiraPessoa = {}));
var TerceiroInteressado;
(function (TerceiroInteressado) {
    TerceiroInteressado["TerceiroInteressado"] = "TerceiroInteressado";
})(TerceiroInteressado = exports.TerceiroInteressado || (exports.TerceiroInteressado = {}));
var Terintcer;
(function (Terintcer) {
    Terintcer["Terintcer"] = "Terintcer";
})(Terintcer = exports.Terintcer || (exports.Terintcer = {}));
var Terintinc;
(function (Terintinc) {
    Terintinc["Terintinc"] = "Terintinc";
})(Terintinc = exports.Terintinc || (exports.Terintinc = {}));
var Testemunha;
(function (Testemunha) {
    Testemunha["Testemunha"] = "Testemunha";
    Testemunha["TestemunhaDoAutor"] = "TestemunhaDoAutor";
    Testemunha["TestemunhaDoReu"] = "TestemunhaDoReu";
})(Testemunha = exports.Testemunha || (exports.Testemunha = {}));
var Vitima;
(function (Vitima) {
    Vitima["Vitima"] = "Vitima";
    Vitima["Vitimas"] = "Vitimas";
})(Vitima = exports.Vitima || (exports.Vitima = {}));
var Parte = /** @class */ (function () {
    function Parte(sinonimoParte, parte) {
        this._sinonimoParte = sinonimoParte;
        this._parte = parte;
    }
    Object.defineProperty(Parte.prototype, "sinonimoParte", {
        get: function () {
            return this._sinonimoParte;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parte.prototype, "parte", {
        get: function () {
            return this._parte;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Parte.prototype, "poloProvavel", {
        get: function () {
            return this.constructor.name.substr(9);
        },
        enumerable: true,
        configurable: true
    });
    Parte.getDistances = function (texto) {
        return this.sinonimos.map(function (s) { return js_levenshtein_1.default(texto, s); });
    };
    Parte.getMinDistance = function (distances) {
        return Math.min.apply(Math, distances);
    };
    Parte.getSinoninoParte = function (texto) {
        var distances = this.getDistances(texto);
        var minDistance = this.getMinDistance(distances);
        var index = distances.indexOf(minDistance);
        return this.sinonimos[index];
    };
    Parte.getParte = function (sinonimo) {
        var _this = this;
        return stringKeys(this.partes).find(function (p) { return _this.partes[p].includes(sinonimo); });
    };
    Parte.find = function (texto) {
        if (this === Parte) {
            var distances = [
                PartePoloPassivo.getDistances(texto),
                PartePoloTerceiro.getDistances(texto),
                PartePoloAtivo.getDistances(texto),
                PartePoloAtivoOuPassivo.getDistances(texto),
                PartePoloJuizoDesembargador.getDistances(texto)
            ];
            var minDistances = distances.map(this.getMinDistance);
            var minDistance = this.getMinDistance(minDistances);
            var index = minDistances.indexOf(minDistance);
            return [
                PartePoloPassivo,
                PartePoloTerceiro,
                PartePoloAtivo,
                PartePoloAtivoOuPassivo,
                PartePoloJuizoDesembargador
            ][index].find(texto);
        }
        else {
            var sinonimoParte = this.getSinoninoParte(texto);
            var parte = this.getParte(sinonimoParte);
            // @ts-ignore
            return new this(sinonimoParte, parte);
        }
    };
    Parte.prototype.toString = function () {
        return this.constructor.name + " { sinonimoParte: \"" + this.sinonimoParte + "\", parte: \"" + this.parte + "\", poloProvavel: \"" + this.poloProvavel + "\" }";
    };
    return Parte;
}());
exports.Parte = Parte;
function stringKeys(e) {
    return Object.keys(e).filter(function (k) { return k[0] < '0' || k[0] > '9'; });
}
var PartePoloPassivo = /** @class */ (function (_super) {
    __extends(PartePoloPassivo, _super);
    function PartePoloPassivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartePoloPassivo.partes = {
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
    };
    PartePoloPassivo.sinonimos = flatMap_1.default([Acusado, AcusadoPunibilidadeExtinta, Agravado, AgravadoRecorrente, AgravanteRecorrido, Apelado, ApelanteApelado, Apenado, Arguido, Autuado, Coator, Condenado, Consignatario, Demandado, Denunciado, Devedor, Embargado, Excipiente, Executado, Expropriado, Extraditado, Flagranteado, Impetrado, Impugnado, Indiciado, Infrator, Inquirido, Interditado, Interditando, Interpelado, Inventariado, InventariantePartePassiva, Investigado, LitisconsortePassivo, LitisconsortePassivoNecessario, MassaFalida, MassaInsolvente, Inventor, Nunciado, Passiva, PoloPassivo, Promovido, Querelado, Reclamado, Reconvinte, Recorrido, RecorridoAgravante, Reeducando, Requerido, Confinante, Requisitado, Reu, Sentenciado, SujeitoPassivo, Suscitado, Sustado], function (e) { return stringKeys(e); });
    return PartePoloPassivo;
}(Parte));
exports.PartePoloPassivo = PartePoloPassivo;
var PartePoloTerceiro = /** @class */ (function (_super) {
    __extends(PartePoloTerceiro, _super);
    function PartePoloTerceiro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartePoloTerceiro.partes = {
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
    };
    PartePoloTerceiro.sinonimos = flatMap_1.default([Adolescente, Admterc, Assista, AssMP, Autoridade, Beneficiario, ChamadoAoProcesso, Comunicado, Comunicante, Corrigente, Corrigido, CriancaAdolescente, DeCujus, Dilig, EntidadeRelacionada, EntrePartes, Falecido, Habilitado, Habilitante, Informante, Infte, Interessado, Marca, Perito, Procurador, Representante, Inventariante, TerceiraPessoa, Terceiro, TerceiroInteressado, Terintcer, Terintinc, Testemunha], function (e) { return stringKeys(e); });
    return PartePoloTerceiro;
}(Parte));
exports.PartePoloTerceiro = PartePoloTerceiro;
var PartePoloAtivo = /** @class */ (function (_super) {
    __extends(PartePoloAtivo, _super);
    function PartePoloAtivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartePoloAtivo.partes = {
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
    };
    PartePoloAtivo.sinonimos = flatMap_1.default([Agravante, ApeladoApelante, PrimeiroApelante, Apelante, Arguente, Ativa, Autor, AutorDoFato, Consignante, Credor, Demandante, Denunciante, Embargante, Excepto, Executante, Exequente, Expropriante, Impetrante, Impugnante, Interpelante, Interveniente, InventarianteParteAtiva, Nunciante, Oponente, Paciente, Plurima, PoloAtivo, Promovente, Proponente, Querelante, Reclamante, Reconvindo, Recorrente, PrimeiroRecorrente, SegundoRecorrente, Terceiro, RecorrenteAgravado, Requerente, Requisitante, Suscitante, Sustante, Vitima], function (e) { return stringKeys(e); });
    return PartePoloAtivo;
}(Parte));
exports.PartePoloAtivo = PartePoloAtivo;
var PartePoloAtivoOuPassivo = /** @class */ (function (_super) {
    __extends(PartePoloAtivoOuPassivo, _super);
    function PartePoloAtivoOuPassivo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartePoloAtivoOuPassivo.partes = {
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
    };
    PartePoloAtivoOuPassivo.sinonimos = flatMap_1.default([Contratado, Contratante, ContribuintePrincipal, Inventariante, Litisconsorte, Depositante, Procurador, Titular, Noticiado, Noticiante, Notificado, Notificante, Oposto, Outros, OutrosNomes, RecorrenteRecorrido, RecorridoRecorrente, RecdoRecte, RecteRecdo, Remetente, Representado, Responsavel], function (e) { return stringKeys(e); });
    return PartePoloAtivoOuPassivo;
}(Parte));
exports.PartePoloAtivoOuPassivo = PartePoloAtivoOuPassivo;
var PartePoloJuizoDesembargador = /** @class */ (function (_super) {
    __extends(PartePoloJuizoDesembargador, _super);
    function PartePoloJuizoDesembargador() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PartePoloJuizoDesembargador.partes = {
        Deprecado: stringKeys(Deprecado),
        Deprecante: stringKeys(Deprecante),
        JuizoSentenciante: stringKeys(JuizoSentenciante),
        Jusrogante: stringKeys(Jusrogante),
        JuizDeprecante: stringKeys(JuizDeprecante),
        JustRog: stringKeys(JustRog),
        Relator: stringKeys(Relator),
        Revisor: stringKeys(Revisor)
    };
    PartePoloJuizoDesembargador.sinonimos = flatMap_1.default([Deprecado, Deprecante, JuizoSentenciante, Jusrogante, JuizDeprecante, JustRog, Relator, Revisor], function (e) { return stringKeys(e); });
    return PartePoloJuizoDesembargador;
}(Parte));
exports.PartePoloJuizoDesembargador = PartePoloJuizoDesembargador;
//# sourceMappingURL=entidades-partes.js.map