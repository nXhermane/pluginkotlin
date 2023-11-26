import Dao from "./dao.js";

export default class native {
   constructor(baseUrl) {
      this.dao = new Dao(baseUrl);
   }
   async prepareAll(WordTree) {
      let dataArray = [];
      await this.dao.selectAll().then(async (stmt) => {
         while (stmt.step()) {
            const row = stmt.getAsObject();
            let keyword = {
               name: row.keyword,
               description: JSON.parse(row.keyword_detail)[0] || null,
               code: JSON.parse(row.keyword_code)[0] || null,
               type: row.keyword_type,
               scope: "native",
            };
            dataArray.push(keyword);
         }
         await WordTree.insert(dataArray);
      });
      return "success";
   }
}
