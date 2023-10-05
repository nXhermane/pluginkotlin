"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomErrorListener = void 0;
class CustomErrorListener {
    constructor() {
        this.errorArray = [];
    }
    syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        console.error(`Erreur de syntaxe à la ligne ${line}:${charPositionInLine} - ${msg}\n `);
        if (offendingSymbol) {
            console.error(`Symbole en erreur : ${offendingSymbol.text}`);
            console.error(`Type de symbole en erreur : ${offendingSymbol.type}`);
        }
        const newError = {
            line: line,
            position: charPositionInLine,
            msg: msg,
            symbole: [offendingSymbol.text, offendingSymbol.type]
        };
        this.errorArray.push(newError);
    }
}
exports.CustomErrorListener = CustomErrorListener;
