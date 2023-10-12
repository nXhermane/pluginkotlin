const prettier = require("prettier");
const prettierKotlin = require("prettier-plugin-kotlin");

const codeToFormat = `
fun main() {
    println("Hello, World!")
    val bbnbbn = 8
    var beto = "value"

    fun belo() {
        println('n')
    }

    fun bello() {
        println("oui")
    }

    fun bellola() {
        println("vous")
    }

    fun helloWorld() {
        println("hello")
    }

    class Hello(string: String) {}

    import huun.jdu.user
    import youy.y.uo as hello

    fun beto(ht: String, h2: Int) {
        println("oui")
        val y = 10

        fun yest(jut: String) {
            println("ju")
        }
    }

    class Yello(h: String) {
        class Bb(v: String, b: Int) {
            class Bbn(nv: String, bn: Int) {
                val yoyo = Bb(b, v)
            }

            fun uuu() {}
            fun uuu2() {}
            class Bnb(vnb: String, bnv: Int) {
                fun uuu3() {}
            }
        }
    }

    fun main(ht: String) {
        fun oui(jut: String) {
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
}
`;
(async () => {
   const debut = Date.now();
   const formattedCode = await prettier.format(codeToFormat, {
      parser: "kotlin",
      plugins: [prettierKotlin],
   });
   const fin = Date.now();
   console.log(formattedCode);
   console.log(`${fin - debut}ms`);
})();
