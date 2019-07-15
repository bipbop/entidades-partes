"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entidades_partes_1 = require("./entidades-partes");
var parte = entidades_partes_1.Parte.find('decujos');
console.log(parte.toString());
if (parte instanceof entidades_partes_1.PartePoloTerceiro) {
    console.log('sinonimoParte:', parte.sinonimoParte);
    console.log('parte:', parte.parte);
    console.log('poloProvavel:', parte.poloProvavel);
}
parte = entidades_partes_1.Parte.find('revisors');
console.log(parte.toString());
if (parte instanceof entidades_partes_1.PartePoloJuizoDesembargador) {
    console.log('sinonimoParte:', parte.sinonimoParte);
    console.log('parte:', parte.parte);
    console.log('poloProvavel:', parte.poloProvavel);
}
//# sourceMappingURL=test.js.map