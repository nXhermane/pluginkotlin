export default class ExtractData {
  constructor() {
    this.data = [];
  }

  extractClassArray(classArray, scope = "global", scopetype = "main") {
    classArray.forEach((e) => {
      const Scope = scope;
      const scopeType = scopetype;
      const type = "class";
      const name = e.name;
      const parameter = e.parameters
        .map((p) => `${p.name}:${p.type}`)
        .join(',');
      const code = `${name}(${parameter})`;

      this.data.push({
        scope: Scope,
        scopeType: scopeType,
        name: name,
        type: type,
        code: code,
        parameters: e.parameters,
      });

      this.extractClassArray(e.body.classDeclaration, name, type);
      this.extractFunctionArray(e.body.functionDeclaration, name, type, "Property");
      this.extractVariableArray(e.body.variableDeclaration, name, type);
    });
  }

  extractFunctionArray(functionArray, scope = "global", scopetype = "main", type = "function") {
    for (let e of functionArray) {
      const name = e.name;
      const returnType = e.returnType;
      const isReturn = returnType !== "Void";
      const parameter = e.parameters
        .map((p) => `${p.name}:${p.type}`)
        .join(',');
      const derive = scopetype === "class" ? `${scope}.` : "";
      const code = `${derive}${name}(${parameter}): ${returnType}`;

      this.data.push({
        scope: scope,
        scopeType: scopetype,
        name: name,
        type: type,
        code: code,
        parameters: e.parameters,
        isReturn: isReturn,
      });

      this.extractClassArray(e.body.classDeclaration, name, type);
      this.extractFunctionArray(e.body.functionDeclaration, name, type);
      this.extractVariableArray(e.body.variableDeclaration, name, type);
    }
  }

  extractVariableArray(variableArray, scope = "global", scopetype = "main") {
    for (let e of variableArray) {
      const name = e.name;
      const type = e.type || "Any";
      const isMutable = e.isMutable;
      const code = scopetype === "class" ? `${scope}.${name}` : name;

      this.data.push({
        scope: scope,
        scopeType: scopetype,
        name: name,
        type: type,
        code: code,
      });
    }
  }

  extractImportArray(importArray, scope = "global", scopetype = "main") {
    for (let e of importArray) {
      e.importKeyword.forEach((i) => {
        this.data.push({
          scope: scope,
          scopeType: scopetype,
          name: i,
          type: "local",
        });
      });
      if (e.isAlias) {
        this.data.push({
          scope: scope,
          scopeType: scopetype,
          name: e.importAlias,
          type: "local",
        });
      }
    }
  }
}