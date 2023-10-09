const prettier = require('prettier');
const prettierKotlin = require('prettier-plugin-kotlin');

const codeToFormat = `
    // Votre code Kotlin ici
    fun main(){
  println("Hello, World!")
  val bbnbbn=8
var beto="value"
fun belo() {
	println('n')
}

fun bello() {
	println('oui')
}
fun bellola() {
	println('vous')
}
fun helloWorld() {
	println('hello')
}

class hello(string:String) {}

    }
    import huun.jdu.user
import youy.y.uo as hello
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
		fun uuu() {}
		fun uuu() {}
		class bnb(vnb:String,bnv:Int) {
			fun uuu() {}
		}
	}
}

class yello(h:String) {
	class bb(v:String,b:Int) {
		class bbn(nv:String,bn:Int) {
			val yoyo = bb(b,v)
		}
		fun uuu() {}
	}
	fun uuu() {}
	class bnb(vnb:String,bnv:Int) {
		fun uuu() {}
	}
}

@override
fun main(ht: String) {
	fun oui(jut:String) {
		println("ju")
	val x = 5
	val y = 10
	val sum = x + y  
	var a = 8
	if (true) {
	beto("exemple", 42)
	}
	if (sum > 10) {
		println("La somme est supérieure à 10.")
	} else {
		println("La somme est inférieure ou égale à 10")
	}
	
}
}
`;
(async () => {
	const debut=Date.now()
	const formattedCode = await prettier.format(codeToFormat, {
		parser: 'kotlin',
		plugins: [prettierKotlin],
	});
	const fin=Date.now()
	console.log(formattedCode);
	console.log(`${fin-debut}ms`)
})()


