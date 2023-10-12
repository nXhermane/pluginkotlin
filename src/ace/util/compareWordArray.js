

export default function compareWordArray(array1, array2) {
	let wordExist = []
	let wordAdded = []
	let wordRemoved = []
	for (let i = 0; i < array1.length; i++) {
		const word = array1[i].name.trim()
		let a = false
		for (let j = 0; j < array2.length; j++) {
			if (word === array2[j].trim()) {

				a = false
				break
			} else {
				a = true
			}
		}
		if (a) {
			wordAdded.push(array1[i])
		}
	}
	for (let i = 0; i < array2.length; i++) {
		const word = array2[i].trim()
		let a = false
		for (let j = 0; j < array1.length; j++) {
			if (word === array1[j].name.trim()) {
				a = false
				break
			} else {
				a = true
			}
		}
		if (a) {
			wordRemoved.push(word)
		}
	}
	return {
		added: wordAdded,
		removed: wordRemoved
	}

}

// const array1 = [{ name: "yesr" }, { name: 'yar' }, { name: "oui" }]
// const array2 = [ "non", "oui","yar"]
// console.log(compareWordArray(array1, array2))