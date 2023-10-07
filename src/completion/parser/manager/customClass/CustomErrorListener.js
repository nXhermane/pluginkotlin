import antlr4 from 'antlr4'


export default class CustomErrorListener extends antlr4.error.ErrorListener {
	errorArray=[]
	syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
		console.error(`Erreur de syntaxe à la ligne ${line}:${column} - ${msg}\n `);
        if (offendingSymbol) {
            console.error(`Symbole en erreur : ${offendingSymbol.text}`);
            console.error(`Type de symbole en erreur : ${offendingSymbol.type}`);
        }
        const newError={
				line:line,
				position:column,
				msg:msg,
				symbole:[offendingSymbol.text,offendingSymbol.type]
        }
        this.errorArray.push(newError)
	}
}