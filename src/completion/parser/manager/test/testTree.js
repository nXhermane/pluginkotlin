
import GenerateTree from './../astGenerator.js'
import KotlinLexer from './../../antlr4_res//KotlinLexer.js';
import KotlinParser from './../../antlr4_res/KotlinParser.js';
import KotlinParserVisitor from './../../antlr4_res/KotlinParserVisitor.js';
import CustomErrorListener from './../customClass/CustomErrorListener.js'
import CustomVisitor from './../customClass/CustomVisitor.js'
import Scope from './../../model/scopeNode.js'
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
val yelblo:String="you"
class yello(h:String) {

	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuhu() {}
	}
	fun uuu(hshs:Any) {}
	class bnb(vnb:String,bnv:Int) {
		private fun uuu() {}
	}
}
@override
fun main(ht: String):String {
	fun oui(jut:String) {
		println("ju")
	}
	val (x, oi) = Pair(10, 20)
    val (a, b, c) = Triple(30, 40.0, "Bonjour")

	var y = 10
	var sum = x + y
	var mutable = 8
	if (true) {}
	beto("exemple", 42)
	if (sum > 10) {
		println("La somme est supérieure à 10.")
	} else {
		println("La somme est inférieure ou égale à 10.")
	}
}

fun mainn() {
	val x:Int = 10

	if (x > 5) {
		println("x est supérieur à 5")
	} else {
		println("x est inférieur ou égal à 5")
	}

	val listeDeNombres = listOf(1, 2, 3, 4, 5)

	for (nombre in listeDeNombres) {
		when (nombre) {
			1 -> println("Un")
			2 -> println("Deux")
			3 -> println("Trois")
			else -> println("Autre nombre")
		}
	}

	val fruits = mapOf("pomme" to 1, "banane" to 2, "orange" to 3)

	for ((fruit, quantite) in fruits) {
		println("Il y a $quantite $fruit(s)")
	}

	val tableau = arrayOf(1, 2, 3, 4, 5)

	val somme = tableau
	.filter {
		it % 2 == 0
	}
	.map {
		it * 2
	}
	.sum()
	
	println("La somme des nombres pairs multipliés par 2 est $somme")
}
class variabletest(var yrllo:String) {
		val yoyu:String="pipo"
		class yopu(){
			var pupu:String="pupo"
			fun ypi(){
				var Build:String="pup"
			}
		}
		fun popo(){}
}


var string:String="mimi"
enum class enume(){
	val yello:String="yello"
}
data class dataa(){
	var butyo:String="yui"
}
 
 
fun beto(ht: String, h2: Int) {
	println("oui")
	val y = 10
	fun yest(jut:String) {
		println("ju")
	}
}
val yelblo:String="you"
class yello(h:String,b:Int) {

	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuhu() {}
	}
	fun uuu(hshs:Any) {}
	class bnb(vnb:String,bnv:Int) {
		private fun uuu() {}
	}
}
@override
fun main(ht: String) {
	fun oui(jut:String) {
		println("ju")
	}
	val (x, oi) = Pair(10, 20)
    val (a, b, c) = Triple(30, 40.0, "Bonjour")

	var y = 10
	var sum = x + y
	var mutable = 8
	if (true) {}
	beto("exemple", 42)
	if (sum > 10) {
		println("La somme est supérieure à 10.")
	} else {
		println("La somme est inférieure ou égale à 10.")
	}
}

fun mainn() {
	val x:Int = 10

	if (x > 5) {
		println("x est supérieur à 5")
	} else {
		println("x est inférieur ou égal à 5")
	}

	val listeDeNombres = listOf(1, 2, 3, 4, 5)

	for (nombre in listeDeNombres) {
		when (nombre) {
			1 -> println("Un")
			2 -> println("Deux")
			3 -> println("Trois")
			else -> println("Autre nombre")
		}
	}

	val fruits = mapOf("pomme" to 1, "banane" to 2, "orange" to 3)

	for ((fruit, quantite) in fruits) {
		println("Il y a $quantite $fruit(s)")
	}

	val tableau = arrayOf(1, 2, 3, 4, 5)

	val somme = tableau
	.filter {
		it % 2 == 0
	}
	.map {
		it * 2
	}
	.sum()
	
	println("La somme des nombres pairs multipliés par 2 est $somme")
}
class variabletest(var yrllo:String) {
		val yoyu:String="pipo"
		class yopu(){
			var pupu:String="pupo"
			fun ypi(){
				var Build:String="pup"
			}
		}
		fun popo(){}
}


var string:String="mimi"
enum class enume(){
	val yello:String="yello"
}
data class dataa(){
	var butyo:String="yui"
}
 
 
fun beto(ht: String, h2: Int) {
	println("oui")
	val y = 10
	fun yest(jut:String) {
		println("ju")
	}
}
val yelblo:String="you"
class yello(h:String) {

	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuhu() {}
	}
	fun uuu(hshs:Any) {}
	class bnb(vnb:String,bnv:Int) {
		private fun uuu() {}
	}
}
@override
fun main(ht: String) {
	fun oui(jut:String) {
		println("ju")
	}
	val (x, oi) = Pair(10, 20)
    val (a, b, c) = Triple(30, 40.0, "Bonjour")

	var y = 10
	var sum = x + y
	var mutable = 8
	if (true) {}
	beto("exemple", 42)
	if (sum > 10) {
		println("La somme est supérieure à 10.")
	} else {
		println("La somme est inférieure ou égale à 10.")
	}
}

fun mainn() {
	val x:Int = 10

	if (x > 5) {
		println("x est supérieur à 5")
	} else {
		println("x est inférieur ou égal à 5")
	}

	val listeDeNombres = listOf(1, 2, 3, 4, 5)

	for (nombre in listeDeNombres) {
		when (nombre) {
			1 -> println("Un")
			2 -> println("Deux")
			3 -> println("Trois")
			else -> println("Autre nombre")
		}
	}

	val fruits = mapOf("pomme" to 1, "banane" to 2, "orange" to 3)

	for ((fruit, quantite) in fruits) {
		println("Il y a $quantite $fruit(s)")
	}

	val tableau = arrayOf(1, 2, 3, 4, 5)

	val somme = tableau
	.filter {
		it % 2 == 0
	}
	.map {
		it * 2
	}
	.sum()
	
	println("La somme des nombres pairs multipliés par 2 est $somme")
}
`


export default class tree {
	
	constructor() {
		this.depart=Date.now()
		this.newTree = new GenerateTree(sourceCode)
			.applyLexer(KotlinLexer)
			.applyParser(KotlinParser)
			.applyCustomError(CustomErrorListener)
			.generate().applyVisitor(CustomVisitor).build()
			this.fin=Date.now()
			
			
	}
}
const testTree=new tree()
const testScope=new Scope()
testScope.extractClassArray(testTree.newTree.visitor.classDeclarationInfo)
testScope.extractFunctionArray(testTree.newTree.visitor.functionDeclarationInfo)
testScope.extractVariableArray(testTree.newTree.visitor.variableDeclarationInfo)
testScope.extractImportArray(testTree.newTree.visitor.importInfo)
console.log(testScope.data)