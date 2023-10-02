import {Parser, Lexer, Token, Recognizer, ANTLRErrorListener, RecognitionException,DefaultErrorStrategy,ConsoleErrorListener} from 'antlr4ts';

export class CustomErrorListener implements ANTLRErrorListener<Token> {
    syntaxError(
        recognizer: Recognizer<Token, any>,
        offendingSymbol: Token | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        console.error(`Erreur de syntaxe à la ligne ${line}:${charPositionInLine} - ${msg}`);
        if (offendingSymbol) {
            console.error(`Symbole en erreur : ${offendingSymbol.text}`);
            console.error(`Type de symbole en erreur : ${offendingSymbol.type}`);
        }
        // const context = recognizer.context;
//         if (context) {
//             console.error(`Contexte : ${context.toString()}`);
//         }
    }

    reportAmbiguity(
        recognizer: Recognizer<Symbol, any>,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        exact: boolean,
        ambigAlts: any,
        configs: any
    ): void {
        console.error(`Ambiguïté détectée entre les alternatives ${ambigAlts} à la position ${startIndex}:${stopIndex}`);
    }

    reportAttemptingFullContext(
        recognizer: Recognizer<Symbol, any>,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        conflictingAlts: any,
        configs: any
    ): void {
        console.error(`Tentative de prédiction avec contexte complet entre les alternatives ${conflictingAlts} à la position ${startIndex}:${stopIndex}`);
    }

    reportContextSensitivity(
        recognizer: Recognizer<Symbol, any>,
        dfa: any,
        startIndex: number,
        stopIndex: number,
        prediction: number,
        configs: any
    ): void {
        console.error(`Sensibilité au contexte détectée lors de la prédiction à la position ${startIndex}:${stopIndex}, prédiction : ${prediction}`);
    }
}
	

export class CustomErrorStrategy extends DefaultErrorStrategy {
  reportError(recognizer, e) {
    // Votre propre logique de gestion des erreurs ici
    console.log("error")
  }

  recover(recognizer, e) {
	console.log('eror')
    // Votre propre logique de récupération d'erreur ici
  }
}


export class CustomErrorListeners extends ConsoleErrorListener {
    syntaxError<T>(
        recognizer: Recognizer<T, any>,
        offendingSymbol: T | undefined,
        line: number,
        charPositionInLine: number,
        msg: string,
        e: RecognitionException | undefined
    ): void {
        console.error(`Erreur de syntaxe à la ligne ${line}:${charPositionInLine} - ${msg}\n${offendingSymbol}\n`);
    }
}