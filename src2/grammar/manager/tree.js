import antlr4 from "antlr4";

export default class GenerateTree{
	constructor(sourceCode){
		this.inputStream=new antlr4.InputStream(sourceCode)
	}
	applyLexer(Lexer){
		this.lexer=new Lexer(this.inputStream)
		return this
	}
	applyParser(Parser){
		this.tokenStream=new antlr4.CommonTokenStream(this.lexer)
		this.parser=new Parser(this.tokenStream)
		return this
	}
	applyCustorError(CustorError){
		this.parser.removeErrorListeners()
		this.parser.addErrorListener(new CustorError)
		return this
	}
	generate(){
		this.tree=this.parser.kotlinFile()
		return this
	}
	applyVisitor(CustomVisitor){
		this.Visitor=new CustomVisitor()
		this.tree.accept(this.Visitor)
		return this
	}
	build(){
		return this
	}
}