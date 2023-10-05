import knex from 'knex';
const db = knex({
	client: 'sqlite3',
	connection: {
		filename: './auto_complt.db',
	},
	useNullAsDefault: true,
});


class daoManager {
	constructor(db) {
		this.db = db
		this.searchkeyword("has")
	}

	async searchkeyword(keyword) {
		const result1 = await this.db
			.select("*")
			.from("kotlin_native")
			.whereLike('global_keyword', `${keyword}%%`)
		const result2 = await this.db
			.select("*")
			.from("kotlin_native_keyword")
			.whereLike('keyword', `${keyword}%%`)
		const table = result1.map((row) => ({ ...row, active: true }))
		console.log(result1)
		result1.forEach(e => {
			console.log(e.id_native)
			console.log(e.global_keyword)
			console.log(JSON.parse(e.global_code))
		})
		result2.forEach(e => {
			console.log(e.id_keyword)
			console.log(e.keyword)
			console.log(e.keyword_type)
			console.log(e.keyword_code)
		})
	}
	async searchkeywordWithType(keyword,type){}
}



var daoInstance = new daoManager(db)