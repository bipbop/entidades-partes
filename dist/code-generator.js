"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var change_case_1 = require("change-case");
var diacritics_1 = require("diacritics");
var groupBy_1 = __importDefault(require("lodash/groupBy"));
var mapValues_1 = __importDefault(require("lodash/mapValues"));
var uniq_1 = __importDefault(require("lodash/uniq"));
var lines = fs_1.readFileSync('../nomenclatura.txt').toString('utf-8').split(/(\r)?\n/).filter(function (line) { return !!line; });
var dict = lines.map(function (line) {
    var splitString = line.split('"').map(function (item) { return item.replace(/[^a-zÀ-ú\/\.\s]/gi, '').toLocaleLowerCase().trim(); }).filter(function (item) { return !!item; });
    return splitString;
}).filter(function (items) { return items.length >= 2; }).map(function (_a) {
    var sinonimoParte = _a[0], parte = _a[1], poloProvavel = _a[2];
    return ({
        sinonimoParte: sinonimoParte,
        parte: parte,
        poloProvavel: poloProvavel,
        cases: {
            sinonimoParte: change_case_1.pascalCase(diacritics_1.remove(sinonimoParte)),
            parte: change_case_1.pascalCase(diacritics_1.remove(parte)),
            poloProvavel: poloProvavel ? change_case_1.pascalCase(diacritics_1.remove(poloProvavel)) : change_case_1.pascalCase(diacritics_1.remove('terceiro'))
        }
    });
});
var partes = mapValues_1.default(groupBy_1.default(dict, 'cases.parte'), function (items, idx) { return uniq_1.default(items.map(function (_a) {
    var cases = _a.cases;
    return cases ? cases.sinonimoParte : null;
}).concat(idx)); });
var polosProvaveis = mapValues_1.default(groupBy_1.default(dict, 'cases.poloProvavel'), function (items) { return uniq_1.default(items.map(function (_a) {
    var cases = _a.cases;
    return cases ? cases.parte : null;
})); });
mapValues_1.default(partes, function (partes, idx) { return fs_1.writeFileSync("partes/" + change_case_1.paramCase(idx) + ".ts", "export enum Enum" + idx + " {\n" + partes.map(function (parte) { return "  " + parte + " = \"" + parte + "\","; }).join('\n') + "\n}\r\n"); });
console.log(mapValues_1.default(polosProvaveis, function (values, idx) {
    fs_1.writeFileSync("polos/" + change_case_1.paramCase(idx) + ".ts", values.map(function (x) { return "export { Enum" + x + " } from '../partes/" + change_case_1.paramCase(x || '') + "'"; }).join('\r\n') + "\n  \n" + values.map(function (x) { return "import { Enum" + x + " } from '../partes/" + change_case_1.paramCase(x || '') + "'"; }).join('\r\n') + "\n\nexport type Type" + idx + " = " + values.map(function (x) { return "Enum" + x; }).join(' | ') + "\n\nexport interface Dict" + idx + " {[name: string]: Type" + idx + "}\nexport const " + idx + ": Dict" + idx + " = Object.assign({}, " + values.map(function (x) { return "Enum" + x; }).join(', ') + ")\n");
}));
// mapValues(polosProvaveis, (polo, idx) => {
//   `\n\nexport class PartePolo${idx} extends Parte<${polo.join(' | ')}> {
//   protected static partes = {
//     ${polo.map(p => `${p}: stringKeys(${p})`).join(',\n    ')}
//   }
//   protected static sinonimos = flatMap([${polo.join(', ')}], e => stringKeys(e))
// }`
// })
// 'export type Polo = ${Object.keys(polosProvaveis).map(pp => `PartePolo${pp}`).join(' | ')}';
//# sourceMappingURL=code-generator.js.map