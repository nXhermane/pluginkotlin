
import ExtractData from './dataModel/extractDataInArray.js';

export default class Extraction {
	constructor() {}
	async extract(astTree) {
		this.ExtractData = new ExtractData();
		await this.ExtractData.extractClassArray(astTree.visitor.classDeclarationInfo);
		await this.ExtractData.extractFunctionArray(astTree.visitor.functionDeclarationInfo);
		await this.ExtractData.extractVariableArray(astTree.visitor.variableDeclarationInfo);
		await this.ExtractData.extractImportArray(astTree.visitor.importInfo);
		return this.ExtractData.data
	}
}