import { ANTLRInputStream, CommonTokenStream,LexerNoViableAltException } from 'antlr4ts';
import {KotlinParser} from "./../antlr4_res/KotlinParser";
import {KotlinLexer} from "./../antlr4_res/KotlinLexer";
import CustomVisitor from './customClass/CustomVisitor'
import {CustomErrorListener,Error} from './customClass/CustomErrorListener'
export default class SyntaxTreeGenerator {
    private inputStream: ANTLRInputStream;
    public lexer!: KotlinLexer;
    private tokenStream!: CommonTokenStream;
    private parser!: KotlinParser;
    private tree: any;
    public visitor!: CustomVisitor;
    public error:CustomErrorListener;
    public tokens:any[]
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
        this.error=new CustomError()
        this.parser.addErrorListener(this.error);
        return this;
    }

    generate() {
        this.tree = this.parser.kotlinFile();
        return this;
    }

    applyVisitor(CustomVisitor: any) {
        this.visitor = new CustomVisitor();
        this.visitor.visit(this.tree)
        return this;
    }

    build() {
        return this;
    }
    initError(){
		this.error.errorArray=[]
    }
    getErrorArray(){
		return  this.error.errorArray
    }
    getTypeName(type:number){
		return KotlinParser.VOCABULARY.getLiteralName(type)
    }
}