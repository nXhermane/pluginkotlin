//import fs from 'fs'
import SyntaxTreeGenerator from './../SyntaxTreeGenerator.ts'
import {KotlinLexer} from './../../antlr4_res//KotlinLexer.ts';
import {KotlinParser} from './../../antlr4_res/KotlinParser.ts';
import { KotlinParserVisitor} from './../../antlr4_res/KotlinParserVisitor.ts';
import {CustomErrorListener} from './../customClass/CustomErrorListener.ts'
import CustomVisitor from './../customClass/CustomVisitor.ts'


//const sourceCode= fs.readFileSync('./test.kt','utf-8')
const sourceCode=`
fun yello(typ:String){
	println("hello")
}
`

export class test{
	depart:number
	fin:number
	newTree:SyntaxTreeGenerator
	constructor(){
		this.depart=Date.now()
		 this.newTree=new SyntaxTreeGenerator(sourceCode)
		.applyLexer(KotlinLexer)
		.applyParser(KotlinParser)
		.applyCustomError(CustomErrorListener)
		.generate().applyVisitor(CustomVisitor).build()
		 this.fin = Date.now()
		 console.log(this.fin)
	}
}



