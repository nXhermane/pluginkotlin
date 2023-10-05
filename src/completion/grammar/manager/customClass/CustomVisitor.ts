import { KotlinParserVisitor } from './../../antlr4_res/KotlinParserVisitor';
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
  
// Import des contextes
import { KotlinFileContext } from './../../antlr4_res/KotlinParser';
import { ScriptContext } from './../../antlr4_res/KotlinParser';
import { FileAnnotationContext } from './../../antlr4_res/KotlinParser';
import { PackageHeaderContext } from './../../antlr4_res/KotlinParser';
import { ImportListContext } from './../../antlr4_res/KotlinParser';
import { ImportHeaderContext } from './../../antlr4_res/KotlinParser';
import { ImportAliasContext } from './../../antlr4_res/KotlinParser';
import { TopLevelObjectContext } from './../../antlr4_res/KotlinParser';
import { ClassDeclarationContext } from './../../antlr4_res/KotlinParser';
import { PrimaryConstructorContext } from './../../antlr4_res/KotlinParser';
import { ClassParametersContext } from './../../antlr4_res/KotlinParser';
import { ClassParameterContext } from './../../antlr4_res/KotlinParser';
import { DelegationSpecifiersContext } from './../../antlr4_res/KotlinParser';
import { AnnotatedDelegationSpecifierContext } from './../../antlr4_res/KotlinParser';
import { DelegationSpecifierContext } from './../../antlr4_res/KotlinParser';
import { ConstructorInvocationContext } from './../../antlr4_res/KotlinParser';
import { ExplicitDelegationContext } from './../../antlr4_res/KotlinParser';
import { ClassBodyContext } from './../../antlr4_res/KotlinParser';
import { ClassMemberDeclarationsContext } from './../../antlr4_res/KotlinParser';
import { ClassMemberDeclarationContext } from './../../antlr4_res/KotlinParser';
import { AnonymousInitializerContext } from './../../antlr4_res/KotlinParser';
import { SecondaryConstructorContext } from './../../antlr4_res/KotlinParser';
import { ConstructorDelegationCallContext } from './../../antlr4_res/KotlinParser';
import { EnumClassBodyContext } from './../../antlr4_res/KotlinParser';
import { EnumEntriesContext } from './../../antlr4_res/KotlinParser';
import { EnumEntryContext } from './../../antlr4_res/KotlinParser';
import { FunctionDeclarationContext } from './../../antlr4_res/KotlinParser';
import { FunctionValueParametersContext } from './../../antlr4_res/KotlinParser';
import { FunctionValueParameterContext } from './../../antlr4_res/KotlinParser';
import { ParameterContext } from './../../antlr4_res/KotlinParser';
import { SetterParameterContext } from './../../antlr4_res/KotlinParser';
import { FunctionBodyContext } from './../../antlr4_res/KotlinParser';
import { ObjectDeclarationContext } from './../../antlr4_res/KotlinParser';
import { CompanionObjectContext } from './../../antlr4_res/KotlinParser';
import { PropertyDeclarationContext } from './../../antlr4_res/KotlinParser';
import { MultiVariableDeclarationContext } from './../../antlr4_res/KotlinParser';
import { VariableDeclarationContext } from './../../antlr4_res/KotlinParser';
import { PropertyDelegateContext } from './../../antlr4_res/KotlinParser';
import { GetterContext } from './../../antlr4_res/KotlinParser';
import { SetterContext } from './../../antlr4_res/KotlinParser';
import { TypeAliasContext } from './../../antlr4_res/KotlinParser';
import { TypeParametersContext } from './../../antlr4_res/KotlinParser';
import { TypeParameterContext } from './../../antlr4_res/KotlinParser';
import { TypeParameterModifiersContext } from './../../antlr4_res/KotlinParser';
import { TypeParameterModifierContext } from './../../antlr4_res/KotlinParser';
import { Type_Context } from './../../antlr4_res/KotlinParser';
import { TypeModifiersContext } from './../../antlr4_res/KotlinParser';
import { TypeModifierContext } from './../../antlr4_res/KotlinParser';
import { ParenthesizedTypeContext } from './../../antlr4_res/KotlinParser';
import { NullableTypeContext } from './../../antlr4_res/KotlinParser';
import { TypeReferenceContext } from './../../antlr4_res/KotlinParser';
import { FunctionTypeContext } from './../../antlr4_res/KotlinParser';
import { ReceiverTypeContext } from './../../antlr4_res/KotlinParser';
import { UserTypeContext } from './../../antlr4_res/KotlinParser';
import { ParenthesizedUserTypeContext } from './../../antlr4_res/KotlinParser';
import { SimpleUserTypeContext } from './../../antlr4_res/KotlinParser';
import { FunctionTypeParametersContext } from './../../antlr4_res/KotlinParser';
import { TypeConstraintsContext } from './../../antlr4_res/KotlinParser';
import { TypeConstraintContext } from './../../antlr4_res/KotlinParser';
import { BlockContext } from './../../antlr4_res/KotlinParser';
import { StatementsContext } from './../../antlr4_res/KotlinParser';
import { StatementContext } from './../../antlr4_res/KotlinParser';
import { DeclarationContext } from './../../antlr4_res/KotlinParser';
import { AssignmentContext } from './../../antlr4_res/KotlinParser';
import { ExpressionContext } from './../../antlr4_res/KotlinParser';
import { DisjunctionContext } from './../../antlr4_res/KotlinParser';
import { ConjunctionContext } from './../../antlr4_res/KotlinParser';
import { EqualityContext } from './../../antlr4_res/KotlinParser';
import { ComparisonContext } from './../../antlr4_res/KotlinParser';
import { InfixOperationContext } from './../../antlr4_res/KotlinParser';
import { ElvisExpressionContext } from './../../antlr4_res/KotlinParser';
import { InfixFunctionCallContext } from './../../antlr4_res/KotlinParser';
import { RangeExpressionContext } from './../../antlr4_res/KotlinParser';
import { AdditiveExpressionContext } from './../../antlr4_res/KotlinParser';
import { MultiplicativeExpressionContext } from './../../antlr4_res/KotlinParser';
import { AsExpressionContext } from './../../antlr4_res/KotlinParser';
import { PrefixUnaryExpressionContext } from './../../antlr4_res/KotlinParser';
import { UnaryPrefixContext } from './../../antlr4_res/KotlinParser';
import { PostfixUnaryExpressionContext } from './../../antlr4_res/KotlinParser';
import { PostfixUnarySuffixContext } from './../../antlr4_res/KotlinParser';
import { DirectlyAssignableExpressionContext } from './../../antlr4_res/KotlinParser';
import { AssignableExpressionContext } from './../../antlr4_res/KotlinParser';
import { AssignableSuffixContext } from './../../antlr4_res/KotlinParser';
import { IndexingSuffixContext } from './../../antlr4_res/KotlinParser';
import { NavigationSuffixContext } from './../../antlr4_res/KotlinParser';
import { CallSuffixContext } from './../../antlr4_res/KotlinParser';
import { AnnotatedLambdaContext } from './../../antlr4_res/KotlinParser';
import { ValueArgumentsContext } from './../../antlr4_res/KotlinParser';
import { TypeArgumentsContext } from './../../antlr4_res/KotlinParser';
import { TypeProjectionContext } from './../../antlr4_res/KotlinParser';
import { TypeProjectionModifiersContext } from './../../antlr4_res/KotlinParser';
import { TypeProjectionModifierContext } from './../../antlr4_res/KotlinParser';
import { ValueArgumentContext } from './../../antlr4_res/KotlinParser';
import { PrimaryExpressionContext } from './../../antlr4_res/KotlinParser';
import { ParenthesizedExpressionContext } from './../../antlr4_res/KotlinParser';
import { CollectionLiteralContext } from './../../antlr4_res/KotlinParser';
import { LiteralConstantContext } from './../../antlr4_res/KotlinParser';
import { StringLiteralContext } from './../../antlr4_res/KotlinParser';
import { LineStringLiteralContext } from './../../antlr4_res/KotlinParser';
import { MultiLineStringLiteralContext } from './../../antlr4_res/KotlinParser';
import { LineStringContentContext } from './../../antlr4_res/KotlinParser';
import { LineStringExpressionContext } from './../../antlr4_res/KotlinParser';
import { MultiLineStringContentContext } from './../../antlr4_res/KotlinParser';
import { MultiLineStringExpressionContext } from './../../antlr4_res/KotlinParser';
import { LambdaLiteralContext } from './../../antlr4_res/KotlinParser';
import { LambdaParametersContext } from './../../antlr4_res/KotlinParser';
import { LambdaParameterContext } from './../../antlr4_res/KotlinParser';
import { AnonymousFunctionContext } from './../../antlr4_res/KotlinParser';
import { FunctionLiteralContext } from './../../antlr4_res/KotlinParser';
import { ObjectLiteralContext } from './../../antlr4_res/KotlinParser';
import { ThisExpressionContext } from './../../antlr4_res/KotlinParser';
import { SuperExpressionContext } from './../../antlr4_res/KotlinParser';
import { ControlStructureBodyContext } from './../../antlr4_res/KotlinParser';
import { IfExpressionContext } from './../../antlr4_res/KotlinParser';
import { WhenExpressionContext } from './../../antlr4_res/KotlinParser';
import { WhenEntryContext } from './../../antlr4_res/KotlinParser';
import { WhenConditionContext } from './../../antlr4_res/KotlinParser';
import { RangeTestContext } from './../../antlr4_res/KotlinParser';
import { TypeTestContext } from './../../antlr4_res/KotlinParser';
import { TryExpressionContext } from './../../antlr4_res/KotlinParser';
import { CatchBlockContext } from './../../antlr4_res/KotlinParser';
import { FinallyBlockContext } from './../../antlr4_res/KotlinParser';
import { LoopStatementContext } from './../../antlr4_res/KotlinParser';
import { ForStatementContext } from './../../antlr4_res/KotlinParser';
import { WhileStatementContext } from './../../antlr4_res/KotlinParser';
import { DoWhileStatementContext } from './../../antlr4_res/KotlinParser';
import { JumpExpressionContext } from './../../antlr4_res/KotlinParser';
import { CallableReferenceContext } from './../../antlr4_res/KotlinParser';
import { AssignmentAndOperatorContext } from './../../antlr4_res/KotlinParser';
import { EqualityOperatorContext } from './../../antlr4_res/KotlinParser';
import { ComparisonOperatorContext } from './../../antlr4_res/KotlinParser';
import { InOperatorContext } from './../../antlr4_res/KotlinParser';
import { IsOperatorContext } from './../../antlr4_res/KotlinParser';
import { AdditiveOperatorContext } from './../../antlr4_res/KotlinParser';
import { MultiplicativeOperatorContext } from './../../antlr4_res/KotlinParser';
import { AsOperatorContext } from './../../antlr4_res/KotlinParser';
import { PrefixUnaryOperatorContext } from './../../antlr4_res/KotlinParser';
import { PostfixUnaryOperatorContext } from './../../antlr4_res/KotlinParser';
import { MemberAccessOperatorContext } from './../../antlr4_res/KotlinParser';
import { ModifiersContext } from './../../antlr4_res/KotlinParser';
import { ModifierContext } from './../../antlr4_res/KotlinParser';
import { ClassModifierContext } from './../../antlr4_res/KotlinParser';
import { MemberModifierContext } from './../../antlr4_res/KotlinParser';
import { VisibilityModifierContext } from './../../antlr4_res/KotlinParser';
import { VarianceModifierContext } from './../../antlr4_res/KotlinParser';
import { FunctionModifierContext } from './../../antlr4_res/KotlinParser';
import { PropertyModifierContext } from './../../antlr4_res/KotlinParser';
import { InheritanceModifierContext } from './../../antlr4_res/KotlinParser';
import { ParameterModifierContext } from './../../antlr4_res/KotlinParser';
import { ReificationModifierContext } from './../../antlr4_res/KotlinParser';
import { PlatformModifierContext } from './../../antlr4_res/KotlinParser';
import { LabelContext } from './../../antlr4_res/KotlinParser';
import { AnnotationContext } from './../../antlr4_res/KotlinParser';
import { SingleAnnotationContext } from './../../antlr4_res/KotlinParser';
import { MultiAnnotationContext } from './../../antlr4_res/KotlinParser';
import { AnnotationUseSiteTargetContext } from './../../antlr4_res/KotlinParser';
import { UnescapedAnnotationContext } from './../../antlr4_res/KotlinParser';
import { SimpleIdentifierContext } from './../../antlr4_res/KotlinParser';
import { IdentifierContext } from './../../antlr4_res/KotlinParser';
import { ShebangLineContext } from './../../antlr4_res/KotlinParser';
import { QuestContext } from './../../antlr4_res/KotlinParser';
import { ElvisContext } from './../../antlr4_res/KotlinParser';
import { SafeNavContext } from './../../antlr4_res/KotlinParser';
import { ExclContext } from './../../antlr4_res/KotlinParser';
import { SemiContext } from './../../antlr4_res/KotlinParser';
import { SemisContext } from './../../antlr4_res/KotlinParser';


// Import d'une structure de données

import { ClassStructure, Parameter, ImportStructure , FunctionStructure , PropertyStructure } from './dataStructure';

export default class CustomVisitor extends AbstractParseTreeVisitor<number> implements KotlinParserVisitor<number> {
    private currentClass: ClassStructure;
    private currentFunction: FunctionStructure;
    private currentProperty: PropertyStructure;
    private classStack: ClassStructure[] = [];
    private functionStack: FunctionStructure[] = [];
    public importIdentifierInfo: ImportStructure[] = [];
    public classDeclarationInfo: ClassStructure[] = [];
    public functionDeclarationInfo: FunctionStructure[] = [];
    public variableDeclarationInfo:PropertyStructure[]=[]

    defaultResult() {
        return 0;
    }

    aggregateResult(aggregate: number, nextResult: number) {
        return aggregate + nextResult;
    }

    visitImportList(ctx: ImportListContext): number {
        const importHeader = ctx.importHeader();
        importHeader.forEach(header => {
            const importOrigin = header.identifier().text;
            const importkeyword = importOrigin.split('.').filter(e => e !== "*");
            const importAlias = header.importAlias()?.text;
            const isAlias = importAlias ? true : false;
            const importObjet:ImportStructure=new ImportStructure(importkeyword)
            importObjet.isAlias=isAlias
            importObjet.importOrigin=importOrigin
            importObjet.importAlias=importAlias
            this.importIdentifierInfo.push(importObjet);
        });
        return this.visitReturn(ctx)
    };

    visitClassDeclaration(ctx: ClassDeclarationContext): number {
        const className = ctx.simpleIdentifier().text;
        console.log(className)
        let newClass: ClassStructure = new ClassStructure(className);
        this.currentClass ? this.currentClass?.body.classDeclaration.push(newClass) :
            this.classDeclarationInfo.push(newClass);
        this.currentClass = newClass;
        this.classStack.push(newClass);
        const result = this.visitReturn(ctx);
        this.classStack.pop();
        this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
        return result;
    }

    visitClassParameters(ctx: ClassParametersContext): number {
        ctx.classParameter().forEach(param => {
            const parameter: Parameter = new Parameter(param.simpleIdentifier().text)
            parameter.type=param.type_().text
            this.currentClass.parameters.push(parameter);
        });
        return this.visitReturn(ctx);
    }

    visitFunctionDeclaration(ctx: FunctionDeclarationContext): number {
        const functionName = ctx.simpleIdentifier().text;
        const newFunction: FunctionStructure = new FunctionStructure(functionName)
        this.currentFunction ? this.currentFunction.body.functionDeclaration.push(newFunction) : this.functionDeclarationInfo.push(newFunction);
        if (this.currentClass) {
            this.currentClass.body.functionDeclaration.push(newFunction);
        }
        this.currentFunction = newFunction;
        this.functionStack.push(newFunction);
        const result = this.visitReturn(ctx);
        this.functionStack.pop();
        this.currentFunction = this.functionStack.length > 0 ? this.functionStack[this.functionStack.length - 1] : null;
        return result;
    }

    visitFunctionValueParameters(ctx: FunctionValueParametersContext): number {
        var param = ctx.functionValueParameter();
        return this.visitReturn(ctx);
    }

    visitFunctionValueParameter(ctx: FunctionValueParameterContext): number {
        const paramName = ctx.parameter().simpleIdentifier().text;
        const paramType = ctx.parameter().type_().text;
        const newParam: Parameter = new Parameter(paramName)
        newParam.type=paramType
        if (this.currentFunction) {
            this.currentFunction.parameters.push(newParam);
        }
        return this.visitReturn(ctx);
    }

    visitPropertyDeclaration(ctx:PropertyDeclarationContext):number{
			const mutable=ctx.VAR()
			const isMutable=mutable? true : false
			this.currentProperty=new PropertyStructure('')
			this.currentProperty.isMutable=isMutable
			return this.visitReturn(ctx)
    }
    visitVariableDeclaration(ctx:VariableDeclarationContext):number{
		const variableName=ctx.simpleIdentifier().text
		const variableType=ctx.type_()?.text
		this.currentProperty.name=variableName
		this.currentProperty.type=variableType
		if(this.currentFunction) this.currentFunction.body.variableDeclaration.push(this.currentProperty)
		if (this.currentClass) this.currentClass.body.variableDeclaration.push(this.currentProperty)
		if(!this.currentFunction && !this.currentClass) this.variableDeclarationInfo.push(this.currentProperty)
		return this.visitReturn(ctx)
    }
    
    visitReturn(ctx) {
        return 1 + super.visitChildren(ctx);
    }
}