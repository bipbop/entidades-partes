"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var ativo_ou_passivo_1 = require("./ativo-ou-passivo");
exports.TypeAtivoOuPassivo = ativo_ou_passivo_1.default;
var ativo_1 = require("./ativo");
exports.TypeAtivo = ativo_1.default;
var passivo_1 = require("./passivo");
exports.TypePassivo = passivo_1.default;
var juizo_desembargador_1 = require("./juizo-desembargador");
exports.TypeJuizoDesembargador = juizo_desembargador_1.default;
var terceiro_1 = require("./terceiro");
exports.TypeTerceiro = terceiro_1.default;
__export(require("./ativo-ou-passivo"));
__export(require("./ativo"));
__export(require("./passivo"));
__export(require("./juizo-desembargador"));
__export(require("./terceiro"));
var ativo_ou_passivo_2 = __importStar(require("./ativo-ou-passivo"));
var ativo_2 = __importStar(require("./ativo"));
var passivo_2 = __importStar(require("./passivo"));
var juizo_desembargador_2 = __importStar(require("./juizo-desembargador"));
var terceiro_2 = __importStar(require("./terceiro"));
exports.Partes = (_a = {},
    _a[ativo_ou_passivo_2.default] = ativo_ou_passivo_2.ObjectAtivoOuPassivo,
    _a[ativo_2.default] = ativo_2.ObjectAtivo,
    _a[passivo_2.default] = passivo_2.ObjectPassivo,
    _a[terceiro_2.default] = terceiro_2.ObjectTerceiro,
    _a[juizo_desembargador_2.default] = juizo_desembargador_2.ObjectJuizoDesembargador,
    _a);
Object.freeze(exports.Partes);
//# sourceMappingURL=partes.js.map