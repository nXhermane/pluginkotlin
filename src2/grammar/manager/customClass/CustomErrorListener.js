import antlr4 from 'antlr4'


export default class CustomErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        console.error(`Erreur à la ligne ${line}:${column} - ${recognizer.state}`);
    }
}