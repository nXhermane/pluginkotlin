export class Body {
	classDeclaration:ClassStructure[]
	functionDeclaration:FunctionStructure[]
	variableDeclaration:PropertyStructure[]
	constructor(){
		this.classDeclaration=[]
		this.functionDeclaration=[]
		this.variableDeclaration=[]
	}
}
export class ImportStructure{
	 importKeyword:string[]
	 importOrigin:string
	 isAlias:boolean
	 importAlias:string
	constructor(keywords:string[]){
		this.importKeyword=keywords
	}
}
export class ClassStructure {
	parameters:Parameter[]
	body:Body
    constructor(public name: string) {
        this.parameters = [];
        this.body=new Body()
    }
}
export class FunctionStructure{
	parameters:Parameter[]
	body:Body
	constructor(public name:string){
		this.parameters=[]
		this.body=new Body()
	}
}
export class PropertyStructure{
	type:string
	isMutable:boolean
	constructor(public name:string){}
}
export class Parameter{
	type:string
	constructor(public name:string){}
}