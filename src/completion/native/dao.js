export default class Dao {
   constructor(baseUrl) {
      this.baseUrl = baseUrl;
      this.db = null;
   }

   async init() {
      const sqlPromise = initSqlJs({
         locateFile: (file) => `${this.baseUrl}dist/${file}`,
      });
      const dataPromise = fetch(`${this.baseUrl}db/auto_complt.db`).then(
         (res) => res.arrayBuffer()
      );
      const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
      const db = new SQL.Database(new Uint8Array(buf));
      return db;
   }

   getDb() {
      if (!this.db) {
         return this.init().then((db) => {
            this.db = db;
            return this.db;
         });
      } else {
         return Promise.resolve(this.db);
      }
   }
   async selectAll() {
      const db = await this.getDb();
      const stmt = db.prepare("SELECT * FROM kotlin_native_keyword");
      return stmt;
   }
}
