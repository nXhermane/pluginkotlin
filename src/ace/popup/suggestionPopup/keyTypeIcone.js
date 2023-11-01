function keyTypeIcone(type) {
   const keywordAssociateIconeName = {
      function: "method",
      class: "class",
      property: "property",
      identifier: "keyword",
      "variable.parameter.function.kotlin": "parameter",
      "entity.name.variable.kotlin": "method",
      boolean: "boolean",
      keyword: "key",
      "keyword.other.kotlin": "key",
   };
   return keywordAssociateIconeName[type] || "key";
}
export default keyTypeIcone;
