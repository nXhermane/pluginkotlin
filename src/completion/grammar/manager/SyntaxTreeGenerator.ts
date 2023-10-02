import { ANTLRInputStream, CommonTokenStream,LexerNoViableAltException } from 'antlr4ts';
import {KotlinParser} from "./../antlr4_res/KotlinParser";
import {KotlinLexer} from "./../antlr4_res/KotlinLexer";
import CustomVisitor from './customClass/CustomVisitor'

export default class SyntaxTreeGenerator {
    private inputStream: ANTLRInputStream;
    public lexer!: KotlinLexer;
    private tokenStream!: CommonTokenStream;
    private parser!: KotlinParser;
    private tree: any;
    public Visitor!: CustomVisitor;

    constructor(sourceCode: string) {
        this.inputStream = new ANTLRInputStream(sourceCode);
    }

    applyLexer(Lexer: any) {
        this.lexer = new Lexer(this.inputStream);
        return this;
    }

    applyParser(Parser: any) {
        this.tokenStream = new CommonTokenStream(this.lexer);
        this.parser = new Parser(this.tokenStream);
        return this;
    }

    applyCustomError(CustomError: any) {
        this.parser.removeErrorListeners();
        this.parser.addErrorListener(new CustomError());
       // this.parser.addErrorListener(new CustomErrorListen())
        return this;
    }

    generate() {
        this.tree = this.parser.kotlinFile();
        return this;
    }

    applyVisitor(CustomVisitor: any) {
        this.Visitor = new CustomVisitor();
        this.Visitor.visit(this.tree)
        return this;
    }

    build() {
        return this;
    }
}