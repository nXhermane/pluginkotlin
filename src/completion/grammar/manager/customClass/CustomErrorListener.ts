import {Parser, Lexer, Token, Recognizer, ANTLRErrorListener, RecognitionException,DefaultErrorStrategy,ConsoleErrorListener} from 'antlr4ts';

export type Error={
	line:number,
	position:number,
	msg:string,
	symbole:[string,number]
}
export class CustomErrorListener implements ANTLRErrorListener<Token> {
	public errorArray:Error[]=[]
    syntaxError(
        recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        console.error(`Erreur de syntaxe à la ligne ${line}:${charPositionInLine} - ${msg}\n `);
        if (offendingSymbol) {
            console.error(`Symbole en erreur : ${offendingSymbol.text}`);
            console.error(`Type de symbole en erreur : ${offendingSymbol.type}`);
        }
        const newError:Error={
				line:line,
				position:charPositionInLine,
				msg:msg,
				symbole:[offendingSymbol.text,offendingSymbol.type]
        }
        this.errorArray.push(newError)
    }
    

    
}
	