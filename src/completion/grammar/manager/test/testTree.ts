import fs from 'fs'
import SyntaxTreeGenerator from './../SyntaxTreeGenerator'
import {KotlinLexer} from './../../antlr4_res//KotlinLexer';
import {KotlinParser} from './../../antlr4_res/KotlinParser';
import { KotlinParserVisitor} from './../../antlr4_res/KotlinParserVisitor';
import {CustomErrorListener} from './../customClass/CustomErrorListener'
import CustomVisitor from './../customClass/CustomVisitor'


const sourceCode= fs.readFileSync('./test.kt','utf-8')


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



