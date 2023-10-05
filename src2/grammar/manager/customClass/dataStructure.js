
export class ClassStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.variables = [];
        this.methods = [];
        this.innerClasses = [];
    }
}

export class Parameter {
    constructor(name) {
        this.name = name;
        this.type = null;
    }
}

export class FunctionStructure {
    constructor(name) {
        this.name = name;
        this.parameters = [];
        this.returnType = null;
    }
}

export class VariableStructure {
    constructor(name) {
        this.name = name;
        this.type = null;
    }
}

export class PackageStructure {
    constructor(name) {
        this.name = name;
        this.subpackages = [];
        this.classes = [];
        this.functions = [];
        this.variables = [];
    }
}

export class ImportStructure {
    constructor(name) {
        this.name = name;
    }
}

export class EnumStructure {
    constructor(name) {
        this.name = name;
        this.enumEntries = [];
    }
}

export class AnnotationStructure {
    constructor(name) {
        this.name = name;
        this.attributes = [];
    }
}

export class GenericTypeStructure {
    constructor(name) {
        this.name = name;
        this.typeArguments = [];
    }
}

export class ExpressionStructure {
    constructor() {
        this.expressionType = null;
    }
}

export class FunctionCallStructure {
    constructor(functionName) {
        this.functionName = functionName;
        this.arguments = [];
    }
}

export class OperationStructure {
    constructor(operator) {
        this.operator = operator;
        this.operands = [];
    }
}
