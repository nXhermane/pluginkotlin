export interface ClassStructure {
    name: string;
    parameters?: Parameter[];
    variables?: VariableStructure[];
    methods?: FunctionStructure[];
    innerClass?: ClassStructure[];
}

export interface Parameter {
    name: string;
    type?: any | null;
}

export interface FunctionStructure {
    name: string;
    parameters?: Parameter[];
    innerFunction:FunctionStructure[];
    returnType?: String | null;
    innerVariables:PropertyStructure[]
}

export interface PropertyStructure {
    name: string;
    type?: any | null;
    isMutable:boolean;
}

export interface PackageStructure {
    name: string;
    subpackages?: PackageStructure[];
    classes?: ClassStructure[];
    functions?: FunctionStructure[];
    variables?: VariableStructure[];
}

export interface ImportStructure {
    importKeyword:string[];
    importOrigin:string;
    isAlias?:boolean;
    importAlias?:string;
}

export interface EnumStructure {
    name: string;
    enumEntries?: any[];
}

export interface AnnotationStructure {
    name: string;
    attributes?: any[];
}

export interface GenericTypeStructure {
    name: string;
    typeArguments?: any[];
}

export interface ExpressionStructure {
    expressionType?: any | null;
}

export interface FunctionCallStructure {
    functionName?: string;
    arguments?: any[];
}

export interface OperationStructure {
    operator: string;
    operands?: any[];
}

// export class ClassStructure implements ClassStructure {
//     constructor(public name: string) {
//         this.parameters = [];
//         this.variables = [];
//         this.methods = [];
//         this.innerClasses = [];
//     }
// }
// 
// export class Parameter implements Parameter {
//     constructor(public name: string) {
//         this.type = null;
//     }
// }
// 
// export class FunctionStructure implements FunctionStructure {
//     constructor(public name: string) {
//         this.parameters = [];
//         this.returnType = null;
//     }
// }
// 
// export class VariableStructure implements VariableStructure {
//     constructor(public name: string) {
//         this.type = null;
//     }
// }
// 
// export class PackageStructure implements PackageStructure {
//     constructor(public name: string) {
//         this.subpackages = [];
//         this.classes = [];
//         this.functions = [];
//         this.variables = [];
//     }
// }
// 
// export class ImportStructure implements ImportStructure {
//     constructor(public name: string) {}
// }
// 
// export class EnumStructure implements EnumStructure {
//     constructor(public name: string) {
//         this.enumEntries = [];
//     }
// }
// 
// export class AnnotationStructure implements AnnotationStructure {
//     constructor(public name: string) {
//         this.attributes = [];
//     }
// }
// 
// export class GenericTypeStructure implements GenericTypeStructure {
//     constructor(public name: string) {
//         this.typeArguments = [];
//     }
// }
// 
// export class ExpressionStructure implements ExpressionStructure {
//     constructor() {
//         this.expressionType = null;
//     }
// }
// 
// export class FunctionCallStructure implements FunctionCallStructure {
//     constructor(public functionName: string) {
//         this.arguments = [];
//     }
// }
// 
// export class OperationStructure implements OperationStructure {
//     constructor(public operator: string) {
//         this.operands = [];
//     }
// }