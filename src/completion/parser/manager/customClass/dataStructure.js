export class Body {
    constructor() {
        this.classDeclaration = [];
        this.functionDeclaration = [];
        this.variableDeclaration = [];
    }
}

export class ImportStructure {
    constructor(keywords) {
        this.importKeyword = keywords;
        this.importOrigin = '';
        this.isAlias = false;
        this.importAlias = '';
    }
}

export class ClassStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.body = new Body();
    }
}

export class FunctionStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.returnType=''
        this.body = new Body();
    }
}

export class PropertyStructure {
    constructor(name) {
        this.name = name;
        this.type = '';
        this.isMutable = false;
    }
}

export class Parameter {
    constructor(name) {
        this.name = name;
        this.type = '';
    }
}

