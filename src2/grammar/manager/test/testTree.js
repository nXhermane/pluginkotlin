
import GenerateTree from './../tree.js'
import KotlinLexer from './../../antlr4_res//KotlinLexer.js';
import KotlinParser from './../../antlr4_res/KotlinParser.js';
import KotlinParserVisitor from './../../antlr4_res/KotlinParserVisitor.js';
import CustomErrorListener from './../customClass/CustomErrorListener.js'
import CustomVisitor from './../customClass/CustomVisitor.js'
const sourceCode = `
import huun.jdu.user as hellol
import huun.vue.userr
fun beto(ht: String, h2: Int) {
	println("oui")
	val y = 10
	fun yest(jut:String) {
		println("ju")
	}
}
class yello(h:String) {
	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuu(){
			
		}
	}
	fun uuu(){
			
	}
	class bnb(vnb:String,bnv:Int) {
		fun uuu(){
			
		}
	}
}
class yello(h:String) {
	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuu(){
			
		}
	}
	fun uuu(){
			
	}
	class bnb(vnb:String,bnv:Int) {
		fun uuu(){
			
		}
	}
}
@override
fun main(ht: String) {
	fun oui(jut:String) {
		println("ju")
	}
	val x = 5
	val y = 10
	val sum = x + y
	var a = 8
	if (true) {}
	beto("exemple", 42)
	if (sum > 10) {
		println("La somme est supérieure à 10.")
	} else {
		println("La somme est inférieure ou égale à 10.")
	}
}
`


export default class tree {
	
	constructor() {
		this.depart=Date.now()
		const newTree = new GenerateTree(sourceCode)
			.applyLexer(KotlinLexer)
			.applyParser(KotlinParser)
			.applyCustorError(CustomErrorListener)
			.generate().applyVisitor(CustomVisitor).build()
			this.fin=Date.now()
			this.duree=this.fin-this.depart
	}
}
