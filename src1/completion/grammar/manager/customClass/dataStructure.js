"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = exports.PropertyStructure = exports.FunctionStructure = exports.ClassStructure = exports.ImportStructure = exports.Body = void 0;
class Body {
    constructor() {
        this.classDeclaration = [];
        this.functionDeclaration = [];
        this.variableDeclaration = [];
    }
}
exports.Body = Body;
class ImportStructure {
    constructor(keywords) {
        this.importKeyword = keywords;
    }
}
exports.ImportStructure = ImportStructure;
class ClassStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.body = new Body();
    }
}
exports.ClassStructure = ClassStructure;
class FunctionStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.body = new Body();
    }
}
exports.FunctionStructure = FunctionStructure;
class PropertyStructure {
    constructor(name) {
        this.name = name;
    }
}
exports.PropertyStructure = PropertyStructure;
class Parameter {
    constructor(name) {
        this.name = name;
    }
}
exports.Parameter = Parameter;
