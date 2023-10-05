"use strict";
// Generated from res/KotlinParser.g4 by ANTLR 4.9.0-SNAPSHOT
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParenthesizedTypeContext = exports.TypeModifierContext = exports.TypeModifiersContext = exports.Type_Context = exports.TypeParameterModifierContext = exports.TypeParameterModifiersContext = exports.TypeParameterContext = exports.TypeParametersContext = exports.TypeAliasContext = exports.SetterContext = exports.GetterContext = exports.PropertyDelegateContext = exports.VariableDeclarationContext = exports.MultiVariableDeclarationContext = exports.PropertyDeclarationContext = exports.CompanionObjectContext = exports.ObjectDeclarationContext = exports.FunctionBodyContext = exports.SetterParameterContext = exports.ParameterContext = exports.FunctionValueParameterContext = exports.FunctionValueParametersContext = exports.FunctionDeclarationContext = exports.EnumEntryContext = exports.EnumEntriesContext = exports.EnumClassBodyContext = exports.ConstructorDelegationCallContext = exports.SecondaryConstructorContext = exports.AnonymousInitializerContext = exports.ClassMemberDeclarationContext = exports.ClassMemberDeclarationsContext = exports.ClassBodyContext = exports.ExplicitDelegationContext = exports.ConstructorInvocationContext = exports.DelegationSpecifierContext = exports.AnnotatedDelegationSpecifierContext = exports.DelegationSpecifiersContext = exports.ClassParameterContext = exports.ClassParametersContext = exports.PrimaryConstructorContext = exports.ClassDeclarationContext = exports.TopLevelObjectContext = exports.ImportAliasContext = exports.ImportHeaderContext = exports.ImportListContext = exports.PackageHeaderContext = exports.FileAnnotationContext = exports.ScriptContext = exports.KotlinFileContext = exports.KotlinParser = void 0;
exports.LineStringLiteralContext = exports.StringLiteralContext = exports.LiteralConstantContext = exports.CollectionLiteralContext = exports.ParenthesizedExpressionContext = exports.PrimaryExpressionContext = exports.ValueArgumentContext = exports.TypeProjectionModifierContext = exports.TypeProjectionModifiersContext = exports.TypeProjectionContext = exports.TypeArgumentsContext = exports.ValueArgumentsContext = exports.AnnotatedLambdaContext = exports.CallSuffixContext = exports.NavigationSuffixContext = exports.IndexingSuffixContext = exports.AssignableSuffixContext = exports.AssignableExpressionContext = exports.DirectlyAssignableExpressionContext = exports.PostfixUnarySuffixContext = exports.PostfixUnaryExpressionContext = exports.UnaryPrefixContext = exports.PrefixUnaryExpressionContext = exports.AsExpressionContext = exports.MultiplicativeExpressionContext = exports.AdditiveExpressionContext = exports.RangeExpressionContext = exports.InfixFunctionCallContext = exports.ElvisExpressionContext = exports.InfixOperationContext = exports.ComparisonContext = exports.EqualityContext = exports.ConjunctionContext = exports.DisjunctionContext = exports.ExpressionContext = exports.AssignmentContext = exports.DeclarationContext = exports.StatementContext = exports.StatementsContext = exports.BlockContext = exports.TypeConstraintContext = exports.TypeConstraintsContext = exports.FunctionTypeParametersContext = exports.SimpleUserTypeContext = exports.ParenthesizedUserTypeContext = exports.UserTypeContext = exports.ReceiverTypeContext = exports.FunctionTypeContext = exports.TypeReferenceContext = exports.NullableTypeContext = void 0;
exports.ParameterModifierContext = exports.InheritanceModifierContext = exports.PropertyModifierContext = exports.FunctionModifierContext = exports.VarianceModifierContext = exports.VisibilityModifierContext = exports.MemberModifierContext = exports.ClassModifierContext = exports.ModifierContext = exports.ModifiersContext = exports.MemberAccessOperatorContext = exports.PostfixUnaryOperatorContext = exports.PrefixUnaryOperatorContext = exports.AsOperatorContext = exports.MultiplicativeOperatorContext = exports.AdditiveOperatorContext = exports.IsOperatorContext = exports.InOperatorContext = exports.ComparisonOperatorContext = exports.EqualityOperatorContext = exports.AssignmentAndOperatorContext = exports.CallableReferenceContext = exports.JumpExpressionContext = exports.DoWhileStatementContext = exports.WhileStatementContext = exports.ForStatementContext = exports.LoopStatementContext = exports.FinallyBlockContext = exports.CatchBlockContext = exports.TryExpressionContext = exports.TypeTestContext = exports.RangeTestContext = exports.WhenConditionContext = exports.WhenEntryContext = exports.WhenExpressionContext = exports.IfExpressionContext = exports.ControlStructureBodyContext = exports.SuperExpressionContext = exports.ThisExpressionContext = exports.ObjectLiteralContext = exports.FunctionLiteralContext = exports.AnonymousFunctionContext = exports.LambdaParameterContext = exports.LambdaParametersContext = exports.LambdaLiteralContext = exports.MultiLineStringExpressionContext = exports.MultiLineStringContentContext = exports.LineStringExpressionContext = exports.LineStringContentContext = exports.MultiLineStringLiteralContext = void 0;
exports.SemisContext = exports.SemiContext = exports.ExclContext = exports.SafeNavContext = exports.ElvisContext = exports.QuestContext = exports.ShebangLineContext = exports.IdentifierContext = exports.SimpleIdentifierContext = exports.UnescapedAnnotationContext = exports.AnnotationUseSiteTargetContext = exports.MultiAnnotationContext = exports.SingleAnnotationContext = exports.AnnotationContext = exports.LabelContext = exports.PlatformModifierContext = exports.ReificationModifierContext = void 0;
const ATN_1 = require("antlr4ts/atn/ATN");
const ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
const FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
const NoViableAltException_1 = require("antlr4ts/NoViableAltException");
const Parser_1 = require("antlr4ts/Parser");
const ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
const ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
const RecognitionException_1 = require("antlr4ts/RecognitionException");
const Token_1 = require("antlr4ts/Token");
const VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
const Utils = __importStar(require("antlr4ts/misc/Utils"));
class KotlinParser extends Parser_1.Parser {
    // @Override
    // @NotNull
    get vocabulary() {
        return KotlinParser.VOCABULARY;
    }
    // tslint:enable:no-trailing-whitespace
    // @Override
    get grammarFileName() { return "KotlinParser.g4"; }
    // @Override
    get ruleNames() { return KotlinParser.ruleNames; }
    // @Override
    get serializedATN() { return KotlinParser._serializedATN; }
    createFailedPredicateException(predicate, message) {
        return new FailedPredicateException_1.FailedPredicateException(this, predicate, message);
    }
    constructor(input) {
        super(input);
        this._interp = new ParserATNSimulator_1.ParserATNSimulator(KotlinParser._ATN, this);
    }
    // @RuleVersion(0)
    kotlinFile() {
        let _localctx = new KotlinFileContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, KotlinParser.RULE_kotlinFile);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 333;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.ShebangLine) {
                    {
                        this.state = 332;
                        this.shebangLine();
                    }
                }
                this.state = 338;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 335;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 340;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
                }
                this.state = 344;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT_FILE) {
                    {
                        {
                            this.state = 341;
                            this.fileAnnotation();
                        }
                    }
                    this.state = 346;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 347;
                this.packageHeader();
                this.state = 348;
                this.importList();
                this.state = 352;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        {
                            this.state = 349;
                            this.topLevelObject();
                        }
                    }
                    this.state = 354;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 355;
                this.match(KotlinParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    script() {
        let _localctx = new ScriptContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, KotlinParser.RULE_script);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 358;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.ShebangLine) {
                    {
                        this.state = 357;
                        this.shebangLine();
                    }
                }
                this.state = 363;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 360;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 365;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
                }
                this.state = 369;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT_FILE) {
                    {
                        {
                            this.state = 366;
                            this.fileAnnotation();
                        }
                    }
                    this.state = 371;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 372;
                this.packageHeader();
                this.state = 373;
                this.importList();
                this.state = 379;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.NL) | (1 << KotlinParser.LPAREN) | (1 << KotlinParser.LSQUARE) | (1 << KotlinParser.LCURL) | (1 << KotlinParser.ADD) | (1 << KotlinParser.SUB) | (1 << KotlinParser.INCR) | (1 << KotlinParser.DECR) | (1 << KotlinParser.EXCL_WS) | (1 << KotlinParser.EXCL_NO_WS))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (KotlinParser.COLONCOLON - 37)) | (1 << (KotlinParser.AT - 37)) | (1 << (KotlinParser.RETURN_AT - 37)) | (1 << (KotlinParser.CONTINUE_AT - 37)) | (1 << (KotlinParser.BREAK_AT - 37)) | (1 << (KotlinParser.THIS_AT - 37)) | (1 << (KotlinParser.SUPER_AT - 37)) | (1 << (KotlinParser.IMPORT - 37)) | (1 << (KotlinParser.CLASS - 37)) | (1 << (KotlinParser.INTERFACE - 37)) | (1 << (KotlinParser.FUN - 37)) | (1 << (KotlinParser.OBJECT - 37)) | (1 << (KotlinParser.VAL - 37)) | (1 << (KotlinParser.VAR - 37)) | (1 << (KotlinParser.TYPE_ALIAS - 37)) | (1 << (KotlinParser.CONSTRUCTOR - 37)))) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & ((1 << (KotlinParser.BY - 69)) | (1 << (KotlinParser.COMPANION - 69)) | (1 << (KotlinParser.INIT - 69)) | (1 << (KotlinParser.THIS - 69)) | (1 << (KotlinParser.SUPER - 69)) | (1 << (KotlinParser.WHERE - 69)) | (1 << (KotlinParser.IF - 69)) | (1 << (KotlinParser.WHEN - 69)) | (1 << (KotlinParser.TRY - 69)) | (1 << (KotlinParser.CATCH - 69)) | (1 << (KotlinParser.FINALLY - 69)) | (1 << (KotlinParser.FOR - 69)) | (1 << (KotlinParser.DO - 69)) | (1 << (KotlinParser.WHILE - 69)) | (1 << (KotlinParser.THROW - 69)) | (1 << (KotlinParser.RETURN - 69)) | (1 << (KotlinParser.CONTINUE - 69)) | (1 << (KotlinParser.BREAK - 69)) | (1 << (KotlinParser.OUT - 69)) | (1 << (KotlinParser.GETTER - 69)) | (1 << (KotlinParser.SETTER - 69)) | (1 << (KotlinParser.DYNAMIC - 69)) | (1 << (KotlinParser.AT_FIELD - 69)) | (1 << (KotlinParser.AT_PROPERTY - 69)))) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & ((1 << (KotlinParser.AT_GET - 101)) | (1 << (KotlinParser.AT_SET - 101)) | (1 << (KotlinParser.AT_RECEIVER - 101)) | (1 << (KotlinParser.AT_PARAM - 101)) | (1 << (KotlinParser.AT_SETPARAM - 101)) | (1 << (KotlinParser.AT_DELEGATE - 101)) | (1 << (KotlinParser.PUBLIC - 101)) | (1 << (KotlinParser.PRIVATE - 101)) | (1 << (KotlinParser.PROTECTED - 101)) | (1 << (KotlinParser.INTERNAL - 101)) | (1 << (KotlinParser.ENUM - 101)) | (1 << (KotlinParser.SEALED - 101)) | (1 << (KotlinParser.ANNOTATION - 101)) | (1 << (KotlinParser.DATA - 101)) | (1 << (KotlinParser.INNER - 101)) | (1 << (KotlinParser.TAILREC - 101)) | (1 << (KotlinParser.OPERATOR - 101)) | (1 << (KotlinParser.INLINE - 101)) | (1 << (KotlinParser.INFIX - 101)) | (1 << (KotlinParser.EXTERNAL - 101)) | (1 << (KotlinParser.SUSPEND - 101)) | (1 << (KotlinParser.OVERRIDE - 101)) | (1 << (KotlinParser.ABSTRACT - 101)) | (1 << (KotlinParser.FINAL - 101)) | (1 << (KotlinParser.OPEN - 101)) | (1 << (KotlinParser.CONST - 101)) | (1 << (KotlinParser.LATEINIT - 101)) | (1 << (KotlinParser.VARARG - 101)) | (1 << (KotlinParser.NOINLINE - 101)) | (1 << (KotlinParser.CROSSINLINE - 101)) | (1 << (KotlinParser.REIFIED - 101)) | (1 << (KotlinParser.EXPECT - 101)))) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (KotlinParser.ACTUAL - 133)) | (1 << (KotlinParser.QUOTE_OPEN - 133)) | (1 << (KotlinParser.TRIPLE_QUOTE_OPEN - 133)) | (1 << (KotlinParser.RealLiteral - 133)) | (1 << (KotlinParser.LongLiteral - 133)) | (1 << (KotlinParser.IntegerLiteral - 133)) | (1 << (KotlinParser.HexLiteral - 133)) | (1 << (KotlinParser.BinLiteral - 133)) | (1 << (KotlinParser.BooleanLiteral - 133)) | (1 << (KotlinParser.NullLiteral - 133)) | (1 << (KotlinParser.Identifier - 133)) | (1 << (KotlinParser.IdentifierAt - 133)) | (1 << (KotlinParser.CharacterLiteral - 133)))) !== 0)) {
                    {
                        {
                            this.state = 374;
                            this.statement();
                            this.state = 375;
                            this.semi();
                        }
                    }
                    this.state = 381;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 382;
                this.match(KotlinParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    fileAnnotation() {
        let _localctx = new FileAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 4, KotlinParser.RULE_fileAnnotation);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 384;
                this.match(KotlinParser.AT_FILE);
                this.state = 388;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 385;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 390;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 391;
                this.match(KotlinParser.COLON);
                this.state = 395;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 392;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 397;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 407;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.LSQUARE:
                        {
                            this.state = 398;
                            this.match(KotlinParser.LSQUARE);
                            this.state = 400;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 399;
                                        this.unescapedAnnotation();
                                    }
                                }
                                this.state = 402;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (KotlinParser.IMPORT - 60)) | (1 << (KotlinParser.CONSTRUCTOR - 60)) | (1 << (KotlinParser.BY - 60)) | (1 << (KotlinParser.COMPANION - 60)) | (1 << (KotlinParser.INIT - 60)) | (1 << (KotlinParser.WHERE - 60)) | (1 << (KotlinParser.CATCH - 60)) | (1 << (KotlinParser.FINALLY - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (KotlinParser.OUT - 94)) | (1 << (KotlinParser.GETTER - 94)) | (1 << (KotlinParser.SETTER - 94)) | (1 << (KotlinParser.DYNAMIC - 94)) | (1 << (KotlinParser.PUBLIC - 94)) | (1 << (KotlinParser.PRIVATE - 94)) | (1 << (KotlinParser.PROTECTED - 94)) | (1 << (KotlinParser.INTERNAL - 94)) | (1 << (KotlinParser.ENUM - 94)) | (1 << (KotlinParser.SEALED - 94)) | (1 << (KotlinParser.ANNOTATION - 94)) | (1 << (KotlinParser.DATA - 94)) | (1 << (KotlinParser.INNER - 94)) | (1 << (KotlinParser.TAILREC - 94)) | (1 << (KotlinParser.OPERATOR - 94)) | (1 << (KotlinParser.INLINE - 94)) | (1 << (KotlinParser.INFIX - 94)) | (1 << (KotlinParser.EXTERNAL - 94)) | (1 << (KotlinParser.SUSPEND - 94)) | (1 << (KotlinParser.OVERRIDE - 94)) | (1 << (KotlinParser.ABSTRACT - 94)) | (1 << (KotlinParser.FINAL - 94)) | (1 << (KotlinParser.OPEN - 94)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (KotlinParser.CONST - 126)) | (1 << (KotlinParser.LATEINIT - 126)) | (1 << (KotlinParser.VARARG - 126)) | (1 << (KotlinParser.NOINLINE - 126)) | (1 << (KotlinParser.CROSSINLINE - 126)) | (1 << (KotlinParser.REIFIED - 126)) | (1 << (KotlinParser.EXPECT - 126)) | (1 << (KotlinParser.ACTUAL - 126)) | (1 << (KotlinParser.Identifier - 126)))) !== 0));
                            this.state = 404;
                            this.match(KotlinParser.RSQUARE);
                        }
                        break;
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                    case KotlinParser.Identifier:
                        {
                            this.state = 406;
                            this.unescapedAnnotation();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 412;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 409;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 414;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    packageHeader() {
        let _localctx = new PackageHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, KotlinParser.RULE_packageHeader);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 420;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.PACKAGE) {
                    {
                        this.state = 415;
                        this.match(KotlinParser.PACKAGE);
                        this.state = 416;
                        this.identifier();
                        this.state = 418;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
                            case 1:
                                {
                                    this.state = 417;
                                    this.semi();
                                }
                                break;
                        }
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importList() {
        let _localctx = new ImportListContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, KotlinParser.RULE_importList);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 425;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 422;
                                this.importHeader();
                            }
                        }
                    }
                    this.state = 427;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importHeader() {
        let _localctx = new ImportHeaderContext(this._ctx, this.state);
        this.enterRule(_localctx, 10, KotlinParser.RULE_importHeader);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 428;
                this.match(KotlinParser.IMPORT);
                this.state = 429;
                this.identifier();
                this.state = 433;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.DOT:
                        {
                            this.state = 430;
                            this.match(KotlinParser.DOT);
                            this.state = 431;
                            this.match(KotlinParser.MULT);
                        }
                        break;
                    case KotlinParser.AS:
                        {
                            this.state = 432;
                            this.importAlias();
                        }
                        break;
                    case KotlinParser.EOF:
                    case KotlinParser.NL:
                    case KotlinParser.LPAREN:
                    case KotlinParser.LSQUARE:
                    case KotlinParser.LCURL:
                    case KotlinParser.ADD:
                    case KotlinParser.SUB:
                    case KotlinParser.INCR:
                    case KotlinParser.DECR:
                    case KotlinParser.EXCL_WS:
                    case KotlinParser.EXCL_NO_WS:
                    case KotlinParser.SEMICOLON:
                    case KotlinParser.COLONCOLON:
                    case KotlinParser.AT:
                    case KotlinParser.RETURN_AT:
                    case KotlinParser.CONTINUE_AT:
                    case KotlinParser.BREAK_AT:
                    case KotlinParser.THIS_AT:
                    case KotlinParser.SUPER_AT:
                    case KotlinParser.IMPORT:
                    case KotlinParser.CLASS:
                    case KotlinParser.INTERFACE:
                    case KotlinParser.FUN:
                    case KotlinParser.OBJECT:
                    case KotlinParser.VAL:
                    case KotlinParser.VAR:
                    case KotlinParser.TYPE_ALIAS:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.THIS:
                    case KotlinParser.SUPER:
                    case KotlinParser.WHERE:
                    case KotlinParser.IF:
                    case KotlinParser.WHEN:
                    case KotlinParser.TRY:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.FOR:
                    case KotlinParser.DO:
                    case KotlinParser.WHILE:
                    case KotlinParser.THROW:
                    case KotlinParser.RETURN:
                    case KotlinParser.CONTINUE:
                    case KotlinParser.BREAK:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.AT_FIELD:
                    case KotlinParser.AT_PROPERTY:
                    case KotlinParser.AT_GET:
                    case KotlinParser.AT_SET:
                    case KotlinParser.AT_RECEIVER:
                    case KotlinParser.AT_PARAM:
                    case KotlinParser.AT_SETPARAM:
                    case KotlinParser.AT_DELEGATE:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                    case KotlinParser.QUOTE_OPEN:
                    case KotlinParser.TRIPLE_QUOTE_OPEN:
                    case KotlinParser.RealLiteral:
                    case KotlinParser.LongLiteral:
                    case KotlinParser.IntegerLiteral:
                    case KotlinParser.HexLiteral:
                    case KotlinParser.BinLiteral:
                    case KotlinParser.BooleanLiteral:
                    case KotlinParser.NullLiteral:
                    case KotlinParser.Identifier:
                    case KotlinParser.IdentifierAt:
                    case KotlinParser.CharacterLiteral:
                        break;
                    default:
                        break;
                }
                this.state = 436;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 17, this._ctx)) {
                    case 1:
                        {
                            this.state = 435;
                            this.semi();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    importAlias() {
        let _localctx = new ImportAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 12, KotlinParser.RULE_importAlias);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 438;
                this.match(KotlinParser.AS);
                this.state = 439;
                this.simpleIdentifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    topLevelObject() {
        let _localctx = new TopLevelObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 14, KotlinParser.RULE_topLevelObject);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 441;
                this.declaration();
                this.state = 443;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
                    case 1:
                        {
                            this.state = 442;
                            this.semis();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classDeclaration() {
        let _localctx = new ClassDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 16, KotlinParser.RULE_classDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 446;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 445;
                        this.modifiers();
                    }
                }
                this.state = 448;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.CLASS || _la === KotlinParser.INTERFACE)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 452;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 449;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 454;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 455;
                this.simpleIdentifier();
                this.state = 463;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
                    case 1:
                        {
                            this.state = 459;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 456;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 461;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 462;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 472;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
                    case 1:
                        {
                            this.state = 468;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 465;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 470;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 471;
                            this.primaryConstructor();
                        }
                        break;
                }
                this.state = 488;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
                    case 1:
                        {
                            this.state = 477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 474;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 479;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 480;
                            this.match(KotlinParser.COLON);
                            this.state = 484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 481;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 486;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
                            }
                            this.state = 487;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 497;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 29, this._ctx)) {
                    case 1:
                        {
                            this.state = 493;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 490;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 495;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 496;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 513;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 32, this._ctx)) {
                    case 1:
                        {
                            this.state = 502;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 499;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 504;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 505;
                            this.classBody();
                        }
                        break;
                    case 2:
                        {
                            this.state = 509;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 506;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 511;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 512;
                            this.enumClassBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primaryConstructor() {
        let _localctx = new PrimaryConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 18, KotlinParser.RULE_primaryConstructor);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 525;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || _la === KotlinParser.CONSTRUCTOR || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 516;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                            {
                                this.state = 515;
                                this.modifiers();
                            }
                        }
                        this.state = 518;
                        this.match(KotlinParser.CONSTRUCTOR);
                        this.state = 522;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 519;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 524;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                }
                this.state = 527;
                this.classParameters();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classParameters() {
        let _localctx = new ClassParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 20, KotlinParser.RULE_classParameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 529;
                this.match(KotlinParser.LPAREN);
                this.state = 533;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 530;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 535;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 36, this._ctx);
                }
                this.state = 556;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
                    case 1:
                        {
                            this.state = 536;
                            this.classParameter();
                            this.state = 553;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 540;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                            while (_la === KotlinParser.NL) {
                                                {
                                                    {
                                                        this.state = 537;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                                this.state = 542;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                            }
                                            this.state = 543;
                                            this.match(KotlinParser.COMMA);
                                            this.state = 547;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                                if (_alt === 1) {
                                                    {
                                                        {
                                                            this.state = 544;
                                                            this.match(KotlinParser.NL);
                                                        }
                                                    }
                                                }
                                                this.state = 549;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
                                            }
                                            this.state = 550;
                                            this.classParameter();
                                        }
                                    }
                                }
                                this.state = 555;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 39, this._ctx);
                            }
                        }
                        break;
                }
                this.state = 561;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 558;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 563;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 565;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 564;
                        this.match(KotlinParser.COMMA);
                    }
                }
                this.state = 567;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classParameter() {
        let _localctx = new ClassParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 22, KotlinParser.RULE_classParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 570;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 43, this._ctx)) {
                    case 1:
                        {
                            this.state = 569;
                            this.modifiers();
                        }
                        break;
                }
                this.state = 573;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.VAL || _la === KotlinParser.VAR) {
                    {
                        this.state = 572;
                        _la = this._input.LA(1);
                        if (!(_la === KotlinParser.VAL || _la === KotlinParser.VAR)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                    }
                }
                this.state = 578;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 575;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 580;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 581;
                this.simpleIdentifier();
                this.state = 582;
                this.match(KotlinParser.COLON);
                this.state = 586;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 583;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 588;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 589;
                this.type_();
                this.state = 604;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 49, this._ctx)) {
                    case 1:
                        {
                            this.state = 593;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 590;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 595;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 596;
                            this.match(KotlinParser.ASSIGNMENT);
                            this.state = 600;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 597;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 602;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
                            }
                            this.state = 603;
                            this.expression();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    delegationSpecifiers() {
        let _localctx = new DelegationSpecifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 24, KotlinParser.RULE_delegationSpecifiers);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 606;
                this.annotatedDelegationSpecifier();
                this.state = 623;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 610;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 607;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 612;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 613;
                                this.match(KotlinParser.COMMA);
                                this.state = 617;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 614;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 619;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
                                }
                                this.state = 620;
                                this.annotatedDelegationSpecifier();
                            }
                        }
                    }
                    this.state = 625;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 52, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotatedDelegationSpecifier() {
        let _localctx = new AnnotatedDelegationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 26, KotlinParser.RULE_annotatedDelegationSpecifier);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 629;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 626;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 631;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 53, this._ctx);
                }
                this.state = 635;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 632;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 637;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 638;
                this.delegationSpecifier();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    delegationSpecifier() {
        let _localctx = new DelegationSpecifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 28, KotlinParser.RULE_delegationSpecifier);
        try {
            this.state = 644;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 55, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 640;
                        this.constructorInvocation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 641;
                        this.explicitDelegation();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 642;
                        this.userType();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 643;
                        this.functionType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constructorInvocation() {
        let _localctx = new ConstructorInvocationContext(this._ctx, this.state);
        this.enterRule(_localctx, 30, KotlinParser.RULE_constructorInvocation);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 646;
                this.userType();
                this.state = 647;
                this.valueArguments();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    explicitDelegation() {
        let _localctx = new ExplicitDelegationContext(this._ctx, this.state);
        this.enterRule(_localctx, 32, KotlinParser.RULE_explicitDelegation);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 651;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 56, this._ctx)) {
                    case 1:
                        {
                            this.state = 649;
                            this.userType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 650;
                            this.functionType();
                        }
                        break;
                }
                this.state = 656;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 653;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 658;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 659;
                this.match(KotlinParser.BY);
                this.state = 663;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 660;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 665;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 58, this._ctx);
                }
                this.state = 666;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classBody() {
        let _localctx = new ClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 34, KotlinParser.RULE_classBody);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 668;
                this.match(KotlinParser.LCURL);
                this.state = 672;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 669;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 674;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 59, this._ctx);
                }
                this.state = 675;
                this.classMemberDeclarations();
                this.state = 679;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 676;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 681;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 682;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classMemberDeclarations() {
        let _localctx = new ClassMemberDeclarationsContext(this._ctx, this.state);
        this.enterRule(_localctx, 36, KotlinParser.RULE_classMemberDeclarations);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 690;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.CLASS - 40)) | (1 << (KotlinParser.INTERFACE - 40)) | (1 << (KotlinParser.FUN - 40)) | (1 << (KotlinParser.OBJECT - 40)) | (1 << (KotlinParser.VAL - 40)) | (1 << (KotlinParser.VAR - 40)) | (1 << (KotlinParser.TYPE_ALIAS - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        {
                            this.state = 684;
                            this.classMemberDeclaration();
                            this.state = 686;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 61, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 685;
                                        this.semis();
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 692;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classMemberDeclaration() {
        let _localctx = new ClassMemberDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 38, KotlinParser.RULE_classMemberDeclaration);
        try {
            this.state = 697;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 63, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 693;
                        this.declaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 694;
                        this.companionObject();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 695;
                        this.anonymousInitializer();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 696;
                        this.secondaryConstructor();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    anonymousInitializer() {
        let _localctx = new AnonymousInitializerContext(this._ctx, this.state);
        this.enterRule(_localctx, 40, KotlinParser.RULE_anonymousInitializer);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 699;
                this.match(KotlinParser.INIT);
                this.state = 703;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 700;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 705;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 706;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    secondaryConstructor() {
        let _localctx = new SecondaryConstructorContext(this._ctx, this.state);
        this.enterRule(_localctx, 42, KotlinParser.RULE_secondaryConstructor);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 709;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 708;
                        this.modifiers();
                    }
                }
                this.state = 711;
                this.match(KotlinParser.CONSTRUCTOR);
                this.state = 715;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 712;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 717;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 718;
                this.functionValueParameters();
                this.state = 733;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
                    case 1:
                        {
                            this.state = 722;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 719;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 724;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 725;
                            this.match(KotlinParser.COLON);
                            this.state = 729;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 726;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 731;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 732;
                            this.constructorDelegationCall();
                        }
                        break;
                }
                this.state = 738;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 735;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 740;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 70, this._ctx);
                }
                this.state = 742;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LCURL) {
                    {
                        this.state = 741;
                        this.block();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    constructorDelegationCall() {
        let _localctx = new ConstructorDelegationCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 44, KotlinParser.RULE_constructorDelegationCall);
        let _la;
        try {
            this.state = 760;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.THIS:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 744;
                        this.match(KotlinParser.THIS);
                        this.state = 748;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 745;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 750;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 751;
                        this.valueArguments();
                    }
                    break;
                case KotlinParser.SUPER:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 752;
                        this.match(KotlinParser.SUPER);
                        this.state = 756;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 753;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 758;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 759;
                        this.valueArguments();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumClassBody() {
        let _localctx = new EnumClassBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 46, KotlinParser.RULE_enumClassBody);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 762;
                this.match(KotlinParser.LCURL);
                this.state = 766;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 763;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 768;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 75, this._ctx);
                }
                this.state = 770;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (KotlinParser.WHERE - 75)) | (1 << (KotlinParser.CATCH - 75)) | (1 << (KotlinParser.FINALLY - 75)) | (1 << (KotlinParser.OUT - 75)) | (1 << (KotlinParser.GETTER - 75)) | (1 << (KotlinParser.SETTER - 75)) | (1 << (KotlinParser.DYNAMIC - 75)) | (1 << (KotlinParser.AT_FIELD - 75)) | (1 << (KotlinParser.AT_PROPERTY - 75)) | (1 << (KotlinParser.AT_GET - 75)) | (1 << (KotlinParser.AT_SET - 75)) | (1 << (KotlinParser.AT_RECEIVER - 75)) | (1 << (KotlinParser.AT_PARAM - 75)) | (1 << (KotlinParser.AT_SETPARAM - 75)) | (1 << (KotlinParser.AT_DELEGATE - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (KotlinParser.PUBLIC - 107)) | (1 << (KotlinParser.PRIVATE - 107)) | (1 << (KotlinParser.PROTECTED - 107)) | (1 << (KotlinParser.INTERNAL - 107)) | (1 << (KotlinParser.ENUM - 107)) | (1 << (KotlinParser.SEALED - 107)) | (1 << (KotlinParser.ANNOTATION - 107)) | (1 << (KotlinParser.DATA - 107)) | (1 << (KotlinParser.INNER - 107)) | (1 << (KotlinParser.TAILREC - 107)) | (1 << (KotlinParser.OPERATOR - 107)) | (1 << (KotlinParser.INLINE - 107)) | (1 << (KotlinParser.INFIX - 107)) | (1 << (KotlinParser.EXTERNAL - 107)) | (1 << (KotlinParser.SUSPEND - 107)) | (1 << (KotlinParser.OVERRIDE - 107)) | (1 << (KotlinParser.ABSTRACT - 107)) | (1 << (KotlinParser.FINAL - 107)) | (1 << (KotlinParser.OPEN - 107)) | (1 << (KotlinParser.CONST - 107)) | (1 << (KotlinParser.LATEINIT - 107)) | (1 << (KotlinParser.VARARG - 107)) | (1 << (KotlinParser.NOINLINE - 107)) | (1 << (KotlinParser.CROSSINLINE - 107)) | (1 << (KotlinParser.REIFIED - 107)) | (1 << (KotlinParser.EXPECT - 107)) | (1 << (KotlinParser.ACTUAL - 107)))) !== 0) || _la === KotlinParser.Identifier) {
                    {
                        this.state = 769;
                        this.enumEntries();
                    }
                }
                this.state = 786;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 79, this._ctx)) {
                    case 1:
                        {
                            this.state = 775;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 772;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 777;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 778;
                            this.match(KotlinParser.SEMICOLON);
                            this.state = 782;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 779;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 784;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 78, this._ctx);
                            }
                            this.state = 785;
                            this.classMemberDeclarations();
                        }
                        break;
                }
                this.state = 791;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 788;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 793;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 794;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumEntries() {
        let _localctx = new EnumEntriesContext(this._ctx, this.state);
        this.enterRule(_localctx, 48, KotlinParser.RULE_enumEntries);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 796;
                this.enumEntry();
                this.state = 813;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 800;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 797;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 802;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 803;
                                this.match(KotlinParser.COMMA);
                                this.state = 807;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 804;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 809;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 810;
                                this.enumEntry();
                            }
                        }
                    }
                    this.state = 815;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 83, this._ctx);
                }
                this.state = 819;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 816;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 821;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 84, this._ctx);
                }
                this.state = 823;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 822;
                        this.match(KotlinParser.COMMA);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    enumEntry() {
        let _localctx = new EnumEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 50, KotlinParser.RULE_enumEntry);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 832;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 87, this._ctx)) {
                    case 1:
                        {
                            this.state = 825;
                            this.modifiers();
                            this.state = 829;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 826;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 831;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                }
                this.state = 834;
                this.simpleIdentifier();
                this.state = 842;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
                    case 1:
                        {
                            this.state = 838;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 835;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 840;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 841;
                            this.valueArguments();
                        }
                        break;
                }
                this.state = 851;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
                    case 1:
                        {
                            this.state = 847;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 844;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 849;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 850;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionDeclaration() {
        let _localctx = new FunctionDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 52, KotlinParser.RULE_functionDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 854;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 853;
                        this.modifiers();
                    }
                }
                this.state = 856;
                this.match(KotlinParser.FUN);
                this.state = 864;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 94, this._ctx)) {
                    case 1:
                        {
                            this.state = 860;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 857;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 862;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 863;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 881;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 97, this._ctx)) {
                    case 1:
                        {
                            this.state = 869;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 866;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 871;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 872;
                            this.receiverType();
                            this.state = 876;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 873;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 878;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 879;
                            this.match(KotlinParser.DOT);
                        }
                        break;
                }
                this.state = 886;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 883;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 888;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 889;
                this.simpleIdentifier();
                this.state = 893;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 890;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 895;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 896;
                this.functionValueParameters();
                this.state = 911;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 102, this._ctx)) {
                    case 1:
                        {
                            this.state = 900;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 897;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 902;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 903;
                            this.match(KotlinParser.COLON);
                            this.state = 907;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 904;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 909;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 910;
                            this.type_();
                        }
                        break;
                }
                this.state = 920;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 104, this._ctx)) {
                    case 1:
                        {
                            this.state = 916;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 913;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 918;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 919;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 929;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 106, this._ctx)) {
                    case 1:
                        {
                            this.state = 925;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 922;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 927;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 928;
                            this.functionBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionValueParameters() {
        let _localctx = new FunctionValueParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 54, KotlinParser.RULE_functionValueParameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 931;
                this.match(KotlinParser.LPAREN);
                this.state = 935;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 932;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 937;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 107, this._ctx);
                }
                this.state = 958;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (((((_la - 40)) & ~0x1F) === 0 && ((1 << (_la - 40)) & ((1 << (KotlinParser.AT - 40)) | (1 << (KotlinParser.IMPORT - 40)) | (1 << (KotlinParser.CONSTRUCTOR - 40)) | (1 << (KotlinParser.BY - 40)) | (1 << (KotlinParser.COMPANION - 40)) | (1 << (KotlinParser.INIT - 40)))) !== 0) || ((((_la - 75)) & ~0x1F) === 0 && ((1 << (_la - 75)) & ((1 << (KotlinParser.WHERE - 75)) | (1 << (KotlinParser.CATCH - 75)) | (1 << (KotlinParser.FINALLY - 75)) | (1 << (KotlinParser.OUT - 75)) | (1 << (KotlinParser.GETTER - 75)) | (1 << (KotlinParser.SETTER - 75)) | (1 << (KotlinParser.DYNAMIC - 75)) | (1 << (KotlinParser.AT_FIELD - 75)) | (1 << (KotlinParser.AT_PROPERTY - 75)) | (1 << (KotlinParser.AT_GET - 75)) | (1 << (KotlinParser.AT_SET - 75)) | (1 << (KotlinParser.AT_RECEIVER - 75)) | (1 << (KotlinParser.AT_PARAM - 75)) | (1 << (KotlinParser.AT_SETPARAM - 75)) | (1 << (KotlinParser.AT_DELEGATE - 75)))) !== 0) || ((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (KotlinParser.PUBLIC - 107)) | (1 << (KotlinParser.PRIVATE - 107)) | (1 << (KotlinParser.PROTECTED - 107)) | (1 << (KotlinParser.INTERNAL - 107)) | (1 << (KotlinParser.ENUM - 107)) | (1 << (KotlinParser.SEALED - 107)) | (1 << (KotlinParser.ANNOTATION - 107)) | (1 << (KotlinParser.DATA - 107)) | (1 << (KotlinParser.INNER - 107)) | (1 << (KotlinParser.TAILREC - 107)) | (1 << (KotlinParser.OPERATOR - 107)) | (1 << (KotlinParser.INLINE - 107)) | (1 << (KotlinParser.INFIX - 107)) | (1 << (KotlinParser.EXTERNAL - 107)) | (1 << (KotlinParser.SUSPEND - 107)) | (1 << (KotlinParser.OVERRIDE - 107)) | (1 << (KotlinParser.ABSTRACT - 107)) | (1 << (KotlinParser.FINAL - 107)) | (1 << (KotlinParser.OPEN - 107)) | (1 << (KotlinParser.CONST - 107)) | (1 << (KotlinParser.LATEINIT - 107)) | (1 << (KotlinParser.VARARG - 107)) | (1 << (KotlinParser.NOINLINE - 107)) | (1 << (KotlinParser.CROSSINLINE - 107)) | (1 << (KotlinParser.REIFIED - 107)) | (1 << (KotlinParser.EXPECT - 107)) | (1 << (KotlinParser.ACTUAL - 107)))) !== 0) || _la === KotlinParser.Identifier) {
                    {
                        this.state = 938;
                        this.functionValueParameter();
                        this.state = 955;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 942;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 939;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 944;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 945;
                                        this.match(KotlinParser.COMMA);
                                        this.state = 949;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 946;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 951;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 952;
                                        this.functionValueParameter();
                                    }
                                }
                            }
                            this.state = 957;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 110, this._ctx);
                        }
                    }
                }
                this.state = 963;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 960;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 965;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 967;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 966;
                        this.match(KotlinParser.COMMA);
                    }
                }
                this.state = 969;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionValueParameter() {
        let _localctx = new FunctionValueParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 56, KotlinParser.RULE_functionValueParameter);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 972;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 114, this._ctx)) {
                    case 1:
                        {
                            this.state = 971;
                            this.modifiers();
                        }
                        break;
                }
                this.state = 974;
                this.parameter();
                this.state = 989;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 117, this._ctx)) {
                    case 1:
                        {
                            this.state = 978;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 975;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 980;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 981;
                            this.match(KotlinParser.ASSIGNMENT);
                            this.state = 985;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 982;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 987;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 116, this._ctx);
                            }
                            this.state = 988;
                            this.expression();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameter() {
        let _localctx = new ParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 58, KotlinParser.RULE_parameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 991;
                this.simpleIdentifier();
                this.state = 995;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 992;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 997;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 998;
                this.match(KotlinParser.COLON);
                this.state = 1002;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 999;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1004;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1005;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setterParameter() {
        let _localctx = new SetterParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 60, KotlinParser.RULE_setterParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1007;
                this.simpleIdentifier();
                this.state = 1011;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1008;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1013;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1022;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COLON) {
                    {
                        this.state = 1014;
                        this.match(KotlinParser.COLON);
                        this.state = 1018;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1015;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1020;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1021;
                        this.type_();
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionBody() {
        let _localctx = new FunctionBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 62, KotlinParser.RULE_functionBody);
        try {
            let _alt;
            this.state = 1033;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LCURL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1024;
                        this.block();
                    }
                    break;
                case KotlinParser.ASSIGNMENT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1025;
                        this.match(KotlinParser.ASSIGNMENT);
                        this.state = 1029;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1026;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 1031;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 123, this._ctx);
                        }
                        this.state = 1032;
                        this.expression();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectDeclaration() {
        let _localctx = new ObjectDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 64, KotlinParser.RULE_objectDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1036;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 1035;
                        this.modifiers();
                    }
                }
                this.state = 1038;
                this.match(KotlinParser.OBJECT);
                this.state = 1042;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1039;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1044;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1045;
                this.simpleIdentifier();
                this.state = 1060;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
                    case 1:
                        {
                            this.state = 1049;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1046;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1051;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1052;
                            this.match(KotlinParser.COLON);
                            this.state = 1056;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1053;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1058;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 128, this._ctx);
                            }
                            this.state = 1059;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 1069;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 131, this._ctx)) {
                    case 1:
                        {
                            this.state = 1065;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1062;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1067;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1068;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    companionObject() {
        let _localctx = new CompanionObjectContext(this._ctx, this.state);
        this.enterRule(_localctx, 66, KotlinParser.RULE_companionObject);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1072;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 1071;
                        this.modifiers();
                    }
                }
                this.state = 1074;
                this.match(KotlinParser.COMPANION);
                this.state = 1078;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1075;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1080;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1081;
                this.match(KotlinParser.OBJECT);
                this.state = 1089;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 135, this._ctx)) {
                    case 1:
                        {
                            this.state = 1085;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1082;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1087;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1088;
                            this.simpleIdentifier();
                        }
                        break;
                }
                this.state = 1105;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 138, this._ctx)) {
                    case 1:
                        {
                            this.state = 1094;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1091;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1096;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1097;
                            this.match(KotlinParser.COLON);
                            this.state = 1101;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1098;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1103;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 137, this._ctx);
                            }
                            this.state = 1104;
                            this.delegationSpecifiers();
                        }
                        break;
                }
                this.state = 1114;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 140, this._ctx)) {
                    case 1:
                        {
                            this.state = 1110;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1107;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1112;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1113;
                            this.classBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    propertyDeclaration() {
        let _localctx = new PropertyDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 68, KotlinParser.RULE_propertyDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1117;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 1116;
                        this.modifiers();
                    }
                }
                this.state = 1119;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.VAL || _la === KotlinParser.VAR)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 1127;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 143, this._ctx)) {
                    case 1:
                        {
                            this.state = 1123;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1120;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1125;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1126;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 1144;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 146, this._ctx)) {
                    case 1:
                        {
                            this.state = 1132;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1129;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1134;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1135;
                            this.receiverType();
                            this.state = 1139;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1136;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1141;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1142;
                            this.match(KotlinParser.DOT);
                        }
                        break;
                }
                {
                    this.state = 1149;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                        if (_alt === 1) {
                            {
                                {
                                    this.state = 1146;
                                    this.match(KotlinParser.NL);
                                }
                            }
                        }
                        this.state = 1151;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 147, this._ctx);
                    }
                    this.state = 1154;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case KotlinParser.LPAREN:
                            {
                                this.state = 1152;
                                this.multiVariableDeclaration();
                            }
                            break;
                        case KotlinParser.NL:
                        case KotlinParser.AT:
                        case KotlinParser.IMPORT:
                        case KotlinParser.CONSTRUCTOR:
                        case KotlinParser.BY:
                        case KotlinParser.COMPANION:
                        case KotlinParser.INIT:
                        case KotlinParser.WHERE:
                        case KotlinParser.CATCH:
                        case KotlinParser.FINALLY:
                        case KotlinParser.OUT:
                        case KotlinParser.GETTER:
                        case KotlinParser.SETTER:
                        case KotlinParser.DYNAMIC:
                        case KotlinParser.AT_FIELD:
                        case KotlinParser.AT_PROPERTY:
                        case KotlinParser.AT_GET:
                        case KotlinParser.AT_SET:
                        case KotlinParser.AT_RECEIVER:
                        case KotlinParser.AT_PARAM:
                        case KotlinParser.AT_SETPARAM:
                        case KotlinParser.AT_DELEGATE:
                        case KotlinParser.PUBLIC:
                        case KotlinParser.PRIVATE:
                        case KotlinParser.PROTECTED:
                        case KotlinParser.INTERNAL:
                        case KotlinParser.ENUM:
                        case KotlinParser.SEALED:
                        case KotlinParser.ANNOTATION:
                        case KotlinParser.DATA:
                        case KotlinParser.INNER:
                        case KotlinParser.TAILREC:
                        case KotlinParser.OPERATOR:
                        case KotlinParser.INLINE:
                        case KotlinParser.INFIX:
                        case KotlinParser.EXTERNAL:
                        case KotlinParser.SUSPEND:
                        case KotlinParser.OVERRIDE:
                        case KotlinParser.ABSTRACT:
                        case KotlinParser.FINAL:
                        case KotlinParser.OPEN:
                        case KotlinParser.CONST:
                        case KotlinParser.LATEINIT:
                        case KotlinParser.VARARG:
                        case KotlinParser.NOINLINE:
                        case KotlinParser.CROSSINLINE:
                        case KotlinParser.REIFIED:
                        case KotlinParser.EXPECT:
                        case KotlinParser.ACTUAL:
                        case KotlinParser.Identifier:
                            {
                                this.state = 1153;
                                this.variableDeclaration();
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
                this.state = 1163;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
                    case 1:
                        {
                            this.state = 1159;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1156;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1161;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1162;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 1182;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 154, this._ctx)) {
                    case 1:
                        {
                            this.state = 1168;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1165;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1170;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1180;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case KotlinParser.ASSIGNMENT:
                                    {
                                        this.state = 1171;
                                        this.match(KotlinParser.ASSIGNMENT);
                                        this.state = 1175;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1172;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1177;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 152, this._ctx);
                                        }
                                        this.state = 1178;
                                        this.expression();
                                    }
                                    break;
                                case KotlinParser.BY:
                                    {
                                        this.state = 1179;
                                        this.propertyDelegate();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                        break;
                }
                this.state = 1190;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 156, this._ctx)) {
                    case 1:
                        {
                            this.state = 1185;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            do {
                                {
                                    {
                                        this.state = 1184;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1187;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            } while (_la === KotlinParser.NL);
                            this.state = 1189;
                            this.match(KotlinParser.SEMICOLON);
                        }
                        break;
                }
                this.state = 1195;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1192;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1197;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 157, this._ctx);
                }
                this.state = 1228;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 166, this._ctx)) {
                    case 1:
                        {
                            this.state = 1199;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 158, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1198;
                                        this.getter();
                                    }
                                    break;
                            }
                            this.state = 1211;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 161, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1204;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1201;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1206;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 159, this._ctx);
                                        }
                                        this.state = 1208;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - -1)) & ~0x1F) === 0 && ((1 << (_la - -1)) & ((1 << (KotlinParser.EOF - -1)) | (1 << (KotlinParser.NL - -1)) | (1 << (KotlinParser.SEMICOLON - -1)))) !== 0)) {
                                            {
                                                this.state = 1207;
                                                this.semi();
                                            }
                                        }
                                        this.state = 1210;
                                        this.setter();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 1214;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 162, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1213;
                                        this.setter();
                                    }
                                    break;
                            }
                            this.state = 1226;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 165, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1219;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1216;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1221;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 163, this._ctx);
                                        }
                                        this.state = 1223;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        if (((((_la - -1)) & ~0x1F) === 0 && ((1 << (_la - -1)) & ((1 << (KotlinParser.EOF - -1)) | (1 << (KotlinParser.NL - -1)) | (1 << (KotlinParser.SEMICOLON - -1)))) !== 0)) {
                                            {
                                                this.state = 1222;
                                                this.semi();
                                            }
                                        }
                                        this.state = 1225;
                                        this.getter();
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiVariableDeclaration() {
        let _localctx = new MultiVariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 70, KotlinParser.RULE_multiVariableDeclaration);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1230;
                this.match(KotlinParser.LPAREN);
                this.state = 1234;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1231;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1236;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 167, this._ctx);
                }
                this.state = 1237;
                this.variableDeclaration();
                this.state = 1254;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1241;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1238;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1243;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1244;
                                this.match(KotlinParser.COMMA);
                                this.state = 1248;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1245;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1250;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 169, this._ctx);
                                }
                                this.state = 1251;
                                this.variableDeclaration();
                            }
                        }
                    }
                    this.state = 1256;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
                }
                this.state = 1260;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1257;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1262;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1263;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    variableDeclaration() {
        let _localctx = new VariableDeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 72, KotlinParser.RULE_variableDeclaration);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1268;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)))) !== 0)) {
                    {
                        {
                            this.state = 1265;
                            this.annotation();
                        }
                    }
                    this.state = 1270;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1274;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1271;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1276;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1277;
                this.simpleIdentifier();
                this.state = 1292;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 176, this._ctx)) {
                    case 1:
                        {
                            this.state = 1281;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1278;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1283;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1284;
                            this.match(KotlinParser.COLON);
                            this.state = 1288;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1285;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1290;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1291;
                            this.type_();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    propertyDelegate() {
        let _localctx = new PropertyDelegateContext(this._ctx, this.state);
        this.enterRule(_localctx, 74, KotlinParser.RULE_propertyDelegate);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1294;
                this.match(KotlinParser.BY);
                this.state = 1298;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1295;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1300;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 177, this._ctx);
                }
                this.state = 1301;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    getter() {
        let _localctx = new GetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 76, KotlinParser.RULE_getter);
        let _la;
        try {
            this.state = 1348;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 186, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1304;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                            {
                                this.state = 1303;
                                this.modifiers();
                            }
                        }
                        this.state = 1306;
                        this.match(KotlinParser.GETTER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1308;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                            {
                                this.state = 1307;
                                this.modifiers();
                            }
                        }
                        this.state = 1310;
                        this.match(KotlinParser.GETTER);
                        this.state = 1314;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1311;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1316;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1317;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1321;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1318;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1323;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1324;
                        this.match(KotlinParser.RPAREN);
                        this.state = 1339;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 184, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1328;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1325;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1330;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1331;
                                    this.match(KotlinParser.COLON);
                                    this.state = 1335;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1332;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1337;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1338;
                                    this.type_();
                                }
                                break;
                        }
                        this.state = 1344;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1341;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1346;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1347;
                        this.functionBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    setter() {
        let _localctx = new SetterContext(this._ctx, this.state);
        this.enterRule(_localctx, 78, KotlinParser.RULE_setter);
        let _la;
        try {
            let _alt;
            this.state = 1398;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 196, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1351;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                            {
                                this.state = 1350;
                                this.modifiers();
                            }
                        }
                        this.state = 1353;
                        this.match(KotlinParser.SETTER);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1355;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                            {
                                this.state = 1354;
                                this.modifiers();
                            }
                        }
                        this.state = 1357;
                        this.match(KotlinParser.SETTER);
                        this.state = 1361;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1358;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1363;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1364;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1369;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    this.state = 1367;
                                    this._errHandler.sync(this);
                                    switch (this._input.LA(1)) {
                                        case KotlinParser.AT:
                                        case KotlinParser.AT_FIELD:
                                        case KotlinParser.AT_PROPERTY:
                                        case KotlinParser.AT_GET:
                                        case KotlinParser.AT_SET:
                                        case KotlinParser.AT_RECEIVER:
                                        case KotlinParser.AT_PARAM:
                                        case KotlinParser.AT_SETPARAM:
                                        case KotlinParser.AT_DELEGATE:
                                            {
                                                this.state = 1365;
                                                this.annotation();
                                            }
                                            break;
                                        case KotlinParser.VARARG:
                                        case KotlinParser.NOINLINE:
                                        case KotlinParser.CROSSINLINE:
                                            {
                                                this.state = 1366;
                                                this.parameterModifier();
                                            }
                                            break;
                                        default:
                                            throw new NoViableAltException_1.NoViableAltException(this);
                                    }
                                }
                            }
                            this.state = 1371;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 191, this._ctx);
                        }
                        this.state = 1372;
                        this.setterParameter();
                        this.state = 1373;
                        this.match(KotlinParser.RPAREN);
                        this.state = 1388;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 194, this._ctx)) {
                            case 1:
                                {
                                    this.state = 1377;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1374;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1379;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1380;
                                    this.match(KotlinParser.COLON);
                                    this.state = 1384;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 1381;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 1386;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 1387;
                                    this.type_();
                                }
                                break;
                        }
                        this.state = 1393;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1390;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1395;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1396;
                        this.functionBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeAlias() {
        let _localctx = new TypeAliasContext(this._ctx, this.state);
        this.enterRule(_localctx, 80, KotlinParser.RULE_typeAlias);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1401;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)) | (1 << (KotlinParser.PUBLIC - 99)) | (1 << (KotlinParser.PRIVATE - 99)) | (1 << (KotlinParser.PROTECTED - 99)) | (1 << (KotlinParser.INTERNAL - 99)) | (1 << (KotlinParser.ENUM - 99)) | (1 << (KotlinParser.SEALED - 99)) | (1 << (KotlinParser.ANNOTATION - 99)) | (1 << (KotlinParser.DATA - 99)) | (1 << (KotlinParser.INNER - 99)) | (1 << (KotlinParser.TAILREC - 99)) | (1 << (KotlinParser.OPERATOR - 99)) | (1 << (KotlinParser.INLINE - 99)) | (1 << (KotlinParser.INFIX - 99)) | (1 << (KotlinParser.EXTERNAL - 99)) | (1 << (KotlinParser.SUSPEND - 99)) | (1 << (KotlinParser.OVERRIDE - 99)) | (1 << (KotlinParser.ABSTRACT - 99)) | (1 << (KotlinParser.FINAL - 99)) | (1 << (KotlinParser.OPEN - 99)) | (1 << (KotlinParser.CONST - 99)) | (1 << (KotlinParser.LATEINIT - 99)) | (1 << (KotlinParser.VARARG - 99)) | (1 << (KotlinParser.NOINLINE - 99)) | (1 << (KotlinParser.CROSSINLINE - 99)))) !== 0) || _la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL) {
                    {
                        this.state = 1400;
                        this.modifiers();
                    }
                }
                this.state = 1403;
                this.match(KotlinParser.TYPE_ALIAS);
                this.state = 1407;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1404;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1409;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1410;
                this.simpleIdentifier();
                this.state = 1418;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 200, this._ctx)) {
                    case 1:
                        {
                            this.state = 1414;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1411;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1416;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1417;
                            this.typeParameters();
                        }
                        break;
                }
                this.state = 1423;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1420;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1425;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1426;
                this.match(KotlinParser.ASSIGNMENT);
                this.state = 1430;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1427;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1432;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1433;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameters() {
        let _localctx = new TypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 82, KotlinParser.RULE_typeParameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1435;
                this.match(KotlinParser.LANGLE);
                this.state = 1439;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1436;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1441;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
                }
                this.state = 1442;
                this.typeParameter();
                this.state = 1459;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1446;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1443;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1448;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1449;
                                this.match(KotlinParser.COMMA);
                                this.state = 1453;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1450;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1455;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 205, this._ctx);
                                }
                                this.state = 1456;
                                this.typeParameter();
                            }
                        }
                    }
                    this.state = 1461;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 206, this._ctx);
                }
                this.state = 1465;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1462;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1467;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1469;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 1468;
                        this.match(KotlinParser.COMMA);
                    }
                }
                this.state = 1471;
                this.match(KotlinParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameter() {
        let _localctx = new TypeParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 84, KotlinParser.RULE_typeParameter);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1474;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 209, this._ctx)) {
                    case 1:
                        {
                            this.state = 1473;
                            this.typeParameterModifiers();
                        }
                        break;
                }
                this.state = 1479;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1476;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1481;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1482;
                this.simpleIdentifier();
                this.state = 1497;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 213, this._ctx)) {
                    case 1:
                        {
                            this.state = 1486;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1483;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1488;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1489;
                            this.match(KotlinParser.COLON);
                            this.state = 1493;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1490;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1495;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1496;
                            this.type_();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameterModifiers() {
        let _localctx = new TypeParameterModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 86, KotlinParser.RULE_typeParameterModifiers);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1500;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1499;
                                    this.typeParameterModifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1502;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 214, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeParameterModifier() {
        let _localctx = new TypeParameterModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 88, KotlinParser.RULE_typeParameterModifier);
        try {
            let _alt;
            this.state = 1519;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.REIFIED:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1504;
                        this.reificationModifier();
                        this.state = 1508;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1505;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 1510;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 215, this._ctx);
                        }
                    }
                    break;
                case KotlinParser.IN:
                case KotlinParser.OUT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1511;
                        this.varianceModifier();
                        this.state = 1515;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1512;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 1517;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 216, this._ctx);
                        }
                    }
                    break;
                case KotlinParser.AT:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1518;
                        this.annotation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    type_() {
        let _localctx = new Type_Context(this._ctx, this.state);
        this.enterRule(_localctx, 90, KotlinParser.RULE_type_);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1522;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 218, this._ctx)) {
                    case 1:
                        {
                            this.state = 1521;
                            this.typeModifiers();
                        }
                        break;
                }
                this.state = 1528;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 219, this._ctx)) {
                    case 1:
                        {
                            this.state = 1524;
                            this.parenthesizedType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1525;
                            this.nullableType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1526;
                            this.typeReference();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1527;
                            this.functionType();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeModifiers() {
        let _localctx = new TypeModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 92, KotlinParser.RULE_typeModifiers);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1531;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1530;
                                    this.typeModifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1533;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 220, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeModifier() {
        let _localctx = new TypeModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 94, KotlinParser.RULE_typeModifier);
        let _la;
        try {
            this.state = 1543;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.AT:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1535;
                        this.annotation();
                    }
                    break;
                case KotlinParser.SUSPEND:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1536;
                        this.match(KotlinParser.SUSPEND);
                        this.state = 1540;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1537;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1542;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenthesizedType() {
        let _localctx = new ParenthesizedTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 96, KotlinParser.RULE_parenthesizedType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1545;
                this.match(KotlinParser.LPAREN);
                this.state = 1549;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1546;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1551;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1552;
                this.type_();
                this.state = 1556;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1553;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1558;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1559;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    nullableType() {
        let _localctx = new NullableTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 98, KotlinParser.RULE_nullableType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1563;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                    case KotlinParser.Identifier:
                        {
                            this.state = 1561;
                            this.typeReference();
                        }
                        break;
                    case KotlinParser.LPAREN:
                        {
                            this.state = 1562;
                            this.parenthesizedType();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 1568;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1565;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1570;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1572;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 1571;
                                    this.quest();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 1574;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 227, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeReference() {
        let _localctx = new TypeReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 100, KotlinParser.RULE_typeReference);
        try {
            this.state = 1578;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 228, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1576;
                        this.userType();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1577;
                        this.match(KotlinParser.DYNAMIC);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionType() {
        let _localctx = new FunctionTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 102, KotlinParser.RULE_functionType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1594;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 231, this._ctx)) {
                    case 1:
                        {
                            this.state = 1580;
                            this.receiverType();
                            this.state = 1584;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1581;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1586;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1587;
                            this.match(KotlinParser.DOT);
                            this.state = 1591;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1588;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1593;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                        }
                        break;
                }
                this.state = 1596;
                this.functionTypeParameters();
                this.state = 1600;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1597;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1602;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1603;
                this.match(KotlinParser.ARROW);
                this.state = 1607;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1604;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1609;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1610;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    receiverType() {
        let _localctx = new ReceiverTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 104, KotlinParser.RULE_receiverType);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1613;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 234, this._ctx)) {
                    case 1:
                        {
                            this.state = 1612;
                            this.typeModifiers();
                        }
                        break;
                }
                this.state = 1618;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 235, this._ctx)) {
                    case 1:
                        {
                            this.state = 1615;
                            this.parenthesizedType();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1616;
                            this.nullableType();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1617;
                            this.typeReference();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    userType() {
        let _localctx = new UserTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 106, KotlinParser.RULE_userType);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1620;
                this.simpleUserType();
                this.state = 1637;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1624;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1621;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1626;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1627;
                                this.match(KotlinParser.DOT);
                                this.state = 1631;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1628;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1633;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1634;
                                this.simpleUserType();
                            }
                        }
                    }
                    this.state = 1639;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 238, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenthesizedUserType() {
        let _localctx = new ParenthesizedUserTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 108, KotlinParser.RULE_parenthesizedUserType);
        let _la;
        try {
            this.state = 1672;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 243, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1640;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1644;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1641;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1646;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1647;
                        this.userType();
                        this.state = 1651;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1648;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1653;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1654;
                        this.match(KotlinParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1656;
                        this.match(KotlinParser.LPAREN);
                        this.state = 1660;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1657;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1662;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1663;
                        this.parenthesizedUserType();
                        this.state = 1667;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 1664;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 1669;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 1670;
                        this.match(KotlinParser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleUserType() {
        let _localctx = new SimpleUserTypeContext(this._ctx, this.state);
        this.enterRule(_localctx, 110, KotlinParser.RULE_simpleUserType);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1674;
                this.simpleIdentifier();
                this.state = 1682;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 245, this._ctx)) {
                    case 1:
                        {
                            this.state = 1678;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 1675;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 1680;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 1681;
                            this.typeArguments();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionTypeParameters() {
        let _localctx = new FunctionTypeParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 112, KotlinParser.RULE_functionTypeParameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1684;
                this.match(KotlinParser.LPAREN);
                this.state = 1688;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1685;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1690;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 246, this._ctx);
                }
                this.state = 1693;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 247, this._ctx)) {
                    case 1:
                        {
                            this.state = 1691;
                            this.parameter();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1692;
                            this.type_();
                        }
                        break;
                }
                this.state = 1714;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1698;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1695;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1700;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1701;
                                this.match(KotlinParser.COMMA);
                                this.state = 1705;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1702;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1707;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1710;
                                this._errHandler.sync(this);
                                switch (this.interpreter.adaptivePredict(this._input, 250, this._ctx)) {
                                    case 1:
                                        {
                                            this.state = 1708;
                                            this.parameter();
                                        }
                                        break;
                                    case 2:
                                        {
                                            this.state = 1709;
                                            this.type_();
                                        }
                                        break;
                                }
                            }
                        }
                    }
                    this.state = 1716;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 251, this._ctx);
                }
                this.state = 1720;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1717;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1722;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1723;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeConstraints() {
        let _localctx = new TypeConstraintsContext(this._ctx, this.state);
        this.enterRule(_localctx, 114, KotlinParser.RULE_typeConstraints);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1725;
                this.match(KotlinParser.WHERE);
                this.state = 1729;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1726;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1731;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1732;
                this.typeConstraint();
                this.state = 1749;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1736;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1733;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1738;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1739;
                                this.match(KotlinParser.COMMA);
                                this.state = 1743;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1740;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1745;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1746;
                                this.typeConstraint();
                            }
                        }
                    }
                    this.state = 1751;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 256, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeConstraint() {
        let _localctx = new TypeConstraintContext(this._ctx, this.state);
        this.enterRule(_localctx, 116, KotlinParser.RULE_typeConstraint);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1755;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)))) !== 0)) {
                    {
                        {
                            this.state = 1752;
                            this.annotation();
                        }
                    }
                    this.state = 1757;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1758;
                this.simpleIdentifier();
                this.state = 1762;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1759;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1764;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1765;
                this.match(KotlinParser.COLON);
                this.state = 1769;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1766;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1771;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1772;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    block() {
        let _localctx = new BlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 118, KotlinParser.RULE_block);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1774;
                this.match(KotlinParser.LCURL);
                this.state = 1778;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1775;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 1780;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 260, this._ctx);
                }
                this.state = 1781;
                this.statements();
                this.state = 1785;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 1782;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 1787;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 1788;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statements() {
        let _localctx = new StatementsContext(this._ctx, this.state);
        this.enterRule(_localctx, 120, KotlinParser.RULE_statements);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1805;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 265, this._ctx)) {
                    case 1:
                        {
                            this.state = 1790;
                            this.statement();
                            this.state = 1799;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1792;
                                            this._errHandler.sync(this);
                                            _alt = 1;
                                            do {
                                                switch (_alt) {
                                                    case 1:
                                                        {
                                                            {
                                                                this.state = 1791;
                                                                _la = this._input.LA(1);
                                                                if (!(_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON)) {
                                                                    this._errHandler.recoverInline(this);
                                                                }
                                                                else {
                                                                    if (this._input.LA(1) === Token_1.Token.EOF) {
                                                                        this.matchedEOF = true;
                                                                    }
                                                                    this._errHandler.reportMatch(this);
                                                                    this.consume();
                                                                }
                                                            }
                                                        }
                                                        break;
                                                    default:
                                                        throw new NoViableAltException_1.NoViableAltException(this);
                                                }
                                                this.state = 1794;
                                                this._errHandler.sync(this);
                                                _alt = this.interpreter.adaptivePredict(this._input, 262, this._ctx);
                                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                                            this.state = 1796;
                                            this.statement();
                                        }
                                    }
                                }
                                this.state = 1801;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 263, this._ctx);
                            }
                            this.state = 1803;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 264, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 1802;
                                        this.semis();
                                    }
                                    break;
                            }
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    statement() {
        let _localctx = new StatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 122, KotlinParser.RULE_statement);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1811;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 1809;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case KotlinParser.IdentifierAt:
                                    {
                                        this.state = 1807;
                                        this.label();
                                    }
                                    break;
                                case KotlinParser.AT:
                                case KotlinParser.AT_FIELD:
                                case KotlinParser.AT_PROPERTY:
                                case KotlinParser.AT_GET:
                                case KotlinParser.AT_SET:
                                case KotlinParser.AT_RECEIVER:
                                case KotlinParser.AT_PARAM:
                                case KotlinParser.AT_SETPARAM:
                                case KotlinParser.AT_DELEGATE:
                                    {
                                        this.state = 1808;
                                        this.annotation();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 1813;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 267, this._ctx);
                }
                this.state = 1818;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 268, this._ctx)) {
                    case 1:
                        {
                            this.state = 1814;
                            this.declaration();
                        }
                        break;
                    case 2:
                        {
                            this.state = 1815;
                            this.assignment();
                        }
                        break;
                    case 3:
                        {
                            this.state = 1816;
                            this.loopStatement();
                        }
                        break;
                    case 4:
                        {
                            this.state = 1817;
                            this.expression();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    declaration() {
        let _localctx = new DeclarationContext(this._ctx, this.state);
        this.enterRule(_localctx, 124, KotlinParser.RULE_declaration);
        try {
            this.state = 1825;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 269, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1820;
                        this.classDeclaration();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1821;
                        this.objectDeclaration();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 1822;
                        this.functionDeclaration();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 1823;
                        this.propertyDeclaration();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 1824;
                        this.typeAlias();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignment() {
        let _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 126, KotlinParser.RULE_assignment);
        try {
            let _alt;
            this.state = 1847;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 272, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 1827;
                        this.directlyAssignableExpression();
                        this.state = 1828;
                        this.match(KotlinParser.ASSIGNMENT);
                        this.state = 1832;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1829;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 1834;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 270, this._ctx);
                        }
                        this.state = 1835;
                        this.expression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 1837;
                        this.assignableExpression();
                        this.state = 1838;
                        this.assignmentAndOperator();
                        this.state = 1842;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 1839;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 1844;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 271, this._ctx);
                        }
                        this.state = 1845;
                        this.expression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    expression() {
        let _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 128, KotlinParser.RULE_expression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1849;
                this.disjunction();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    disjunction() {
        let _localctx = new DisjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 130, KotlinParser.RULE_disjunction);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1851;
                this.conjunction();
                this.state = 1868;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1855;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1852;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1857;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1858;
                                this.match(KotlinParser.DISJ);
                                this.state = 1862;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1859;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1864;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 274, this._ctx);
                                }
                                this.state = 1865;
                                this.conjunction();
                            }
                        }
                    }
                    this.state = 1870;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 275, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    conjunction() {
        let _localctx = new ConjunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 132, KotlinParser.RULE_conjunction);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1871;
                this.equality();
                this.state = 1888;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1875;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1872;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1877;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1878;
                                this.match(KotlinParser.CONJ);
                                this.state = 1882;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1879;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1884;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 277, this._ctx);
                                }
                                this.state = 1885;
                                this.equality();
                            }
                        }
                    }
                    this.state = 1890;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 278, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    equality() {
        let _localctx = new EqualityContext(this._ctx, this.state);
        this.enterRule(_localctx, 134, KotlinParser.RULE_equality);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1891;
                this.comparison();
                this.state = 1903;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1892;
                                this.equalityOperator();
                                this.state = 1896;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1893;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1898;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 279, this._ctx);
                                }
                                this.state = 1899;
                                this.comparison();
                            }
                        }
                    }
                    this.state = 1905;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 280, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comparison() {
        let _localctx = new ComparisonContext(this._ctx, this.state);
        this.enterRule(_localctx, 136, KotlinParser.RULE_comparison);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1906;
                this.infixOperation();
                this.state = 1916;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 282, this._ctx)) {
                    case 1:
                        {
                            this.state = 1907;
                            this.comparisonOperator();
                            this.state = 1911;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 1908;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 1913;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 281, this._ctx);
                            }
                            this.state = 1914;
                            this.infixOperation();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    infixOperation() {
        let _localctx = new InfixOperationContext(this._ctx, this.state);
        this.enterRule(_localctx, 138, KotlinParser.RULE_infixOperation);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1918;
                this.elvisExpression();
                this.state = 1939;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            this.state = 1937;
                            this._errHandler.sync(this);
                            switch (this._input.LA(1)) {
                                case KotlinParser.IN:
                                case KotlinParser.NOT_IN:
                                    {
                                        this.state = 1919;
                                        this.inOperator();
                                        this.state = 1923;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 1920;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 1925;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 283, this._ctx);
                                        }
                                        this.state = 1926;
                                        this.elvisExpression();
                                    }
                                    break;
                                case KotlinParser.IS:
                                case KotlinParser.NOT_IS:
                                    {
                                        this.state = 1928;
                                        this.isOperator();
                                        this.state = 1932;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 1929;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 1934;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 1935;
                                        this.type_();
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                        }
                    }
                    this.state = 1941;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 286, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elvisExpression() {
        let _localctx = new ElvisExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 140, KotlinParser.RULE_elvisExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1942;
                this.infixFunctionCall();
                this.state = 1960;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1946;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 1943;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 1948;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 1949;
                                this.elvis();
                                this.state = 1953;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1950;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1955;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 288, this._ctx);
                                }
                                this.state = 1956;
                                this.infixFunctionCall();
                            }
                        }
                    }
                    this.state = 1962;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 289, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    infixFunctionCall() {
        let _localctx = new InfixFunctionCallContext(this._ctx, this.state);
        this.enterRule(_localctx, 142, KotlinParser.RULE_infixFunctionCall);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1963;
                this.rangeExpression();
                this.state = 1975;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1964;
                                this.simpleIdentifier();
                                this.state = 1968;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1965;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1970;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 290, this._ctx);
                                }
                                this.state = 1971;
                                this.rangeExpression();
                            }
                        }
                    }
                    this.state = 1977;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 291, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rangeExpression() {
        let _localctx = new RangeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 144, KotlinParser.RULE_rangeExpression);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1978;
                this.additiveExpression();
                this.state = 1989;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1979;
                                this.match(KotlinParser.RANGE);
                                this.state = 1983;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 292, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1980;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1985;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 292, this._ctx);
                                }
                                this.state = 1986;
                                this.additiveExpression();
                            }
                        }
                    }
                    this.state = 1991;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 293, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additiveExpression() {
        let _localctx = new AdditiveExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 146, KotlinParser.RULE_additiveExpression);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 1992;
                this.multiplicativeExpression();
                this.state = 2004;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 1993;
                                this.additiveOperator();
                                this.state = 1997;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 1994;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 1999;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 294, this._ctx);
                                }
                                this.state = 2000;
                                this.multiplicativeExpression();
                            }
                        }
                    }
                    this.state = 2006;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiplicativeExpression() {
        let _localctx = new MultiplicativeExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 148, KotlinParser.RULE_multiplicativeExpression);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2007;
                this.asExpression();
                this.state = 2019;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2008;
                                this.multiplicativeOperator();
                                this.state = 2012;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2009;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 2014;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 296, this._ctx);
                                }
                                this.state = 2015;
                                this.asExpression();
                            }
                        }
                    }
                    this.state = 2021;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 297, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    asExpression() {
        let _localctx = new AsExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 150, KotlinParser.RULE_asExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2022;
                this.prefixUnaryExpression();
                this.state = 2038;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 300, this._ctx)) {
                    case 1:
                        {
                            this.state = 2026;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2023;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2028;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2029;
                            this.asOperator();
                            this.state = 2033;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2030;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2035;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2036;
                            this.type_();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    prefixUnaryExpression() {
        let _localctx = new PrefixUnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 152, KotlinParser.RULE_prefixUnaryExpression);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2043;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2040;
                                this.unaryPrefix();
                            }
                        }
                    }
                    this.state = 2045;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 301, this._ctx);
                }
                this.state = 2046;
                this.postfixUnaryExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unaryPrefix() {
        let _localctx = new UnaryPrefixContext(this._ctx, this.state);
        this.enterRule(_localctx, 154, KotlinParser.RULE_unaryPrefix);
        try {
            let _alt;
            this.state = 2057;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.AT:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2048;
                        this.annotation();
                    }
                    break;
                case KotlinParser.IdentifierAt:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2049;
                        this.label();
                    }
                    break;
                case KotlinParser.ADD:
                case KotlinParser.SUB:
                case KotlinParser.INCR:
                case KotlinParser.DECR:
                case KotlinParser.EXCL_WS:
                case KotlinParser.EXCL_NO_WS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2050;
                        this.prefixUnaryOperator();
                        this.state = 2054;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2051;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2056;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 302, this._ctx);
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    postfixUnaryExpression() {
        let _localctx = new PostfixUnaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 156, KotlinParser.RULE_postfixUnaryExpression);
        try {
            let _alt;
            this.state = 2066;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 305, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2059;
                        this.primaryExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2060;
                        this.primaryExpression();
                        this.state = 2062;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 2061;
                                            this.postfixUnarySuffix();
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 2064;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 304, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    postfixUnarySuffix() {
        let _localctx = new PostfixUnarySuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 158, KotlinParser.RULE_postfixUnarySuffix);
        try {
            this.state = 2073;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 306, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2068;
                        this.postfixUnaryOperator();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2069;
                        this.typeArguments();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2070;
                        this.callSuffix();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2071;
                        this.indexingSuffix();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2072;
                        this.navigationSuffix();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    directlyAssignableExpression() {
        let _localctx = new DirectlyAssignableExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 160, KotlinParser.RULE_directlyAssignableExpression);
        try {
            this.state = 2079;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 307, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2075;
                        this.postfixUnaryExpression();
                        this.state = 2076;
                        this.assignableSuffix();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2078;
                        this.simpleIdentifier();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignableExpression() {
        let _localctx = new AssignableExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 162, KotlinParser.RULE_assignableExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2081;
                this.prefixUnaryExpression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignableSuffix() {
        let _localctx = new AssignableSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 164, KotlinParser.RULE_assignableSuffix);
        try {
            this.state = 2086;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LANGLE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2083;
                        this.typeArguments();
                    }
                    break;
                case KotlinParser.LSQUARE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2084;
                        this.indexingSuffix();
                    }
                    break;
                case KotlinParser.NL:
                case KotlinParser.DOT:
                case KotlinParser.COLONCOLON:
                case KotlinParser.QUEST_NO_WS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2085;
                        this.navigationSuffix();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    indexingSuffix() {
        let _localctx = new IndexingSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 166, KotlinParser.RULE_indexingSuffix);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2088;
                this.match(KotlinParser.LSQUARE);
                this.state = 2092;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2089;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2094;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 309, this._ctx);
                }
                this.state = 2095;
                this.expression();
                this.state = 2112;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2099;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2096;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2101;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2102;
                                this.match(KotlinParser.COMMA);
                                this.state = 2106;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2103;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 2108;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 311, this._ctx);
                                }
                                this.state = 2109;
                                this.expression();
                            }
                        }
                    }
                    this.state = 2114;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 312, this._ctx);
                }
                this.state = 2118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2115;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2120;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2121;
                this.match(KotlinParser.RSQUARE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    navigationSuffix() {
        let _localctx = new NavigationSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 168, KotlinParser.RULE_navigationSuffix);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2126;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2123;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2128;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2129;
                this.memberAccessOperator();
                this.state = 2133;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2130;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2135;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2139;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                    case KotlinParser.Identifier:
                        {
                            this.state = 2136;
                            this.simpleIdentifier();
                        }
                        break;
                    case KotlinParser.LPAREN:
                        {
                            this.state = 2137;
                            this.parenthesizedExpression();
                        }
                        break;
                    case KotlinParser.CLASS:
                        {
                            this.state = 2138;
                            this.match(KotlinParser.CLASS);
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    callSuffix() {
        let _localctx = new CallSuffixContext(this._ctx, this.state);
        this.enterRule(_localctx, 170, KotlinParser.RULE_callSuffix);
        let _la;
        try {
            this.state = 2152;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 320, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2142;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.LANGLE) {
                            {
                                this.state = 2141;
                                this.typeArguments();
                            }
                        }
                        this.state = 2145;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.LPAREN) {
                            {
                                this.state = 2144;
                                this.valueArguments();
                            }
                        }
                        this.state = 2147;
                        this.annotatedLambda();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2149;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.LANGLE) {
                            {
                                this.state = 2148;
                                this.typeArguments();
                            }
                        }
                        this.state = 2151;
                        this.valueArguments();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotatedLambda() {
        let _localctx = new AnnotatedLambdaContext(this._ctx, this.state);
        this.enterRule(_localctx, 172, KotlinParser.RULE_annotatedLambda);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2157;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)))) !== 0)) {
                    {
                        {
                            this.state = 2154;
                            this.annotation();
                        }
                    }
                    this.state = 2159;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2161;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.IdentifierAt) {
                    {
                        this.state = 2160;
                        this.label();
                    }
                }
                this.state = 2166;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2163;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2168;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2169;
                this.lambdaLiteral();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueArguments() {
        let _localctx = new ValueArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 174, KotlinParser.RULE_valueArguments);
        let _la;
        try {
            let _alt;
            this.state = 2217;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 331, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2171;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2175;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2172;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2177;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2178;
                        this.match(KotlinParser.RPAREN);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2179;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2183;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2180;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2185;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 325, this._ctx);
                        }
                        this.state = 2186;
                        this.valueArgument();
                        this.state = 2203;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2190;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 2187;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 2192;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2193;
                                        this.match(KotlinParser.COMMA);
                                        this.state = 2197;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2194;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 2199;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 327, this._ctx);
                                        }
                                        this.state = 2200;
                                        this.valueArgument();
                                    }
                                }
                            }
                            this.state = 2205;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 328, this._ctx);
                        }
                        this.state = 2209;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2206;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2211;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2213;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.COMMA) {
                            {
                                this.state = 2212;
                                this.match(KotlinParser.COMMA);
                            }
                        }
                        this.state = 2215;
                        this.match(KotlinParser.RPAREN);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeArguments() {
        let _localctx = new TypeArgumentsContext(this._ctx, this.state);
        this.enterRule(_localctx, 176, KotlinParser.RULE_typeArguments);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2219;
                this.match(KotlinParser.LANGLE);
                this.state = 2223;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2220;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2225;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2226;
                this.typeProjection();
                this.state = 2243;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2230;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2227;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2232;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2233;
                                this.match(KotlinParser.COMMA);
                                this.state = 2237;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2234;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2239;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2240;
                                this.typeProjection();
                            }
                        }
                    }
                    this.state = 2245;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 335, this._ctx);
                }
                this.state = 2249;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2246;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2251;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2253;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 2252;
                        this.match(KotlinParser.COMMA);
                    }
                }
                this.state = 2255;
                this.match(KotlinParser.RANGLE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeProjection() {
        let _localctx = new TypeProjectionContext(this._ctx, this.state);
        this.enterRule(_localctx, 178, KotlinParser.RULE_typeProjection);
        try {
            this.state = 2262;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LPAREN:
                case KotlinParser.AT:
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.IN:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.EXPECT:
                case KotlinParser.ACTUAL:
                case KotlinParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2258;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 338, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2257;
                                    this.typeProjectionModifiers();
                                }
                                break;
                        }
                        this.state = 2260;
                        this.type_();
                    }
                    break;
                case KotlinParser.MULT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2261;
                        this.match(KotlinParser.MULT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeProjectionModifiers() {
        let _localctx = new TypeProjectionModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 180, KotlinParser.RULE_typeProjectionModifiers);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2265;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 2264;
                                    this.typeProjectionModifier();
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 2267;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 340, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeProjectionModifier() {
        let _localctx = new TypeProjectionModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 182, KotlinParser.RULE_typeProjectionModifier);
        let _la;
        try {
            this.state = 2277;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.IN:
                case KotlinParser.OUT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2269;
                        this.varianceModifier();
                        this.state = 2273;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2270;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2275;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                    }
                    break;
                case KotlinParser.AT:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2276;
                        this.annotation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    valueArgument() {
        let _localctx = new ValueArgumentContext(this._ctx, this.state);
        this.enterRule(_localctx, 184, KotlinParser.RULE_valueArgument);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2280;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 343, this._ctx)) {
                    case 1:
                        {
                            this.state = 2279;
                            this.annotation();
                        }
                        break;
                }
                this.state = 2285;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2282;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2287;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 344, this._ctx);
                }
                this.state = 2302;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 347, this._ctx)) {
                    case 1:
                        {
                            this.state = 2288;
                            this.simpleIdentifier();
                            this.state = 2292;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2289;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2294;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2295;
                            this.match(KotlinParser.ASSIGNMENT);
                            this.state = 2299;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
                            while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                if (_alt === 1) {
                                    {
                                        {
                                            this.state = 2296;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                }
                                this.state = 2301;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 346, this._ctx);
                            }
                        }
                        break;
                }
                this.state = 2305;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.MULT) {
                    {
                        this.state = 2304;
                        this.match(KotlinParser.MULT);
                    }
                }
                this.state = 2310;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2307;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2312;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 349, this._ctx);
                }
                this.state = 2313;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    primaryExpression() {
        let _localctx = new PrimaryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 186, KotlinParser.RULE_primaryExpression);
        try {
            this.state = 2329;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 350, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2315;
                        this.parenthesizedExpression();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2316;
                        this.literalConstant();
                    }
                    break;
                case 3:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2317;
                        this.stringLiteral();
                    }
                    break;
                case 4:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 2318;
                        this.simpleIdentifier();
                    }
                    break;
                case 5:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 2319;
                        this.callableReference();
                    }
                    break;
                case 6:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 2320;
                        this.functionLiteral();
                    }
                    break;
                case 7:
                    this.enterOuterAlt(_localctx, 7);
                    {
                        this.state = 2321;
                        this.objectLiteral();
                    }
                    break;
                case 8:
                    this.enterOuterAlt(_localctx, 8);
                    {
                        this.state = 2322;
                        this.collectionLiteral();
                    }
                    break;
                case 9:
                    this.enterOuterAlt(_localctx, 9);
                    {
                        this.state = 2323;
                        this.thisExpression();
                    }
                    break;
                case 10:
                    this.enterOuterAlt(_localctx, 10);
                    {
                        this.state = 2324;
                        this.superExpression();
                    }
                    break;
                case 11:
                    this.enterOuterAlt(_localctx, 11);
                    {
                        this.state = 2325;
                        this.ifExpression();
                    }
                    break;
                case 12:
                    this.enterOuterAlt(_localctx, 12);
                    {
                        this.state = 2326;
                        this.whenExpression();
                    }
                    break;
                case 13:
                    this.enterOuterAlt(_localctx, 13);
                    {
                        this.state = 2327;
                        this.tryExpression();
                    }
                    break;
                case 14:
                    this.enterOuterAlt(_localctx, 14);
                    {
                        this.state = 2328;
                        this.jumpExpression();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parenthesizedExpression() {
        let _localctx = new ParenthesizedExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 188, KotlinParser.RULE_parenthesizedExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2331;
                this.match(KotlinParser.LPAREN);
                this.state = 2335;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2332;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2337;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 351, this._ctx);
                }
                this.state = 2338;
                this.expression();
                this.state = 2342;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2339;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2344;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2345;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    collectionLiteral() {
        let _localctx = new CollectionLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 190, KotlinParser.RULE_collectionLiteral);
        let _la;
        try {
            let _alt;
            this.state = 2393;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 360, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2347;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 2351;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 353, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2348;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2353;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 353, this._ctx);
                        }
                        this.state = 2354;
                        this.expression();
                        this.state = 2371;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 356, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2358;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 2355;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 2360;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2361;
                                        this.match(KotlinParser.COMMA);
                                        this.state = 2365;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 355, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2362;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 2367;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 355, this._ctx);
                                        }
                                        this.state = 2368;
                                        this.expression();
                                    }
                                }
                            }
                            this.state = 2373;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 356, this._ctx);
                        }
                        this.state = 2377;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2374;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2379;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2381;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.COMMA) {
                            {
                                this.state = 2380;
                                this.match(KotlinParser.COMMA);
                            }
                        }
                        this.state = 2383;
                        this.match(KotlinParser.RSQUARE);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2385;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 2389;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2386;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2391;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2392;
                        this.match(KotlinParser.RSQUARE);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    literalConstant() {
        let _localctx = new LiteralConstantContext(this._ctx, this.state);
        this.enterRule(_localctx, 192, KotlinParser.RULE_literalConstant);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2395;
                _la = this._input.LA(1);
                if (!(((((_la - 136)) & ~0x1F) === 0 && ((1 << (_la - 136)) & ((1 << (KotlinParser.RealLiteral - 136)) | (1 << (KotlinParser.LongLiteral - 136)) | (1 << (KotlinParser.IntegerLiteral - 136)) | (1 << (KotlinParser.HexLiteral - 136)) | (1 << (KotlinParser.BinLiteral - 136)) | (1 << (KotlinParser.BooleanLiteral - 136)) | (1 << (KotlinParser.NullLiteral - 136)) | (1 << (KotlinParser.CharacterLiteral - 136)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    stringLiteral() {
        let _localctx = new StringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 194, KotlinParser.RULE_stringLiteral);
        try {
            this.state = 2399;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.QUOTE_OPEN:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2397;
                        this.lineStringLiteral();
                    }
                    break;
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2398;
                        this.multiLineStringLiteral();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lineStringLiteral() {
        let _localctx = new LineStringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 196, KotlinParser.RULE_lineStringLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2401;
                this.match(KotlinParser.QUOTE_OPEN);
                this.state = 2406;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (KotlinParser.LineStrRef - 161)) | (1 << (KotlinParser.LineStrText - 161)) | (1 << (KotlinParser.LineStrEscapedChar - 161)) | (1 << (KotlinParser.LineStrExprStart - 161)))) !== 0)) {
                    {
                        this.state = 2404;
                        this._errHandler.sync(this);
                        switch (this._input.LA(1)) {
                            case KotlinParser.LineStrRef:
                            case KotlinParser.LineStrText:
                            case KotlinParser.LineStrEscapedChar:
                                {
                                    this.state = 2402;
                                    this.lineStringContent();
                                }
                                break;
                            case KotlinParser.LineStrExprStart:
                                {
                                    this.state = 2403;
                                    this.lineStringExpression();
                                }
                                break;
                            default:
                                throw new NoViableAltException_1.NoViableAltException(this);
                        }
                    }
                    this.state = 2408;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2409;
                this.match(KotlinParser.QUOTE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiLineStringLiteral() {
        let _localctx = new MultiLineStringLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 198, KotlinParser.RULE_multiLineStringLiteral);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2411;
                this.match(KotlinParser.TRIPLE_QUOTE_OPEN);
                this.state = 2417;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (KotlinParser.MultiLineStringQuote - 166)) | (1 << (KotlinParser.MultiLineStrRef - 166)) | (1 << (KotlinParser.MultiLineStrText - 166)) | (1 << (KotlinParser.MultiLineStrExprStart - 166)))) !== 0)) {
                    {
                        this.state = 2415;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 364, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2412;
                                    this.multiLineStringContent();
                                }
                                break;
                            case 2:
                                {
                                    this.state = 2413;
                                    this.multiLineStringExpression();
                                }
                                break;
                            case 3:
                                {
                                    this.state = 2414;
                                    this.match(KotlinParser.MultiLineStringQuote);
                                }
                                break;
                        }
                    }
                    this.state = 2419;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2420;
                this.match(KotlinParser.TRIPLE_QUOTE_CLOSE);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lineStringContent() {
        let _localctx = new LineStringContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 200, KotlinParser.RULE_lineStringContent);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2422;
                _la = this._input.LA(1);
                if (!(((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (KotlinParser.LineStrRef - 161)) | (1 << (KotlinParser.LineStrText - 161)) | (1 << (KotlinParser.LineStrEscapedChar - 161)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lineStringExpression() {
        let _localctx = new LineStringExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 202, KotlinParser.RULE_lineStringExpression);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2424;
                this.match(KotlinParser.LineStrExprStart);
                this.state = 2425;
                this.expression();
                this.state = 2426;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiLineStringContent() {
        let _localctx = new MultiLineStringContentContext(this._ctx, this.state);
        this.enterRule(_localctx, 204, KotlinParser.RULE_multiLineStringContent);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2428;
                _la = this._input.LA(1);
                if (!(((((_la - 166)) & ~0x1F) === 0 && ((1 << (_la - 166)) & ((1 << (KotlinParser.MultiLineStringQuote - 166)) | (1 << (KotlinParser.MultiLineStrRef - 166)) | (1 << (KotlinParser.MultiLineStrText - 166)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiLineStringExpression() {
        let _localctx = new MultiLineStringExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 206, KotlinParser.RULE_multiLineStringExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2430;
                this.match(KotlinParser.MultiLineStrExprStart);
                this.state = 2434;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2431;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2436;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 366, this._ctx);
                }
                this.state = 2437;
                this.expression();
                this.state = 2441;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2438;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2443;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2444;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaLiteral() {
        let _localctx = new LambdaLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 208, KotlinParser.RULE_lambdaLiteral);
        let _la;
        try {
            let _alt;
            this.state = 2494;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 375, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2446;
                        this.match(KotlinParser.LCURL);
                        this.state = 2450;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 368, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2447;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2452;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 368, this._ctx);
                        }
                        this.state = 2453;
                        this.statements();
                        this.state = 2457;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2454;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2459;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2460;
                        this.match(KotlinParser.RCURL);
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2462;
                        this.match(KotlinParser.LCURL);
                        this.state = 2466;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 370, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2463;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2468;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 370, this._ctx);
                        }
                        this.state = 2470;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 371, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2469;
                                    this.lambdaParameters();
                                }
                                break;
                        }
                        this.state = 2475;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2472;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2477;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2478;
                        this.match(KotlinParser.ARROW);
                        this.state = 2482;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2479;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2484;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 373, this._ctx);
                        }
                        this.state = 2485;
                        this.statements();
                        this.state = 2489;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2486;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2491;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2492;
                        this.match(KotlinParser.RCURL);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaParameters() {
        let _localctx = new LambdaParametersContext(this._ctx, this.state);
        this.enterRule(_localctx, 210, KotlinParser.RULE_lambdaParameters);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2496;
                this.lambdaParameter();
                this.state = 2513;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2500;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2497;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2502;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 2503;
                                this.match(KotlinParser.COMMA);
                                this.state = 2507;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2504;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 2509;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 377, this._ctx);
                                }
                                this.state = 2510;
                                this.lambdaParameter();
                            }
                        }
                    }
                    this.state = 2515;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 378, this._ctx);
                }
                this.state = 2517;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.COMMA) {
                    {
                        this.state = 2516;
                        this.match(KotlinParser.COMMA);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    lambdaParameter() {
        let _localctx = new LambdaParameterContext(this._ctx, this.state);
        this.enterRule(_localctx, 212, KotlinParser.RULE_lambdaParameter);
        let _la;
        try {
            this.state = 2537;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.AT:
                case KotlinParser.IMPORT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.WHERE:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.EXPECT:
                case KotlinParser.ACTUAL:
                case KotlinParser.Identifier:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2519;
                        this.variableDeclaration();
                    }
                    break;
                case KotlinParser.LPAREN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2520;
                        this.multiVariableDeclaration();
                        this.state = 2535;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 382, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2524;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2521;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2526;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2527;
                                    this.match(KotlinParser.COLON);
                                    this.state = 2531;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2528;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2533;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2534;
                                    this.type_();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    anonymousFunction() {
        let _localctx = new AnonymousFunctionContext(this._ctx, this.state);
        this.enterRule(_localctx, 214, KotlinParser.RULE_anonymousFunction);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2539;
                this.match(KotlinParser.FUN);
                this.state = 2555;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 386, this._ctx)) {
                    case 1:
                        {
                            this.state = 2543;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2540;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2545;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2546;
                            this.type_();
                            this.state = 2550;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2547;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2552;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2553;
                            this.match(KotlinParser.DOT);
                        }
                        break;
                }
                this.state = 2560;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2557;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2562;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2563;
                this.functionValueParameters();
                this.state = 2578;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 390, this._ctx)) {
                    case 1:
                        {
                            this.state = 2567;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2564;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2569;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2570;
                            this.match(KotlinParser.COLON);
                            this.state = 2574;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2571;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2576;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2577;
                            this.type_();
                        }
                        break;
                }
                this.state = 2587;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 392, this._ctx)) {
                    case 1:
                        {
                            this.state = 2583;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2580;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2585;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2586;
                            this.typeConstraints();
                        }
                        break;
                }
                this.state = 2596;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 394, this._ctx)) {
                    case 1:
                        {
                            this.state = 2592;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2589;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2594;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2595;
                            this.functionBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionLiteral() {
        let _localctx = new FunctionLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 216, KotlinParser.RULE_functionLiteral);
        try {
            this.state = 2600;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.LCURL:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2598;
                        this.lambdaLiteral();
                    }
                    break;
                case KotlinParser.FUN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2599;
                        this.anonymousFunction();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    objectLiteral() {
        let _localctx = new ObjectLiteralContext(this._ctx, this.state);
        this.enterRule(_localctx, 218, KotlinParser.RULE_objectLiteral);
        let _la;
        try {
            let _alt;
            this.state = 2634;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 401, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2602;
                        this.match(KotlinParser.OBJECT);
                        this.state = 2606;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2603;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2608;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2609;
                        this.match(KotlinParser.COLON);
                        this.state = 2613;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 397, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2610;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2615;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 397, this._ctx);
                        }
                        this.state = 2616;
                        this.delegationSpecifiers();
                        this.state = 2624;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 399, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2620;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2617;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2622;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2623;
                                    this.classBody();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2626;
                        this.match(KotlinParser.OBJECT);
                        this.state = 2630;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2627;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2632;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2633;
                        this.classBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    thisExpression() {
        let _localctx = new ThisExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 220, KotlinParser.RULE_thisExpression);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2636;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.THIS_AT || _la === KotlinParser.THIS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    superExpression() {
        let _localctx = new SuperExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 222, KotlinParser.RULE_superExpression);
        let _la;
        try {
            this.state = 2662;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.SUPER:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2638;
                        this.match(KotlinParser.SUPER);
                        this.state = 2655;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 404, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2639;
                                    this.match(KotlinParser.LANGLE);
                                    this.state = 2643;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2640;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2645;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2646;
                                    this.type_();
                                    this.state = 2650;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2647;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2652;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2653;
                                    this.match(KotlinParser.RANGLE);
                                }
                                break;
                        }
                        this.state = 2659;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 405, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2657;
                                    this.match(KotlinParser.AT);
                                    this.state = 2658;
                                    this.simpleIdentifier();
                                }
                                break;
                        }
                    }
                    break;
                case KotlinParser.SUPER_AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2661;
                        this.match(KotlinParser.SUPER_AT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    controlStructureBody() {
        let _localctx = new ControlStructureBodyContext(this._ctx, this.state);
        this.enterRule(_localctx, 224, KotlinParser.RULE_controlStructureBody);
        try {
            this.state = 2666;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 407, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2664;
                        this.block();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2665;
                        this.statement();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    ifExpression() {
        let _localctx = new IfExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 226, KotlinParser.RULE_ifExpression);
        let _la;
        try {
            let _alt;
            this.state = 2762;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 423, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2668;
                        this.match(KotlinParser.IF);
                        this.state = 2672;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2669;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2674;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2675;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2679;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 409, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2676;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2681;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 409, this._ctx);
                        }
                        this.state = 2682;
                        this.expression();
                        this.state = 2686;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2683;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2688;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2689;
                        this.match(KotlinParser.RPAREN);
                        this.state = 2693;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 411, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2690;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2695;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 411, this._ctx);
                        }
                        this.state = 2696;
                        this.controlStructureBody();
                        this.state = 2714;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 415, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2698;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    if (_la === KotlinParser.SEMICOLON) {
                                        {
                                            this.state = 2697;
                                            this.match(KotlinParser.SEMICOLON);
                                        }
                                    }
                                    this.state = 2703;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                    while (_la === KotlinParser.NL) {
                                        {
                                            {
                                                this.state = 2700;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                        this.state = 2705;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                    }
                                    this.state = 2706;
                                    this.match(KotlinParser.ELSE);
                                    this.state = 2710;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 414, this._ctx);
                                    while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                        if (_alt === 1) {
                                            {
                                                {
                                                    this.state = 2707;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                        }
                                        this.state = 2712;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 414, this._ctx);
                                    }
                                    this.state = 2713;
                                    this.controlStructureBody();
                                }
                                break;
                        }
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2716;
                        this.match(KotlinParser.IF);
                        this.state = 2720;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2717;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2722;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2723;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2727;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 417, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2724;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2729;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 417, this._ctx);
                        }
                        this.state = 2730;
                        this.expression();
                        this.state = 2734;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2731;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2736;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2737;
                        this.match(KotlinParser.RPAREN);
                        this.state = 2741;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2738;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2743;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2751;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        if (_la === KotlinParser.SEMICOLON) {
                            {
                                this.state = 2744;
                                this.match(KotlinParser.SEMICOLON);
                                this.state = 2748;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 2745;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 2750;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                            }
                        }
                        this.state = 2753;
                        this.match(KotlinParser.ELSE);
                        this.state = 2757;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 422, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2754;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2759;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 422, this._ctx);
                        }
                        this.state = 2760;
                        this.controlStructureBody();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whenExpression() {
        let _localctx = new WhenExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 228, KotlinParser.RULE_whenExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2764;
                this.match(KotlinParser.WHEN);
                this.state = 2768;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 424, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2765;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2770;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 424, this._ctx);
                }
                this.state = 2775;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                if (_la === KotlinParser.LPAREN) {
                    {
                        this.state = 2771;
                        this.match(KotlinParser.LPAREN);
                        this.state = 2772;
                        this.expression();
                        this.state = 2773;
                        this.match(KotlinParser.RPAREN);
                    }
                }
                this.state = 2780;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2777;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2782;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2783;
                this.match(KotlinParser.LCURL);
                this.state = 2787;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 427, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2784;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2789;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 427, this._ctx);
                }
                this.state = 2799;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 429, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2790;
                                this.whenEntry();
                                this.state = 2794;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 428, this._ctx);
                                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                    if (_alt === 1) {
                                        {
                                            {
                                                this.state = 2791;
                                                this.match(KotlinParser.NL);
                                            }
                                        }
                                    }
                                    this.state = 2796;
                                    this._errHandler.sync(this);
                                    _alt = this.interpreter.adaptivePredict(this._input, 428, this._ctx);
                                }
                            }
                        }
                    }
                    this.state = 2801;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 429, this._ctx);
                }
                this.state = 2805;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2802;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2807;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2808;
                this.match(KotlinParser.RCURL);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whenEntry() {
        let _localctx = new WhenEntryContext(this._ctx, this.state);
        this.enterRule(_localctx, 230, KotlinParser.RULE_whenEntry);
        let _la;
        try {
            let _alt;
            this.state = 2865;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.LPAREN:
                case KotlinParser.LSQUARE:
                case KotlinParser.LCURL:
                case KotlinParser.ADD:
                case KotlinParser.SUB:
                case KotlinParser.INCR:
                case KotlinParser.DECR:
                case KotlinParser.EXCL_WS:
                case KotlinParser.EXCL_NO_WS:
                case KotlinParser.COLONCOLON:
                case KotlinParser.AT:
                case KotlinParser.RETURN_AT:
                case KotlinParser.CONTINUE_AT:
                case KotlinParser.BREAK_AT:
                case KotlinParser.THIS_AT:
                case KotlinParser.SUPER_AT:
                case KotlinParser.IMPORT:
                case KotlinParser.FUN:
                case KotlinParser.OBJECT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.THIS:
                case KotlinParser.SUPER:
                case KotlinParser.WHERE:
                case KotlinParser.IF:
                case KotlinParser.WHEN:
                case KotlinParser.TRY:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.THROW:
                case KotlinParser.RETURN:
                case KotlinParser.CONTINUE:
                case KotlinParser.BREAK:
                case KotlinParser.IS:
                case KotlinParser.IN:
                case KotlinParser.NOT_IS:
                case KotlinParser.NOT_IN:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.EXPECT:
                case KotlinParser.ACTUAL:
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                case KotlinParser.RealLiteral:
                case KotlinParser.LongLiteral:
                case KotlinParser.IntegerLiteral:
                case KotlinParser.HexLiteral:
                case KotlinParser.BinLiteral:
                case KotlinParser.BooleanLiteral:
                case KotlinParser.NullLiteral:
                case KotlinParser.Identifier:
                case KotlinParser.IdentifierAt:
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2810;
                        this.whenCondition();
                        this.state = 2827;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 433, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2814;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 2811;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 2816;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2817;
                                        this.match(KotlinParser.COMMA);
                                        this.state = 2821;
                                        this._errHandler.sync(this);
                                        _alt = this.interpreter.adaptivePredict(this._input, 432, this._ctx);
                                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                                            if (_alt === 1) {
                                                {
                                                    {
                                                        this.state = 2818;
                                                        this.match(KotlinParser.NL);
                                                    }
                                                }
                                            }
                                            this.state = 2823;
                                            this._errHandler.sync(this);
                                            _alt = this.interpreter.adaptivePredict(this._input, 432, this._ctx);
                                        }
                                        this.state = 2824;
                                        this.whenCondition();
                                    }
                                }
                            }
                            this.state = 2829;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 433, this._ctx);
                        }
                        this.state = 2833;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2830;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2835;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2836;
                        this.match(KotlinParser.ARROW);
                        this.state = 2840;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 435, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2837;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2842;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 435, this._ctx);
                        }
                        this.state = 2843;
                        this.controlStructureBody();
                        this.state = 2845;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 436, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2844;
                                    this.semi();
                                }
                                break;
                        }
                    }
                    break;
                case KotlinParser.ELSE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2847;
                        this.match(KotlinParser.ELSE);
                        this.state = 2851;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2848;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 2853;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 2854;
                        this.match(KotlinParser.ARROW);
                        this.state = 2858;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 438, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 2855;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 2860;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 438, this._ctx);
                        }
                        this.state = 2861;
                        this.controlStructureBody();
                        this.state = 2863;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 439, this._ctx)) {
                            case 1:
                                {
                                    this.state = 2862;
                                    this.semi();
                                }
                                break;
                        }
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whenCondition() {
        let _localctx = new WhenConditionContext(this._ctx, this.state);
        this.enterRule(_localctx, 232, KotlinParser.RULE_whenCondition);
        try {
            this.state = 2870;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.LPAREN:
                case KotlinParser.LSQUARE:
                case KotlinParser.LCURL:
                case KotlinParser.ADD:
                case KotlinParser.SUB:
                case KotlinParser.INCR:
                case KotlinParser.DECR:
                case KotlinParser.EXCL_WS:
                case KotlinParser.EXCL_NO_WS:
                case KotlinParser.COLONCOLON:
                case KotlinParser.AT:
                case KotlinParser.RETURN_AT:
                case KotlinParser.CONTINUE_AT:
                case KotlinParser.BREAK_AT:
                case KotlinParser.THIS_AT:
                case KotlinParser.SUPER_AT:
                case KotlinParser.IMPORT:
                case KotlinParser.FUN:
                case KotlinParser.OBJECT:
                case KotlinParser.CONSTRUCTOR:
                case KotlinParser.BY:
                case KotlinParser.COMPANION:
                case KotlinParser.INIT:
                case KotlinParser.THIS:
                case KotlinParser.SUPER:
                case KotlinParser.WHERE:
                case KotlinParser.IF:
                case KotlinParser.WHEN:
                case KotlinParser.TRY:
                case KotlinParser.CATCH:
                case KotlinParser.FINALLY:
                case KotlinParser.THROW:
                case KotlinParser.RETURN:
                case KotlinParser.CONTINUE:
                case KotlinParser.BREAK:
                case KotlinParser.OUT:
                case KotlinParser.GETTER:
                case KotlinParser.SETTER:
                case KotlinParser.DYNAMIC:
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                case KotlinParser.PUBLIC:
                case KotlinParser.PRIVATE:
                case KotlinParser.PROTECTED:
                case KotlinParser.INTERNAL:
                case KotlinParser.ENUM:
                case KotlinParser.SEALED:
                case KotlinParser.ANNOTATION:
                case KotlinParser.DATA:
                case KotlinParser.INNER:
                case KotlinParser.TAILREC:
                case KotlinParser.OPERATOR:
                case KotlinParser.INLINE:
                case KotlinParser.INFIX:
                case KotlinParser.EXTERNAL:
                case KotlinParser.SUSPEND:
                case KotlinParser.OVERRIDE:
                case KotlinParser.ABSTRACT:
                case KotlinParser.FINAL:
                case KotlinParser.OPEN:
                case KotlinParser.CONST:
                case KotlinParser.LATEINIT:
                case KotlinParser.VARARG:
                case KotlinParser.NOINLINE:
                case KotlinParser.CROSSINLINE:
                case KotlinParser.REIFIED:
                case KotlinParser.EXPECT:
                case KotlinParser.ACTUAL:
                case KotlinParser.QUOTE_OPEN:
                case KotlinParser.TRIPLE_QUOTE_OPEN:
                case KotlinParser.RealLiteral:
                case KotlinParser.LongLiteral:
                case KotlinParser.IntegerLiteral:
                case KotlinParser.HexLiteral:
                case KotlinParser.BinLiteral:
                case KotlinParser.BooleanLiteral:
                case KotlinParser.NullLiteral:
                case KotlinParser.Identifier:
                case KotlinParser.IdentifierAt:
                case KotlinParser.CharacterLiteral:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2867;
                        this.expression();
                    }
                    break;
                case KotlinParser.IN:
                case KotlinParser.NOT_IN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2868;
                        this.rangeTest();
                    }
                    break;
                case KotlinParser.IS:
                case KotlinParser.NOT_IS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2869;
                        this.typeTest();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    rangeTest() {
        let _localctx = new RangeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 234, KotlinParser.RULE_rangeTest);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2872;
                this.inOperator();
                this.state = 2876;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 442, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2873;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2878;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 442, this._ctx);
                }
                this.state = 2879;
                this.expression();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    typeTest() {
        let _localctx = new TypeTestContext(this._ctx, this.state);
        this.enterRule(_localctx, 236, KotlinParser.RULE_typeTest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2881;
                this.isOperator();
                this.state = 2885;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2882;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2887;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2888;
                this.type_();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    tryExpression() {
        let _localctx = new TryExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 238, KotlinParser.RULE_tryExpression);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2890;
                this.match(KotlinParser.TRY);
                this.state = 2894;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2891;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2896;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2897;
                this.block();
                this.state = 2925;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 450, this._ctx)) {
                    case 1:
                        {
                            this.state = 2905;
                            this._errHandler.sync(this);
                            _alt = 1;
                            do {
                                switch (_alt) {
                                    case 1:
                                        {
                                            {
                                                this.state = 2901;
                                                this._errHandler.sync(this);
                                                _la = this._input.LA(1);
                                                while (_la === KotlinParser.NL) {
                                                    {
                                                        {
                                                            this.state = 2898;
                                                            this.match(KotlinParser.NL);
                                                        }
                                                    }
                                                    this.state = 2903;
                                                    this._errHandler.sync(this);
                                                    _la = this._input.LA(1);
                                                }
                                                this.state = 2904;
                                                this.catchBlock();
                                            }
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                                this.state = 2907;
                                this._errHandler.sync(this);
                                _alt = this.interpreter.adaptivePredict(this._input, 446, this._ctx);
                            } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                            this.state = 2916;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 448, this._ctx)) {
                                case 1:
                                    {
                                        this.state = 2912;
                                        this._errHandler.sync(this);
                                        _la = this._input.LA(1);
                                        while (_la === KotlinParser.NL) {
                                            {
                                                {
                                                    this.state = 2909;
                                                    this.match(KotlinParser.NL);
                                                }
                                            }
                                            this.state = 2914;
                                            this._errHandler.sync(this);
                                            _la = this._input.LA(1);
                                        }
                                        this.state = 2915;
                                        this.finallyBlock();
                                    }
                                    break;
                            }
                        }
                        break;
                    case 2:
                        {
                            this.state = 2921;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                            while (_la === KotlinParser.NL) {
                                {
                                    {
                                        this.state = 2918;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                                this.state = 2923;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                            }
                            this.state = 2924;
                            this.finallyBlock();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    catchBlock() {
        let _localctx = new CatchBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 240, KotlinParser.RULE_catchBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2927;
                this.match(KotlinParser.CATCH);
                this.state = 2931;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2928;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2933;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2934;
                this.match(KotlinParser.LPAREN);
                this.state = 2938;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.AT || ((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)))) !== 0)) {
                    {
                        {
                            this.state = 2935;
                            this.annotation();
                        }
                    }
                    this.state = 2940;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2941;
                this.simpleIdentifier();
                this.state = 2942;
                this.match(KotlinParser.COLON);
                this.state = 2943;
                this.userType();
                this.state = 2944;
                this.match(KotlinParser.RPAREN);
                this.state = 2948;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2945;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2950;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2951;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    finallyBlock() {
        let _localctx = new FinallyBlockContext(this._ctx, this.state);
        this.enterRule(_localctx, 242, KotlinParser.RULE_finallyBlock);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2953;
                this.match(KotlinParser.FINALLY);
                this.state = 2957;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2954;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2959;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2960;
                this.block();
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    loopStatement() {
        let _localctx = new LoopStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 244, KotlinParser.RULE_loopStatement);
        try {
            this.state = 2965;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.FOR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2962;
                        this.forStatement();
                    }
                    break;
                case KotlinParser.WHILE:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 2963;
                        this.whileStatement();
                    }
                    break;
                case KotlinParser.DO:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 2964;
                        this.doWhileStatement();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    forStatement() {
        let _localctx = new ForStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 246, KotlinParser.RULE_forStatement);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 2967;
                this.match(KotlinParser.FOR);
                this.state = 2971;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 2968;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 2973;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 2974;
                this.match(KotlinParser.LPAREN);
                this.state = 2978;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 457, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2975;
                                this.annotation();
                            }
                        }
                    }
                    this.state = 2980;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 457, this._ctx);
                }
                this.state = 2983;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.NL:
                    case KotlinParser.AT:
                    case KotlinParser.IMPORT:
                    case KotlinParser.CONSTRUCTOR:
                    case KotlinParser.BY:
                    case KotlinParser.COMPANION:
                    case KotlinParser.INIT:
                    case KotlinParser.WHERE:
                    case KotlinParser.CATCH:
                    case KotlinParser.FINALLY:
                    case KotlinParser.OUT:
                    case KotlinParser.GETTER:
                    case KotlinParser.SETTER:
                    case KotlinParser.DYNAMIC:
                    case KotlinParser.AT_FIELD:
                    case KotlinParser.AT_PROPERTY:
                    case KotlinParser.AT_GET:
                    case KotlinParser.AT_SET:
                    case KotlinParser.AT_RECEIVER:
                    case KotlinParser.AT_PARAM:
                    case KotlinParser.AT_SETPARAM:
                    case KotlinParser.AT_DELEGATE:
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                    case KotlinParser.CONST:
                    case KotlinParser.LATEINIT:
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                    case KotlinParser.REIFIED:
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                    case KotlinParser.Identifier:
                        {
                            this.state = 2981;
                            this.variableDeclaration();
                        }
                        break;
                    case KotlinParser.LPAREN:
                        {
                            this.state = 2982;
                            this.multiVariableDeclaration();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 2985;
                this.match(KotlinParser.IN);
                this.state = 2986;
                this.expression();
                this.state = 2987;
                this.match(KotlinParser.RPAREN);
                this.state = 2991;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 459, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 2988;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 2993;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 459, this._ctx);
                }
                this.state = 2995;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 460, this._ctx)) {
                    case 1:
                        {
                            this.state = 2994;
                            this.controlStructureBody();
                        }
                        break;
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    whileStatement() {
        let _localctx = new WhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 248, KotlinParser.RULE_whileStatement);
        let _la;
        try {
            let _alt;
            this.state = 3033;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 465, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 2997;
                        this.match(KotlinParser.WHILE);
                        this.state = 3001;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 2998;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3003;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3004;
                        this.match(KotlinParser.LPAREN);
                        this.state = 3005;
                        this.expression();
                        this.state = 3006;
                        this.match(KotlinParser.RPAREN);
                        this.state = 3010;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 462, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 3007;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 3012;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 462, this._ctx);
                        }
                        this.state = 3013;
                        this.controlStructureBody();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3015;
                        this.match(KotlinParser.WHILE);
                        this.state = 3019;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3016;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3021;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3022;
                        this.match(KotlinParser.LPAREN);
                        this.state = 3023;
                        this.expression();
                        this.state = 3024;
                        this.match(KotlinParser.RPAREN);
                        this.state = 3028;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3025;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3030;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3031;
                        this.match(KotlinParser.SEMICOLON);
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    doWhileStatement() {
        let _localctx = new DoWhileStatementContext(this._ctx, this.state);
        this.enterRule(_localctx, 250, KotlinParser.RULE_doWhileStatement);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3035;
                this.match(KotlinParser.DO);
                this.state = 3039;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 466, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 3036;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 3041;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 466, this._ctx);
                }
                this.state = 3043;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 467, this._ctx)) {
                    case 1:
                        {
                            this.state = 3042;
                            this.controlStructureBody();
                        }
                        break;
                }
                this.state = 3048;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 3045;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 3050;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 3051;
                this.match(KotlinParser.WHILE);
                this.state = 3055;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while (_la === KotlinParser.NL) {
                    {
                        {
                            this.state = 3052;
                            this.match(KotlinParser.NL);
                        }
                    }
                    this.state = 3057;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                this.state = 3058;
                this.match(KotlinParser.LPAREN);
                this.state = 3059;
                this.expression();
                this.state = 3060;
                this.match(KotlinParser.RPAREN);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    jumpExpression() {
        let _localctx = new JumpExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 252, KotlinParser.RULE_jumpExpression);
        let _la;
        try {
            let _alt;
            this.state = 3078;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.THROW:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3062;
                        this.match(KotlinParser.THROW);
                        this.state = 3066;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 470, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 3063;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 3068;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 470, this._ctx);
                        }
                        this.state = 3069;
                        this.expression();
                    }
                    break;
                case KotlinParser.RETURN_AT:
                case KotlinParser.RETURN:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3070;
                        _la = this._input.LA(1);
                        if (!(_la === KotlinParser.RETURN_AT || _la === KotlinParser.RETURN)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 3072;
                        this._errHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this._input, 471, this._ctx)) {
                            case 1:
                                {
                                    this.state = 3071;
                                    this.expression();
                                }
                                break;
                        }
                    }
                    break;
                case KotlinParser.CONTINUE:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 3074;
                        this.match(KotlinParser.CONTINUE);
                    }
                    break;
                case KotlinParser.CONTINUE_AT:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 3075;
                        this.match(KotlinParser.CONTINUE_AT);
                    }
                    break;
                case KotlinParser.BREAK:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 3076;
                        this.match(KotlinParser.BREAK);
                    }
                    break;
                case KotlinParser.BREAK_AT:
                    this.enterOuterAlt(_localctx, 6);
                    {
                        this.state = 3077;
                        this.match(KotlinParser.BREAK_AT);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    callableReference() {
        let _localctx = new CallableReferenceContext(this._ctx, this.state);
        this.enterRule(_localctx, 254, KotlinParser.RULE_callableReference);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                {
                    this.state = 3081;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    if (_la === KotlinParser.LPAREN || _la === KotlinParser.AT || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (KotlinParser.IMPORT - 60)) | (1 << (KotlinParser.CONSTRUCTOR - 60)) | (1 << (KotlinParser.BY - 60)) | (1 << (KotlinParser.COMPANION - 60)) | (1 << (KotlinParser.INIT - 60)) | (1 << (KotlinParser.WHERE - 60)) | (1 << (KotlinParser.CATCH - 60)) | (1 << (KotlinParser.FINALLY - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (KotlinParser.OUT - 94)) | (1 << (KotlinParser.GETTER - 94)) | (1 << (KotlinParser.SETTER - 94)) | (1 << (KotlinParser.DYNAMIC - 94)) | (1 << (KotlinParser.AT_FIELD - 94)) | (1 << (KotlinParser.AT_PROPERTY - 94)) | (1 << (KotlinParser.AT_GET - 94)) | (1 << (KotlinParser.AT_SET - 94)) | (1 << (KotlinParser.AT_RECEIVER - 94)) | (1 << (KotlinParser.AT_PARAM - 94)) | (1 << (KotlinParser.AT_SETPARAM - 94)) | (1 << (KotlinParser.AT_DELEGATE - 94)) | (1 << (KotlinParser.PUBLIC - 94)) | (1 << (KotlinParser.PRIVATE - 94)) | (1 << (KotlinParser.PROTECTED - 94)) | (1 << (KotlinParser.INTERNAL - 94)) | (1 << (KotlinParser.ENUM - 94)) | (1 << (KotlinParser.SEALED - 94)) | (1 << (KotlinParser.ANNOTATION - 94)) | (1 << (KotlinParser.DATA - 94)) | (1 << (KotlinParser.INNER - 94)) | (1 << (KotlinParser.TAILREC - 94)) | (1 << (KotlinParser.OPERATOR - 94)) | (1 << (KotlinParser.INLINE - 94)) | (1 << (KotlinParser.INFIX - 94)) | (1 << (KotlinParser.EXTERNAL - 94)) | (1 << (KotlinParser.SUSPEND - 94)) | (1 << (KotlinParser.OVERRIDE - 94)) | (1 << (KotlinParser.ABSTRACT - 94)) | (1 << (KotlinParser.FINAL - 94)) | (1 << (KotlinParser.OPEN - 94)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (KotlinParser.CONST - 126)) | (1 << (KotlinParser.LATEINIT - 126)) | (1 << (KotlinParser.VARARG - 126)) | (1 << (KotlinParser.NOINLINE - 126)) | (1 << (KotlinParser.CROSSINLINE - 126)) | (1 << (KotlinParser.REIFIED - 126)) | (1 << (KotlinParser.EXPECT - 126)) | (1 << (KotlinParser.ACTUAL - 126)) | (1 << (KotlinParser.Identifier - 126)))) !== 0)) {
                        {
                            this.state = 3080;
                            this.receiverType();
                        }
                    }
                    this.state = 3086;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === KotlinParser.NL) {
                        {
                            {
                                this.state = 3083;
                                this.match(KotlinParser.NL);
                            }
                        }
                        this.state = 3088;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 3089;
                    this.match(KotlinParser.COLONCOLON);
                    this.state = 3093;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                    while (_la === KotlinParser.NL) {
                        {
                            {
                                this.state = 3090;
                                this.match(KotlinParser.NL);
                            }
                        }
                        this.state = 3095;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                    }
                    this.state = 3098;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                        case KotlinParser.IMPORT:
                        case KotlinParser.CONSTRUCTOR:
                        case KotlinParser.BY:
                        case KotlinParser.COMPANION:
                        case KotlinParser.INIT:
                        case KotlinParser.WHERE:
                        case KotlinParser.CATCH:
                        case KotlinParser.FINALLY:
                        case KotlinParser.OUT:
                        case KotlinParser.GETTER:
                        case KotlinParser.SETTER:
                        case KotlinParser.DYNAMIC:
                        case KotlinParser.PUBLIC:
                        case KotlinParser.PRIVATE:
                        case KotlinParser.PROTECTED:
                        case KotlinParser.INTERNAL:
                        case KotlinParser.ENUM:
                        case KotlinParser.SEALED:
                        case KotlinParser.ANNOTATION:
                        case KotlinParser.DATA:
                        case KotlinParser.INNER:
                        case KotlinParser.TAILREC:
                        case KotlinParser.OPERATOR:
                        case KotlinParser.INLINE:
                        case KotlinParser.INFIX:
                        case KotlinParser.EXTERNAL:
                        case KotlinParser.SUSPEND:
                        case KotlinParser.OVERRIDE:
                        case KotlinParser.ABSTRACT:
                        case KotlinParser.FINAL:
                        case KotlinParser.OPEN:
                        case KotlinParser.CONST:
                        case KotlinParser.LATEINIT:
                        case KotlinParser.VARARG:
                        case KotlinParser.NOINLINE:
                        case KotlinParser.CROSSINLINE:
                        case KotlinParser.REIFIED:
                        case KotlinParser.EXPECT:
                        case KotlinParser.ACTUAL:
                        case KotlinParser.Identifier:
                            {
                                this.state = 3096;
                                this.simpleIdentifier();
                            }
                            break;
                        case KotlinParser.CLASS:
                            {
                                this.state = 3097;
                                this.match(KotlinParser.CLASS);
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    assignmentAndOperator() {
        let _localctx = new AssignmentAndOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 256, KotlinParser.RULE_assignmentAndOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3100;
                _la = this._input.LA(1);
                if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (KotlinParser.ADD_ASSIGNMENT - 29)) | (1 << (KotlinParser.SUB_ASSIGNMENT - 29)) | (1 << (KotlinParser.MULT_ASSIGNMENT - 29)) | (1 << (KotlinParser.DIV_ASSIGNMENT - 29)) | (1 << (KotlinParser.MOD_ASSIGNMENT - 29)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    equalityOperator() {
        let _localctx = new EqualityOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 258, KotlinParser.RULE_equalityOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3102;
                _la = this._input.LA(1);
                if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (KotlinParser.EXCL_EQ - 48)) | (1 << (KotlinParser.EXCL_EQEQ - 48)) | (1 << (KotlinParser.EQEQ - 48)) | (1 << (KotlinParser.EQEQEQ - 48)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    comparisonOperator() {
        let _localctx = new ComparisonOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 260, KotlinParser.RULE_comparisonOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3104;
                _la = this._input.LA(1);
                if (!(((((_la - 44)) & ~0x1F) === 0 && ((1 << (_la - 44)) & ((1 << (KotlinParser.LANGLE - 44)) | (1 << (KotlinParser.RANGLE - 44)) | (1 << (KotlinParser.LE - 44)) | (1 << (KotlinParser.GE - 44)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inOperator() {
        let _localctx = new InOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 262, KotlinParser.RULE_inOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3106;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IN || _la === KotlinParser.NOT_IN)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    isOperator() {
        let _localctx = new IsOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 264, KotlinParser.RULE_isOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3108;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IS || _la === KotlinParser.NOT_IS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    additiveOperator() {
        let _localctx = new AdditiveOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 266, KotlinParser.RULE_additiveOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3110;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.ADD || _la === KotlinParser.SUB)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiplicativeOperator() {
        let _localctx = new MultiplicativeOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 268, KotlinParser.RULE_multiplicativeOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3112;
                _la = this._input.LA(1);
                if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << KotlinParser.MULT) | (1 << KotlinParser.MOD) | (1 << KotlinParser.DIV))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    asOperator() {
        let _localctx = new AsOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 270, KotlinParser.RULE_asOperator);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3114;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.AS_SAFE || _la === KotlinParser.AS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    prefixUnaryOperator() {
        let _localctx = new PrefixUnaryOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 272, KotlinParser.RULE_prefixUnaryOperator);
        try {
            this.state = 3121;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.INCR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3116;
                        this.match(KotlinParser.INCR);
                    }
                    break;
                case KotlinParser.DECR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3117;
                        this.match(KotlinParser.DECR);
                    }
                    break;
                case KotlinParser.SUB:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 3118;
                        this.match(KotlinParser.SUB);
                    }
                    break;
                case KotlinParser.ADD:
                    this.enterOuterAlt(_localctx, 4);
                    {
                        this.state = 3119;
                        this.match(KotlinParser.ADD);
                    }
                    break;
                case KotlinParser.EXCL_WS:
                case KotlinParser.EXCL_NO_WS:
                    this.enterOuterAlt(_localctx, 5);
                    {
                        this.state = 3120;
                        this.excl();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    postfixUnaryOperator() {
        let _localctx = new PostfixUnaryOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 274, KotlinParser.RULE_postfixUnaryOperator);
        try {
            this.state = 3127;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.INCR:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3123;
                        this.match(KotlinParser.INCR);
                    }
                    break;
                case KotlinParser.DECR:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3124;
                        this.match(KotlinParser.DECR);
                    }
                    break;
                case KotlinParser.EXCL_NO_WS:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 3125;
                        this.match(KotlinParser.EXCL_NO_WS);
                        this.state = 3126;
                        this.excl();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    memberAccessOperator() {
        let _localctx = new MemberAccessOperatorContext(this._ctx, this.state);
        this.enterRule(_localctx, 276, KotlinParser.RULE_memberAccessOperator);
        try {
            this.state = 3132;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.DOT:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3129;
                        this.match(KotlinParser.DOT);
                    }
                    break;
                case KotlinParser.QUEST_NO_WS:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3130;
                        this.safeNav();
                    }
                    break;
                case KotlinParser.COLONCOLON:
                    this.enterOuterAlt(_localctx, 3);
                    {
                        this.state = 3131;
                        this.match(KotlinParser.COLONCOLON);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modifiers() {
        let _localctx = new ModifiersContext(this._ctx, this.state);
        this.enterRule(_localctx, 278, KotlinParser.RULE_modifiers);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3136;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                this.state = 3136;
                                this._errHandler.sync(this);
                                switch (this._input.LA(1)) {
                                    case KotlinParser.AT:
                                    case KotlinParser.AT_FIELD:
                                    case KotlinParser.AT_PROPERTY:
                                    case KotlinParser.AT_GET:
                                    case KotlinParser.AT_SET:
                                    case KotlinParser.AT_RECEIVER:
                                    case KotlinParser.AT_PARAM:
                                    case KotlinParser.AT_SETPARAM:
                                    case KotlinParser.AT_DELEGATE:
                                        {
                                            this.state = 3134;
                                            this.annotation();
                                        }
                                        break;
                                    case KotlinParser.PUBLIC:
                                    case KotlinParser.PRIVATE:
                                    case KotlinParser.PROTECTED:
                                    case KotlinParser.INTERNAL:
                                    case KotlinParser.ENUM:
                                    case KotlinParser.SEALED:
                                    case KotlinParser.ANNOTATION:
                                    case KotlinParser.DATA:
                                    case KotlinParser.INNER:
                                    case KotlinParser.TAILREC:
                                    case KotlinParser.OPERATOR:
                                    case KotlinParser.INLINE:
                                    case KotlinParser.INFIX:
                                    case KotlinParser.EXTERNAL:
                                    case KotlinParser.SUSPEND:
                                    case KotlinParser.OVERRIDE:
                                    case KotlinParser.ABSTRACT:
                                    case KotlinParser.FINAL:
                                    case KotlinParser.OPEN:
                                    case KotlinParser.CONST:
                                    case KotlinParser.LATEINIT:
                                    case KotlinParser.VARARG:
                                    case KotlinParser.NOINLINE:
                                    case KotlinParser.CROSSINLINE:
                                    case KotlinParser.EXPECT:
                                    case KotlinParser.ACTUAL:
                                        {
                                            this.state = 3135;
                                            this.modifier();
                                        }
                                        break;
                                    default:
                                        throw new NoViableAltException_1.NoViableAltException(this);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 3138;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 481, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    modifier() {
        let _localctx = new ModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 280, KotlinParser.RULE_modifier);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3148;
                this._errHandler.sync(this);
                switch (this._input.LA(1)) {
                    case KotlinParser.ENUM:
                    case KotlinParser.SEALED:
                    case KotlinParser.ANNOTATION:
                    case KotlinParser.DATA:
                    case KotlinParser.INNER:
                        {
                            this.state = 3140;
                            this.classModifier();
                        }
                        break;
                    case KotlinParser.OVERRIDE:
                    case KotlinParser.LATEINIT:
                        {
                            this.state = 3141;
                            this.memberModifier();
                        }
                        break;
                    case KotlinParser.PUBLIC:
                    case KotlinParser.PRIVATE:
                    case KotlinParser.PROTECTED:
                    case KotlinParser.INTERNAL:
                        {
                            this.state = 3142;
                            this.visibilityModifier();
                        }
                        break;
                    case KotlinParser.TAILREC:
                    case KotlinParser.OPERATOR:
                    case KotlinParser.INLINE:
                    case KotlinParser.INFIX:
                    case KotlinParser.EXTERNAL:
                    case KotlinParser.SUSPEND:
                        {
                            this.state = 3143;
                            this.functionModifier();
                        }
                        break;
                    case KotlinParser.CONST:
                        {
                            this.state = 3144;
                            this.propertyModifier();
                        }
                        break;
                    case KotlinParser.ABSTRACT:
                    case KotlinParser.FINAL:
                    case KotlinParser.OPEN:
                        {
                            this.state = 3145;
                            this.inheritanceModifier();
                        }
                        break;
                    case KotlinParser.VARARG:
                    case KotlinParser.NOINLINE:
                    case KotlinParser.CROSSINLINE:
                        {
                            this.state = 3146;
                            this.parameterModifier();
                        }
                        break;
                    case KotlinParser.EXPECT:
                    case KotlinParser.ACTUAL:
                        {
                            this.state = 3147;
                            this.platformModifier();
                        }
                        break;
                    default:
                        throw new NoViableAltException_1.NoViableAltException(this);
                }
                this.state = 3153;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 483, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 3150;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 3155;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 483, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    classModifier() {
        let _localctx = new ClassModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 282, KotlinParser.RULE_classModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3156;
                _la = this._input.LA(1);
                if (!(((((_la - 111)) & ~0x1F) === 0 && ((1 << (_la - 111)) & ((1 << (KotlinParser.ENUM - 111)) | (1 << (KotlinParser.SEALED - 111)) | (1 << (KotlinParser.ANNOTATION - 111)) | (1 << (KotlinParser.DATA - 111)) | (1 << (KotlinParser.INNER - 111)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    memberModifier() {
        let _localctx = new MemberModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 284, KotlinParser.RULE_memberModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3158;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.OVERRIDE || _la === KotlinParser.LATEINIT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    visibilityModifier() {
        let _localctx = new VisibilityModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 286, KotlinParser.RULE_visibilityModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3160;
                _la = this._input.LA(1);
                if (!(((((_la - 107)) & ~0x1F) === 0 && ((1 << (_la - 107)) & ((1 << (KotlinParser.PUBLIC - 107)) | (1 << (KotlinParser.PRIVATE - 107)) | (1 << (KotlinParser.PROTECTED - 107)) | (1 << (KotlinParser.INTERNAL - 107)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    varianceModifier() {
        let _localctx = new VarianceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 288, KotlinParser.RULE_varianceModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3162;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.IN || _la === KotlinParser.OUT)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    functionModifier() {
        let _localctx = new FunctionModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 290, KotlinParser.RULE_functionModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3164;
                _la = this._input.LA(1);
                if (!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (KotlinParser.TAILREC - 116)) | (1 << (KotlinParser.OPERATOR - 116)) | (1 << (KotlinParser.INLINE - 116)) | (1 << (KotlinParser.INFIX - 116)) | (1 << (KotlinParser.EXTERNAL - 116)) | (1 << (KotlinParser.SUSPEND - 116)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    propertyModifier() {
        let _localctx = new PropertyModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 292, KotlinParser.RULE_propertyModifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3166;
                this.match(KotlinParser.CONST);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    inheritanceModifier() {
        let _localctx = new InheritanceModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 294, KotlinParser.RULE_inheritanceModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3168;
                _la = this._input.LA(1);
                if (!(((((_la - 123)) & ~0x1F) === 0 && ((1 << (_la - 123)) & ((1 << (KotlinParser.ABSTRACT - 123)) | (1 << (KotlinParser.FINAL - 123)) | (1 << (KotlinParser.OPEN - 123)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    parameterModifier() {
        let _localctx = new ParameterModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 296, KotlinParser.RULE_parameterModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3170;
                _la = this._input.LA(1);
                if (!(((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (KotlinParser.VARARG - 128)) | (1 << (KotlinParser.NOINLINE - 128)) | (1 << (KotlinParser.CROSSINLINE - 128)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    reificationModifier() {
        let _localctx = new ReificationModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 298, KotlinParser.RULE_reificationModifier);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3172;
                this.match(KotlinParser.REIFIED);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    platformModifier() {
        let _localctx = new PlatformModifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 300, KotlinParser.RULE_platformModifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3174;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.EXPECT || _la === KotlinParser.ACTUAL)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    label() {
        let _localctx = new LabelContext(this._ctx, this.state);
        this.enterRule(_localctx, 302, KotlinParser.RULE_label);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3176;
                this.match(KotlinParser.IdentifierAt);
                this.state = 3180;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 484, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 3177;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 3182;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 484, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotation() {
        let _localctx = new AnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 304, KotlinParser.RULE_annotation);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3185;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 485, this._ctx)) {
                    case 1:
                        {
                            this.state = 3183;
                            this.singleAnnotation();
                        }
                        break;
                    case 2:
                        {
                            this.state = 3184;
                            this.multiAnnotation();
                        }
                        break;
                }
                this.state = 3190;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 486, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 3187;
                                this.match(KotlinParser.NL);
                            }
                        }
                    }
                    this.state = 3192;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 486, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    singleAnnotation() {
        let _localctx = new SingleAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 306, KotlinParser.RULE_singleAnnotation);
        let _la;
        try {
            this.state = 3211;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3193;
                        this.annotationUseSiteTarget();
                        this.state = 3197;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3194;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3199;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3200;
                        this.match(KotlinParser.COLON);
                        this.state = 3204;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3201;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3206;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3207;
                        this.unescapedAnnotation();
                    }
                    break;
                case KotlinParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3209;
                        this.match(KotlinParser.AT);
                        this.state = 3210;
                        this.unescapedAnnotation();
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    multiAnnotation() {
        let _localctx = new MultiAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 308, KotlinParser.RULE_multiAnnotation);
        let _la;
        try {
            this.state = 3244;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.AT_FIELD:
                case KotlinParser.AT_PROPERTY:
                case KotlinParser.AT_GET:
                case KotlinParser.AT_SET:
                case KotlinParser.AT_RECEIVER:
                case KotlinParser.AT_PARAM:
                case KotlinParser.AT_SETPARAM:
                case KotlinParser.AT_DELEGATE:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3213;
                        this.annotationUseSiteTarget();
                        this.state = 3217;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3214;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3219;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3220;
                        this.match(KotlinParser.COLON);
                        this.state = 3224;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        while (_la === KotlinParser.NL) {
                            {
                                {
                                    this.state = 3221;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            this.state = 3226;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        }
                        this.state = 3227;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 3229;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 3228;
                                    this.unescapedAnnotation();
                                }
                            }
                            this.state = 3231;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (KotlinParser.IMPORT - 60)) | (1 << (KotlinParser.CONSTRUCTOR - 60)) | (1 << (KotlinParser.BY - 60)) | (1 << (KotlinParser.COMPANION - 60)) | (1 << (KotlinParser.INIT - 60)) | (1 << (KotlinParser.WHERE - 60)) | (1 << (KotlinParser.CATCH - 60)) | (1 << (KotlinParser.FINALLY - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (KotlinParser.OUT - 94)) | (1 << (KotlinParser.GETTER - 94)) | (1 << (KotlinParser.SETTER - 94)) | (1 << (KotlinParser.DYNAMIC - 94)) | (1 << (KotlinParser.PUBLIC - 94)) | (1 << (KotlinParser.PRIVATE - 94)) | (1 << (KotlinParser.PROTECTED - 94)) | (1 << (KotlinParser.INTERNAL - 94)) | (1 << (KotlinParser.ENUM - 94)) | (1 << (KotlinParser.SEALED - 94)) | (1 << (KotlinParser.ANNOTATION - 94)) | (1 << (KotlinParser.DATA - 94)) | (1 << (KotlinParser.INNER - 94)) | (1 << (KotlinParser.TAILREC - 94)) | (1 << (KotlinParser.OPERATOR - 94)) | (1 << (KotlinParser.INLINE - 94)) | (1 << (KotlinParser.INFIX - 94)) | (1 << (KotlinParser.EXTERNAL - 94)) | (1 << (KotlinParser.SUSPEND - 94)) | (1 << (KotlinParser.OVERRIDE - 94)) | (1 << (KotlinParser.ABSTRACT - 94)) | (1 << (KotlinParser.FINAL - 94)) | (1 << (KotlinParser.OPEN - 94)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (KotlinParser.CONST - 126)) | (1 << (KotlinParser.LATEINIT - 126)) | (1 << (KotlinParser.VARARG - 126)) | (1 << (KotlinParser.NOINLINE - 126)) | (1 << (KotlinParser.CROSSINLINE - 126)) | (1 << (KotlinParser.REIFIED - 126)) | (1 << (KotlinParser.EXPECT - 126)) | (1 << (KotlinParser.ACTUAL - 126)) | (1 << (KotlinParser.Identifier - 126)))) !== 0));
                        this.state = 3233;
                        this.match(KotlinParser.RSQUARE);
                    }
                    break;
                case KotlinParser.AT:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3235;
                        this.match(KotlinParser.AT);
                        this.state = 3236;
                        this.match(KotlinParser.LSQUARE);
                        this.state = 3238;
                        this._errHandler.sync(this);
                        _la = this._input.LA(1);
                        do {
                            {
                                {
                                    this.state = 3237;
                                    this.unescapedAnnotation();
                                }
                            }
                            this.state = 3240;
                            this._errHandler.sync(this);
                            _la = this._input.LA(1);
                        } while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (KotlinParser.IMPORT - 60)) | (1 << (KotlinParser.CONSTRUCTOR - 60)) | (1 << (KotlinParser.BY - 60)) | (1 << (KotlinParser.COMPANION - 60)) | (1 << (KotlinParser.INIT - 60)) | (1 << (KotlinParser.WHERE - 60)) | (1 << (KotlinParser.CATCH - 60)) | (1 << (KotlinParser.FINALLY - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (KotlinParser.OUT - 94)) | (1 << (KotlinParser.GETTER - 94)) | (1 << (KotlinParser.SETTER - 94)) | (1 << (KotlinParser.DYNAMIC - 94)) | (1 << (KotlinParser.PUBLIC - 94)) | (1 << (KotlinParser.PRIVATE - 94)) | (1 << (KotlinParser.PROTECTED - 94)) | (1 << (KotlinParser.INTERNAL - 94)) | (1 << (KotlinParser.ENUM - 94)) | (1 << (KotlinParser.SEALED - 94)) | (1 << (KotlinParser.ANNOTATION - 94)) | (1 << (KotlinParser.DATA - 94)) | (1 << (KotlinParser.INNER - 94)) | (1 << (KotlinParser.TAILREC - 94)) | (1 << (KotlinParser.OPERATOR - 94)) | (1 << (KotlinParser.INLINE - 94)) | (1 << (KotlinParser.INFIX - 94)) | (1 << (KotlinParser.EXTERNAL - 94)) | (1 << (KotlinParser.SUSPEND - 94)) | (1 << (KotlinParser.OVERRIDE - 94)) | (1 << (KotlinParser.ABSTRACT - 94)) | (1 << (KotlinParser.FINAL - 94)) | (1 << (KotlinParser.OPEN - 94)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (KotlinParser.CONST - 126)) | (1 << (KotlinParser.LATEINIT - 126)) | (1 << (KotlinParser.VARARG - 126)) | (1 << (KotlinParser.NOINLINE - 126)) | (1 << (KotlinParser.CROSSINLINE - 126)) | (1 << (KotlinParser.REIFIED - 126)) | (1 << (KotlinParser.EXPECT - 126)) | (1 << (KotlinParser.ACTUAL - 126)) | (1 << (KotlinParser.Identifier - 126)))) !== 0));
                        this.state = 3242;
                        this.match(KotlinParser.RSQUARE);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    annotationUseSiteTarget() {
        let _localctx = new AnnotationUseSiteTargetContext(this._ctx, this.state);
        this.enterRule(_localctx, 310, KotlinParser.RULE_annotationUseSiteTarget);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3246;
                _la = this._input.LA(1);
                if (!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & ((1 << (KotlinParser.AT_FIELD - 99)) | (1 << (KotlinParser.AT_PROPERTY - 99)) | (1 << (KotlinParser.AT_GET - 99)) | (1 << (KotlinParser.AT_SET - 99)) | (1 << (KotlinParser.AT_RECEIVER - 99)) | (1 << (KotlinParser.AT_PARAM - 99)) | (1 << (KotlinParser.AT_SETPARAM - 99)) | (1 << (KotlinParser.AT_DELEGATE - 99)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    unescapedAnnotation() {
        let _localctx = new UnescapedAnnotationContext(this._ctx, this.state);
        this.enterRule(_localctx, 312, KotlinParser.RULE_unescapedAnnotation);
        try {
            this.state = 3250;
            this._errHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this._input, 495, this._ctx)) {
                case 1:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3248;
                        this.constructorInvocation();
                    }
                    break;
                case 2:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3249;
                        this.userType();
                    }
                    break;
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    simpleIdentifier() {
        let _localctx = new SimpleIdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 314, KotlinParser.RULE_simpleIdentifier);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3252;
                _la = this._input.LA(1);
                if (!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (KotlinParser.IMPORT - 60)) | (1 << (KotlinParser.CONSTRUCTOR - 60)) | (1 << (KotlinParser.BY - 60)) | (1 << (KotlinParser.COMPANION - 60)) | (1 << (KotlinParser.INIT - 60)) | (1 << (KotlinParser.WHERE - 60)) | (1 << (KotlinParser.CATCH - 60)) | (1 << (KotlinParser.FINALLY - 60)))) !== 0) || ((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (KotlinParser.OUT - 94)) | (1 << (KotlinParser.GETTER - 94)) | (1 << (KotlinParser.SETTER - 94)) | (1 << (KotlinParser.DYNAMIC - 94)) | (1 << (KotlinParser.PUBLIC - 94)) | (1 << (KotlinParser.PRIVATE - 94)) | (1 << (KotlinParser.PROTECTED - 94)) | (1 << (KotlinParser.INTERNAL - 94)) | (1 << (KotlinParser.ENUM - 94)) | (1 << (KotlinParser.SEALED - 94)) | (1 << (KotlinParser.ANNOTATION - 94)) | (1 << (KotlinParser.DATA - 94)) | (1 << (KotlinParser.INNER - 94)) | (1 << (KotlinParser.TAILREC - 94)) | (1 << (KotlinParser.OPERATOR - 94)) | (1 << (KotlinParser.INLINE - 94)) | (1 << (KotlinParser.INFIX - 94)) | (1 << (KotlinParser.EXTERNAL - 94)) | (1 << (KotlinParser.SUSPEND - 94)) | (1 << (KotlinParser.OVERRIDE - 94)) | (1 << (KotlinParser.ABSTRACT - 94)) | (1 << (KotlinParser.FINAL - 94)) | (1 << (KotlinParser.OPEN - 94)))) !== 0) || ((((_la - 126)) & ~0x1F) === 0 && ((1 << (_la - 126)) & ((1 << (KotlinParser.CONST - 126)) | (1 << (KotlinParser.LATEINIT - 126)) | (1 << (KotlinParser.VARARG - 126)) | (1 << (KotlinParser.NOINLINE - 126)) | (1 << (KotlinParser.CROSSINLINE - 126)) | (1 << (KotlinParser.REIFIED - 126)) | (1 << (KotlinParser.EXPECT - 126)) | (1 << (KotlinParser.ACTUAL - 126)) | (1 << (KotlinParser.Identifier - 126)))) !== 0))) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    identifier() {
        let _localctx = new IdentifierContext(this._ctx, this.state);
        this.enterRule(_localctx, 316, KotlinParser.RULE_identifier);
        let _la;
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3254;
                this.simpleIdentifier();
                this.state = 3265;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 497, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        {
                            {
                                this.state = 3258;
                                this._errHandler.sync(this);
                                _la = this._input.LA(1);
                                while (_la === KotlinParser.NL) {
                                    {
                                        {
                                            this.state = 3255;
                                            this.match(KotlinParser.NL);
                                        }
                                    }
                                    this.state = 3260;
                                    this._errHandler.sync(this);
                                    _la = this._input.LA(1);
                                }
                                this.state = 3261;
                                this.match(KotlinParser.DOT);
                                this.state = 3262;
                                this.simpleIdentifier();
                            }
                        }
                    }
                    this.state = 3267;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 497, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    shebangLine() {
        let _localctx = new ShebangLineContext(this._ctx, this.state);
        this.enterRule(_localctx, 318, KotlinParser.RULE_shebangLine);
        try {
            let _alt;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3268;
                this.match(KotlinParser.ShebangLine);
                this.state = 3270;
                this._errHandler.sync(this);
                _alt = 1;
                do {
                    switch (_alt) {
                        case 1:
                            {
                                {
                                    this.state = 3269;
                                    this.match(KotlinParser.NL);
                                }
                            }
                            break;
                        default:
                            throw new NoViableAltException_1.NoViableAltException(this);
                    }
                    this.state = 3272;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 498, this._ctx);
                } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    quest() {
        let _localctx = new QuestContext(this._ctx, this.state);
        this.enterRule(_localctx, 320, KotlinParser.RULE_quest);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3274;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.QUEST_WS || _la === KotlinParser.QUEST_NO_WS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    elvis() {
        let _localctx = new ElvisContext(this._ctx, this.state);
        this.enterRule(_localctx, 322, KotlinParser.RULE_elvis);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3276;
                this.match(KotlinParser.QUEST_NO_WS);
                this.state = 3277;
                this.match(KotlinParser.COLON);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    safeNav() {
        let _localctx = new SafeNavContext(this._ctx, this.state);
        this.enterRule(_localctx, 324, KotlinParser.RULE_safeNav);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3279;
                this.match(KotlinParser.QUEST_NO_WS);
                this.state = 3280;
                this.match(KotlinParser.DOT);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    excl() {
        let _localctx = new ExclContext(this._ctx, this.state);
        this.enterRule(_localctx, 326, KotlinParser.RULE_excl);
        let _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 3282;
                _la = this._input.LA(1);
                if (!(_la === KotlinParser.EXCL_WS || _la === KotlinParser.EXCL_NO_WS)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    semi() {
        let _localctx = new SemiContext(this._ctx, this.state);
        this.enterRule(_localctx, 328, KotlinParser.RULE_semi);
        let _la;
        try {
            let _alt;
            this.state = 3292;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.SEMICOLON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3284;
                        _la = this._input.LA(1);
                        if (!(_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON)) {
                            this._errHandler.recoverInline(this);
                        }
                        else {
                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                this.matchedEOF = true;
                            }
                            this._errHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 3288;
                        this._errHandler.sync(this);
                        _alt = this.interpreter.adaptivePredict(this._input, 499, this._ctx);
                        while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                            if (_alt === 1) {
                                {
                                    {
                                        this.state = 3285;
                                        this.match(KotlinParser.NL);
                                    }
                                }
                            }
                            this.state = 3290;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 499, this._ctx);
                        }
                    }
                    break;
                case KotlinParser.EOF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3291;
                        this.match(KotlinParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    // @RuleVersion(0)
    semis() {
        let _localctx = new SemisContext(this._ctx, this.state);
        this.enterRule(_localctx, 330, KotlinParser.RULE_semis);
        let _la;
        try {
            let _alt;
            this.state = 3300;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case KotlinParser.NL:
                case KotlinParser.SEMICOLON:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 3295;
                        this._errHandler.sync(this);
                        _alt = 1;
                        do {
                            switch (_alt) {
                                case 1:
                                    {
                                        {
                                            this.state = 3294;
                                            _la = this._input.LA(1);
                                            if (!(_la === KotlinParser.NL || _la === KotlinParser.SEMICOLON)) {
                                                this._errHandler.recoverInline(this);
                                            }
                                            else {
                                                if (this._input.LA(1) === Token_1.Token.EOF) {
                                                    this.matchedEOF = true;
                                                }
                                                this._errHandler.reportMatch(this);
                                                this.consume();
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    throw new NoViableAltException_1.NoViableAltException(this);
                            }
                            this.state = 3297;
                            this._errHandler.sync(this);
                            _alt = this.interpreter.adaptivePredict(this._input, 501, this._ctx);
                        } while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER);
                    }
                    break;
                case KotlinParser.EOF:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 3299;
                        this.match(KotlinParser.EOF);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    }
    static get _ATN() {
        if (!KotlinParser.__ATN) {
            KotlinParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(KotlinParser._serializedATN));
        }
        return KotlinParser.__ATN;
    }
}
exports.KotlinParser = KotlinParser;
KotlinParser.ShebangLine = 1;
KotlinParser.DelimitedComment = 2;
KotlinParser.LineComment = 3;
KotlinParser.WS = 4;
KotlinParser.NL = 5;
KotlinParser.RESERVED = 6;
KotlinParser.DOT = 7;
KotlinParser.COMMA = 8;
KotlinParser.LPAREN = 9;
KotlinParser.RPAREN = 10;
KotlinParser.LSQUARE = 11;
KotlinParser.RSQUARE = 12;
KotlinParser.LCURL = 13;
KotlinParser.RCURL = 14;
KotlinParser.MULT = 15;
KotlinParser.MOD = 16;
KotlinParser.DIV = 17;
KotlinParser.ADD = 18;
KotlinParser.SUB = 19;
KotlinParser.INCR = 20;
KotlinParser.DECR = 21;
KotlinParser.CONJ = 22;
KotlinParser.DISJ = 23;
KotlinParser.EXCL_WS = 24;
KotlinParser.EXCL_NO_WS = 25;
KotlinParser.COLON = 26;
KotlinParser.SEMICOLON = 27;
KotlinParser.ASSIGNMENT = 28;
KotlinParser.ADD_ASSIGNMENT = 29;
KotlinParser.SUB_ASSIGNMENT = 30;
KotlinParser.MULT_ASSIGNMENT = 31;
KotlinParser.DIV_ASSIGNMENT = 32;
KotlinParser.MOD_ASSIGNMENT = 33;
KotlinParser.ARROW = 34;
KotlinParser.DOUBLE_ARROW = 35;
KotlinParser.RANGE = 36;
KotlinParser.COLONCOLON = 37;
KotlinParser.DOUBLE_SEMICOLON = 38;
KotlinParser.HASH = 39;
KotlinParser.AT = 40;
KotlinParser.AT_WS = 41;
KotlinParser.QUEST_WS = 42;
KotlinParser.QUEST_NO_WS = 43;
KotlinParser.LANGLE = 44;
KotlinParser.RANGLE = 45;
KotlinParser.LE = 46;
KotlinParser.GE = 47;
KotlinParser.EXCL_EQ = 48;
KotlinParser.EXCL_EQEQ = 49;
KotlinParser.AS_SAFE = 50;
KotlinParser.EQEQ = 51;
KotlinParser.EQEQEQ = 52;
KotlinParser.SINGLE_QUOTE = 53;
KotlinParser.RETURN_AT = 54;
KotlinParser.CONTINUE_AT = 55;
KotlinParser.BREAK_AT = 56;
KotlinParser.THIS_AT = 57;
KotlinParser.SUPER_AT = 58;
KotlinParser.PACKAGE = 59;
KotlinParser.IMPORT = 60;
KotlinParser.CLASS = 61;
KotlinParser.INTERFACE = 62;
KotlinParser.FUN = 63;
KotlinParser.OBJECT = 64;
KotlinParser.VAL = 65;
KotlinParser.VAR = 66;
KotlinParser.TYPE_ALIAS = 67;
KotlinParser.CONSTRUCTOR = 68;
KotlinParser.BY = 69;
KotlinParser.COMPANION = 70;
KotlinParser.INIT = 71;
KotlinParser.THIS = 72;
KotlinParser.SUPER = 73;
KotlinParser.TYPEOF = 74;
KotlinParser.WHERE = 75;
KotlinParser.IF = 76;
KotlinParser.ELSE = 77;
KotlinParser.WHEN = 78;
KotlinParser.TRY = 79;
KotlinParser.CATCH = 80;
KotlinParser.FINALLY = 81;
KotlinParser.FOR = 82;
KotlinParser.DO = 83;
KotlinParser.WHILE = 84;
KotlinParser.THROW = 85;
KotlinParser.RETURN = 86;
KotlinParser.CONTINUE = 87;
KotlinParser.BREAK = 88;
KotlinParser.AS = 89;
KotlinParser.IS = 90;
KotlinParser.IN = 91;
KotlinParser.NOT_IS = 92;
KotlinParser.NOT_IN = 93;
KotlinParser.OUT = 94;
KotlinParser.GETTER = 95;
KotlinParser.SETTER = 96;
KotlinParser.DYNAMIC = 97;
KotlinParser.AT_FILE = 98;
KotlinParser.AT_FIELD = 99;
KotlinParser.AT_PROPERTY = 100;
KotlinParser.AT_GET = 101;
KotlinParser.AT_SET = 102;
KotlinParser.AT_RECEIVER = 103;
KotlinParser.AT_PARAM = 104;
KotlinParser.AT_SETPARAM = 105;
KotlinParser.AT_DELEGATE = 106;
KotlinParser.PUBLIC = 107;
KotlinParser.PRIVATE = 108;
KotlinParser.PROTECTED = 109;
KotlinParser.INTERNAL = 110;
KotlinParser.ENUM = 111;
KotlinParser.SEALED = 112;
KotlinParser.ANNOTATION = 113;
KotlinParser.DATA = 114;
KotlinParser.INNER = 115;
KotlinParser.TAILREC = 116;
KotlinParser.OPERATOR = 117;
KotlinParser.INLINE = 118;
KotlinParser.INFIX = 119;
KotlinParser.EXTERNAL = 120;
KotlinParser.SUSPEND = 121;
KotlinParser.OVERRIDE = 122;
KotlinParser.ABSTRACT = 123;
KotlinParser.FINAL = 124;
KotlinParser.OPEN = 125;
KotlinParser.CONST = 126;
KotlinParser.LATEINIT = 127;
KotlinParser.VARARG = 128;
KotlinParser.NOINLINE = 129;
KotlinParser.CROSSINLINE = 130;
KotlinParser.REIFIED = 131;
KotlinParser.EXPECT = 132;
KotlinParser.ACTUAL = 133;
KotlinParser.QUOTE_OPEN = 134;
KotlinParser.TRIPLE_QUOTE_OPEN = 135;
KotlinParser.RealLiteral = 136;
KotlinParser.FloatLiteral = 137;
KotlinParser.DoubleLiteral = 138;
KotlinParser.LongLiteral = 139;
KotlinParser.IntegerLiteral = 140;
KotlinParser.HexLiteral = 141;
KotlinParser.BinLiteral = 142;
KotlinParser.BooleanLiteral = 143;
KotlinParser.NullLiteral = 144;
KotlinParser.Identifier = 145;
KotlinParser.IdentifierAt = 146;
KotlinParser.FieldIdentifier = 147;
KotlinParser.CharacterLiteral = 148;
KotlinParser.ErrorCharacter = 149;
KotlinParser.UNICODE_CLASS_LL = 150;
KotlinParser.UNICODE_CLASS_LM = 151;
KotlinParser.UNICODE_CLASS_LO = 152;
KotlinParser.UNICODE_CLASS_LT = 153;
KotlinParser.UNICODE_CLASS_LU = 154;
KotlinParser.UNICODE_CLASS_ND = 155;
KotlinParser.UNICODE_CLASS_NL = 156;
KotlinParser.Inside_Comment = 157;
KotlinParser.Inside_WS = 158;
KotlinParser.Inside_NL = 159;
KotlinParser.QUOTE_CLOSE = 160;
KotlinParser.LineStrRef = 161;
KotlinParser.LineStrText = 162;
KotlinParser.LineStrEscapedChar = 163;
KotlinParser.LineStrExprStart = 164;
KotlinParser.TRIPLE_QUOTE_CLOSE = 165;
KotlinParser.MultiLineStringQuote = 166;
KotlinParser.MultiLineStrRef = 167;
KotlinParser.MultiLineStrText = 168;
KotlinParser.MultiLineStrExprStart = 169;
KotlinParser.RULE_kotlinFile = 0;
KotlinParser.RULE_script = 1;
KotlinParser.RULE_fileAnnotation = 2;
KotlinParser.RULE_packageHeader = 3;
KotlinParser.RULE_importList = 4;
KotlinParser.RULE_importHeader = 5;
KotlinParser.RULE_importAlias = 6;
KotlinParser.RULE_topLevelObject = 7;
KotlinParser.RULE_classDeclaration = 8;
KotlinParser.RULE_primaryConstructor = 9;
KotlinParser.RULE_classParameters = 10;
KotlinParser.RULE_classParameter = 11;
KotlinParser.RULE_delegationSpecifiers = 12;
KotlinParser.RULE_annotatedDelegationSpecifier = 13;
KotlinParser.RULE_delegationSpecifier = 14;
KotlinParser.RULE_constructorInvocation = 15;
KotlinParser.RULE_explicitDelegation = 16;
KotlinParser.RULE_classBody = 17;
KotlinParser.RULE_classMemberDeclarations = 18;
KotlinParser.RULE_classMemberDeclaration = 19;
KotlinParser.RULE_anonymousInitializer = 20;
KotlinParser.RULE_secondaryConstructor = 21;
KotlinParser.RULE_constructorDelegationCall = 22;
KotlinParser.RULE_enumClassBody = 23;
KotlinParser.RULE_enumEntries = 24;
KotlinParser.RULE_enumEntry = 25;
KotlinParser.RULE_functionDeclaration = 26;
KotlinParser.RULE_functionValueParameters = 27;
KotlinParser.RULE_functionValueParameter = 28;
KotlinParser.RULE_parameter = 29;
KotlinParser.RULE_setterParameter = 30;
KotlinParser.RULE_functionBody = 31;
KotlinParser.RULE_objectDeclaration = 32;
KotlinParser.RULE_companionObject = 33;
KotlinParser.RULE_propertyDeclaration = 34;
KotlinParser.RULE_multiVariableDeclaration = 35;
KotlinParser.RULE_variableDeclaration = 36;
KotlinParser.RULE_propertyDelegate = 37;
KotlinParser.RULE_getter = 38;
KotlinParser.RULE_setter = 39;
KotlinParser.RULE_typeAlias = 40;
KotlinParser.RULE_typeParameters = 41;
KotlinParser.RULE_typeParameter = 42;
KotlinParser.RULE_typeParameterModifiers = 43;
KotlinParser.RULE_typeParameterModifier = 44;
KotlinParser.RULE_type_ = 45;
KotlinParser.RULE_typeModifiers = 46;
KotlinParser.RULE_typeModifier = 47;
KotlinParser.RULE_parenthesizedType = 48;
KotlinParser.RULE_nullableType = 49;
KotlinParser.RULE_typeReference = 50;
KotlinParser.RULE_functionType = 51;
KotlinParser.RULE_receiverType = 52;
KotlinParser.RULE_userType = 53;
KotlinParser.RULE_parenthesizedUserType = 54;
KotlinParser.RULE_simpleUserType = 55;
KotlinParser.RULE_functionTypeParameters = 56;
KotlinParser.RULE_typeConstraints = 57;
KotlinParser.RULE_typeConstraint = 58;
KotlinParser.RULE_block = 59;
KotlinParser.RULE_statements = 60;
KotlinParser.RULE_statement = 61;
KotlinParser.RULE_declaration = 62;
KotlinParser.RULE_assignment = 63;
KotlinParser.RULE_expression = 64;
KotlinParser.RULE_disjunction = 65;
KotlinParser.RULE_conjunction = 66;
KotlinParser.RULE_equality = 67;
KotlinParser.RULE_comparison = 68;
KotlinParser.RULE_infixOperation = 69;
KotlinParser.RULE_elvisExpression = 70;
KotlinParser.RULE_infixFunctionCall = 71;
KotlinParser.RULE_rangeExpression = 72;
KotlinParser.RULE_additiveExpression = 73;
KotlinParser.RULE_multiplicativeExpression = 74;
KotlinParser.RULE_asExpression = 75;
KotlinParser.RULE_prefixUnaryExpression = 76;
KotlinParser.RULE_unaryPrefix = 77;
KotlinParser.RULE_postfixUnaryExpression = 78;
KotlinParser.RULE_postfixUnarySuffix = 79;
KotlinParser.RULE_directlyAssignableExpression = 80;
KotlinParser.RULE_assignableExpression = 81;
KotlinParser.RULE_assignableSuffix = 82;
KotlinParser.RULE_indexingSuffix = 83;
KotlinParser.RULE_navigationSuffix = 84;
KotlinParser.RULE_callSuffix = 85;
KotlinParser.RULE_annotatedLambda = 86;
KotlinParser.RULE_valueArguments = 87;
KotlinParser.RULE_typeArguments = 88;
KotlinParser.RULE_typeProjection = 89;
KotlinParser.RULE_typeProjectionModifiers = 90;
KotlinParser.RULE_typeProjectionModifier = 91;
KotlinParser.RULE_valueArgument = 92;
KotlinParser.RULE_primaryExpression = 93;
KotlinParser.RULE_parenthesizedExpression = 94;
KotlinParser.RULE_collectionLiteral = 95;
KotlinParser.RULE_literalConstant = 96;
KotlinParser.RULE_stringLiteral = 97;
KotlinParser.RULE_lineStringLiteral = 98;
KotlinParser.RULE_multiLineStringLiteral = 99;
KotlinParser.RULE_lineStringContent = 100;
KotlinParser.RULE_lineStringExpression = 101;
KotlinParser.RULE_multiLineStringContent = 102;
KotlinParser.RULE_multiLineStringExpression = 103;
KotlinParser.RULE_lambdaLiteral = 104;
KotlinParser.RULE_lambdaParameters = 105;
KotlinParser.RULE_lambdaParameter = 106;
KotlinParser.RULE_anonymousFunction = 107;
KotlinParser.RULE_functionLiteral = 108;
KotlinParser.RULE_objectLiteral = 109;
KotlinParser.RULE_thisExpression = 110;
KotlinParser.RULE_superExpression = 111;
KotlinParser.RULE_controlStructureBody = 112;
KotlinParser.RULE_ifExpression = 113;
KotlinParser.RULE_whenExpression = 114;
KotlinParser.RULE_whenEntry = 115;
KotlinParser.RULE_whenCondition = 116;
KotlinParser.RULE_rangeTest = 117;
KotlinParser.RULE_typeTest = 118;
KotlinParser.RULE_tryExpression = 119;
KotlinParser.RULE_catchBlock = 120;
KotlinParser.RULE_finallyBlock = 121;
KotlinParser.RULE_loopStatement = 122;
KotlinParser.RULE_forStatement = 123;
KotlinParser.RULE_whileStatement = 124;
KotlinParser.RULE_doWhileStatement = 125;
KotlinParser.RULE_jumpExpression = 126;
KotlinParser.RULE_callableReference = 127;
KotlinParser.RULE_assignmentAndOperator = 128;
KotlinParser.RULE_equalityOperator = 129;
KotlinParser.RULE_comparisonOperator = 130;
KotlinParser.RULE_inOperator = 131;
KotlinParser.RULE_isOperator = 132;
KotlinParser.RULE_additiveOperator = 133;
KotlinParser.RULE_multiplicativeOperator = 134;
KotlinParser.RULE_asOperator = 135;
KotlinParser.RULE_prefixUnaryOperator = 136;
KotlinParser.RULE_postfixUnaryOperator = 137;
KotlinParser.RULE_memberAccessOperator = 138;
KotlinParser.RULE_modifiers = 139;
KotlinParser.RULE_modifier = 140;
KotlinParser.RULE_classModifier = 141;
KotlinParser.RULE_memberModifier = 142;
KotlinParser.RULE_visibilityModifier = 143;
KotlinParser.RULE_varianceModifier = 144;
KotlinParser.RULE_functionModifier = 145;
KotlinParser.RULE_propertyModifier = 146;
KotlinParser.RULE_inheritanceModifier = 147;
KotlinParser.RULE_parameterModifier = 148;
KotlinParser.RULE_reificationModifier = 149;
KotlinParser.RULE_platformModifier = 150;
KotlinParser.RULE_label = 151;
KotlinParser.RULE_annotation = 152;
KotlinParser.RULE_singleAnnotation = 153;
KotlinParser.RULE_multiAnnotation = 154;
KotlinParser.RULE_annotationUseSiteTarget = 155;
KotlinParser.RULE_unescapedAnnotation = 156;
KotlinParser.RULE_simpleIdentifier = 157;
KotlinParser.RULE_identifier = 158;
KotlinParser.RULE_shebangLine = 159;
KotlinParser.RULE_quest = 160;
KotlinParser.RULE_elvis = 161;
KotlinParser.RULE_safeNav = 162;
KotlinParser.RULE_excl = 163;
KotlinParser.RULE_semi = 164;
KotlinParser.RULE_semis = 165;
// tslint:disable:no-trailing-whitespace
KotlinParser.ruleNames = [
    "kotlinFile", "script", "fileAnnotation", "packageHeader", "importList",
    "importHeader", "importAlias", "topLevelObject", "classDeclaration", "primaryConstructor",
    "classParameters", "classParameter", "delegationSpecifiers", "annotatedDelegationSpecifier",
    "delegationSpecifier", "constructorInvocation", "explicitDelegation",
    "classBody", "classMemberDeclarations", "classMemberDeclaration", "anonymousInitializer",
    "secondaryConstructor", "constructorDelegationCall", "enumClassBody",
    "enumEntries", "enumEntry", "functionDeclaration", "functionValueParameters",
    "functionValueParameter", "parameter", "setterParameter", "functionBody",
    "objectDeclaration", "companionObject", "propertyDeclaration", "multiVariableDeclaration",
    "variableDeclaration", "propertyDelegate", "getter", "setter", "typeAlias",
    "typeParameters", "typeParameter", "typeParameterModifiers", "typeParameterModifier",
    "type_", "typeModifiers", "typeModifier", "parenthesizedType", "nullableType",
    "typeReference", "functionType", "receiverType", "userType", "parenthesizedUserType",
    "simpleUserType", "functionTypeParameters", "typeConstraints", "typeConstraint",
    "block", "statements", "statement", "declaration", "assignment", "expression",
    "disjunction", "conjunction", "equality", "comparison", "infixOperation",
    "elvisExpression", "infixFunctionCall", "rangeExpression", "additiveExpression",
    "multiplicativeExpression", "asExpression", "prefixUnaryExpression", "unaryPrefix",
    "postfixUnaryExpression", "postfixUnarySuffix", "directlyAssignableExpression",
    "assignableExpression", "assignableSuffix", "indexingSuffix", "navigationSuffix",
    "callSuffix", "annotatedLambda", "valueArguments", "typeArguments", "typeProjection",
    "typeProjectionModifiers", "typeProjectionModifier", "valueArgument",
    "primaryExpression", "parenthesizedExpression", "collectionLiteral", "literalConstant",
    "stringLiteral", "lineStringLiteral", "multiLineStringLiteral", "lineStringContent",
    "lineStringExpression", "multiLineStringContent", "multiLineStringExpression",
    "lambdaLiteral", "lambdaParameters", "lambdaParameter", "anonymousFunction",
    "functionLiteral", "objectLiteral", "thisExpression", "superExpression",
    "controlStructureBody", "ifExpression", "whenExpression", "whenEntry",
    "whenCondition", "rangeTest", "typeTest", "tryExpression", "catchBlock",
    "finallyBlock", "loopStatement", "forStatement", "whileStatement", "doWhileStatement",
    "jumpExpression", "callableReference", "assignmentAndOperator", "equalityOperator",
    "comparisonOperator", "inOperator", "isOperator", "additiveOperator",
    "multiplicativeOperator", "asOperator", "prefixUnaryOperator", "postfixUnaryOperator",
    "memberAccessOperator", "modifiers", "modifier", "classModifier", "memberModifier",
    "visibilityModifier", "varianceModifier", "functionModifier", "propertyModifier",
    "inheritanceModifier", "parameterModifier", "reificationModifier", "platformModifier",
    "label", "annotation", "singleAnnotation", "multiAnnotation", "annotationUseSiteTarget",
    "unescapedAnnotation", "simpleIdentifier", "identifier", "shebangLine",
    "quest", "elvis", "safeNav", "excl", "semi", "semis",
];
KotlinParser._LITERAL_NAMES = [
    undefined, undefined, undefined, undefined, undefined, undefined, "'...'",
    "'.'", "','", "'('", "')'", "'['", "']'", "'{'", "'}'", "'*'", "'%'",
    "'/'", "'+'", "'-'", "'++'", "'--'", "'&&'", "'||'", undefined, "'!'",
    "':'", "';'", "'='", "'+='", "'-='", "'*='", "'/='", "'%='", "'->'", "'=>'",
    "'..'", "'::'", "';;'", "'#'", "'@'", undefined, undefined, "'?'", "'<'",
    "'>'", "'<='", "'>='", "'!='", "'!=='", "'as?'", "'=='", "'==='", "'''",
    undefined, undefined, undefined, undefined, undefined, "'package'", "'import'",
    "'class'", "'interface'", "'fun'", "'object'", "'val'", "'var'", "'typealias'",
    "'constructor'", "'by'", "'companion'", "'init'", "'this'", "'super'",
    "'typeof'", "'where'", "'if'", "'else'", "'when'", "'try'", "'catch'",
    "'finally'", "'for'", "'do'", "'while'", "'throw'", "'return'", "'continue'",
    "'break'", "'as'", "'is'", "'in'", undefined, undefined, "'out'", "'get'",
    "'set'", "'dynamic'", "'@file'", "'@field'", "'@property'", "'@get'",
    "'@set'", "'@receiver'", "'@param'", "'@setparam'", "'@delegate'", "'public'",
    "'private'", "'protected'", "'internal'", "'enum'", "'sealed'", "'annotation'",
    "'data'", "'inner'", "'tailrec'", "'operator'", "'inline'", "'infix'",
    "'external'", "'suspend'", "'override'", "'abstract'", "'final'", "'open'",
    "'const'", "'lateinit'", "'vararg'", "'noinline'", "'crossinline'", "'reified'",
    "'expect'", "'actual'", undefined, "'\"\"\"'", undefined, undefined, undefined,
    undefined, undefined, undefined, undefined, undefined, "'null'",
];
KotlinParser._SYMBOLIC_NAMES = [
    undefined, "ShebangLine", "DelimitedComment", "LineComment", "WS", "NL",
    "RESERVED", "DOT", "COMMA", "LPAREN", "RPAREN", "LSQUARE", "RSQUARE",
    "LCURL", "RCURL", "MULT", "MOD", "DIV", "ADD", "SUB", "INCR", "DECR",
    "CONJ", "DISJ", "EXCL_WS", "EXCL_NO_WS", "COLON", "SEMICOLON", "ASSIGNMENT",
    "ADD_ASSIGNMENT", "SUB_ASSIGNMENT", "MULT_ASSIGNMENT", "DIV_ASSIGNMENT",
    "MOD_ASSIGNMENT", "ARROW", "DOUBLE_ARROW", "RANGE", "COLONCOLON", "DOUBLE_SEMICOLON",
    "HASH", "AT", "AT_WS", "QUEST_WS", "QUEST_NO_WS", "LANGLE", "RANGLE",
    "LE", "GE", "EXCL_EQ", "EXCL_EQEQ", "AS_SAFE", "EQEQ", "EQEQEQ", "SINGLE_QUOTE",
    "RETURN_AT", "CONTINUE_AT", "BREAK_AT", "THIS_AT", "SUPER_AT", "PACKAGE",
    "IMPORT", "CLASS", "INTERFACE", "FUN", "OBJECT", "VAL", "VAR", "TYPE_ALIAS",
    "CONSTRUCTOR", "BY", "COMPANION", "INIT", "THIS", "SUPER", "TYPEOF", "WHERE",
    "IF", "ELSE", "WHEN", "TRY", "CATCH", "FINALLY", "FOR", "DO", "WHILE",
    "THROW", "RETURN", "CONTINUE", "BREAK", "AS", "IS", "IN", "NOT_IS", "NOT_IN",
    "OUT", "GETTER", "SETTER", "DYNAMIC", "AT_FILE", "AT_FIELD", "AT_PROPERTY",
    "AT_GET", "AT_SET", "AT_RECEIVER", "AT_PARAM", "AT_SETPARAM", "AT_DELEGATE",
    "PUBLIC", "PRIVATE", "PROTECTED", "INTERNAL", "ENUM", "SEALED", "ANNOTATION",
    "DATA", "INNER", "TAILREC", "OPERATOR", "INLINE", "INFIX", "EXTERNAL",
    "SUSPEND", "OVERRIDE", "ABSTRACT", "FINAL", "OPEN", "CONST", "LATEINIT",
    "VARARG", "NOINLINE", "CROSSINLINE", "REIFIED", "EXPECT", "ACTUAL", "QUOTE_OPEN",
    "TRIPLE_QUOTE_OPEN", "RealLiteral", "FloatLiteral", "DoubleLiteral", "LongLiteral",
    "IntegerLiteral", "HexLiteral", "BinLiteral", "BooleanLiteral", "NullLiteral",
    "Identifier", "IdentifierAt", "FieldIdentifier", "CharacterLiteral", "ErrorCharacter",
    "UNICODE_CLASS_LL", "UNICODE_CLASS_LM", "UNICODE_CLASS_LO", "UNICODE_CLASS_LT",
    "UNICODE_CLASS_LU", "UNICODE_CLASS_ND", "UNICODE_CLASS_NL", "Inside_Comment",
    "Inside_WS", "Inside_NL", "QUOTE_CLOSE", "LineStrRef", "LineStrText",
    "LineStrEscapedChar", "LineStrExprStart", "TRIPLE_QUOTE_CLOSE", "MultiLineStringQuote",
    "MultiLineStrRef", "MultiLineStrText", "MultiLineStrExprStart",
];
KotlinParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(KotlinParser._LITERAL_NAMES, KotlinParser._SYMBOLIC_NAMES, []);
KotlinParser._serializedATNSegments = 7;
KotlinParser._serializedATNSegment0 = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xAB\u0CE9\x04" +
    "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
    "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
    "\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
    "\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
    "\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
    "\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    "+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
    "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
    "=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
    "F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
    "O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
    "X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
    "`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
    "i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
    "r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
    "{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
    "\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
    "\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
    "\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
    "\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
    "\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
    "\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
    "\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
    "\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x03\x02\x05\x02\u0150\n\x02" +
    "\x03\x02\x07\x02\u0153\n\x02\f\x02\x0E\x02\u0156\v\x02\x03\x02\x07\x02" +
    "\u0159\n\x02\f\x02\x0E\x02\u015C\v\x02\x03\x02\x03\x02\x03\x02\x07\x02" +
    "\u0161\n\x02\f\x02\x0E\x02\u0164\v\x02\x03\x02\x03\x02\x03\x03\x05\x03" +
    "\u0169\n\x03\x03\x03\x07\x03\u016C\n\x03\f\x03\x0E\x03\u016F\v\x03\x03" +
    "\x03\x07\x03\u0172\n\x03\f\x03\x0E\x03\u0175\v\x03\x03\x03\x03\x03\x03" +
    "\x03\x03\x03\x03\x03\x07\x03\u017C\n\x03\f\x03\x0E\x03\u017F\v\x03\x03" +
    "\x03\x03\x03\x03\x04\x03\x04\x07\x04\u0185\n\x04\f\x04\x0E\x04\u0188\v" +
    "\x04\x03\x04\x03\x04\x07\x04\u018C\n\x04\f\x04\x0E\x04\u018F\v\x04\x03" +
    "\x04\x03\x04\x06\x04\u0193\n\x04\r\x04\x0E\x04\u0194\x03\x04\x03\x04\x03" +
    "\x04\x05\x04\u019A\n\x04\x03\x04\x07\x04\u019D\n\x04\f\x04\x0E\x04\u01A0" +
    "\v\x04\x03\x05\x03\x05\x03\x05\x05\x05\u01A5\n\x05\x05\x05\u01A7\n\x05" +
    "\x03\x06\x07\x06\u01AA\n\x06\f\x06\x0E\x06\u01AD\v\x06\x03\x07\x03\x07" +
    "\x03\x07\x03\x07\x03\x07\x05\x07\u01B4\n\x07\x03\x07\x05\x07\u01B7\n\x07" +
    "\x03\b\x03\b\x03\b\x03\t\x03\t\x05\t\u01BE\n\t\x03\n\x05\n\u01C1\n\n\x03" +
    "\n\x03\n\x07\n\u01C5\n\n\f\n\x0E\n\u01C8\v\n\x03\n\x03\n\x07\n\u01CC\n" +
    "\n\f\n\x0E\n\u01CF\v\n\x03\n\x05\n\u01D2\n\n\x03\n\x07\n\u01D5\n\n\f\n" +
    "\x0E\n\u01D8\v\n\x03\n\x05\n\u01DB\n\n\x03\n\x07\n\u01DE\n\n\f\n\x0E\n" +
    "\u01E1\v\n\x03\n\x03\n\x07\n\u01E5\n\n\f\n\x0E\n\u01E8\v\n\x03\n\x05\n" +
    "\u01EB\n\n\x03\n\x07\n\u01EE\n\n\f\n\x0E\n\u01F1\v\n\x03\n\x05\n\u01F4" +
    "\n\n\x03\n\x07\n\u01F7\n\n\f\n\x0E\n\u01FA\v\n\x03\n\x03\n\x07\n\u01FE" +
    "\n\n\f\n\x0E\n\u0201\v\n\x03\n\x05\n\u0204\n\n\x03\v\x05\v\u0207\n\v\x03" +
    "\v\x03\v\x07\v\u020B\n\v\f\v\x0E\v\u020E\v\v\x05\v\u0210\n\v\x03\v\x03" +
    "\v\x03\f\x03\f\x07\f\u0216\n\f\f\f\x0E\f\u0219\v\f\x03\f\x03\f\x07\f\u021D" +
    "\n\f\f\f\x0E\f\u0220\v\f\x03\f\x03\f\x07\f\u0224\n\f\f\f\x0E\f\u0227\v" +
    "\f\x03\f\x07\f\u022A\n\f\f\f\x0E\f\u022D\v\f\x05\f\u022F\n\f\x03\f\x07" +
    "\f\u0232\n\f\f\f\x0E\f\u0235\v\f\x03\f\x05\f\u0238\n\f\x03\f\x03\f\x03" +
    "\r\x05\r\u023D\n\r\x03\r\x05\r\u0240\n\r\x03\r\x07\r\u0243\n\r\f\r\x0E" +
    "\r\u0246\v\r\x03\r\x03\r\x03\r\x07\r\u024B\n\r\f\r\x0E\r\u024E\v\r\x03" +
    "\r\x03\r\x07\r\u0252\n\r\f\r\x0E\r\u0255\v\r\x03\r\x03\r\x07\r\u0259\n" +
    "\r\f\r\x0E\r\u025C\v\r\x03\r\x05\r\u025F\n\r\x03\x0E\x03\x0E\x07\x0E\u0263" +
    "\n\x0E\f\x0E\x0E\x0E\u0266\v\x0E\x03\x0E\x03\x0E\x07\x0E\u026A\n\x0E\f" +
    "\x0E\x0E\x0E\u026D\v\x0E\x03\x0E\x07\x0E\u0270\n\x0E\f\x0E\x0E\x0E\u0273" +
    "\v\x0E\x03\x0F\x07\x0F\u0276\n\x0F\f\x0F\x0E\x0F\u0279\v\x0F\x03\x0F\x07" +
    "\x0F\u027C\n\x0F\f\x0F\x0E\x0F\u027F\v\x0F\x03\x0F\x03\x0F\x03\x10\x03" +
    "\x10\x03\x10\x03\x10\x05\x10\u0287\n\x10\x03\x11\x03\x11\x03\x11\x03\x12" +
    "\x03\x12\x05\x12\u028E\n\x12\x03\x12\x07\x12\u0291\n\x12\f\x12\x0E\x12" +
    "\u0294\v\x12\x03\x12\x03\x12\x07\x12\u0298\n\x12\f\x12\x0E\x12\u029B\v" +
    "\x12\x03\x12\x03\x12\x03\x13\x03\x13\x07\x13\u02A1\n\x13\f\x13\x0E\x13" +
    "\u02A4\v\x13\x03\x13\x03\x13\x07\x13\u02A8\n\x13\f\x13\x0E\x13\u02AB\v" +
    "\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u02B1\n\x14\x07\x14\u02B3" +
    "\n\x14\f\x14\x0E\x14\u02B6\v\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15" +
    "\u02BC\n\x15\x03\x16\x03\x16\x07\x16\u02C0\n\x16\f\x16\x0E\x16\u02C3\v" +
    "\x16\x03\x16\x03\x16\x03\x17\x05\x17\u02C8\n\x17\x03\x17\x03\x17\x07\x17" +
    "\u02CC\n\x17\f\x17\x0E\x17\u02CF\v\x17\x03\x17\x03\x17\x07\x17\u02D3\n" +
    "\x17\f\x17\x0E\x17\u02D6\v\x17\x03\x17\x03\x17\x07\x17\u02DA\n\x17\f\x17" +
    "\x0E\x17\u02DD\v\x17\x03\x17\x05\x17\u02E0\n\x17\x03\x17\x07\x17\u02E3" +
    "\n\x17\f\x17\x0E\x17\u02E6\v\x17\x03\x17\x05\x17\u02E9\n\x17\x03\x18\x03" +
    "\x18\x07\x18\u02ED\n\x18\f\x18\x0E\x18\u02F0\v\x18\x03\x18\x03\x18\x03" +
    "\x18\x07\x18\u02F5\n\x18\f\x18\x0E\x18\u02F8\v\x18\x03\x18\x05\x18\u02FB" +
    "\n\x18\x03\x19\x03\x19\x07\x19\u02FF\n\x19\f\x19\x0E\x19\u0302\v\x19\x03" +
    "\x19\x05\x19\u0305\n\x19\x03\x19\x07\x19\u0308\n\x19\f\x19\x0E\x19\u030B" +
    "\v\x19\x03\x19\x03\x19\x07\x19\u030F\n\x19\f\x19\x0E\x19\u0312\v\x19\x03" +
    "\x19\x05\x19\u0315\n\x19\x03\x19\x07\x19\u0318\n\x19\f\x19\x0E\x19\u031B" +
    "\v\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x07\x1A\u0321\n\x1A\f\x1A\x0E\x1A" +
    "\u0324\v\x1A\x03\x1A\x03\x1A\x07\x1A\u0328\n\x1A\f\x1A\x0E\x1A\u032B\v" +
    "\x1A\x03\x1A\x07\x1A\u032E\n\x1A\f\x1A\x0E\x1A\u0331\v\x1A\x03\x1A\x07" +
    "\x1A\u0334\n\x1A\f\x1A\x0E\x1A\u0337\v\x1A\x03\x1A\x05\x1A\u033A\n\x1A" +
    "\x03\x1B\x03\x1B\x07\x1B\u033E\n\x1B\f\x1B\x0E\x1B\u0341\v\x1B\x05\x1B" +
    "\u0343\n\x1B\x03\x1B\x03\x1B\x07\x1B\u0347\n\x1B\f\x1B\x0E\x1B\u034A\v" +
    "\x1B\x03\x1B\x05\x1B\u034D\n\x1B\x03\x1B\x07\x1B\u0350\n\x1B\f\x1B\x0E" +
    "\x1B\u0353\v\x1B\x03\x1B\x05\x1B\u0356\n\x1B\x03\x1C\x05\x1C\u0359\n\x1C" +
    "\x03\x1C\x03\x1C\x07\x1C\u035D\n\x1C\f\x1C\x0E\x1C\u0360\v\x1C\x03\x1C" +
    "\x05\x1C\u0363\n\x1C\x03\x1C\x07\x1C\u0366\n\x1C\f\x1C\x0E\x1C\u0369\v" +
    "\x1C\x03\x1C\x03\x1C\x07\x1C\u036D\n\x1C\f\x1C\x0E\x1C\u0370\v\x1C\x03" +
    "\x1C\x03\x1C\x05\x1C\u0374\n\x1C\x03\x1C\x07\x1C\u0377\n\x1C\f\x1C\x0E" +
    "\x1C\u037A\v\x1C\x03\x1C\x03\x1C\x07\x1C\u037E\n\x1C\f\x1C\x0E\x1C\u0381" +
    "\v\x1C\x03\x1C\x03\x1C\x07\x1C\u0385\n\x1C\f\x1C\x0E\x1C\u0388\v\x1C\x03" +
    "\x1C\x03\x1C\x07\x1C\u038C\n\x1C\f\x1C\x0E\x1C\u038F\v\x1C\x03\x1C\x05" +
    "\x1C\u0392\n\x1C\x03\x1C\x07\x1C\u0395\n\x1C\f\x1C\x0E\x1C\u0398\v\x1C" +
    "\x03\x1C\x05\x1C\u039B\n\x1C\x03\x1C\x07\x1C\u039E\n\x1C\f\x1C\x0E\x1C" +
    "\u03A1\v\x1C\x03\x1C\x05\x1C\u03A4\n\x1C\x03\x1D\x03\x1D\x07\x1D\u03A8" +
    "\n\x1D\f\x1D\x0E\x1D\u03AB\v\x1D\x03\x1D\x03\x1D\x07\x1D\u03AF\n\x1D\f" +
    "\x1D\x0E\x1D\u03B2\v\x1D\x03\x1D\x03\x1D\x07\x1D\u03B6\n\x1D\f\x1D\x0E" +
    "\x1D\u03B9\v\x1D\x03\x1D\x07\x1D\u03BC\n\x1D\f\x1D\x0E\x1D\u03BF\v\x1D" +
    "\x05\x1D\u03C1\n\x1D\x03\x1D\x07\x1D\u03C4\n\x1D\f\x1D\x0E\x1D\u03C7\v" +
    "\x1D\x03\x1D\x05\x1D\u03CA\n\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u03CF" +
    "\n\x1E\x03\x1E\x03\x1E\x07\x1E\u03D3\n\x1E\f\x1E\x0E\x1E\u03D6\v\x1E\x03" +
    "\x1E\x03\x1E\x07\x1E\u03DA\n\x1E\f\x1E\x0E\x1E\u03DD\v\x1E\x03\x1E\x05" +
    "\x1E\u03E0\n\x1E\x03\x1F\x03\x1F\x07\x1F\u03E4\n\x1F\f\x1F\x0E\x1F\u03E7" +
    "\v\x1F\x03\x1F\x03\x1F\x07\x1F\u03EB\n\x1F\f\x1F\x0E\x1F\u03EE\v\x1F\x03" +
    "\x1F\x03\x1F\x03 \x03 \x07 \u03F4\n \f \x0E \u03F7\v \x03 \x03 \x07 \u03FB" +
    "\n \f \x0E \u03FE\v \x03 \x05 \u0401\n \x03!\x03!\x03!\x07!\u0406\n!\f" +
    "!\x0E!\u0409\v!\x03!\x05!\u040C\n!\x03\"\x05\"\u040F\n\"\x03\"\x03\"\x07" +
    "\"\u0413\n\"\f\"\x0E\"\u0416\v\"\x03\"\x03\"\x07\"\u041A\n\"\f\"\x0E\"" +
    "\u041D\v\"\x03\"\x03\"\x07\"\u0421\n\"\f\"\x0E\"\u0424\v\"\x03\"\x05\"" +
    "\u0427\n\"\x03\"\x07\"\u042A\n\"\f\"\x0E\"\u042D\v\"\x03\"\x05\"\u0430" +
    "\n\"\x03#\x05#\u0433\n#\x03#\x03#\x07#\u0437\n#\f#\x0E#\u043A\v#\x03#" +
    "\x03#\x07#\u043E\n#\f#\x0E#\u0441\v#\x03#\x05#\u0444\n#\x03#\x07#\u0447" +
    "\n#\f#\x0E#\u044A\v#\x03#\x03#\x07#\u044E\n#\f#\x0E#\u0451\v#\x03#\x05" +
    "#\u0454\n#\x03#\x07#\u0457\n#\f#\x0E#\u045A\v#\x03#\x05#\u045D\n#\x03" +
    "$\x05$\u0460\n$\x03$\x03$\x07$\u0464\n$\f$\x0E$\u0467\v$\x03$\x05$\u046A" +
    "\n$\x03$\x07$\u046D\n$\f$\x0E$\u0470\v$\x03$\x03$\x07$\u0474\n$\f$\x0E" +
    "$\u0477\v$\x03$\x03$\x05$\u047B\n$\x03$\x07$\u047E\n$\f$\x0E$\u0481\v" +
    "$\x03$\x03$\x05$\u0485\n$\x03$\x07$\u0488\n$\f$\x0E$\u048B\v$\x03$\x05" +
    "$\u048E\n$\x03$\x07$\u0491\n$\f$\x0E$\u0494\v$\x03$\x03$\x07$\u0498\n" +
    "$\f$\x0E$\u049B\v$\x03$\x03$\x05$\u049F\n$\x05$\u04A1\n$\x03$\x06$\u04A4" +
    "\n$\r$\x0E$\u04A5\x03$\x05$\u04A9\n$\x03$\x07$\u04AC\n$\f$\x0E$\u04AF" +
    "\v$\x03$\x05$\u04B2\n$\x03$\x07$\u04B5\n$\f$\x0E$\u04B8\v$\x03$\x05$\u04BB" +
    "\n$\x03$\x05$\u04BE\n$\x03$\x05$\u04C1\n$\x03$\x07$\u04C4\n$\f$\x0E$\u04C7" +
    "\v$\x03$\x05$\u04CA\n$\x03$\x05$\u04CD\n$\x05$\u04CF\n$\x03%\x03%\x07" +
    "%\u04D3\n%\f%\x0E%\u04D6\v%\x03%\x03%\x07%\u04DA\n%\f%\x0E%\u04DD\v%\x03" +
    "%\x03%\x07%\u04E1\n%\f%\x0E%\u04E4\v%\x03%\x07%\u04E7\n%\f%\x0E%\u04EA" +
    "\v%\x03%\x07%\u04ED\n%\f%\x0E%\u04F0\v%\x03%\x03%\x03&\x07&\u04F5\n&\f" +
    "&\x0E&\u04F8\v&\x03&\x07&\u04FB\n&\f&\x0E&\u04FE\v&\x03&\x03&\x07&\u0502" +
    "\n&\f&\x0E&\u0505\v&\x03&\x03&\x07&\u0509\n&\f&\x0E&\u050C\v&\x03&\x05" +
    "&\u050F\n&\x03\'\x03\'\x07\'\u0513\n\'\f\'\x0E\'\u0516\v\'\x03\'\x03\'" +
    "\x03(\x05(\u051B\n(\x03(\x03(\x05(\u051F\n(\x03(\x03(\x07(\u0523\n(\f" +
    "(\x0E(\u0526\v(\x03(\x03(\x07(\u052A\n(\f(\x0E(\u052D\v(\x03(\x03(\x07" +
    "(\u0531\n(\f(\x0E(\u0534\v(\x03(\x03(\x07(\u0538\n(\f(\x0E(\u053B\v(\x03" +
    "(\x05(\u053E\n(\x03(\x07(\u0541\n(\f(\x0E(\u0544\v(\x03(\x05(\u0547\n" +
    "(\x03)\x05)\u054A\n)\x03)\x03)\x05)\u054E\n)\x03)\x03)\x07)\u0552\n)\f" +
    ")\x0E)\u0555\v)\x03)\x03)\x03)\x07)\u055A\n)\f)\x0E)\u055D\v)\x03)\x03" +
    ")\x03)\x07)\u0562\n)\f)\x0E)\u0565\v)\x03)\x03)\x07)\u0569\n)\f)\x0E)" +
    "\u056C\v)\x03)\x05)\u056F\n)\x03)\x07)\u0572\n)\f)\x0E)\u0575\v)\x03)" +
    "\x03)\x05)\u0579\n)\x03*\x05*\u057C\n*\x03*\x03*\x07*\u0580\n*\f*\x0E" +
    "*\u0583\v*\x03*\x03*\x07*\u0587\n*\f*\x0E*\u058A\v*\x03*\x05*\u058D\n" +
    "*\x03*\x07*\u0590\n*\f*\x0E*\u0593\v*\x03*\x03*\x07*\u0597\n*\f*\x0E*" +
    "\u059A\v*\x03*\x03*\x03+\x03+\x07+\u05A0\n+\f+\x0E+\u05A3\v+\x03+\x03" +
    "+\x07+\u05A7\n+\f+\x0E+\u05AA\v+\x03+\x03+\x07+\u05AE\n+\f+\x0E+\u05B1" +
    "\v+\x03+\x07+\u05B4\n+\f+\x0E+\u05B7\v+\x03+\x07+\u05BA\n+\f+\x0E+\u05BD" +
    "\v+\x03+\x05+\u05C0\n+\x03+\x03+\x03,\x05,\u05C5\n,\x03,\x07,\u05C8\n" +
    ",\f,\x0E,\u05CB\v,\x03,\x03,\x07,\u05CF\n,\f,\x0E,\u05D2\v,\x03,\x03," +
    "\x07,\u05D6\n,\f,\x0E,\u05D9\v,\x03,\x05,\u05DC\n,\x03-\x06-\u05DF\n-" +
    "\r-\x0E-\u05E0\x03.\x03.\x07.\u05E5\n.\f.\x0E.\u05E8\v.\x03.\x03.\x07" +
    ".\u05EC\n.\f.\x0E.\u05EF\v.\x03.\x05.\u05F2\n.\x03/\x05/\u05F5\n/\x03" +
    "/\x03/\x03/\x03/\x05/\u05FB\n/\x030\x060\u05FE\n0\r0\x0E0\u05FF\x031\x03" +
    "1\x031\x071\u0605\n1\f1\x0E1\u0608\v1\x051\u060A\n1\x032\x032\x072\u060E" +
    "\n2\f2\x0E2\u0611\v2\x032\x032\x072\u0615\n2\f2\x0E2\u0618\v2\x032\x03" +
    "2\x033\x033\x053\u061E\n3\x033\x073\u0621\n3\f3\x0E3\u0624\v3\x033\x06" +
    "3\u0627\n3\r3\x0E3\u0628\x034\x034\x054\u062D\n4\x035\x035\x075\u0631" +
    "\n5\f5\x0E5\u0634\v5\x035\x035\x075\u0638\n5\f5\x0E5\u063B\v5\x055\u063D" +
    "\n5\x035\x035\x075\u0641\n5\f5\x0E5\u0644\v5\x035\x035\x075\u0648\n5\f" +
    "5\x0E5\u064B\v5\x035\x035\x036\x056\u0650\n6\x036\x036\x036\x056\u0655" +
    "\n6\x037\x037\x077\u0659\n7\f7\x0E7\u065C\v7\x037\x037\x077\u0660\n7\f" +
    "7\x0E7\u0663\v7\x037\x077\u0666\n7\f7\x0E7\u0669\v7\x038\x038\x078\u066D" +
    "\n8\f8\x0E8\u0670\v8\x038\x038\x078\u0674\n8\f8\x0E8\u0677\v8\x038\x03" +
    "8\x038\x038\x078\u067D\n8\f8\x0E8\u0680\v8\x038\x038\x078\u0684\n8\f8" +
    "\x0E8\u0687\v8\x038\x038\x058\u068B\n8\x039\x039\x079\u068F\n9\f9\x0E" +
    "9\u0692\v9\x039\x059\u0695\n9\x03:\x03:\x07:\u0699\n:\f:\x0E:\u069C\v" +
    ":\x03:\x03:\x05:\u06A0\n:\x03:\x07:\u06A3\n:\f:\x0E:\u06A6\v:\x03:\x03" +
    ":\x07:\u06AA\n:\f:\x0E:\u06AD\v:\x03:\x03:\x05:\u06B1\n:\x07:\u06B3\n" +
    ":\f:\x0E:\u06B6\v:\x03:\x07:\u06B9\n:\f:\x0E:\u06BC\v:\x03:\x03:\x03;" +
    "\x03;\x07;\u06C2\n;\f;\x0E;\u06C5\v;\x03;\x03;\x07;\u06C9\n;\f;\x0E;\u06CC" +
    "\v;\x03;\x03;\x07;\u06D0\n;\f;\x0E;\u06D3\v;\x03;\x07;\u06D6\n;\f;\x0E" +
    ";\u06D9\v;\x03<\x07<\u06DC\n<\f<\x0E<\u06DF\v<\x03<\x03<\x07<\u06E3\n" +
    "<\f<\x0E<\u06E6\v<\x03<\x03<\x07<\u06EA\n<\f<\x0E<\u06ED\v<\x03<\x03<" +
    "\x03=\x03=\x07=\u06F3\n=\f=\x0E=\u06F6\v=\x03=\x03=\x07=\u06FA\n=\f=\x0E" +
    "=\u06FD\v=\x03=\x03=\x03>\x03>\x06>\u0703\n>\r>\x0E>\u0704\x03>\x07>\u0708" +
    "\n>\f>\x0E>\u070B\v>\x03>\x05>\u070E\n>\x05>\u0710\n>\x03?\x03?\x07?\u0714" +
    "\n?\f?\x0E?\u0717\v?\x03?\x03?\x03?\x03?\x05?\u071D\n?\x03@\x03@\x03@" +
    "\x03@\x03@\x05@\u0724\n@\x03A\x03A\x03A\x07A\u0729\nA\fA\x0EA\u072C\v" +
    "A\x03A\x03A\x03A\x03A\x03A\x07A\u0733\nA\fA\x0EA\u0736\vA\x03A\x03A\x05" +
    "A\u073A\nA\x03B\x03B\x03C\x03C\x07C\u0740\nC\fC\x0EC\u0743\vC\x03C\x03" +
    "C\x07C\u0747\nC\fC\x0EC\u074A\vC\x03C\x07C\u074D\nC\fC\x0EC\u0750\vC\x03" +
    "D\x03D\x07D\u0754\nD\fD\x0ED\u0757\vD\x03D\x03D\x07D\u075B\nD\fD\x0ED" +
    "\u075E\vD\x03D\x07D\u0761\nD\fD\x0ED\u0764\vD\x03E\x03E\x03E\x07E\u0769" +
    "\nE\fE\x0EE\u076C\vE\x03E\x03E\x07E\u0770\nE\fE\x0EE\u0773\vE\x03F\x03" +
    "F\x03F\x07F\u0778\nF\fF\x0EF\u077B\vF\x03F\x03F\x05F\u077F\nF\x03G\x03" +
    "G\x03G\x07G\u0784\nG\fG\x0EG\u0787\vG\x03G\x03G\x03G\x03G\x07G\u078D\n" +
    "G\fG\x0EG\u0790\vG\x03G\x03G\x07G\u0794\nG\fG\x0EG\u0797\vG\x03H\x03H" +
    "\x07H\u079B\nH\fH\x0EH\u079E\vH\x03H\x03H\x07H\u07A2\nH\fH\x0EH\u07A5" +
    "\vH\x03H\x03H\x07H\u07A9\nH\fH\x0EH\u07AC\vH\x03I\x03I\x03I\x07I\u07B1" +
    "\nI\fI\x0EI\u07B4\vI\x03I\x03I\x07I\u07B8\nI\fI\x0EI\u07BB\vI\x03J\x03" +
    "J\x03J\x07J\u07C0\nJ\fJ\x0EJ\u07C3\vJ\x03J\x07J\u07C6\nJ\fJ\x0EJ\u07C9" +
    "\vJ\x03K\x03K\x03K\x07K\u07CE\nK\fK\x0EK\u07D1\vK\x03K\x03K\x07K\u07D5" +
    "\nK\fK\x0EK\u07D8\vK\x03L\x03L\x03L\x07L\u07DD\nL\fL\x0EL\u07E0\vL\x03" +
    "L\x03L\x07L\u07E4\nL\fL\x0EL\u07E7\vL\x03M\x03M\x07M\u07EB\nM\fM\x0EM" +
    "\u07EE\vM\x03M\x03M\x07M\u07F2\nM\fM\x0EM\u07F5\vM\x03M\x03M\x05M\u07F9" +
    "\nM\x03N\x07N\u07FC\nN\fN\x0EN\u07FF\vN\x03N\x03N\x03O\x03O\x03O\x03O" +
    "\x07O\u0807\nO\fO\x0EO\u080A\vO\x05O\u080C\nO\x03P\x03P\x03P\x06P\u0811" +
    "\nP\rP\x0EP\u0812\x05P\u0815\nP\x03Q\x03Q\x03Q\x03Q\x03Q\x05Q\u081C\n" +
    "Q\x03R\x03R\x03R\x03R\x05R\u0822\nR\x03S\x03S\x03T\x03T\x03T\x05T\u0829" +
    "\nT\x03U\x03U\x07U\u082D\nU\fU\x0EU\u0830\vU\x03U\x03U\x07U\u0834\nU\f" +
    "U\x0EU\u0837\vU\x03U\x03U\x07U\u083B\nU\fU\x0EU\u083E\vU\x03U\x07U\u0841" +
    "\nU\fU\x0EU\u0844\vU\x03U\x07U\u0847\nU\fU\x0EU\u084A\vU\x03U\x03U\x03" +
    "V\x07V\u084F\nV\fV\x0EV\u0852\vV\x03V\x03V\x07V\u0856\nV\fV\x0EV\u0859" +
    "\vV\x03V\x03V\x03V\x05V\u085E\nV\x03W\x05W\u0861\nW\x03W\x05W\u0864\n" +
    "W\x03W\x03W\x05W\u0868\nW\x03W\x05W\u086B\nW\x03X\x07X\u086E\nX\fX\x0E" +
    "X\u0871\vX\x03X\x05X\u0874\nX\x03X\x07X\u0877\nX\fX\x0EX\u087A\vX\x03" +
    "X\x03X\x03Y\x03Y\x07Y\u0880\nY\fY\x0EY\u0883\vY\x03Y\x03Y\x03Y\x07Y\u0888" +
    "\nY\fY\x0EY\u088B\vY\x03Y\x03Y\x07Y\u088F\nY\fY\x0EY\u0892\vY\x03Y\x03" +
    "Y\x07Y\u0896\nY\fY\x0EY\u0899\vY\x03Y\x07Y\u089C\nY\fY\x0EY\u089F\vY\x03" +
    "Y\x07Y\u08A2\nY\fY\x0EY\u08A5\vY\x03Y\x05Y\u08A8\nY\x03Y\x03Y\x05Y\u08AC" +
    "\nY\x03Z\x03Z\x07Z\u08B0\n";
KotlinParser._serializedATNSegment1 = "Z\fZ\x0EZ\u08B3\vZ\x03Z\x03Z\x07Z\u08B7\nZ\fZ\x0EZ\u08BA\vZ\x03Z\x03Z" +
    "\x07Z\u08BE\nZ\fZ\x0EZ\u08C1\vZ\x03Z\x07Z\u08C4\nZ\fZ\x0EZ\u08C7\vZ\x03" +
    "Z\x07Z\u08CA\nZ\fZ\x0EZ\u08CD\vZ\x03Z\x05Z\u08D0\nZ\x03Z\x03Z\x03[\x05" +
    "[\u08D5\n[\x03[\x03[\x05[\u08D9\n[\x03\\\x06\\\u08DC\n\\\r\\\x0E\\\u08DD" +
    "\x03]\x03]\x07]\u08E2\n]\f]\x0E]\u08E5\v]\x03]\x05]\u08E8\n]\x03^\x05" +
    "^\u08EB\n^\x03^\x07^\u08EE\n^\f^\x0E^\u08F1\v^\x03^\x03^\x07^\u08F5\n" +
    "^\f^\x0E^\u08F8\v^\x03^\x03^\x07^\u08FC\n^\f^\x0E^\u08FF\v^\x05^\u0901" +
    "\n^\x03^\x05^\u0904\n^\x03^\x07^\u0907\n^\f^\x0E^\u090A\v^\x03^\x03^\x03" +
    "_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x03_\x05" +
    "_\u091C\n_\x03`\x03`\x07`\u0920\n`\f`\x0E`\u0923\v`\x03`\x03`\x07`\u0927" +
    "\n`\f`\x0E`\u092A\v`\x03`\x03`\x03a\x03a\x07a\u0930\na\fa\x0Ea\u0933\v" +
    "a\x03a\x03a\x07a\u0937\na\fa\x0Ea\u093A\va\x03a\x03a\x07a\u093E\na\fa" +
    "\x0Ea\u0941\va\x03a\x07a\u0944\na\fa\x0Ea\u0947\va\x03a\x07a\u094A\na" +
    "\fa\x0Ea\u094D\va\x03a\x05a\u0950\na\x03a\x03a\x03a\x03a\x07a\u0956\n" +
    "a\fa\x0Ea\u0959\va\x03a\x05a\u095C\na\x03b\x03b\x03c\x03c\x05c\u0962\n" +
    "c\x03d\x03d\x03d\x07d\u0967\nd\fd\x0Ed\u096A\vd\x03d\x03d\x03e\x03e\x03" +
    "e\x03e\x07e\u0972\ne\fe\x0Ee\u0975\ve\x03e\x03e\x03f\x03f\x03g\x03g\x03" +
    "g\x03g\x03h\x03h\x03i\x03i\x07i\u0983\ni\fi\x0Ei\u0986\vi\x03i\x03i\x07" +
    "i\u098A\ni\fi\x0Ei\u098D\vi\x03i\x03i\x03j\x03j\x07j\u0993\nj\fj\x0Ej" +
    "\u0996\vj\x03j\x03j\x07j\u099A\nj\fj\x0Ej\u099D\vj\x03j\x03j\x03j\x03" +
    "j\x07j\u09A3\nj\fj\x0Ej\u09A6\vj\x03j\x05j\u09A9\nj\x03j\x07j\u09AC\n" +
    "j\fj\x0Ej\u09AF\vj\x03j\x03j\x07j\u09B3\nj\fj\x0Ej\u09B6\vj\x03j\x03j" +
    "\x07j\u09BA\nj\fj\x0Ej\u09BD\vj\x03j\x03j\x05j\u09C1\nj\x03k\x03k\x07" +
    "k\u09C5\nk\fk\x0Ek\u09C8\vk\x03k\x03k\x07k\u09CC\nk\fk\x0Ek\u09CF\vk\x03" +
    "k\x07k\u09D2\nk\fk\x0Ek\u09D5\vk\x03k\x05k\u09D8\nk\x03l\x03l\x03l\x07" +
    "l\u09DD\nl\fl\x0El\u09E0\vl\x03l\x03l\x07l\u09E4\nl\fl\x0El\u09E7\vl\x03" +
    "l\x05l\u09EA\nl\x05l\u09EC\nl\x03m\x03m\x07m\u09F0\nm\fm\x0Em\u09F3\v" +
    "m\x03m\x03m\x07m\u09F7\nm\fm\x0Em\u09FA\vm\x03m\x03m\x05m\u09FE\nm\x03" +
    "m\x07m\u0A01\nm\fm\x0Em\u0A04\vm\x03m\x03m\x07m\u0A08\nm\fm\x0Em\u0A0B" +
    "\vm\x03m\x03m\x07m\u0A0F\nm\fm\x0Em\u0A12\vm\x03m\x05m\u0A15\nm\x03m\x07" +
    "m\u0A18\nm\fm\x0Em\u0A1B\vm\x03m\x05m\u0A1E\nm\x03m\x07m\u0A21\nm\fm\x0E" +
    "m\u0A24\vm\x03m\x05m\u0A27\nm\x03n\x03n\x05n\u0A2B\nn\x03o\x03o\x07o\u0A2F" +
    "\no\fo\x0Eo\u0A32\vo\x03o\x03o\x07o\u0A36\no\fo\x0Eo\u0A39\vo\x03o\x03" +
    "o\x07o\u0A3D\no\fo\x0Eo\u0A40\vo\x03o\x05o\u0A43\no\x03o\x03o\x07o\u0A47" +
    "\no\fo\x0Eo\u0A4A\vo\x03o\x05o\u0A4D\no\x03p\x03p\x03q\x03q\x03q\x07q" +
    "\u0A54\nq\fq\x0Eq\u0A57\vq\x03q\x03q\x07q\u0A5B\nq\fq\x0Eq\u0A5E\vq\x03" +
    "q\x03q\x05q\u0A62\nq\x03q\x03q\x05q\u0A66\nq\x03q\x05q\u0A69\nq\x03r\x03" +
    "r\x05r\u0A6D\nr\x03s\x03s\x07s\u0A71\ns\fs\x0Es\u0A74\vs\x03s\x03s\x07" +
    "s\u0A78\ns\fs\x0Es\u0A7B\vs\x03s\x03s\x07s\u0A7F\ns\fs\x0Es\u0A82\vs\x03" +
    "s\x03s\x07s\u0A86\ns\fs\x0Es\u0A89\vs\x03s\x03s\x05s\u0A8D\ns\x03s\x07" +
    "s\u0A90\ns\fs\x0Es\u0A93\vs\x03s\x03s\x07s\u0A97\ns\fs\x0Es\u0A9A\vs\x03" +
    "s\x05s\u0A9D\ns\x03s\x03s\x07s\u0AA1\ns\fs\x0Es\u0AA4\vs\x03s\x03s\x07" +
    "s\u0AA8\ns\fs\x0Es\u0AAB\vs\x03s\x03s\x07s\u0AAF\ns\fs\x0Es\u0AB2\vs\x03" +
    "s\x03s\x07s\u0AB6\ns\fs\x0Es\u0AB9\vs\x03s\x03s\x07s\u0ABD\ns\fs\x0Es" +
    "\u0AC0\vs\x05s\u0AC2\ns\x03s\x03s\x07s\u0AC6\ns\fs\x0Es\u0AC9\vs\x03s" +
    "\x03s\x05s\u0ACD\ns\x03t\x03t\x07t\u0AD1\nt\ft\x0Et\u0AD4\vt\x03t\x03" +
    "t\x03t\x03t\x05t\u0ADA\nt\x03t\x07t\u0ADD\nt\ft\x0Et\u0AE0\vt\x03t\x03" +
    "t\x07t\u0AE4\nt\ft\x0Et\u0AE7\vt\x03t\x03t\x07t\u0AEB\nt\ft\x0Et\u0AEE" +
    "\vt\x07t\u0AF0\nt\ft\x0Et\u0AF3\vt\x03t\x07t\u0AF6\nt\ft\x0Et\u0AF9\v" +
    "t\x03t\x03t\x03u\x03u\x07u\u0AFF\nu\fu\x0Eu\u0B02\vu\x03u\x03u\x07u\u0B06" +
    "\nu\fu\x0Eu\u0B09\vu\x03u\x07u\u0B0C\nu\fu\x0Eu\u0B0F\vu\x03u\x07u\u0B12" +
    "\nu\fu\x0Eu\u0B15\vu\x03u\x03u\x07u\u0B19\nu\fu\x0Eu\u0B1C\vu\x03u\x03" +
    "u\x05u\u0B20\nu\x03u\x03u\x07u\u0B24\nu\fu\x0Eu\u0B27\vu\x03u\x03u\x07" +
    "u\u0B2B\nu\fu\x0Eu\u0B2E\vu\x03u\x03u\x05u\u0B32\nu\x05u\u0B34\nu\x03" +
    "v\x03v\x03v\x05v\u0B39\nv\x03w\x03w\x07w\u0B3D\nw\fw\x0Ew\u0B40\vw\x03" +
    "w\x03w\x03x\x03x\x07x\u0B46\nx\fx\x0Ex\u0B49\vx\x03x\x03x\x03y\x03y\x07" +
    "y\u0B4F\ny\fy\x0Ey\u0B52\vy\x03y\x03y\x07y\u0B56\ny\fy\x0Ey\u0B59\vy\x03" +
    "y\x06y\u0B5C\ny\ry\x0Ey\u0B5D\x03y\x07y\u0B61\ny\fy\x0Ey\u0B64\vy\x03" +
    "y\x05y\u0B67\ny\x03y\x07y\u0B6A\ny\fy\x0Ey\u0B6D\vy\x03y\x05y\u0B70\n" +
    "y\x03z\x03z\x07z\u0B74\nz\fz\x0Ez\u0B77\vz\x03z\x03z\x07z\u0B7B\nz\fz" +
    "\x0Ez\u0B7E\vz\x03z\x03z\x03z\x03z\x03z\x07z\u0B85\nz\fz\x0Ez\u0B88\v" +
    "z\x03z\x03z\x03{\x03{\x07{\u0B8E\n{\f{\x0E{\u0B91\v{\x03{\x03{\x03|\x03" +
    "|\x03|\x05|\u0B98\n|\x03}\x03}\x07}\u0B9C\n}\f}\x0E}\u0B9F\v}\x03}\x03" +
    "}\x07}\u0BA3\n}\f}\x0E}\u0BA6\v}\x03}\x03}\x05}\u0BAA\n}\x03}\x03}\x03" +
    "}\x03}\x07}\u0BB0\n}\f}\x0E}\u0BB3\v}\x03}\x05}\u0BB6\n}\x03~\x03~\x07" +
    "~\u0BBA\n~\f~\x0E~\u0BBD\v~\x03~\x03~\x03~\x03~\x07~\u0BC3\n~\f~\x0E~" +
    "\u0BC6\v~\x03~\x03~\x03~\x03~\x07~\u0BCC\n~\f~\x0E~\u0BCF\v~\x03~\x03" +
    "~\x03~\x03~\x07~\u0BD5\n~\f~\x0E~\u0BD8\v~\x03~\x03~\x05~\u0BDC\n~\x03" +
    "\x7F\x03\x7F\x07\x7F\u0BE0\n\x7F\f\x7F\x0E\x7F\u0BE3\v\x7F\x03\x7F\x05" +
    "\x7F\u0BE6\n\x7F\x03\x7F\x07\x7F\u0BE9\n\x7F\f\x7F\x0E\x7F\u0BEC\v\x7F" +
    "\x03\x7F\x03\x7F\x07\x7F\u0BF0\n\x7F\f\x7F\x0E\x7F\u0BF3\v\x7F\x03\x7F" +
    "\x03\x7F\x03\x7F\x03\x7F\x03\x80\x03\x80\x07\x80\u0BFB\n\x80\f\x80\x0E" +
    "\x80\u0BFE\v\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0C03\n\x80\x03\x80\x03" +
    "\x80\x03\x80\x03\x80\x05\x80\u0C09\n\x80\x03\x81\x05\x81\u0C0C\n\x81\x03" +
    "\x81\x07\x81\u0C0F\n\x81\f\x81\x0E\x81\u0C12\v\x81\x03\x81\x03\x81\x07" +
    "\x81\u0C16\n\x81\f\x81\x0E\x81\u0C19\v\x81\x03\x81\x03\x81\x05\x81\u0C1D" +
    "\n\x81\x03\x82\x03\x82\x03\x83\x03\x83\x03\x84\x03\x84\x03\x85\x03\x85" +
    "\x03\x86\x03\x86\x03\x87\x03\x87\x03\x88\x03\x88\x03\x89\x03\x89\x03\x8A" +
    "\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x05\x8A\u0C34\n\x8A\x03\x8B\x03\x8B\x03" +
    "\x8B\x03\x8B\x05\x8B\u0C3A\n\x8B\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0C3F" +
    "\n\x8C\x03\x8D\x03\x8D\x06\x8D\u0C43\n\x8D\r\x8D\x0E\x8D\u0C44\x03\x8E" +
    "\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0C4F" +
    "\n\x8E\x03\x8E\x07\x8E\u0C52\n\x8E\f\x8E\x0E\x8E\u0C55\v\x8E\x03\x8F\x03" +
    "\x8F\x03\x90\x03\x90\x03\x91\x03\x91\x03\x92\x03\x92\x03\x93\x03\x93\x03" +
    "\x94\x03\x94\x03\x95\x03\x95\x03\x96\x03\x96\x03\x97\x03\x97\x03\x98\x03" +
    "\x98\x03\x99\x03\x99\x07\x99\u0C6D\n\x99\f\x99\x0E\x99\u0C70\v\x99\x03" +
    "\x9A\x03\x9A\x05\x9A\u0C74\n\x9A\x03\x9A\x07\x9A\u0C77\n\x9A\f\x9A\x0E" +
    "\x9A\u0C7A\v\x9A\x03\x9B\x03\x9B\x07\x9B\u0C7E\n\x9B\f\x9B\x0E\x9B\u0C81" +
    "\v\x9B\x03\x9B\x03\x9B\x07\x9B\u0C85\n\x9B\f\x9B\x0E\x9B\u0C88\v\x9B\x03" +
    "\x9B\x03\x9B\x03\x9B\x03\x9B\x05\x9B\u0C8E\n\x9B\x03\x9C\x03\x9C\x07\x9C" +
    "\u0C92\n\x9C\f\x9C\x0E\x9C\u0C95\v\x9C\x03\x9C\x03\x9C\x07\x9C\u0C99\n" +
    "\x9C\f\x9C\x0E\x9C\u0C9C\v\x9C\x03\x9C\x03\x9C\x06\x9C\u0CA0\n\x9C\r\x9C" +
    "\x0E\x9C\u0CA1\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x03\x9C\x06\x9C\u0CA9\n" +
    "\x9C\r\x9C\x0E\x9C\u0CAA\x03\x9C\x03\x9C\x05\x9C\u0CAF\n\x9C\x03\x9D\x03" +
    "\x9D\x03\x9E\x03\x9E\x05\x9E\u0CB5\n\x9E\x03\x9F\x03\x9F\x03\xA0\x03\xA0" +
    "\x07\xA0\u0CBB\n\xA0\f\xA0\x0E\xA0\u0CBE\v\xA0\x03\xA0\x03\xA0\x07\xA0" +
    "\u0CC2\n\xA0\f\xA0\x0E\xA0\u0CC5\v\xA0\x03\xA1\x03\xA1\x06\xA1\u0CC9\n" +
    "\xA1\r\xA1\x0E\xA1\u0CCA\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03\xA3\x03\xA4" +
    "\x03\xA4\x03\xA4\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x07\xA6\u0CD9\n\xA6\f" +
    "\xA6\x0E\xA6\u0CDC\v\xA6\x03\xA6\x05\xA6\u0CDF\n\xA6\x03\xA7\x06\xA7\u0CE2" +
    "\n\xA7\r\xA7\x0E\xA7\u0CE3\x03\xA7\x05\xA7\u0CE7\n\xA7\x03\xA7\x02\x02" +
    "\x02\xA8\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
    "\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
    "\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
    "B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
    "^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02" +
    "z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02" +
    "\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02" +
    "\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02" +
    "\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02" +
    "\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02" +
    "\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02" +
    "\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02" +
    "\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108" +
    "\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116" +
    "\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124" +
    "\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132" +
    "\x02\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140" +
    "\x02\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\x02\x1E" +
    "\x03\x02?@\x03\x02CD\x04\x02\x07\x07\x1D\x1D\x05\x02\x8A\x8A\x8D\x92\x96" +
    "\x96\x03\x02\xA3\xA5\x03\x02\xA8\xAA\x04\x02;;JJ\x04\x0288XX\x03\x02\x1F" +
    "#\x04\x022356\x03\x02.1\x04\x02]]__\x04\x02\\\\^^\x03\x02\x14\x15\x03" +
    "\x02\x11\x13\x04\x0244[[\x03\x02qu\x04\x02||\x81\x81\x03\x02mp\x04\x02" +
    "]]``\x03\x02v{\x03\x02}\x7F\x03\x02\x82\x84\x03\x02\x86\x87\x03\x02el" +
    "\t\x02>>FIMMRS`cm\x87\x93\x93\x03\x02,-\x03\x02\x1A\x1B\x02\u0E6D\x02" +
    "\u014F\x03\x02\x02\x02\x04\u0168\x03\x02\x02\x02\x06\u0182\x03\x02\x02" +
    "\x02\b\u01A6\x03\x02\x02\x02\n\u01AB\x03\x02\x02\x02\f\u01AE\x03\x02\x02" +
    "\x02\x0E\u01B8\x03\x02\x02\x02\x10\u01BB\x03\x02\x02\x02\x12\u01C0\x03" +
    "\x02\x02\x02\x14\u020F\x03\x02\x02\x02\x16\u0213\x03\x02\x02\x02\x18\u023C" +
    "\x03\x02\x02\x02\x1A\u0260\x03\x02\x02\x02\x1C\u0277\x03\x02\x02\x02\x1E" +
    "\u0286\x03\x02\x02\x02 \u0288\x03\x02\x02\x02\"\u028D\x03\x02\x02\x02" +
    "$\u029E\x03\x02\x02\x02&\u02B4\x03\x02\x02\x02(\u02BB\x03\x02\x02\x02" +
    "*\u02BD\x03\x02\x02\x02,\u02C7\x03\x02\x02\x02.\u02FA\x03\x02\x02\x02" +
    "0\u02FC\x03\x02\x02\x022\u031E\x03\x02\x02\x024\u0342\x03\x02\x02\x02" +
    "6\u0358\x03\x02\x02\x028\u03A5\x03\x02\x02\x02:\u03CE\x03\x02\x02\x02" +
    "<\u03E1\x03\x02\x02\x02>\u03F1\x03\x02\x02\x02@\u040B\x03\x02\x02\x02" +
    "B\u040E\x03\x02\x02\x02D\u0432\x03\x02\x02\x02F\u045F\x03\x02\x02\x02" +
    "H\u04D0\x03\x02\x02\x02J\u04F6\x03\x02\x02\x02L\u0510\x03\x02\x02\x02" +
    "N\u0546\x03\x02\x02\x02P\u0578\x03\x02\x02\x02R\u057B\x03\x02\x02\x02" +
    "T\u059D\x03\x02\x02\x02V\u05C4\x03\x02\x02\x02X\u05DE\x03\x02\x02\x02" +
    "Z\u05F1\x03\x02\x02\x02\\\u05F4\x03\x02\x02\x02^\u05FD\x03\x02\x02\x02" +
    "`\u0609\x03\x02\x02\x02b\u060B\x03\x02\x02\x02d\u061D\x03\x02\x02\x02" +
    "f\u062C\x03\x02\x02\x02h\u063C\x03\x02\x02\x02j\u064F\x03\x02\x02\x02" +
    "l\u0656\x03\x02\x02\x02n\u068A\x03\x02\x02\x02p\u068C\x03\x02\x02\x02" +
    "r\u0696\x03\x02\x02\x02t\u06BF\x03\x02\x02\x02v\u06DD\x03\x02\x02\x02" +
    "x\u06F0\x03\x02\x02\x02z\u070F\x03\x02\x02\x02|\u0715\x03\x02\x02\x02" +
    "~\u0723\x03\x02\x02\x02\x80\u0739\x03\x02\x02\x02\x82\u073B\x03\x02\x02" +
    "\x02\x84\u073D\x03\x02\x02\x02\x86\u0751\x03\x02\x02\x02\x88\u0765\x03" +
    "\x02\x02\x02\x8A\u0774\x03\x02\x02\x02\x8C\u0780\x03\x02\x02\x02\x8E\u0798" +
    "\x03\x02\x02\x02\x90\u07AD\x03\x02\x02\x02\x92\u07BC\x03\x02\x02\x02\x94" +
    "\u07CA\x03\x02\x02\x02\x96\u07D9\x03\x02\x02\x02\x98\u07E8\x03\x02\x02" +
    "\x02\x9A\u07FD\x03\x02\x02\x02\x9C\u080B\x03\x02\x02\x02\x9E\u0814\x03" +
    "\x02\x02\x02\xA0\u081B\x03\x02\x02\x02\xA2\u0821\x03\x02\x02\x02\xA4\u0823" +
    "\x03\x02\x02\x02\xA6\u0828\x03\x02\x02\x02\xA8\u082A\x03\x02\x02\x02\xAA" +
    "\u0850\x03\x02\x02\x02\xAC\u086A\x03\x02\x02\x02\xAE\u086F\x03\x02\x02" +
    "\x02\xB0\u08AB\x03\x02\x02\x02\xB2\u08AD\x03\x02\x02\x02\xB4\u08D8\x03" +
    "\x02\x02\x02\xB6\u08DB\x03\x02\x02\x02\xB8\u08E7\x03\x02\x02\x02\xBA\u08EA" +
    "\x03\x02\x02\x02\xBC\u091B\x03\x02\x02\x02\xBE\u091D\x03\x02\x02\x02\xC0" +
    "\u095B\x03\x02\x02\x02\xC2\u095D\x03\x02\x02\x02\xC4\u0961\x03\x02\x02" +
    "\x02\xC6\u0963\x03\x02\x02\x02\xC8\u096D\x03\x02\x02\x02\xCA\u0978\x03" +
    "\x02\x02\x02\xCC\u097A\x03\x02\x02\x02\xCE\u097E\x03\x02\x02\x02\xD0\u0980" +
    "\x03\x02\x02\x02\xD2\u09C0\x03\x02\x02\x02\xD4\u09C2\x03\x02\x02\x02\xD6" +
    "\u09EB\x03\x02\x02\x02\xD8\u09ED\x03\x02\x02\x02\xDA\u0A2A\x03\x02\x02" +
    "\x02\xDC\u0A4C\x03\x02\x02\x02\xDE\u0A4E\x03\x02\x02\x02\xE0\u0A68\x03" +
    "\x02\x02\x02\xE2\u0A6C\x03\x02\x02\x02\xE4\u0ACC\x03\x02\x02\x02\xE6\u0ACE" +
    "\x03\x02\x02\x02\xE8\u0B33\x03\x02\x02\x02\xEA\u0B38\x03\x02\x02\x02\xEC" +
    "\u0B3A\x03\x02\x02\x02\xEE\u0B43\x03\x02\x02\x02\xF0\u0B4C\x03\x02\x02" +
    "\x02\xF2\u0B71\x03\x02\x02\x02\xF4\u0B8B\x03\x02\x02\x02\xF6\u0B97\x03" +
    "\x02\x02\x02\xF8\u0B99\x03\x02\x02\x02\xFA\u0BDB\x03\x02\x02\x02\xFC\u0BDD" +
    "\x03\x02\x02\x02\xFE\u0C08\x03\x02\x02\x02\u0100\u0C0B\x03\x02\x02\x02" +
    "\u0102\u0C1E\x03\x02\x02\x02\u0104\u0C20\x03\x02\x02\x02\u0106\u0C22\x03" +
    "\x02\x02\x02\u0108\u0C24\x03\x02\x02\x02\u010A\u0C26\x03\x02\x02\x02\u010C" +
    "\u0C28\x03\x02\x02\x02\u010E\u0C2A\x03\x02\x02\x02\u0110\u0C2C\x03\x02" +
    "\x02\x02\u0112\u0C33\x03\x02\x02\x02\u0114\u0C39\x03\x02\x02\x02\u0116" +
    "\u0C3E\x03\x02\x02\x02\u0118\u0C42\x03\x02\x02\x02\u011A\u0C4E\x03\x02" +
    "\x02\x02\u011C\u0C56\x03\x02\x02\x02\u011E\u0C58\x03\x02\x02\x02\u0120" +
    "\u0C5A\x03\x02\x02\x02\u0122\u0C5C\x03\x02\x02\x02\u0124\u0C5E\x03\x02" +
    "\x02\x02\u0126\u0C60\x03\x02\x02\x02\u0128\u0C62\x03\x02\x02\x02\u012A" +
    "\u0C64\x03\x02\x02\x02\u012C\u0C66\x03\x02\x02\x02\u012E\u0C68\x03\x02" +
    "\x02\x02\u0130\u0C6A\x03\x02\x02\x02\u0132\u0C73\x03\x02\x02\x02\u0134" +
    "\u0C8D\x03\x02\x02\x02\u0136\u0CAE\x03\x02\x02\x02\u0138\u0CB0\x03\x02" +
    "\x02\x02\u013A\u0CB4\x03\x02\x02\x02\u013C\u0CB6\x03\x02\x02\x02\u013E" +
    "\u0CB8\x03\x02\x02\x02\u0140\u0CC6\x03\x02\x02\x02\u0142\u0CCC\x03\x02" +
    "\x02\x02\u0144\u0CCE\x03\x02\x02\x02\u0146\u0CD1\x03\x02\x02\x02\u0148" +
    "\u0CD4\x03\x02\x02\x02\u014A\u0CDE\x03\x02\x02\x02\u014C\u0CE6\x03\x02" +
    "\x02\x02\u014E\u0150\x05\u0140\xA1\x02\u014F\u014E\x03\x02\x02\x02\u014F" +
    "\u0150\x03\x02\x02\x02\u0150\u0154\x03\x02\x02\x02\u0151\u0153\x07\x07" +
    "\x02\x02\u0152\u0151\x03\x02\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154" +
    "\u0152\x03\x02\x02\x02\u0154\u0155\x03\x02\x02\x02\u0155\u015A\x03\x02" +
    "\x02\x02\u0156\u0154\x03\x02\x02\x02\u0157\u0159\x05\x06\x04\x02\u0158" +
    "\u0157\x03\x02\x02\x02\u0159\u015C\x03\x02\x02\x02\u015A\u0158\x03\x02" +
    "\x02\x02\u015A\u015B\x03\x02\x02\x02\u015B\u015D\x03\x02\x02\x02\u015C" +
    "\u015A\x03\x02\x02\x02\u015D\u015E\x05\b\x05\x02\u015E\u0162\x05\n\x06" +
    "\x02\u015F\u0161\x05\x10\t\x02\u0160\u015F\x03\x02\x02\x02\u0161\u0164" +
    "\x03\x02\x02\x02\u0162\u0160\x03\x02\x02\x02\u0162\u0163\x03\x02\x02\x02" +
    "\u0163\u0165\x03\x02\x02\x02\u0164\u0162\x03\x02\x02\x02\u0165\u0166\x07" +
    "\x02\x02\x03\u0166\x03\x03\x02\x02\x02\u0167\u0169\x05\u0140\xA1\x02\u0168" +
    "\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016D\x03\x02" +
    "\x02\x02\u016A\u016C\x07\x07\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C" +
    "\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02" +
    "\x02\x02\u016E\u0173\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
    "\u0172\x05\x06\x04\x02\u0171\u0170\x03\x02\x02\x02\u0172\u0175\x03\x02" +
    "\x02\x02\u0173\u0171\x03\x02\x02\x02\u0173\u0174\x03\x02\x02\x02\u0174" +
    "\u0176\x03\x02\x02\x02\u0175\u0173\x03\x02\x02\x02\u0176\u0177\x05\b\x05" +
    "\x02\u0177\u017D\x05\n\x06\x02\u0178\u0179\x05|?\x02\u0179\u017A\x05\u014A" +
    "\xA6\x02\u017A\u017C\x03\x02\x02\x02\u017B\u0178\x03\x02\x02\x02\u017C" +
    "\u017F\x03\x02\x02\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02" +
    "\x02\x02\u017E\u0180\x03\x02\x02\x02\u017F\u017D\x03\x02\x02\x02\u0180" +
    "\u0181\x07\x02\x02\x03\u0181\x05\x03\x02\x02\x02\u0182\u0186\x07d\x02" +
    "\x02\u0183\u0185\x07\x07\x02\x02\u0184\u0183\x03\x02\x02\x02\u0185\u0188" +
    "\x03\x02\x02\x02\u0186\u0184\x03\x02\x02\x02\u0186\u0187\x03\x02\x02\x02" +
    "\u0187\u0189\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0189\u018D\x07" +
    "\x1C\x02\x02\u018A\u018C\x07\x07\x02\x02\u018B\u018A\x03\x02\x02\x02\u018C" +
    "\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018D\u018E\x03\x02" +
    "\x02\x02\u018E\u0199\x03\x02\x02\x02\u018F\u018D\x03\x02\x02\x02\u0190" +
    "\u0192\x07\r\x02\x02\u0191\u0193\x05\u013A\x9E\x02\u0192\u0191\x03\x02" +
    "\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
    "\u0195\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0197\x07\x0E" +
    "\x02\x02\u0197\u019A\x03\x02\x02\x02\u0198\u019A\x05\u013A\x9E\x02\u0199" +
    "\u0190\x03\x02\x02\x02\u0199\u0198\x03\x02\x02\x02\u019A\u019E\x03\x02" +
    "\x02\x02\u019B\u019D\x07\x07\x02\x02\u019C\u019B\x03\x02\x02\x02\u019D" +
    "\u01A0\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019F\x03\x02" +
    "\x02\x02\u019F\x07\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A1\u01A2" +
    "\x07=\x02\x02\u01A2\u01A4\x05\u013E\xA0\x02\u01A3\u01A5\x05\u014A\xA6" +
    "\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7" +
    "\x03\x02\x02\x02\u01A6\u01A1\x03\x02\x02\x02\u01A6\u01A7\x03\x02\x02\x02" +
    "\u01A7\t\x03\x02\x02\x02\u01A8\u01AA\x05\f\x07\x02\u01A9\u01A8\x03\x02" +
    "\x02\x02\u01AA\u01AD\x03\x02\x02\x02\u01AB\u01A9\x03\x02\x02\x02\u01AB" +
    "\u01AC\x03\x02\x02\x02\u01AC\v\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02" +
    "\x02\u01AE\u01AF\x07>\x02\x02\u01AF\u01B3\x05\u013E\xA0\x02\u01B0\u01B1" +
    "\x07\t\x02\x02\u01B1\u01B4\x07\x11\x02\x02\u01B2\u01B4\x05\x0E\b\x02\u01B3" +
    "\u01B0\x03\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B3\u01B4\x03\x02" +
    "\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B7\x05\u014A\xA6\x02\u01B6" +
    "\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02\u01B7\r\x03\x02\x02" +
    "\x02\u01B8\u01B9\x07[\x02\x02\u01B9\u01BA\x05\u013C\x9F\x02\u01BA\x0F" +
    "\x03\x02\x02\x02\u01BB\u01BD\x05~@\x02\u01BC\u01BE\x05\u014C\xA7\x02\u01BD" +
    "\u01BC\x03\x02\x02\x02\u01BD\u01BE\x03\x02\x02\x02\u01BE\x11\x03\x02\x02" +
    "\x02\u01BF\u01C1\x05\u0118\x8D\x02\u01C0\u01BF\x03\x02\x02\x02\u01C0\u01C1" +
    "\x03\x02\x02\x02\u01C1\u01C2\x03\x02\x02\x02\u01C2\u01C6\t\x02\x02\x02" +
    "\u01C3\u01C5\x07\x07\x02\x02\u01C4\u01C3\x03\x02\x02\x02\u01C5\u01C8\x03" +
    "\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7" +
    "\u01C9\x03\x02\x02\x02\u01C8\u01C6\x03\x02\x02\x02\u01C9\u01D1\x05\u013C" +
    "\x9F\x02\u01CA\u01CC\x07\x07\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC" +
    "\u01CF\x03\x02\x02\x02\u01CD\u01CB\x03\x02\x02\x02\u01CD\u01CE\x03\x02" +
    "\x02\x02\u01CE\u01D0\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01D0" +
    "\u01D2\x05T+\x02\u01D1\u01CD\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02" +
    "\u01D2\u01DA\x03\x02\x02\x02\u01D3\u01D5\x07\x07\x02\x02\u01D4\u01D3\x03" +
    "\x02\x02\x02\u01D5\u01D8\x03\x02\x02\x02\u01D6\u01D4\x03\x02\x02\x02\u01D6" +
    "\u01D7\x03\x02\x02\x02\u01D7\u01D9\x03\x02\x02\x02\u01D8\u01D6\x03\x02" +
    "\x02\x02\u01D9\u01DB\x05\x14\v\x02\u01DA\u01D6\x03\x02\x02\x02\u01DA\u01DB" +
    "\x03\x02\x02\x02\u01DB\u01EA\x03\x02\x02\x02\u01DC\u01DE\x07\x07\x02\x02" +
    "\u01DD\u01DC\x03\x02\x02\x02\u01DE\u01E1\x03\x02\x02\x02\u01DF\u01DD\x03" +
    "\x02\x02\x02\u01DF\u01E0\x03\x02\x02\x02\u01E0\u01E2\x03\x02\x02\x02\u01E1" +
    "\u01DF\x03\x02\x02\x02\u01E2\u01E6\x07\x1C\x02\x02\u01E3\u01E5\x07\x07" +
    "\x02\x02\u01E4\u01E3\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6" +
    "\u01E4\x03\x02\x02";
KotlinParser._serializedATNSegment2 = "\x02\u01E6\u01E7\x03\x02\x02\x02\u01E7\u01E9\x03\x02\x02\x02\u01E8\u01E6" +
    "\x03\x02\x02\x02\u01E9\u01EB\x05\x1A\x0E\x02\u01EA\u01DF\x03\x02\x02\x02" +
    "\u01EA\u01EB\x03\x02\x02\x02\u01EB\u01F3\x03\x02\x02\x02\u01EC\u01EE\x07" +
    "\x07\x02\x02\u01ED\u01EC\x03\x02\x02\x02\u01EE\u01F1\x03\x02\x02\x02\u01EF" +
    "\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02\x02\u01F0\u01F2\x03\x02" +
    "\x02\x02\u01F1\u01EF\x03\x02\x02\x02\u01F2\u01F4\x05t;\x02\u01F3\u01EF" +
    "\x03\x02\x02\x02\u01F3\u01F4\x03\x02\x02\x02\u01F4\u0203\x03\x02\x02\x02" +
    "\u01F5\u01F7\x07\x07\x02\x02\u01F6\u01F5\x03\x02\x02\x02\u01F7\u01FA\x03" +
    "\x02\x02\x02\u01F8\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02\x02\u01F9" +
    "\u01FB\x03\x02\x02\x02\u01FA\u01F8\x03\x02\x02\x02\u01FB\u0204\x05$\x13" +
    "\x02\u01FC\u01FE\x07\x07\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\u0201" +
    "\x03\x02\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u01FF\u0200\x03\x02\x02\x02" +
    "\u0200\u0202\x03\x02\x02\x02\u0201\u01FF\x03\x02\x02\x02\u0202\u0204\x05" +
    "0\x19\x02\u0203\u01F8\x03\x02\x02\x02\u0203\u01FF\x03\x02\x02\x02\u0203" +
    "\u0204\x03\x02\x02\x02\u0204\x13\x03\x02\x02\x02\u0205\u0207\x05\u0118" +
    "\x8D\x02\u0206\u0205\x03\x02\x02\x02\u0206\u0207\x03\x02\x02\x02\u0207" +
    "\u0208\x03\x02\x02\x02\u0208\u020C\x07F\x02\x02\u0209\u020B\x07\x07\x02" +
    "\x02\u020A\u0209\x03\x02\x02\x02\u020B\u020E\x03\x02\x02\x02\u020C\u020A" +
    "\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02\u020D\u0210\x03\x02\x02\x02" +
    "\u020E\u020C\x03\x02\x02\x02\u020F\u0206\x03\x02\x02\x02\u020F\u0210\x03" +
    "\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211\u0212\x05\x16\f\x02\u0212" +
    "\x15\x03\x02\x02\x02\u0213\u0217\x07\v\x02\x02\u0214\u0216\x07\x07\x02" +
    "\x02\u0215\u0214\x03\x02\x02\x02\u0216\u0219\x03\x02\x02\x02\u0217\u0215" +
    "\x03\x02\x02\x02\u0217\u0218\x03\x02\x02\x02\u0218\u022E\x03\x02\x02\x02" +
    "\u0219\u0217\x03\x02\x02\x02\u021A\u022B\x05\x18\r\x02\u021B\u021D\x07" +
    "\x07\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D\u0220\x03\x02\x02\x02\u021E" +
    "\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221\x03\x02" +
    "\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0225\x07\n\x02\x02\u0222\u0224" +
    "\x07\x07\x02\x02\u0223\u0222\x03\x02\x02\x02\u0224\u0227\x03\x02\x02\x02" +
    "\u0225\u0223\x03\x02\x02\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0228\x03" +
    "\x02\x02\x02\u0227\u0225\x03\x02\x02\x02\u0228\u022A\x05\x18\r\x02\u0229" +
    "\u021E\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02\u022B\u0229\x03\x02" +
    "\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D" +
    "\u022B\x03\x02\x02\x02\u022E\u021A\x03\x02\x02\x02\u022E\u022F\x03\x02" +
    "\x02\x02\u022F\u0233\x03\x02\x02\x02\u0230\u0232\x07\x07\x02\x02\u0231" +
    "\u0230\x03\x02\x02\x02\u0232\u0235\x03\x02\x02\x02\u0233\u0231\x03\x02" +
    "\x02\x02\u0233\u0234\x03\x02\x02\x02\u0234\u0237\x03\x02\x02\x02\u0235" +
    "\u0233\x03\x02\x02\x02\u0236\u0238\x07\n\x02\x02\u0237\u0236\x03\x02\x02" +
    "\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A" +
    "\x07\f\x02\x02\u023A\x17\x03\x02\x02\x02\u023B\u023D\x05\u0118\x8D\x02" +
    "\u023C\u023B\x03\x02\x02\x02\u023C\u023D\x03\x02\x02\x02\u023D\u023F\x03" +
    "\x02\x02\x02\u023E\u0240\t\x03\x02\x02\u023F\u023E\x03\x02\x02\x02\u023F" +
    "\u0240\x03\x02\x02\x02\u0240\u0244\x03\x02\x02\x02\u0241\u0243\x07\x07" +
    "\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243\u0246\x03\x02\x02\x02\u0244" +
    "\u0242\x03\x02\x02\x02\u0244\u0245\x03\x02\x02\x02\u0245\u0247\x03\x02" +
    "\x02\x02\u0246\u0244\x03\x02\x02\x02\u0247\u0248\x05\u013C\x9F\x02\u0248" +
    "\u024C\x07\x1C\x02\x02\u0249\u024B\x07\x07\x02\x02\u024A\u0249\x03\x02" +
    "\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02\x02\x02\u024C" +
    "\u024D\x03\x02\x02\x02\u024D\u024F\x03\x02\x02\x02\u024E\u024C\x03\x02" +
    "\x02\x02\u024F\u025E\x05\\/\x02\u0250\u0252\x07\x07\x02\x02\u0251\u0250" +
    "\x03\x02\x02\x02\u0252\u0255\x03\x02\x02\x02\u0253\u0251\x03\x02\x02\x02" +
    "\u0253\u0254\x03\x02\x02\x02\u0254\u0256\x03\x02\x02\x02\u0255\u0253\x03" +
    "\x02\x02\x02\u0256\u025A\x07\x1E\x02\x02\u0257\u0259\x07\x07\x02\x02\u0258" +
    "\u0257\x03\x02\x02\x02\u0259\u025C\x03\x02\x02\x02\u025A\u0258\x03\x02" +
    "\x02\x02\u025A\u025B\x03\x02\x02\x02\u025B\u025D\x03\x02\x02\x02\u025C" +
    "\u025A\x03\x02\x02\x02\u025D\u025F\x05\x82B\x02\u025E\u0253\x03\x02\x02" +
    "\x02\u025E\u025F\x03\x02\x02\x02\u025F\x19\x03\x02\x02\x02\u0260\u0271" +
    "\x05\x1C\x0F\x02\u0261\u0263\x07\x07\x02\x02\u0262\u0261\x03\x02\x02\x02" +
    "\u0263\u0266\x03\x02\x02\x02\u0264\u0262\x03\x02\x02\x02\u0264\u0265\x03" +
    "\x02\x02\x02\u0265\u0267\x03\x02\x02\x02\u0266\u0264\x03\x02\x02\x02\u0267" +
    "\u026B\x07\n\x02\x02\u0268\u026A\x07\x07\x02\x02\u0269\u0268\x03\x02\x02" +
    "\x02\u026A\u026D\x03\x02\x02\x02\u026B\u0269\x03\x02\x02\x02\u026B\u026C" +
    "\x03\x02\x02\x02\u026C\u026E\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02" +
    "\u026E\u0270\x05\x1C\x0F\x02\u026F\u0264\x03\x02\x02\x02\u0270\u0273\x03" +
    "\x02\x02\x02\u0271\u026F\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272" +
    "\x1B\x03\x02\x02\x02\u0273\u0271\x03\x02\x02\x02\u0274\u0276\x05\u0132" +
    "\x9A\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0279\x03\x02\x02\x02\u0277" +
    "\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027D\x03\x02" +
    "\x02\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027C\x07\x07\x02\x02\u027B" +
    "\u027A\x03\x02\x02\x02\u027C\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02" +
    "\x02\x02\u027D\u027E\x03\x02\x02\x02\u027E\u0280\x03\x02\x02\x02\u027F" +
    "\u027D\x03\x02\x02\x02\u0280\u0281\x05\x1E\x10\x02\u0281\x1D\x03\x02\x02" +
    "\x02\u0282\u0287\x05 \x11\x02\u0283\u0287\x05\"\x12\x02\u0284\u0287\x05" +
    "l7\x02\u0285\u0287\x05h5\x02\u0286\u0282\x03\x02\x02\x02\u0286\u0283\x03" +
    "\x02\x02\x02\u0286\u0284\x03\x02\x02\x02\u0286\u0285\x03\x02\x02\x02\u0287" +
    "\x1F\x03\x02\x02\x02\u0288\u0289\x05l7\x02\u0289\u028A\x05\xB0Y\x02\u028A" +
    "!\x03\x02\x02\x02\u028B\u028E\x05l7\x02\u028C\u028E\x05h5\x02\u028D\u028B" +
    "\x03\x02\x02\x02\u028D\u028C\x03\x02\x02\x02\u028E\u0292\x03\x02\x02\x02" +
    "\u028F\u0291\x07\x07\x02\x02\u0290\u028F\x03\x02\x02\x02\u0291\u0294\x03" +
    "\x02\x02\x02\u0292\u0290\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
    "\u0295\x03\x02\x02\x02\u0294\u0292\x03\x02\x02\x02\u0295\u0299\x07G\x02" +
    "\x02\u0296\u0298\x07\x07\x02\x02\u0297\u0296\x03\x02\x02\x02\u0298\u029B" +
    "\x03\x02\x02\x02\u0299\u0297\x03\x02\x02\x02\u0299\u029A\x03\x02\x02\x02" +
    "\u029A\u029C\x03\x02\x02\x02\u029B\u0299\x03\x02\x02\x02\u029C\u029D\x05" +
    "\x82B\x02\u029D#\x03\x02\x02\x02\u029E\u02A2\x07\x0F\x02\x02\u029F\u02A1" +
    "\x07\x07\x02\x02\u02A0\u029F\x03\x02\x02\x02\u02A1\u02A4\x03\x02\x02\x02" +
    "\u02A2\u02A0\x03\x02\x02\x02\u02A2\u02A3\x03\x02\x02\x02\u02A3\u02A5\x03" +
    "\x02\x02\x02\u02A4\u02A2\x03\x02\x02\x02\u02A5\u02A9\x05&\x14\x02\u02A6" +
    "\u02A8\x07\x07\x02\x02\u02A7\u02A6\x03\x02\x02\x02\u02A8\u02AB\x03\x02" +
    "\x02\x02\u02A9\u02A7\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
    "\u02AC\x03\x02\x02\x02\u02AB\u02A9\x03\x02\x02\x02\u02AC\u02AD\x07\x10" +
    "\x02\x02\u02AD%\x03\x02\x02\x02\u02AE\u02B0\x05(\x15\x02\u02AF\u02B1\x05" +
    "\u014C\xA7\x02\u02B0\u02AF\x03\x02\x02\x02\u02B0\u02B1\x03\x02\x02\x02" +
    "\u02B1\u02B3\x03\x02\x02\x02\u02B2\u02AE\x03\x02\x02\x02\u02B3\u02B6\x03" +
    "\x02\x02\x02\u02B4\u02B2\x03\x02\x02\x02\u02B4\u02B5\x03\x02\x02\x02\u02B5" +
    "\'\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7\u02BC\x05~@\x02\u02B8" +
    "\u02BC\x05D#\x02\u02B9\u02BC\x05*\x16\x02\u02BA\u02BC\x05,\x17\x02\u02BB" +
    "\u02B7\x03\x02\x02\x02\u02BB\u02B8\x03\x02\x02\x02\u02BB\u02B9\x03\x02" +
    "\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC)\x03\x02\x02\x02\u02BD\u02C1" +
    "\x07I\x02\x02\u02BE\u02C0\x07\x07\x02\x02\u02BF\u02BE\x03\x02\x02\x02" +
    "\u02C0\u02C3\x03\x02\x02\x02\u02C1\u02BF\x03\x02\x02\x02\u02C1\u02C2\x03" +
    "\x02\x02\x02\u02C2\u02C4\x03\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4" +
    "\u02C5\x05x=\x02\u02C5+\x03\x02\x02\x02\u02C6\u02C8\x05\u0118\x8D\x02" +
    "\u02C7\u02C6\x03\x02\x02\x02\u02C7\u02C8\x03\x02\x02\x02\u02C8\u02C9\x03" +
    "\x02\x02\x02\u02C9\u02CD\x07F\x02\x02\u02CA\u02CC\x07\x07\x02\x02\u02CB" +
    "\u02CA\x03\x02\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CB\x03\x02" +
    "\x02\x02\u02CD\u02CE\x03\x02\x02\x02\u02CE\u02D0\x03\x02\x02\x02\u02CF" +
    "\u02CD\x03\x02\x02\x02\u02D0\u02DF\x058\x1D\x02\u02D1\u02D3\x07\x07\x02" +
    "\x02\u02D2\u02D1\x03\x02\x02\x02\u02D3\u02D6\x03\x02\x02\x02\u02D4\u02D2" +
    "\x03\x02\x02\x02\u02D4\u02D5\x03\x02\x02\x02\u02D5\u02D7\x03\x02\x02\x02" +
    "\u02D6\u02D4\x03\x02\x02\x02\u02D7\u02DB\x07\x1C\x02\x02\u02D8\u02DA\x07" +
    "\x07\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA\u02DD\x03\x02\x02\x02\u02DB" +
    "\u02D9\x03\x02\x02\x02\u02DB\u02DC\x03\x02\x02\x02\u02DC\u02DE\x03\x02" +
    "\x02\x02\u02DD\u02DB\x03\x02\x02\x02\u02DE\u02E0\x05.\x18\x02\u02DF\u02D4" +
    "\x03\x02\x02\x02\u02DF\u02E0\x03\x02\x02\x02\u02E0\u02E4\x03\x02\x02\x02" +
    "\u02E1\u02E3\x07\x07\x02\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E6\x03" +
    "\x02\x02\x02\u02E4\u02E2\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5" +
    "\u02E8\x03\x02\x02\x02\u02E6\u02E4\x03\x02\x02\x02\u02E7\u02E9\x05x=\x02" +
    "\u02E8\u02E7\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9-\x03\x02" +
    "\x02\x02\u02EA\u02EE\x07J\x02\x02\u02EB\u02ED\x07\x07\x02\x02\u02EC\u02EB" +
    "\x03\x02\x02\x02\u02ED\u02F0\x03\x02\x02\x02\u02EE\u02EC\x03\x02\x02\x02" +
    "\u02EE\u02EF\x03\x02\x02\x02\u02EF\u02F1\x03\x02\x02\x02\u02F0\u02EE\x03" +
    "\x02\x02\x02\u02F1\u02FB\x05\xB0Y\x02\u02F2\u02F6\x07K\x02\x02\u02F3\u02F5" +
    "\x07\x07\x02\x02\u02F4\u02F3\x03\x02\x02\x02\u02F5\u02F8\x03\x02\x02\x02" +
    "\u02F6\u02F4\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9\x03" +
    "\x02\x02\x02\u02F8\u02F6\x03\x02\x02\x02\u02F9\u02FB\x05\xB0Y\x02\u02FA" +
    "\u02EA\x03\x02\x02\x02\u02FA\u02F2\x03\x02\x02\x02\u02FB/\x03\x02\x02" +
    "\x02\u02FC\u0300\x07\x0F\x02\x02\u02FD\u02FF\x07\x07\x02\x02\u02FE\u02FD" +
    "\x03\x02\x02\x02\u02FF\u0302\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02\x02" +
    "\u0300\u0301\x03\x02\x02\x02\u0301\u0304\x03\x02\x02\x02\u0302\u0300\x03" +
    "\x02\x02\x02\u0303\u0305\x052\x1A\x02\u0304\u0303\x03\x02\x02\x02\u0304" +
    "\u0305\x03\x02\x02\x02\u0305\u0314\x03\x02\x02\x02\u0306\u0308\x07\x07" +
    "\x02\x02\u0307\u0306\x03\x02\x02\x02\u0308\u030B\x03\x02\x02\x02\u0309" +
    "\u0307\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030C\x03\x02" +
    "\x02\x02\u030B\u0309\x03\x02\x02\x02\u030C\u0310\x07\x1D\x02\x02\u030D" +
    "\u030F\x07\x07\x02\x02\u030E\u030D\x03\x02\x02\x02\u030F\u0312\x03\x02" +
    "\x02\x02\u0310\u030E\x03\x02\x02\x02\u0310\u0311\x03\x02\x02\x02\u0311" +
    "\u0313\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0313\u0315\x05&\x14" +
    "\x02\u0314\u0309\x03\x02\x02\x02\u0314\u0315\x03\x02\x02\x02\u0315\u0319" +
    "\x03\x02\x02\x02\u0316\u0318\x07\x07\x02\x02\u0317\u0316\x03\x02\x02\x02" +
    "\u0318\u031B\x03\x02\x02\x02\u0319\u0317\x03\x02\x02\x02\u0319\u031A\x03" +
    "\x02\x02\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0319\x03\x02\x02\x02\u031C" +
    "\u031D\x07\x10\x02\x02\u031D1\x03\x02\x02\x02\u031E\u032F\x054\x1B\x02" +
    "\u031F\u0321\x07\x07\x02\x02\u0320\u031F\x03\x02\x02\x02\u0321\u0324\x03" +
    "\x02\x02\x02\u0322\u0320\x03\x02\x02\x02\u0322\u0323\x03\x02\x02\x02\u0323" +
    "\u0325\x03\x02\x02\x02\u0324\u0322\x03\x02\x02\x02\u0325\u0329\x07\n\x02" +
    "\x02\u0326\u0328\x07\x07\x02\x02\u0327\u0326\x03\x02\x02\x02\u0328\u032B" +
    "\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
    "\u032A\u032C\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032E\x05" +
    "4\x1B\x02\u032D\u0322\x03\x02\x02\x02\u032E\u0331\x03\x02\x02\x02\u032F" +
    "\u032D\x03\x02\x02\x02\u032F\u0330\x03\x02\x02\x02\u0330\u0335\x03\x02" +
    "\x02\x02\u0331\u032F\x03\x02\x02\x02\u0332\u0334\x07\x07\x02\x02\u0333" +
    "\u0332\x03\x02\x02\x02\u0334\u0337\x03\x02\x02\x02\u0335\u0333\x03\x02" +
    "\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337" +
    "\u0335\x03\x02\x02\x02\u0338\u033A\x07\n\x02\x02\u0339\u0338\x03\x02\x02" +
    "\x02\u0339\u033A\x03\x02\x02\x02\u033A3\x03\x02\x02\x02\u033B\u033F\x05" +
    "\u0118\x8D\x02\u033C\u033E\x07\x07\x02\x02\u033D\u033C\x03\x02\x02\x02" +
    "\u033E\u0341\x03\x02\x02\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03" +
    "\x02\x02\x02\u0340\u0343\x03\x02\x02\x02\u0341\u033F\x03\x02\x02\x02\u0342" +
    "\u033B\x03\x02\x02\x02\u0342\u0343\x03\x02\x02\x02\u0343\u0344\x03\x02" +
    "\x02\x02\u0344\u034C\x05\u013C\x9F\x02\u0345\u0347\x07\x07\x02\x02\u0346" +
    "\u0345\x03\x02\x02\x02\u0347\u034A\x03\x02\x02\x02\u0348\u0346\x03\x02" +
    "\x02\x02\u0348\u0349\x03\x02\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A" +
    "\u0348\x03\x02\x02\x02\u034B\u034D\x05\xB0Y\x02\u034C\u0348\x03\x02\x02" +
    "\x02\u034C\u034D\x03\x02\x02\x02\u034D\u0355\x03\x02\x02\x02\u034E\u0350" +
    "\x07\x07\x02\x02\u034F\u034E\x03\x02\x02\x02\u0350\u0353\x03\x02\x02\x02" +
    "\u0351\u034F\x03\x02\x02\x02\u0351\u0352\x03\x02\x02\x02\u0352\u0354\x03" +
    "\x02\x02\x02\u0353\u0351\x03\x02\x02\x02\u0354\u0356\x05$\x13\x02\u0355" +
    "\u0351\x03\x02\x02\x02\u0355\u0356\x03\x02\x02\x02\u03565\x03\x02\x02" +
    "\x02\u0357\u0359\x05\u0118\x8D\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359" +
    "\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u0362\x07A\x02\x02" +
    "\u035B\u035D\x07\x07\x02\x02\u035C\u035B\x03\x02\x02\x02\u035D\u0360\x03" +
    "\x02\x02\x02\u035E\u035C\x03\x02\x02\x02\u035E\u035F\x03\x02\x02\x02\u035F" +
    "\u0361\x03\x02\x02\x02\u0360\u035E\x03\x02\x02\x02\u0361\u0363\x05T+\x02" +
    "\u0362\u035E\x03\x02\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0373\x03" +
    "\x02\x02\x02\u0364\u0366\x07\x07\x02\x02\u0365\u0364\x03\x02\x02\x02\u0366" +
    "\u0369\x03\x02\x02\x02\u0367\u0365\x03\x02\x02\x02\u0367\u0368\x03\x02" +
    "\x02\x02\u0368\u036A\x03\x02\x02\x02\u0369\u0367\x03\x02\x02\x02\u036A" +
    "\u036E\x05j6\x02\u036B\u036D\x07\x07\x02\x02\u036C\u036B\x03\x02\x02\x02" +
    "\u036D\u0370\x03\x02\x02\x02\u036E\u036C\x03\x02\x02\x02\u036E\u036F\x03" +
    "\x02\x02\x02\u036F\u0371\x03\x02\x02\x02\u0370\u036E\x03\x02\x02\x02\u0371" +
    "\u0372\x07\t\x02\x02\u0372\u0374\x03\x02\x02\x02\u0373\u0367\x03\x02\x02" +
    "\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0378\x03\x02\x02\x02\u0375\u0377" +
    "\x07\x07\x02\x02\u0376\u0375\x03\x02\x02\x02\u0377\u037A\x03\x02\x02\x02" +
    "\u0378\u0376\x03\x02\x02\x02\u0378\u0379\x03\x02\x02\x02\u0379\u037B\x03" +
    "\x02\x02\x02\u037A\u0378\x03\x02\x02\x02\u037B\u037F\x05\u013C\x9F\x02" +
    "\u037C\u037E\x07\x07\x02\x02\u037D\u037C\x03\x02\x02\x02\u037E\u0381\x03" +
    "\x02\x02\x02\u037F\u037D\x03\x02\x02\x02\u037F\u0380\x03\x02\x02\x02\u0380" +
    "\u0382\x03\x02\x02\x02\u0381\u037F\x03\x02\x02\x02\u0382\u0391\x058\x1D" +
    "\x02\u0383\u0385\x07\x07\x02\x02\u0384\u0383\x03\x02\x02\x02\u0385\u0388" +
    "\x03\x02\x02\x02\u0386\u0384\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02" +
    "\u0387\u0389\x03\x02\x02\x02\u0388\u0386\x03\x02\x02\x02\u0389\u038D\x07" +
    "\x1C\x02\x02\u038A\u038C\x07\x07\x02\x02\u038B\u038A\x03\x02\x02\x02\u038C" +
    "\u038F\x03\x02\x02\x02\u038D\u038B\x03\x02\x02\x02\u038D\u038E\x03\x02" +
    "\x02\x02\u038E\u0390\x03\x02\x02\x02\u038F\u038D\x03\x02\x02\x02\u0390" +
    "\u0392\x05\\/\x02\u0391\u0386\x03\x02\x02\x02\u0391\u0392\x03\x02\x02" +
    "\x02\u0392\u039A\x03\x02\x02\x02\u0393\u0395\x07\x07\x02\x02\u0394\u0393" +
    "\x03\x02\x02\x02\u0395\u0398\x03\x02\x02\x02\u0396\u0394\x03\x02\x02\x02" +
    "\u0396\u0397\x03\x02\x02\x02\u0397\u0399\x03\x02\x02\x02\u0398\u0396\x03" +
    "\x02\x02\x02\u0399\u039B\x05t;\x02\u039A\u0396\x03\x02\x02\x02\u039A\u039B" +
    "\x03\x02\x02\x02\u039B\u03A3\x03\x02\x02\x02\u039C\u039E\x07\x07\x02\x02" +
    "\u039D\u039C\x03\x02\x02\x02\u039E\u03A1\x03\x02\x02\x02\u039F\u039D\x03" +
    "\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A2\x03\x02\x02\x02\u03A1" +
    "\u039F\x03\x02\x02\x02\u03A2\u03A4\x05@!\x02\u03A3\u039F\x03\x02\x02\x02" +
    "\u03A3\u03A4\x03\x02\x02\x02\u03A47\x03\x02\x02\x02\u03A5\u03A9\x07\v" +
    "\x02\x02\u03A6\u03A8\x07\x07\x02\x02\u03A7\u03A6\x03\x02\x02\x02\u03A8" +
    "\u03AB\x03\x02\x02\x02\u03A9\u03A7\x03\x02\x02\x02\u03A9\u03AA\x03\x02" +
    "\x02\x02\u03AA\u03C0\x03\x02\x02\x02\u03AB\u03A9\x03\x02\x02\x02\u03AC" +
    "\u03BD\x05:\x1E\x02\u03AD\u03AF\x07\x07\x02\x02\u03AE\u03AD\x03\x02\x02" +
    "\x02\u03AF\u03B2\x03\x02\x02\x02\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1" +
    "\x03\x02\x02\x02\u03B1\u03B3\x03\x02\x02\x02\u03B2\u03B0\x03\x02\x02\x02" +
    "\u03B3\u03B7\x07\n\x02\x02\u03B4\u03B6\x07\x07\x02\x02\u03B5\u03B4\x03" +
    "\x02\x02\x02\u03B6\u03B9\x03\x02\x02\x02\u03B7\u03B5\x03\x02\x02\x02\u03B7" +
    "\u03B8\x03\x02\x02\x02\u03B8\u03BA\x03\x02\x02\x02\u03B9\u03B7\x03\x02" +
    "\x02\x02\u03BA\u03BC\x05:\x1E\x02\u03BB\u03B0\x03\x02\x02\x02\u03BC\u03BF" +
    "\x03\x02\x02\x02\u03BD\u03BB\x03\x02\x02\x02\u03BD\u03BE\x03\x02\x02\x02" +
    "\u03BE\u03C1\x03\x02\x02\x02\u03BF\u03BD\x03\x02\x02\x02\u03C0\u03AC\x03" +
    "\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02\u03C1\u03C5\x03\x02\x02\x02\u03C2" +
    "\u03C4\x07\x07\x02\x02\u03C3\u03C2\x03\x02\x02\x02\u03C4\u03C7\x03\x02" +
    "\x02\x02\u03C5\u03C3\x03\x02\x02\x02\u03C5\u03C6\x03\x02\x02\x02\u03C6" +
    "\u03C9\x03\x02\x02\x02\u03C7\u03C5\x03\x02\x02\x02\u03C8\u03CA\x07\n\x02" +
    "\x02\u03C9\u03C8\x03\x02\x02\x02\u03C9\u03CA\x03\x02\x02\x02\u03CA\u03CB" +
    "\x03\x02\x02\x02\u03CB\u03CC\x07\f\x02\x02\u03CC9\x03\x02\x02\x02\u03CD" +
    "\u03CF\x05\u0118\x8D\x02\u03CE\u03CD\x03\x02\x02\x02\u03CE\u03CF\x03\x02" +
    "\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0\u03DF\x05<\x1F\x02\u03D1\u03D3" +
    "\x07\x07\x02\x02\u03D2\u03D1\x03\x02\x02\x02\u03D3\u03D6\x03\x02\x02\x02" +
    "\u03D4\u03D2\x03\x02\x02\x02\u03D4\u03D5\x03\x02\x02\x02\u03D5\u03D7\x03" +
    "\x02\x02\x02\u03D6\u03D4\x03\x02\x02\x02\u03D7\u03DB\x07\x1E\x02\x02\u03D8" +
    "\u03DA\x07\x07\x02\x02\u03D9\u03D8\x03\x02\x02\x02\u03DA\u03DD\x03\x02" +
    "\x02\x02\u03DB\u03D9\x03\x02\x02\x02\u03DB\u03DC\x03\x02\x02\x02\u03DC" +
    "\u03DE\x03\x02\x02\x02\u03DD\u03DB\x03\x02\x02\x02\u03DE\u03E0\x05\x82" +
    "B\x02\u03DF\u03D4\x03\x02\x02\x02\u03DF\u03E0\x03\x02\x02\x02\u03E0;\x03" +
    "\x02\x02\x02\u03E1\u03E5\x05\u013C\x9F\x02\u03E2\u03E4\x07\x07\x02\x02" +
    "\u03E3\u03E2\x03\x02\x02\x02\u03E4\u03E7\x03\x02\x02\x02\u03E5\u03E3\x03" +
    "\x02\x02\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E8\x03\x02\x02\x02\u03E7" +
    "\u03E5\x03\x02\x02\x02\u03E8\u03EC\x07\x1C\x02\x02\u03E9\u03EB\x07\x07" +
    "\x02\x02\u03EA\u03E9\x03\x02\x02\x02\u03EB\u03EE\x03\x02\x02\x02\u03EC" +
    "\u03EA\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EF\x03\x02" +
    "\x02\x02\u03EE\u03EC\x03\x02\x02\x02\u03EF\u03F0\x05\\/\x02\u03F0=\x03" +
    "\x02\x02\x02\u03F1\u03F5\x05\u013C\x9F\x02\u03F2\u03F4\x07\x07\x02\x02" +
    "\u03F3\u03F2\x03\x02\x02\x02\u03F4\u03F7\x03\x02\x02\x02\u03F5\u03F3\x03" +
    "\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02\u03F6\u0400\x03\x02\x02\x02\u03F7" +
    "\u03F5\x03\x02\x02\x02\u03F8\u03FC\x07\x1C\x02\x02\u03F9\u03FB\x07\x07" +
    "\x02\x02\u03FA\u03F9\x03\x02\x02\x02\u03FB\u03FE\x03\x02\x02\x02\u03FC" +
    "\u03FA\x03\x02\x02\x02\u03FC\u03FD\x03\x02\x02\x02\u03FD\u03FF\x03\x02" +
    "\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0401\x05\\/\x02\u0400\u03F8" +
    "\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401?\x03\x02\x02\x02\u0402" +
    "\u040C\x05x=\x02\u0403\u0407\x07\x1E\x02\x02\u0404\u0406\x07\x07\x02\x02" +
    "\u0405\u0404\x03\x02\x02\x02\u0406\u0409\x03\x02\x02\x02\u0407\u0405\x03" +
    "\x02\x02\x02\u0407\u0408\x03\x02\x02\x02\u0408\u040A\x03\x02\x02\x02\u0409" +
    "\u0407\x03\x02\x02\x02\u040A\u040C\x05\x82B\x02\u040B\u0402\x03\x02\x02" +
    "\x02\u040B\u0403\x03\x02\x02\x02\u040CA\x03\x02\x02\x02\u040D\u040F\x05" +
    "\u0118\x8D\x02\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
    "\u040F\u0410\x03\x02\x02\x02\u0410\u0414\x07B\x02\x02\u0411\u0413\x07" +
    "\x07\x02\x02\u0412\u0411\x03\x02\x02\x02\u0413\u0416\x03\x02\x02\x02\u0414" +
    "\u0412\x03\x02\x02\x02\u0414\u0415\x03\x02\x02\x02\u0415\u0417\x03\x02" +
    "\x02\x02\u0416\u0414\x03\x02\x02\x02\u0417\u0426\x05\u013C\x9F\x02\u0418" +
    "\u041A\x07\x07\x02\x02\u0419\u0418\x03\x02\x02\x02\u041A\u041D\x03\x02" +
    "\x02\x02\u041B\u0419\x03\x02\x02\x02\u041B\u041C\x03\x02\x02\x02\u041C" +
    "\u041E\x03\x02\x02\x02\u041D\u041B\x03\x02\x02\x02\u041E\u0422\x07\x1C" +
    "\x02\x02\u041F\u0421\x07\x07\x02\x02\u0420\u041F\x03\x02\x02\x02\u0421" +
    "\u0424\x03\x02\x02\x02\u0422\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02" +
    "\x02\x02\u0423\u0425\x03\x02\x02\x02\u0424\u0422\x03\x02\x02\x02\u0425" +
    "\u0427\x05\x1A\x0E\x02\u0426\u041B\x03\x02\x02\x02\u0426\u0427\x03\x02" +
    "\x02\x02\u0427\u042F\x03\x02\x02\x02\u0428\u042A\x07\x07\x02\x02\u0429" +
    "\u0428\x03\x02\x02\x02\u042A\u042D\x03\x02\x02\x02\u042B\u0429\x03\x02" +
    "\x02\x02\u042B\u042C\x03\x02\x02\x02\u042C\u042E\x03\x02\x02\x02\u042D" +
    "\u042B\x03\x02\x02\x02\u042E\u0430\x05$\x13\x02\u042F\u042B\x03\x02\x02" +
    "\x02\u042F\u0430\x03\x02\x02\x02\u0430C\x03\x02\x02\x02\u0431\u0433\x05" +
    "\u0118\x8D\x02\u0432\u0431\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02" +
    "\u0433\u0434\x03\x02\x02\x02\u0434\u0438\x07H\x02\x02\u0435\u0437\x07" +
    "\x07\x02\x02\u0436\u0435\x03\x02\x02\x02\u0437\u043A\x03\x02\x02\x02\u0438" +
    "\u0436\x03\x02\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043B\x03\x02" +
    "\x02\x02\u043A\u0438\x03\x02\x02\x02\u043B\u0443\x07B\x02\x02\u043C\u043E" +
    "\x07\x07\x02\x02\u043D\u043C\x03\x02\x02\x02\u043E\u0441\x03\x02\x02\x02" +
    "\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0442\x03" +
    "\x02\x02\x02\u0441\u043F\x03\x02\x02\x02\u0442\u0444\x05\u013C\x9F\x02" +
    "\u0443\u043F\x03\x02\x02\x02\u0443\u0444\x03\x02\x02\x02\u0444\u0453\x03" +
    "\x02\x02\x02\u0445\u0447\x07\x07\x02\x02\u0446\u0445\x03\x02\x02\x02\u0447" +
    "\u044A\x03\x02\x02\x02\u0448\u0446\x03\x02\x02\x02\u0448\u0449\x03\x02" +
    "\x02\x02\u0449\u044B\x03\x02\x02\x02\u044A\u0448\x03\x02\x02\x02\u044B" +
    "\u044F\x07\x1C\x02\x02\u044C\u044E\x07\x07\x02\x02\u044D\u044C\x03\x02" +
    "\x02\x02\u044E\u0451\x03\x02\x02\x02\u044F\u044D\x03\x02\x02\x02\u044F" +
    "\u0450\x03\x02\x02\x02\u0450\u0452\x03\x02\x02\x02\u0451\u044F\x03\x02" +
    "\x02\x02\u0452\u0454\x05\x1A\x0E\x02\u0453\u0448\x03\x02\x02\x02\u0453" +
    "\u0454\x03\x02\x02\x02\u0454\u045C\x03\x02\x02\x02\u0455\u0457\x07\x07" +
    "\x02\x02\u0456\u0455\x03\x02\x02\x02\u0457\u045A\x03\x02\x02\x02\u0458" +
    "\u0456\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02" +
    "\x02\x02\u045A\u0458\x03\x02\x02\x02\u045B\u045D\x05$\x13\x02\u045C\u0458" +
    "\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045DE\x03\x02\x02\x02\u045E" +
    "\u0460\x05\u0118\x8D\x02\u045F\u045E\x03\x02\x02\x02\u045F\u0460\x03\x02" +
    "\x02\x02\u0460\u0461\x03\x02\x02\x02\u0461\u0469\t\x03\x02\x02\u0462\u0464" +
    "\x07\x07\x02\x02\u0463\u0462\x03\x02\x02\x02\u0464\u0467\x03\x02\x02\x02" +
    "\u0465\u0463\x03\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0468\x03" +
    "\x02\x02\x02\u0467\u0465\x03\x02\x02\x02\u0468\u046A\x05T+\x02\u0469\u0465" +
    "\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A\u047A\x03\x02\x02\x02" +
    "\u046B\u046D\x07\x07\x02\x02\u046C\u046B\x03\x02\x02\x02\u046D\u0470\x03" +
    "\x02\x02\x02\u046E\u046C\x03\x02\x02\x02\u046E\u046F\x03\x02\x02\x02\u046F" +
    "\u0471\x03\x02\x02\x02\u0470\u046E\x03\x02\x02\x02\u0471\u0475\x05j6\x02" +
    "\u0472\u0474\x07\x07\x02\x02\u0473\u0472\x03\x02\x02\x02\u0474\u0477\x03" +
    "\x02\x02\x02\u0475\u0473\x03\x02\x02\x02\u0475\u0476\x03\x02\x02\x02\u0476" +
    "\u0478\x03\x02\x02\x02\u0477\u0475\x03\x02\x02\x02\u0478\u0479\x07\t\x02" +
    "\x02\u0479\u047B\x03\x02\x02\x02\u047A\u046E\x03\x02\x02\x02\u047A\u047B" +
    "\x03\x02\x02\x02\u047B\u047F\x03\x02\x02\x02\u047C\u047E\x07\x07\x02\x02" +
    "\u047D\u047C\x03\x02\x02\x02\u047E\u0481\x03\x02\x02\x02\u047F\u047D\x03" +
    "\x02\x02\x02\u047F\u0480\x03\x02\x02\x02\u0480\u0484\x03\x02\x02\x02\u0481" +
    "\u047F\x03\x02\x02\x02\u0482\u0485\x05H%\x02\u0483\u0485\x05J&\x02\u0484" +
    "\u0482\x03\x02\x02\x02\u0484\u0483\x03\x02\x02\x02\u0485\u048D\x03\x02" +
    "\x02\x02\u0486\u0488\x07\x07\x02\x02\u0487\u0486\x03\x02\x02\x02\u0488" +
    "\u048B\x03\x02\x02\x02\u0489\u0487\x03\x02\x02\x02\u0489\u048A\x03\x02" +
    "\x02\x02\u048A\u048C\x03\x02\x02\x02\u048B\u0489\x03\x02\x02\x02\u048C" +
    "\u048E\x05t;\x02\u048D\u0489\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02" +
    "\u048E\u04A0\x03\x02\x02\x02\u048F\u0491\x07\x07\x02\x02\u0490\u048F\x03" +
    "\x02\x02\x02\u0491\u0494\x03\x02\x02\x02\u0492\u0490\x03\x02\x02\x02\u0492" +
    "\u0493\x03\x02\x02\x02\u0493\u049E\x03\x02\x02\x02\u0494\u0492\x03\x02" +
    "\x02\x02\u0495\u0499\x07\x1E\x02\x02\u0496\u0498\x07\x07\x02\x02\u0497" +
    "\u0496\x03\x02\x02\x02\u0498\u049B\x03\x02\x02\x02\u0499\u0497\x03\x02" +
    "\x02\x02\u0499\u049A\x03\x02\x02\x02\u049A\u049C\x03\x02\x02\x02\u049B" +
    "\u0499\x03\x02\x02\x02\u049C\u049F\x05\x82B\x02\u049D\u049F\x05L\'\x02" +
    "\u049E\u0495\x03\x02\x02\x02\u049E\u049D\x03\x02\x02\x02\u049F\u04A1\x03" +
    "\x02\x02\x02\u04A0\u0492\x03\x02\x02\x02\u04A0\u04A1\x03\x02\x02\x02\u04A1" +
    "\u04A8\x03\x02\x02\x02\u04A2";
KotlinParser._serializedATNSegment3 = "\u04A4\x07\x07\x02\x02\u04A3\u04A2\x03\x02\x02\x02\u04A4\u04A5\x03\x02" +
    "\x02\x02\u04A5\u04A3\x03\x02\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6" +
    "\u04A7\x03\x02\x02\x02\u04A7\u04A9\x07\x1D\x02\x02\u04A8\u04A3\x03\x02" +
    "\x02\x02\u04A8\u04A9\x03\x02\x02\x02\u04A9\u04AD\x03\x02\x02\x02\u04AA" +
    "\u04AC\x07\x07\x02\x02\u04AB\u04AA\x03\x02\x02\x02\u04AC\u04AF\x03\x02" +
    "\x02\x02\u04AD\u04AB\x03\x02\x02\x02\u04AD\u04AE\x03\x02\x02\x02\u04AE" +
    "\u04CE\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\u04B2\x05N(\x02" +
    "\u04B1\u04B0\x03\x02\x02\x02\u04B1\u04B2\x03\x02\x02\x02\u04B2\u04BD\x03" +
    "\x02\x02\x02\u04B3\u04B5\x07\x07\x02\x02\u04B4\u04B3\x03\x02\x02\x02\u04B5" +
    "\u04B8\x03\x02\x02\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03\x02" +
    "\x02\x02\u04B7\u04BA\x03\x02\x02\x02\u04B8\u04B6\x03\x02\x02\x02\u04B9" +
    "\u04BB\x05\u014A\xA6\x02\u04BA\u04B9\x03\x02\x02\x02\u04BA\u04BB\x03\x02" +
    "\x02\x02\u04BB\u04BC\x03\x02\x02\x02\u04BC\u04BE\x05P)\x02\u04BD\u04B6" +
    "\x03\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04CF\x03\x02\x02\x02" +
    "\u04BF\u04C1\x05P)\x02\u04C0\u04BF\x03\x02\x02\x02\u04C0\u04C1\x03\x02" +
    "\x02\x02\u04C1\u04CC\x03\x02\x02\x02\u04C2\u04C4\x07\x07\x02\x02\u04C3" +
    "\u04C2\x03\x02\x02\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C3\x03\x02" +
    "\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C9\x03\x02\x02\x02\u04C7" +
    "\u04C5\x03\x02\x02\x02\u04C8\u04CA\x05\u014A\xA6\x02\u04C9\u04C8\x03\x02" +
    "\x02\x02\u04C9\u04CA\x03\x02\x02\x02\u04CA\u04CB\x03\x02\x02\x02\u04CB" +
    "\u04CD\x05N(\x02\u04CC\u04C5\x03\x02\x02\x02\u04CC\u04CD\x03\x02\x02\x02" +
    "\u04CD\u04CF\x03\x02\x02\x02\u04CE\u04B1\x03\x02\x02\x02\u04CE\u04C0\x03" +
    "\x02\x02\x02\u04CFG\x03\x02\x02\x02\u04D0\u04D4\x07\v\x02\x02\u04D1\u04D3" +
    "\x07\x07\x02\x02\u04D2\u04D1\x03\x02\x02\x02\u04D3\u04D6\x03\x02\x02\x02" +
    "\u04D4\u04D2\x03\x02\x02\x02\u04D4\u04D5\x03\x02\x02\x02\u04D5\u04D7\x03" +
    "\x02\x02\x02\u04D6\u04D4\x03\x02\x02\x02\u04D7\u04E8\x05J&\x02\u04D8\u04DA" +
    "\x07\x07\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA\u04DD\x03\x02\x02\x02" +
    "\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x03" +
    "\x02\x02\x02\u04DD\u04DB\x03\x02\x02\x02\u04DE\u04E2\x07\n\x02\x02\u04DF" +
    "\u04E1\x07\x07\x02\x02\u04E0\u04DF\x03\x02\x02\x02\u04E1\u04E4\x03\x02" +
    "\x02\x02\u04E2\u04E0\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3" +
    "\u04E5\x03\x02\x02\x02\u04E4\u04E2\x03\x02\x02\x02\u04E5\u04E7\x05J&\x02" +
    "\u04E6\u04DB\x03\x02\x02\x02\u04E7\u04EA\x03\x02\x02\x02\u04E8\u04E6\x03" +
    "\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9\u04EE\x03\x02\x02\x02\u04EA" +
    "\u04E8\x03\x02\x02\x02\u04EB\u04ED\x07\x07\x02\x02\u04EC\u04EB\x03\x02" +
    "\x02\x02\u04ED\u04F0\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE" +
    "\u04EF\x03\x02\x02\x02\u04EF\u04F1\x03\x02\x02\x02\u04F0\u04EE\x03\x02" +
    "\x02\x02\u04F1\u04F2\x07\f\x02\x02\u04F2I\x03\x02\x02\x02\u04F3\u04F5" +
    "\x05\u0132\x9A\x02\u04F4\u04F3\x03\x02\x02\x02\u04F5\u04F8\x03\x02\x02" +
    "\x02\u04F6\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03\x02\x02\x02\u04F7\u04FC" +
    "\x03\x02\x02\x02\u04F8\u04F6\x03\x02\x02\x02\u04F9\u04FB\x07\x07\x02\x02" +
    "\u04FA\u04F9\x03\x02\x02\x02\u04FB\u04FE\x03\x02\x02\x02\u04FC\u04FA\x03" +
    "\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FF\x03\x02\x02\x02\u04FE" +
    "\u04FC\x03\x02\x02\x02\u04FF\u050E\x05\u013C\x9F\x02\u0500\u0502\x07\x07" +
    "\x02\x02\u0501\u0500\x03\x02\x02\x02\u0502\u0505\x03\x02\x02\x02\u0503" +
    "\u0501\x03\x02\x02\x02\u0503\u0504\x03\x02\x02\x02\u0504\u0506\x03\x02" +
    "\x02\x02\u0505\u0503\x03\x02\x02\x02\u0506\u050A\x07\x1C\x02\x02\u0507" +
    "\u0509\x07\x07\x02\x02\u0508\u0507\x03\x02\x02\x02\u0509\u050C\x03\x02" +
    "\x02\x02\u050A\u0508\x03\x02\x02\x02\u050A\u050B\x03\x02\x02\x02\u050B" +
    "\u050D\x03\x02\x02\x02\u050C\u050A\x03\x02\x02\x02\u050D\u050F\x05\\/" +
    "\x02\u050E\u0503\x03\x02\x02\x02\u050E\u050F\x03\x02\x02\x02\u050FK\x03" +
    "\x02\x02\x02\u0510\u0514\x07G\x02\x02\u0511\u0513\x07\x07\x02\x02\u0512" +
    "\u0511\x03\x02\x02\x02\u0513\u0516\x03\x02\x02\x02\u0514\u0512\x03\x02" +
    "\x02\x02\u0514\u0515\x03\x02\x02\x02\u0515\u0517\x03\x02\x02\x02\u0516" +
    "\u0514\x03\x02\x02\x02\u0517\u0518\x05\x82B\x02\u0518M\x03\x02\x02\x02" +
    "\u0519\u051B\x05\u0118\x8D\x02\u051A\u0519\x03\x02\x02\x02\u051A\u051B" +
    "\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u0547\x07a\x02\x02" +
    "\u051D\u051F\x05\u0118\x8D\x02\u051E\u051D\x03\x02\x02\x02\u051E\u051F" +
    "\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0524\x07a\x02\x02" +
    "\u0521\u0523\x07\x07\x02\x02\u0522\u0521\x03\x02\x02\x02\u0523\u0526\x03" +
    "\x02\x02\x02\u0524\u0522\x03\x02\x02\x02\u0524\u0525\x03\x02\x02\x02\u0525" +
    "\u0527\x03\x02\x02\x02\u0526\u0524\x03\x02\x02\x02\u0527\u052B\x07\v\x02" +
    "\x02\u0528\u052A\x07\x07\x02\x02\u0529\u0528\x03\x02\x02\x02\u052A\u052D" +
    "\x03\x02\x02\x02\u052B\u0529\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02" +
    "\u052C\u052E\x03\x02\x02\x02\u052D\u052B\x03\x02\x02\x02\u052E\u053D\x07" +
    "\f\x02\x02\u052F\u0531\x07\x07\x02\x02\u0530\u052F\x03\x02\x02\x02\u0531" +
    "\u0534\x03\x02\x02\x02\u0532\u0530\x03\x02\x02\x02\u0532\u0533\x03\x02" +
    "\x02\x02\u0533\u0535\x03\x02\x02\x02\u0534\u0532\x03\x02\x02\x02\u0535" +
    "\u0539\x07\x1C\x02\x02\u0536\u0538\x07\x07\x02\x02\u0537\u0536\x03\x02" +
    "\x02\x02\u0538\u053B\x03\x02\x02\x02\u0539\u0537\x03\x02\x02\x02\u0539" +
    "\u053A\x03\x02\x02\x02\u053A\u053C\x03\x02\x02\x02\u053B\u0539\x03\x02" +
    "\x02\x02\u053C\u053E\x05\\/\x02\u053D\u0532\x03\x02\x02\x02\u053D\u053E" +
    "\x03\x02\x02\x02\u053E\u0542\x03\x02\x02\x02\u053F\u0541\x07\x07\x02\x02" +
    "\u0540\u053F\x03\x02\x02\x02\u0541\u0544\x03\x02\x02\x02\u0542\u0540\x03" +
    "\x02\x02\x02\u0542\u0543\x03\x02\x02\x02\u0543\u0545\x03\x02\x02\x02\u0544" +
    "\u0542\x03\x02\x02\x02\u0545\u0547\x05@!\x02\u0546\u051A\x03\x02\x02\x02" +
    "\u0546\u051E\x03\x02\x02\x02\u0547O\x03\x02\x02\x02\u0548\u054A\x05\u0118" +
    "\x8D\x02\u0549\u0548\x03\x02\x02\x02\u0549\u054A\x03\x02\x02\x02\u054A" +
    "\u054B\x03\x02\x02\x02\u054B\u0579\x07b\x02\x02\u054C\u054E\x05\u0118" +
    "\x8D\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03\x02\x02\x02\u054E" +
    "\u054F\x03\x02\x02\x02\u054F\u0553\x07b\x02\x02\u0550\u0552\x07\x07\x02" +
    "\x02\u0551\u0550\x03\x02\x02\x02\u0552\u0555\x03\x02\x02\x02\u0553\u0551" +
    "\x03\x02\x02\x02\u0553\u0554\x03\x02\x02\x02\u0554\u0556\x03\x02\x02\x02" +
    "\u0555\u0553\x03\x02\x02\x02\u0556\u055B\x07\v\x02\x02\u0557\u055A\x05" +
    "\u0132\x9A\x02\u0558\u055A\x05\u012A\x96\x02\u0559\u0557\x03\x02\x02\x02" +
    "\u0559\u0558\x03\x02\x02\x02\u055A\u055D\x03\x02\x02\x02\u055B\u0559\x03" +
    "\x02\x02\x02\u055B\u055C\x03\x02\x02\x02\u055C\u055E\x03\x02\x02\x02\u055D" +
    "\u055B\x03\x02\x02\x02\u055E\u055F\x05> \x02\u055F\u056E\x07\f\x02\x02" +
    "\u0560\u0562\x07\x07\x02\x02\u0561\u0560\x03\x02\x02\x02\u0562\u0565\x03" +
    "\x02\x02\x02\u0563\u0561\x03\x02\x02\x02\u0563\u0564\x03\x02\x02\x02\u0564" +
    "\u0566\x03\x02\x02\x02\u0565\u0563\x03\x02\x02\x02\u0566\u056A\x07\x1C" +
    "\x02\x02\u0567\u0569\x07\x07\x02\x02\u0568\u0567\x03\x02\x02\x02\u0569" +
    "\u056C\x03\x02\x02\x02\u056A\u0568\x03\x02\x02\x02\u056A\u056B\x03\x02" +
    "\x02\x02\u056B\u056D\x03\x02\x02\x02\u056C\u056A\x03\x02\x02\x02\u056D" +
    "\u056F\x05\\/\x02\u056E\u0563\x03\x02\x02\x02\u056E\u056F\x03\x02\x02" +
    "\x02\u056F\u0573\x03\x02\x02\x02\u0570\u0572\x07\x07\x02\x02\u0571\u0570" +
    "\x03\x02\x02\x02\u0572\u0575\x03\x02\x02\x02\u0573\u0571\x03\x02\x02\x02" +
    "\u0573\u0574\x03\x02\x02\x02\u0574\u0576\x03\x02\x02\x02\u0575\u0573\x03" +
    "\x02\x02\x02\u0576\u0577\x05@!\x02\u0577\u0579\x03\x02\x02\x02\u0578\u0549" +
    "\x03\x02\x02\x02\u0578\u054D\x03\x02\x02\x02\u0579Q\x03\x02\x02\x02\u057A" +
    "\u057C\x05\u0118\x8D\x02\u057B\u057A\x03\x02\x02\x02\u057B\u057C\x03\x02" +
    "\x02\x02\u057C\u057D\x03\x02\x02\x02\u057D\u0581\x07E\x02\x02\u057E\u0580" +
    "\x07\x07\x02\x02\u057F\u057E\x03\x02\x02\x02\u0580\u0583\x03\x02\x02\x02" +
    "\u0581\u057F\x03\x02\x02\x02\u0581\u0582\x03\x02\x02\x02\u0582\u0584\x03" +
    "\x02\x02\x02\u0583\u0581\x03\x02\x02\x02\u0584\u058C\x05\u013C\x9F\x02" +
    "\u0585\u0587\x07\x07\x02\x02\u0586\u0585\x03\x02\x02\x02\u0587\u058A\x03" +
    "\x02\x02\x02\u0588\u0586\x03\x02\x02\x02\u0588\u0589\x03\x02\x02\x02\u0589" +
    "\u058B\x03\x02\x02\x02\u058A\u0588\x03\x02\x02\x02\u058B\u058D\x05T+\x02" +
    "\u058C\u0588\x03\x02\x02\x02\u058C\u058D\x03\x02\x02\x02\u058D\u0591\x03" +
    "\x02\x02\x02\u058E\u0590\x07\x07\x02\x02\u058F\u058E\x03\x02\x02\x02\u0590" +
    "\u0593\x03\x02\x02\x02\u0591\u058F\x03\x02\x02\x02\u0591\u0592\x03\x02" +
    "\x02\x02\u0592\u0594\x03\x02\x02\x02\u0593\u0591\x03\x02\x02\x02\u0594" +
    "\u0598\x07\x1E\x02\x02\u0595\u0597\x07\x07\x02\x02\u0596\u0595\x03\x02" +
    "\x02\x02\u0597\u059A\x03\x02\x02\x02\u0598\u0596\x03\x02\x02\x02\u0598" +
    "\u0599\x03\x02\x02\x02\u0599\u059B\x03\x02\x02\x02\u059A\u0598\x03\x02" +
    "\x02\x02\u059B\u059C\x05\\/\x02\u059CS\x03\x02\x02\x02\u059D\u05A1\x07" +
    ".\x02\x02\u059E\u05A0\x07\x07\x02\x02\u059F\u059E\x03\x02\x02\x02\u05A0" +
    "\u05A3\x03\x02\x02\x02\u05A1\u059F\x03\x02\x02\x02\u05A1\u05A2\x03\x02" +
    "\x02\x02\u05A2\u05A4\x03\x02\x02\x02\u05A3\u05A1\x03\x02\x02\x02\u05A4" +
    "\u05B5\x05V,\x02\u05A5\u05A7\x07\x07\x02\x02\u05A6\u05A5\x03\x02\x02\x02" +
    "\u05A7\u05AA\x03\x02\x02\x02\u05A8\u05A6\x03\x02\x02\x02\u05A8\u05A9\x03" +
    "\x02\x02\x02\u05A9\u05AB\x03\x02\x02\x02\u05AA\u05A8\x03\x02\x02\x02\u05AB" +
    "\u05AF\x07\n\x02\x02\u05AC\u05AE\x07\x07\x02\x02\u05AD\u05AC\x03\x02\x02" +
    "\x02\u05AE\u05B1\x03\x02\x02\x02\u05AF\u05AD\x03\x02\x02\x02\u05AF\u05B0" +
    "\x03\x02\x02\x02\u05B0\u05B2\x03\x02\x02\x02\u05B1\u05AF\x03\x02\x02\x02" +
    "\u05B2\u05B4\x05V,\x02\u05B3\u05A8\x03\x02\x02\x02\u05B4\u05B7\x03\x02" +
    "\x02\x02\u05B5\u05B3\x03\x02\x02\x02\u05B5\u05B6\x03\x02\x02\x02\u05B6" +
    "\u05BB\x03\x02\x02\x02\u05B7\u05B5\x03\x02\x02\x02\u05B8\u05BA\x07\x07" +
    "\x02\x02\u05B9\u05B8\x03\x02\x02\x02\u05BA\u05BD\x03\x02\x02\x02\u05BB" +
    "\u05B9\x03\x02\x02\x02\u05BB\u05BC\x03\x02\x02\x02\u05BC\u05BF\x03\x02" +
    "\x02\x02\u05BD\u05BB\x03\x02\x02\x02\u05BE\u05C0\x07\n\x02\x02\u05BF\u05BE" +
    "\x03\x02\x02\x02\u05BF\u05C0\x03\x02\x02\x02\u05C0\u05C1\x03\x02\x02\x02" +
    "\u05C1\u05C2\x07/\x02\x02\u05C2U\x03\x02\x02\x02\u05C3\u05C5\x05X-\x02" +
    "\u05C4\u05C3\x03\x02\x02\x02\u05C4\u05C5\x03\x02\x02\x02\u05C5\u05C9\x03" +
    "\x02\x02\x02\u05C6\u05C8\x07\x07\x02\x02\u05C7\u05C6\x03\x02\x02\x02\u05C8" +
    "\u05CB\x03\x02\x02\x02\u05C9\u05C7\x03\x02\x02\x02\u05C9\u05CA\x03\x02" +
    "\x02\x02\u05CA\u05CC\x03\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02\u05CC" +
    "\u05DB\x05\u013C\x9F\x02\u05CD\u05CF\x07\x07\x02\x02\u05CE\u05CD\x03\x02" +
    "\x02\x02\u05CF\u05D2\x03\x02\x02\x02\u05D0\u05CE\x03\x02\x02\x02\u05D0" +
    "\u05D1\x03\x02\x02\x02\u05D1\u05D3\x03\x02\x02\x02\u05D2\u05D0\x03\x02" +
    "\x02\x02\u05D3\u05D7\x07\x1C\x02\x02\u05D4\u05D6\x07\x07\x02\x02\u05D5" +
    "\u05D4\x03\x02\x02\x02\u05D6\u05D9\x03\x02\x02\x02\u05D7\u05D5\x03\x02" +
    "\x02\x02\u05D7\u05D8\x03\x02\x02\x02\u05D8\u05DA\x03\x02\x02\x02\u05D9" +
    "\u05D7\x03\x02\x02\x02\u05DA\u05DC\x05\\/\x02\u05DB\u05D0\x03\x02\x02" +
    "\x02\u05DB\u05DC\x03\x02\x02\x02\u05DCW\x03\x02\x02\x02\u05DD\u05DF\x05" +
    "Z.\x02\u05DE\u05DD\x03\x02\x02\x02\u05DF\u05E0\x03\x02\x02\x02\u05E0\u05DE" +
    "\x03\x02\x02\x02\u05E0\u05E1\x03\x02\x02\x02\u05E1Y\x03\x02\x02\x02\u05E2" +
    "\u05E6\x05\u012C\x97\x02\u05E3\u05E5\x07\x07\x02\x02\u05E4\u05E3\x03\x02" +
    "\x02\x02\u05E5\u05E8\x03\x02\x02\x02\u05E6\u05E4\x03\x02\x02\x02\u05E6" +
    "\u05E7\x03\x02\x02\x02\u05E7\u05F2\x03\x02\x02\x02\u05E8\u05E6\x03\x02" +
    "\x02\x02\u05E9\u05ED\x05\u0122\x92\x02\u05EA\u05EC\x07\x07\x02\x02\u05EB" +
    "\u05EA\x03\x02\x02\x02\u05EC\u05EF\x03\x02\x02\x02\u05ED\u05EB\x03\x02" +
    "\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F2\x03\x02\x02\x02\u05EF" +
    "\u05ED\x03\x02\x02\x02\u05F0\u05F2\x05\u0132\x9A\x02\u05F1\u05E2\x03\x02" +
    "\x02\x02\u05F1\u05E9\x03\x02\x02\x02\u05F1\u05F0\x03\x02\x02\x02\u05F2" +
    "[\x03\x02\x02\x02\u05F3\u05F5\x05^0\x02\u05F4\u05F3\x03\x02\x02\x02\u05F4" +
    "\u05F5\x03\x02\x02\x02\u05F5\u05FA\x03\x02\x02\x02\u05F6\u05FB\x05b2\x02" +
    "\u05F7\u05FB\x05d3\x02\u05F8\u05FB\x05f4\x02\u05F9\u05FB\x05h5\x02\u05FA" +
    "\u05F6\x03\x02\x02\x02\u05FA\u05F7\x03\x02\x02\x02\u05FA\u05F8\x03\x02" +
    "\x02\x02\u05FA\u05F9\x03\x02\x02\x02\u05FB]\x03\x02\x02\x02\u05FC\u05FE" +
    "\x05`1\x02\u05FD\u05FC\x03\x02\x02\x02\u05FE\u05FF\x03\x02\x02\x02\u05FF" +
    "\u05FD\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600_\x03\x02\x02" +
    "\x02\u0601\u060A\x05\u0132\x9A\x02\u0602\u0606\x07{\x02\x02\u0603\u0605" +
    "\x07\x07\x02\x02\u0604\u0603\x03\x02\x02\x02\u0605\u0608\x03\x02\x02\x02" +
    "\u0606\u0604\x03\x02\x02\x02\u0606\u0607\x03\x02\x02\x02\u0607\u060A\x03" +
    "\x02\x02\x02\u0608\u0606\x03\x02\x02\x02\u0609\u0601\x03\x02\x02\x02\u0609" +
    "\u0602\x03\x02\x02\x02\u060Aa\x03\x02\x02\x02\u060B\u060F\x07\v\x02\x02" +
    "\u060C\u060E\x07\x07\x02\x02\u060D\u060C\x03\x02\x02\x02\u060E\u0611\x03" +
    "\x02\x02\x02\u060F\u060D\x03\x02\x02\x02\u060F\u0610\x03\x02\x02\x02\u0610" +
    "\u0612\x03\x02\x02\x02\u0611\u060F\x03\x02\x02\x02\u0612\u0616\x05\\/" +
    "\x02\u0613\u0615\x07\x07\x02\x02\u0614\u0613\x03\x02\x02\x02\u0615\u0618" +
    "\x03\x02\x02\x02\u0616\u0614\x03\x02\x02\x02\u0616\u0617\x03\x02\x02\x02" +
    "\u0617\u0619\x03\x02\x02\x02\u0618\u0616\x03\x02\x02\x02\u0619\u061A\x07" +
    "\f\x02\x02\u061Ac\x03\x02\x02\x02\u061B\u061E\x05f4\x02\u061C\u061E\x05" +
    "b2\x02\u061D\u061B\x03\x02\x02\x02\u061D\u061C\x03\x02\x02\x02\u061E\u0622" +
    "\x03\x02\x02\x02\u061F\u0621\x07\x07\x02\x02\u0620\u061F\x03\x02\x02\x02" +
    "\u0621\u0624\x03\x02\x02\x02\u0622\u0620\x03\x02\x02\x02\u0622\u0623\x03" +
    "\x02\x02\x02\u0623\u0626\x03\x02\x02\x02\u0624\u0622\x03\x02\x02\x02\u0625" +
    "\u0627\x05\u0142\xA2\x02\u0626\u0625\x03\x02\x02\x02\u0627\u0628\x03\x02" +
    "\x02\x02\u0628\u0626\x03\x02\x02\x02\u0628\u0629\x03\x02\x02\x02\u0629" +
    "e\x03\x02\x02\x02\u062A\u062D\x05l7\x02\u062B\u062D\x07c\x02\x02\u062C" +
    "\u062A\x03\x02\x02\x02\u062C\u062B\x03\x02\x02\x02\u062Dg\x03\x02\x02" +
    "\x02\u062E\u0632\x05j6\x02\u062F\u0631\x07\x07\x02\x02\u0630\u062F\x03" +
    "\x02\x02\x02\u0631\u0634\x03\x02\x02\x02\u0632\u0630\x03\x02\x02\x02\u0632" +
    "\u0633\x03\x02\x02\x02\u0633\u0635\x03\x02\x02\x02\u0634\u0632\x03\x02" +
    "\x02\x02\u0635\u0639\x07\t\x02\x02\u0636\u0638\x07\x07\x02\x02\u0637\u0636" +
    "\x03\x02\x02\x02\u0638\u063B\x03\x02\x02\x02\u0639\u0637\x03\x02\x02\x02" +
    "\u0639\u063A\x03\x02\x02\x02\u063A\u063D\x03\x02\x02\x02\u063B\u0639\x03" +
    "\x02\x02\x02\u063C\u062E\x03\x02\x02\x02\u063C\u063D\x03\x02\x02\x02\u063D" +
    "\u063E\x03\x02\x02\x02\u063E\u0642\x05r:\x02\u063F\u0641\x07\x07\x02\x02" +
    "\u0640\u063F\x03\x02\x02\x02\u0641\u0644\x03\x02\x02\x02\u0642\u0640\x03" +
    "\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0645\x03\x02\x02\x02\u0644" +
    "\u0642\x03\x02\x02\x02\u0645\u0649\x07$\x02\x02\u0646\u0648\x07\x07\x02" +
    "\x02\u0647\u0646\x03\x02\x02\x02\u0648\u064B\x03\x02\x02\x02\u0649\u0647" +
    "\x03\x02\x02\x02\u0649\u064A\x03\x02\x02\x02\u064A\u064C\x03\x02\x02\x02" +
    "\u064B\u0649\x03\x02\x02\x02\u064C\u064D\x05\\/\x02\u064Di\x03\x02\x02" +
    "\x02\u064E\u0650\x05^0\x02\u064F\u064E\x03\x02\x02\x02\u064F\u0650\x03" +
    "\x02\x02\x02\u0650\u0654\x03\x02\x02\x02\u0651\u0655\x05b2\x02\u0652\u0655" +
    "\x05d3\x02\u0653\u0655\x05f4\x02\u0654\u0651\x03\x02\x02\x02\u0654\u0652" +
    "\x03\x02\x02\x02\u0654\u0653\x03\x02\x02\x02\u0655k\x03\x02\x02\x02\u0656" +
    "\u0667\x05p9\x02\u0657\u0659\x07\x07\x02\x02\u0658\u0657\x03\x02\x02\x02" +
    "\u0659\u065C\x03\x02\x02\x02\u065A\u0658\x03\x02\x02\x02\u065A\u065B\x03" +
    "\x02\x02\x02\u065B\u065D\x03\x02\x02\x02\u065C\u065A\x03\x02\x02\x02\u065D" +
    "\u0661\x07\t\x02\x02\u065E\u0660\x07\x07\x02\x02\u065F\u065E\x03\x02\x02" +
    "\x02\u0660\u0663\x03\x02\x02\x02\u0661\u065F\x03\x02\x02\x02\u0661\u0662" +
    "\x03\x02\x02\x02\u0662\u0664\x03\x02\x02\x02\u0663\u0661\x03\x02\x02\x02" +
    "\u0664\u0666\x05p9\x02\u0665\u065A\x03\x02\x02\x02\u0666\u0669\x03\x02" +
    "\x02\x02\u0667\u0665\x03\x02\x02\x02\u0667\u0668\x03\x02\x02\x02\u0668" +
    "m\x03\x02\x02\x02\u0669\u0667\x03\x02\x02\x02\u066A\u066E\x07\v\x02\x02" +
    "\u066B\u066D\x07\x07\x02\x02\u066C\u066B\x03\x02\x02\x02\u066D\u0670\x03" +
    "\x02\x02\x02\u066E\u066C\x03\x02\x02\x02\u066E\u066F\x03\x02\x02\x02\u066F" +
    "\u0671\x03\x02\x02\x02\u0670\u066E\x03\x02\x02\x02\u0671\u0675\x05l7\x02" +
    "\u0672\u0674\x07\x07\x02\x02\u0673\u0672\x03\x02\x02\x02\u0674\u0677\x03" +
    "\x02\x02\x02\u0675\u0673\x03\x02\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676" +
    "\u0678\x03\x02\x02\x02\u0677\u0675\x03\x02\x02\x02\u0678\u0679\x07\f\x02" +
    "\x02\u0679\u068B\x03\x02\x02\x02\u067A\u067E\x07\v\x02\x02\u067B\u067D" +
    "\x07\x07\x02\x02\u067C\u067B\x03\x02\x02\x02\u067D\u0680\x03\x02\x02\x02" +
    "\u067E\u067C\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F\u0681\x03" +
    "\x02\x02\x02\u0680\u067E\x03\x02\x02\x02\u0681\u0685\x05n8\x02\u0682\u0684" +
    "\x07\x07\x02\x02\u0683\u0682\x03\x02\x02\x02\u0684\u0687\x03\x02\x02\x02" +
    "\u0685\u0683\x03\x02\x02\x02\u0685\u0686\x03\x02\x02\x02\u0686\u0688\x03" +
    "\x02\x02\x02\u0687\u0685\x03\x02\x02\x02\u0688\u0689\x07\f\x02\x02\u0689" +
    "\u068B\x03\x02\x02\x02\u068A\u066A\x03\x02\x02\x02\u068A\u067A\x03\x02" +
    "\x02\x02\u068Bo\x03\x02\x02\x02\u068C\u0694\x05\u013C\x9F\x02\u068D\u068F" +
    "\x07\x07\x02\x02\u068E\u068D\x03\x02\x02\x02\u068F\u0692\x03\x02\x02\x02" +
    "\u0690\u068E\x03\x02\x02\x02\u0690\u0691\x03\x02\x02\x02\u0691\u0693\x03" +
    "\x02\x02\x02\u0692\u0690\x03\x02\x02\x02\u0693\u0695\x05\xB2Z\x02\u0694" +
    "\u0690\x03\x02\x02\x02\u0694\u0695\x03\x02\x02\x02\u0695q\x03\x02\x02" +
    "\x02\u0696\u069A\x07\v\x02\x02\u0697\u0699\x07\x07\x02\x02\u0698\u0697" +
    "\x03\x02\x02\x02\u0699\u069C\x03\x02\x02\x02\u069A\u0698\x03\x02\x02\x02" +
    "\u069A\u069B\x03\x02\x02\x02\u069B\u069F\x03\x02\x02\x02\u069C\u069A\x03" +
    "\x02\x02\x02\u069D\u06A0\x05<\x1F\x02\u069E\u06A0\x05\\/\x02\u069F\u069D" +
    "\x03\x02\x02\x02\u069F\u069E\x03\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02" +
    "\u06A0\u06B4\x03\x02\x02\x02\u06A1\u06A3\x07\x07\x02\x02\u06A2\u06A1\x03" +
    "\x02\x02\x02\u06A3\u06A6\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02\u06A4" +
    "\u06A5\x03\x02\x02\x02\u06A5\u06A7\x03\x02\x02\x02\u06A6\u06A4\x03\x02" +
    "\x02\x02\u06A7\u06AB\x07\n\x02\x02\u06A8\u06AA\x07\x07\x02\x02\u06A9\u06A8" +
    "\x03\x02\x02\x02\u06AA\u06AD\x03\x02\x02\x02\u06AB\u06A9\x03\x02\x02\x02" +
    "\u06AB\u06AC\x03\x02\x02\x02\u06AC\u06B0\x03\x02\x02\x02\u06AD\u06AB\x03" +
    "\x02\x02\x02\u06AE\u06B1\x05<\x1F\x02\u06AF\u06B1\x05\\/\x02\u06B0\u06AE" +
    "\x03\x02\x02\x02\u06B0\u06AF\x03\x02\x02\x02\u06B1\u06B3\x03\x02\x02\x02" +
    "\u06B2\u06A4\x03\x02\x02\x02\u06B3\u06B6\x03\x02\x02\x02\u06B4\u06B2\x03" +
    "\x02\x02\x02\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06BA\x03\x02\x02\x02\u06B6" +
    "\u06B4\x03\x02\x02\x02\u06B7\u06B9\x07\x07\x02\x02\u06B8\u06B7\x03\x02" +
    "\x02\x02\u06B9\u06BC\x03\x02\x02\x02\u06BA\u06B8\x03\x02\x02\x02\u06BA" +
    "\u06BB\x03\x02\x02\x02\u06BB\u06BD\x03\x02\x02\x02\u06BC\u06BA\x03\x02" +
    "\x02\x02\u06BD\u06BE\x07\f\x02\x02\u06BEs\x03\x02\x02\x02\u06BF\u06C3" +
    "\x07M\x02\x02\u06C0\u06C2\x07\x07\x02\x02\u06C1\u06C0\x03\x02\x02\x02" +
    "\u06C2\u06C5\x03\x02\x02\x02\u06C3\u06C1\x03\x02\x02\x02\u06C3\u06C4\x03" +
    "\x02\x02\x02\u06C4\u06C6\x03\x02\x02\x02\u06C5\u06C3\x03\x02\x02\x02\u06C6" +
    "\u06D7\x05v<\x02\u06C7\u06C9\x07\x07\x02\x02\u06C8\u06C7\x03\x02\x02\x02" +
    "\u06C9\u06CC\x03\x02\x02\x02\u06CA\u06C8\x03\x02\x02\x02\u06CA\u06CB\x03" +
    "\x02\x02\x02\u06CB\u06CD\x03\x02\x02\x02\u06CC\u06CA\x03\x02\x02\x02\u06CD" +
    "\u06D1\x07\n\x02\x02\u06CE\u06D0\x07\x07\x02\x02\u06CF\u06CE\x03\x02\x02" +
    "\x02\u06D0\u06D3\x03\x02\x02\x02\u06D1\u06CF\x03\x02\x02\x02\u06D1\u06D2" +
    "\x03\x02\x02\x02\u06D2\u06D4\x03\x02\x02\x02\u06D3\u06D1\x03\x02\x02\x02" +
    "\u06D4\u06D6\x05v<\x02\u06D5\u06CA\x03\x02\x02\x02\u06D6\u06D9\x03\x02" +
    "\x02\x02\u06D7\u06D5\x03\x02\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8" +
    "u\x03\x02\x02\x02\u06D9\u06D7\x03\x02\x02\x02\u06DA\u06DC\x05\u0132\x9A" +
    "\x02\u06DB\u06DA\x03\x02\x02\x02\u06DC\u06DF\x03\x02\x02\x02\u06DD\u06DB" +
    "\x03\x02\x02\x02\u06DD\u06DE\x03\x02\x02\x02\u06DE\u06E0\x03\x02\x02\x02" +
    "\u06DF\u06DD\x03\x02\x02\x02\u06E0\u06E4\x05\u013C\x9F\x02\u06E1\u06E3" +
    "\x07\x07\x02\x02\u06E2\u06E1\x03\x02\x02\x02\u06E3\u06E6\x03\x02\x02\x02" +
    "\u06E4\u06E2\x03\x02\x02\x02\u06E4\u06E5\x03\x02\x02\x02\u06E5\u06E7\x03" +
    "\x02\x02\x02\u06E6\u06E4\x03\x02\x02\x02\u06E7\u06EB\x07\x1C\x02\x02\u06E8" +
    "\u06EA\x07\x07\x02\x02\u06E9\u06E8\x03\x02\x02\x02\u06EA\u06ED\x03\x02" +
    "\x02\x02\u06EB\u06E9\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC" +
    "\u06EE\x03\x02\x02\x02\u06ED\u06EB\x03\x02\x02\x02\u06EE\u06EF\x05\\/" +
    "\x02\u06EFw\x03\x02\x02\x02\u06F0\u06F4\x07\x0F\x02\x02\u06F1\u06F3\x07" +
    "\x07\x02\x02\u06F2\u06F1\x03\x02\x02\x02\u06F3\u06F6\x03\x02\x02\x02\u06F4" +
    "\u06F2\x03\x02\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5\u06F7\x03\x02" +
    "\x02\x02\u06F6\u06F4\x03\x02\x02\x02\u06F7\u06FB\x05z>\x02\u06F8\u06FA" +
    "\x07\x07\x02\x02\u06F9\u06F8\x03\x02\x02\x02\u06FA\u06FD\x03\x02\x02\x02" +
    "\u06FB\u06F9\x03\x02\x02\x02\u06FB\u06FC\x03\x02\x02\x02\u06FC\u06FE\x03" +
    "\x02\x02\x02\u06FD\u06FB\x03\x02\x02\x02\u06FE\u06FF\x07\x10\x02\x02\u06FF" +
    "y\x03\x02\x02\x02\u0700\u0709\x05|?\x02\u0701\u0703\t\x04\x02\x02\u0702" +
    "\u0701\x03\x02\x02\x02\u0703\u0704\x03\x02\x02\x02\u0704\u0702\x03\x02" +
    "\x02\x02\u0704\u0705\x03\x02\x02\x02\u0705\u0706\x03\x02\x02\x02\u0706" +
    "\u0708\x05|?\x02\u0707\u0702\x03\x02\x02\x02\u0708\u070B\x03\x02\x02\x02" +
    "\u0709\u0707\x03\x02\x02\x02\u0709\u070A\x03\x02\x02\x02\u070A\u070D\x03" +
    "\x02\x02\x02\u070B\u0709\x03\x02\x02\x02\u070C\u070E\x05\u014C\xA7\x02" +
    "\u070D\u070C\x03\x02\x02\x02\u070D\u070E\x03\x02\x02\x02\u070E\u0710\x03" +
    "\x02\x02\x02\u070F\u0700\x03\x02\x02\x02\u070F\u0710\x03\x02\x02\x02\u0710" +
    "{\x03\x02\x02\x02\u0711\u0714\x05\u0130\x99\x02\u0712\u0714\x05\u0132" +
    "\x9A\x02\u0713\u0711\x03\x02\x02\x02\u0713\u0712\x03\x02\x02\x02\u0714" +
    "\u0717\x03\x02\x02\x02\u0715\u0713\x03\x02\x02\x02\u0715\u0716\x03\x02" +
    "\x02\x02\u0716\u071C\x03\x02\x02\x02\u0717\u0715\x03\x02\x02\x02\u0718" +
    "\u071D\x05~@\x02\u0719\u071D\x05\x80A\x02\u071A\u071D\x05\xF6|\x02\u071B" +
    "\u071D\x05\x82B\x02\u071C\u0718\x03\x02\x02\x02\u071C\u0719\x03\x02\x02" +
    "\x02\u071C\u071A\x03\x02\x02\x02\u071C\u071B\x03\x02\x02\x02\u071D}\x03" +
    "\x02\x02\x02\u071E\u0724\x05\x12\n\x02\u071F\u0724\x05B\"\x02\u0720\u0724" +
    "\x056\x1C\x02\u0721\u0724\x05F$\x02\u0722\u0724\x05R*\x02\u0723\u071E" +
    "\x03\x02\x02\x02\u0723\u071F\x03\x02\x02\x02\u0723\u0720\x03\x02\x02\x02" +
    "\u0723\u0721\x03\x02\x02\x02\u0723\u0722\x03\x02\x02\x02\u0724\x7F\x03" +
    "\x02\x02\x02\u0725\u0726\x05\xA2R\x02\u0726\u072A\x07\x1E\x02\x02\u0727" +
    "\u0729\x07\x07\x02\x02\u0728\u0727\x03\x02\x02\x02\u0729\u072C\x03\x02" +
    "\x02\x02\u072A\u0728\x03\x02\x02\x02\u072A\u072B\x03\x02\x02\x02\u072B" +
    "\u072D\x03\x02\x02\x02\u072C\u072A\x03\x02\x02\x02\u072D\u072E\x05\x82" +
    "B\x02\u072E\u073A\x03\x02\x02\x02\u072F\u0730\x05\xA4S\x02\u0730\u0734" +
    "\x05\u0102\x82\x02\u0731\u0733\x07\x07\x02\x02\u0732\u0731\x03\x02\x02" +
    "\x02\u0733\u0736\x03\x02\x02\x02\u0734\u0732\x03\x02\x02\x02\u0734\u0735" +
    "\x03\x02\x02\x02\u0735\u0737\x03\x02\x02\x02\u0736\u0734\x03\x02\x02\x02" +
    "\u0737\u0738\x05\x82B\x02\u0738\u073A\x03\x02\x02\x02\u0739\u0725\x03" +
    "\x02\x02\x02\u0739\u072F\x03\x02\x02\x02\u073A\x81\x03\x02\x02\x02\u073B" +
    "\u073C\x05\x84C\x02\u073C\x83\x03\x02\x02\x02\u073D\u074E\x05\x86D\x02" +
    "\u073E\u0740\x07\x07\x02\x02\u073F\u073E\x03\x02\x02\x02\u0740\u0743\x03" +
    "\x02\x02\x02\u0741\u073F\x03\x02\x02\x02\u0741\u0742\x03\x02\x02\x02\u0742" +
    "\u0744\x03\x02\x02\x02\u0743\u0741\x03\x02\x02\x02\u0744\u0748\x07\x19" +
    "\x02\x02\u0745\u0747\x07\x07\x02\x02\u0746\u0745\x03\x02\x02\x02\u0747" +
    "\u074A\x03\x02\x02\x02\u0748\u0746\x03\x02\x02\x02\u0748\u0749\x03\x02" +
    "\x02\x02\u0749\u074B\x03\x02\x02\x02\u074A\u0748\x03\x02\x02\x02\u074B" +
    "\u074D\x05\x86D\x02\u074C\u0741\x03\x02\x02\x02\u074D\u0750\x03\x02\x02" +
    "\x02\u074E\u074C\x03\x02\x02\x02\u074E\u074F\x03\x02\x02\x02\u074F\x85" +
    "\x03\x02\x02\x02\u0750\u074E\x03\x02\x02\x02\u0751\u0762\x05\x88E\x02" +
    "\u0752\u0754\x07\x07\x02\x02\u0753\u0752\x03\x02\x02\x02\u0754\u0757\x03" +
    "\x02\x02\x02\u0755\u0753\x03\x02\x02\x02\u0755\u0756\x03\x02\x02\x02\u0756" +
    "\u0758\x03\x02\x02\x02\u0757\u0755\x03\x02\x02\x02\u0758\u075C\x07\x18" +
    "\x02\x02\u0759\u075B\x07\x07\x02\x02\u075A\u0759\x03\x02\x02\x02\u075B" +
    "\u075E\x03\x02\x02\x02\u075C\u075A\x03\x02\x02\x02\u075C\u075D\x03\x02" +
    "\x02\x02\u075D\u075F\x03\x02\x02\x02\u075E\u075C\x03";
KotlinParser._serializedATNSegment4 = "\x02\x02\x02\u075F\u0761\x05\x88E\x02\u0760\u0755\x03\x02\x02\x02\u0761" +
    "\u0764\x03\x02\x02\x02\u0762\u0760\x03\x02\x02\x02\u0762\u0763\x03\x02" +
    "\x02\x02\u0763\x87\x03\x02\x02\x02\u0764\u0762\x03\x02\x02\x02\u0765\u0771" +
    "\x05\x8AF\x02\u0766\u076A\x05\u0104\x83\x02\u0767\u0769\x07\x07\x02\x02" +
    "\u0768\u0767\x03\x02\x02\x02\u0769\u076C\x03\x02\x02\x02\u076A\u0768\x03" +
    "\x02\x02\x02\u076A\u076B\x03\x02\x02\x02\u076B\u076D\x03\x02\x02\x02\u076C" +
    "\u076A\x03\x02\x02\x02\u076D\u076E\x05\x8AF\x02\u076E\u0770\x03\x02\x02" +
    "\x02\u076F\u0766\x03\x02\x02\x02\u0770\u0773\x03\x02\x02\x02\u0771\u076F" +
    "\x03\x02\x02\x02\u0771\u0772\x03\x02\x02\x02\u0772\x89\x03\x02\x02\x02" +
    "\u0773\u0771\x03\x02\x02\x02\u0774\u077E\x05\x8CG\x02\u0775\u0779\x05" +
    "\u0106\x84\x02\u0776\u0778\x07\x07\x02\x02\u0777\u0776\x03\x02\x02\x02" +
    "\u0778\u077B\x03\x02\x02\x02\u0779\u0777\x03\x02\x02\x02\u0779\u077A\x03" +
    "\x02\x02\x02\u077A\u077C\x03\x02\x02\x02\u077B\u0779\x03\x02\x02\x02\u077C" +
    "\u077D\x05\x8CG\x02\u077D\u077F\x03\x02\x02\x02\u077E\u0775\x03\x02\x02" +
    "\x02\u077E\u077F\x03\x02\x02\x02\u077F\x8B\x03\x02\x02\x02\u0780\u0795" +
    "\x05\x8EH\x02\u0781\u0785\x05\u0108\x85\x02\u0782\u0784\x07\x07\x02\x02" +
    "\u0783\u0782\x03\x02\x02\x02\u0784\u0787\x03\x02\x02\x02\u0785\u0783\x03" +
    "\x02\x02\x02\u0785\u0786\x03\x02\x02\x02\u0786\u0788\x03\x02\x02\x02\u0787" +
    "\u0785\x03\x02\x02\x02\u0788\u0789\x05\x8EH\x02\u0789\u0794\x03\x02\x02" +
    "\x02\u078A\u078E\x05\u010A\x86\x02\u078B\u078D\x07\x07\x02\x02\u078C\u078B" +
    "\x03\x02\x02\x02\u078D\u0790\x03\x02\x02\x02\u078E\u078C\x03\x02\x02\x02" +
    "\u078E\u078F\x03\x02\x02\x02\u078F\u0791\x03\x02\x02\x02\u0790\u078E\x03" +
    "\x02\x02\x02\u0791\u0792\x05\\/\x02\u0792\u0794\x03\x02\x02\x02\u0793" +
    "\u0781\x03\x02\x02\x02\u0793\u078A\x03\x02\x02\x02\u0794\u0797\x03\x02" +
    "\x02\x02\u0795\u0793\x03\x02\x02\x02\u0795\u0796\x03\x02\x02\x02\u0796" +
    "\x8D\x03\x02\x02\x02\u0797\u0795\x03\x02\x02\x02\u0798\u07AA\x05\x90I" +
    "\x02\u0799\u079B\x07\x07\x02\x02\u079A\u0799\x03\x02\x02\x02\u079B\u079E" +
    "\x03\x02\x02\x02\u079C\u079A\x03\x02\x02\x02\u079C\u079D\x03\x02\x02\x02" +
    "\u079D\u079F\x03\x02\x02\x02\u079E\u079C\x03\x02\x02\x02\u079F\u07A3\x05" +
    "\u0144\xA3\x02\u07A0\u07A2\x07\x07\x02\x02\u07A1\u07A0\x03\x02\x02\x02" +
    "\u07A2\u07A5\x03\x02\x02\x02\u07A3\u07A1\x03\x02\x02\x02\u07A3\u07A4\x03" +
    "\x02\x02\x02\u07A4\u07A6\x03\x02\x02\x02\u07A5\u07A3\x03\x02\x02\x02\u07A6" +
    "\u07A7\x05\x90I\x02\u07A7\u07A9\x03\x02\x02\x02\u07A8\u079C\x03\x02\x02" +
    "\x02\u07A9\u07AC\x03\x02\x02\x02\u07AA\u07A8\x03\x02\x02\x02\u07AA\u07AB" +
    "\x03\x02\x02\x02\u07AB\x8F\x03\x02\x02\x02\u07AC\u07AA\x03\x02\x02\x02" +
    "\u07AD\u07B9\x05\x92J\x02\u07AE\u07B2\x05\u013C\x9F\x02\u07AF\u07B1\x07" +
    "\x07\x02\x02\u07B0\u07AF\x03\x02\x02\x02\u07B1\u07B4\x03\x02\x02\x02\u07B2" +
    "\u07B0\x03\x02\x02\x02\u07B2\u07B3\x03\x02\x02\x02\u07B3\u07B5\x03\x02" +
    "\x02\x02\u07B4\u07B2\x03\x02\x02\x02\u07B5\u07B6\x05\x92J\x02\u07B6\u07B8" +
    "\x03\x02\x02\x02\u07B7\u07AE\x03\x02\x02\x02\u07B8\u07BB\x03\x02\x02\x02" +
    "\u07B9\u07B7\x03\x02\x02\x02\u07B9\u07BA\x03\x02\x02\x02\u07BA\x91\x03" +
    "\x02\x02\x02\u07BB\u07B9\x03\x02\x02\x02\u07BC\u07C7\x05\x94K\x02\u07BD" +
    "\u07C1\x07&\x02\x02\u07BE\u07C0\x07\x07\x02\x02\u07BF\u07BE\x03\x02\x02" +
    "\x02\u07C0\u07C3\x03\x02\x02\x02\u07C1\u07BF\x03\x02\x02\x02\u07C1\u07C2" +
    "\x03\x02\x02\x02\u07C2\u07C4\x03\x02\x02\x02\u07C3\u07C1\x03\x02\x02\x02" +
    "\u07C4\u07C6\x05\x94K\x02\u07C5\u07BD\x03\x02\x02\x02\u07C6\u07C9\x03" +
    "\x02\x02\x02\u07C7\u07C5\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8" +
    "\x93\x03\x02\x02\x02\u07C9\u07C7\x03\x02\x02\x02\u07CA\u07D6\x05\x96L" +
    "\x02\u07CB\u07CF\x05\u010C\x87\x02\u07CC\u07CE\x07\x07\x02\x02\u07CD\u07CC" +
    "\x03\x02\x02\x02\u07CE\u07D1\x03\x02\x02\x02\u07CF\u07CD\x03\x02\x02\x02" +
    "\u07CF\u07D0\x03\x02\x02\x02\u07D0\u07D2\x03\x02\x02\x02\u07D1\u07CF\x03" +
    "\x02\x02\x02\u07D2\u07D3\x05\x96L\x02\u07D3\u07D5\x03\x02\x02\x02\u07D4" +
    "\u07CB\x03\x02\x02\x02\u07D5\u07D8\x03\x02\x02\x02\u07D6\u07D4\x03\x02" +
    "\x02\x02\u07D6\u07D7\x03\x02\x02\x02\u07D7\x95\x03\x02\x02\x02\u07D8\u07D6" +
    "\x03\x02\x02\x02\u07D9\u07E5\x05\x98M\x02\u07DA\u07DE\x05\u010E\x88\x02" +
    "\u07DB\u07DD\x07\x07\x02\x02\u07DC\u07DB\x03\x02\x02\x02\u07DD\u07E0\x03" +
    "\x02\x02\x02\u07DE\u07DC\x03\x02\x02\x02\u07DE\u07DF\x03\x02\x02\x02\u07DF" +
    "\u07E1\x03\x02\x02\x02\u07E0\u07DE\x03\x02\x02\x02\u07E1\u07E2\x05\x98" +
    "M\x02\u07E2\u07E4\x03\x02\x02\x02\u07E3\u07DA\x03\x02\x02\x02\u07E4\u07E7" +
    "\x03\x02\x02\x02\u07E5\u07E3\x03\x02\x02\x02\u07E5\u07E6\x03\x02\x02\x02" +
    "\u07E6\x97\x03\x02\x02\x02\u07E7\u07E5\x03\x02\x02\x02\u07E8\u07F8\x05" +
    "\x9AN\x02\u07E9\u07EB\x07\x07\x02\x02\u07EA\u07E9\x03\x02\x02\x02\u07EB" +
    "\u07EE\x03\x02\x02\x02\u07EC\u07EA\x03\x02\x02\x02\u07EC\u07ED\x03\x02" +
    "\x02\x02\u07ED\u07EF\x03\x02\x02\x02\u07EE\u07EC\x03\x02\x02\x02\u07EF" +
    "\u07F3\x05\u0110\x89\x02\u07F0\u07F2\x07\x07\x02\x02\u07F1\u07F0\x03\x02" +
    "\x02\x02\u07F2\u07F5\x03\x02\x02\x02\u07F3\u07F1\x03\x02\x02\x02\u07F3" +
    "\u07F4\x03\x02\x02\x02\u07F4\u07F6\x03\x02\x02\x02\u07F5\u07F3\x03\x02" +
    "\x02\x02\u07F6\u07F7\x05\\/\x02\u07F7\u07F9\x03\x02\x02\x02\u07F8\u07EC" +
    "\x03\x02\x02\x02\u07F8\u07F9\x03\x02\x02\x02\u07F9\x99\x03\x02\x02\x02" +
    "\u07FA\u07FC\x05\x9CO\x02\u07FB\u07FA\x03\x02\x02\x02\u07FC\u07FF\x03" +
    "\x02\x02\x02\u07FD\u07FB\x03\x02\x02\x02\u07FD\u07FE\x03\x02\x02\x02\u07FE" +
    "\u0800\x03\x02\x02\x02\u07FF\u07FD\x03\x02\x02\x02\u0800\u0801\x05\x9E" +
    "P\x02\u0801\x9B\x03\x02\x02\x02\u0802\u080C\x05\u0132\x9A\x02\u0803\u080C" +
    "\x05\u0130\x99\x02\u0804\u0808\x05\u0112\x8A\x02\u0805\u0807\x07\x07\x02" +
    "\x02\u0806\u0805\x03\x02\x02\x02\u0807\u080A\x03\x02\x02\x02\u0808\u0806" +
    "\x03\x02\x02\x02\u0808\u0809\x03\x02\x02\x02\u0809\u080C\x03\x02\x02\x02" +
    "\u080A\u0808\x03\x02\x02\x02\u080B\u0802\x03\x02\x02\x02\u080B\u0803\x03" +
    "\x02\x02\x02\u080B\u0804\x03\x02\x02\x02\u080C\x9D\x03\x02\x02\x02\u080D" +
    "\u0815\x05\xBC_\x02\u080E\u0810\x05\xBC_\x02\u080F\u0811\x05\xA0Q\x02" +
    "\u0810\u080F\x03\x02\x02\x02\u0811\u0812\x03\x02\x02\x02\u0812\u0810\x03" +
    "\x02\x02\x02\u0812\u0813\x03\x02\x02\x02\u0813\u0815\x03\x02\x02\x02\u0814" +
    "\u080D\x03\x02\x02\x02\u0814\u080E\x03\x02\x02\x02\u0815\x9F\x03\x02\x02" +
    "\x02\u0816\u081C\x05\u0114\x8B\x02\u0817\u081C\x05\xB2Z\x02\u0818\u081C" +
    "\x05\xACW\x02\u0819\u081C\x05\xA8U\x02\u081A\u081C\x05\xAAV\x02\u081B" +
    "\u0816\x03\x02\x02\x02\u081B\u0817\x03\x02\x02\x02\u081B\u0818\x03\x02" +
    "\x02\x02\u081B\u0819\x03\x02\x02\x02\u081B\u081A\x03\x02\x02\x02\u081C" +
    "\xA1\x03\x02\x02\x02\u081D\u081E\x05\x9EP\x02\u081E\u081F\x05\xA6T\x02" +
    "\u081F\u0822\x03\x02\x02\x02\u0820\u0822\x05\u013C\x9F\x02\u0821\u081D" +
    "\x03\x02\x02\x02\u0821\u0820\x03\x02\x02\x02\u0822\xA3\x03\x02\x02\x02" +
    "\u0823\u0824\x05\x9AN\x02\u0824\xA5\x03\x02\x02\x02\u0825\u0829\x05\xB2" +
    "Z\x02\u0826\u0829\x05\xA8U\x02\u0827\u0829\x05\xAAV\x02\u0828\u0825\x03" +
    "\x02\x02\x02\u0828\u0826\x03\x02\x02\x02\u0828\u0827\x03\x02\x02\x02\u0829" +
    "\xA7\x03\x02\x02\x02\u082A\u082E\x07\r\x02\x02\u082B\u082D\x07\x07\x02" +
    "\x02\u082C\u082B\x03\x02\x02\x02\u082D\u0830\x03\x02\x02\x02\u082E\u082C" +
    "\x03\x02\x02\x02\u082E\u082F\x03\x02\x02\x02\u082F\u0831\x03\x02\x02\x02" +
    "\u0830\u082E\x03\x02\x02\x02\u0831\u0842\x05\x82B\x02\u0832\u0834\x07" +
    "\x07\x02\x02\u0833\u0832\x03\x02\x02\x02\u0834\u0837\x03\x02\x02\x02\u0835" +
    "\u0833\x03\x02\x02\x02\u0835\u0836\x03\x02\x02\x02\u0836\u0838\x03\x02" +
    "\x02\x02\u0837\u0835\x03\x02\x02\x02\u0838\u083C\x07\n\x02\x02\u0839\u083B" +
    "\x07\x07\x02\x02\u083A\u0839\x03\x02\x02\x02\u083B\u083E\x03\x02\x02\x02" +
    "\u083C\u083A\x03\x02\x02\x02\u083C\u083D\x03\x02\x02\x02\u083D\u083F\x03" +
    "\x02\x02\x02\u083E\u083C\x03\x02\x02\x02\u083F\u0841\x05\x82B\x02\u0840" +
    "\u0835\x03\x02\x02\x02\u0841\u0844\x03\x02\x02\x02\u0842\u0840\x03\x02" +
    "\x02\x02\u0842\u0843\x03\x02\x02\x02\u0843\u0848\x03\x02\x02\x02\u0844" +
    "\u0842\x03\x02\x02\x02\u0845\u0847\x07\x07\x02\x02\u0846\u0845\x03\x02" +
    "\x02\x02\u0847\u084A\x03\x02\x02\x02\u0848\u0846\x03\x02\x02\x02\u0848" +
    "\u0849\x03\x02\x02\x02\u0849\u084B\x03\x02\x02\x02\u084A\u0848\x03\x02" +
    "\x02\x02\u084B\u084C\x07\x0E\x02\x02\u084C\xA9\x03\x02\x02\x02\u084D\u084F" +
    "\x07\x07\x02\x02\u084E\u084D\x03\x02\x02\x02\u084F\u0852\x03\x02\x02\x02" +
    "\u0850\u084E\x03\x02\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u0853\x03" +
    "\x02\x02\x02\u0852\u0850\x03\x02\x02\x02\u0853\u0857\x05\u0116\x8C\x02" +
    "\u0854\u0856\x07\x07\x02\x02\u0855\u0854\x03\x02\x02\x02\u0856\u0859\x03" +
    "\x02\x02\x02\u0857\u0855\x03\x02\x02\x02\u0857\u0858\x03\x02\x02\x02\u0858" +
    "\u085D\x03\x02\x02\x02\u0859\u0857\x03\x02\x02\x02\u085A\u085E\x05\u013C" +
    "\x9F\x02\u085B\u085E\x05\xBE`\x02\u085C\u085E\x07?\x02\x02\u085D\u085A" +
    "\x03\x02\x02\x02\u085D\u085B\x03\x02\x02\x02\u085D\u085C\x03\x02\x02\x02" +
    "\u085E\xAB\x03\x02\x02\x02\u085F\u0861\x05\xB2Z\x02\u0860\u085F\x03\x02" +
    "\x02\x02\u0860\u0861\x03\x02\x02\x02\u0861\u0863\x03\x02\x02\x02\u0862" +
    "\u0864\x05\xB0Y\x02\u0863\u0862\x03\x02\x02\x02\u0863\u0864\x03\x02\x02" +
    "\x02\u0864\u0865\x03\x02\x02\x02\u0865\u086B\x05\xAEX\x02\u0866\u0868" +
    "\x05\xB2Z\x02\u0867\u0866\x03\x02\x02\x02\u0867\u0868\x03\x02\x02\x02" +
    "\u0868\u0869\x03\x02\x02\x02\u0869\u086B\x05\xB0Y\x02\u086A\u0860\x03" +
    "\x02\x02\x02\u086A\u0867\x03\x02\x02\x02\u086B\xAD\x03\x02\x02\x02\u086C" +
    "\u086E\x05\u0132\x9A\x02\u086D\u086C\x03\x02\x02\x02\u086E\u0871\x03\x02" +
    "\x02\x02\u086F\u086D\x03\x02\x02\x02\u086F\u0870\x03\x02\x02\x02\u0870" +
    "\u0873\x03\x02\x02\x02\u0871\u086F\x03\x02\x02\x02\u0872\u0874\x05\u0130" +
    "\x99\x02\u0873\u0872\x03\x02\x02\x02\u0873\u0874\x03\x02\x02\x02\u0874" +
    "\u0878\x03\x02\x02\x02\u0875\u0877\x07\x07\x02\x02\u0876\u0875\x03\x02" +
    "\x02\x02\u0877\u087A\x03\x02\x02\x02\u0878\u0876\x03\x02\x02\x02\u0878" +
    "\u0879\x03\x02\x02\x02\u0879\u087B\x03\x02\x02\x02\u087A\u0878\x03\x02" +
    "\x02\x02\u087B\u087C\x05\xD2j\x02\u087C\xAF\x03\x02\x02\x02\u087D\u0881" +
    "\x07\v\x02\x02\u087E\u0880\x07\x07\x02\x02\u087F\u087E\x03\x02\x02\x02" +
    "\u0880\u0883\x03\x02\x02\x02\u0881\u087F\x03\x02\x02\x02\u0881\u0882\x03" +
    "\x02\x02\x02\u0882\u0884\x03\x02\x02\x02\u0883\u0881\x03\x02\x02\x02\u0884" +
    "\u08AC\x07\f\x02\x02\u0885\u0889\x07\v\x02\x02\u0886\u0888\x07\x07\x02" +
    "\x02\u0887\u0886\x03\x02\x02\x02\u0888\u088B\x03\x02\x02\x02\u0889\u0887" +
    "\x03\x02\x02\x02\u0889\u088A\x03\x02\x02\x02\u088A\u088C\x03\x02\x02\x02" +
    "\u088B\u0889\x03\x02\x02\x02\u088C\u089D\x05\xBA^\x02\u088D\u088F\x07" +
    "\x07\x02\x02\u088E\u088D\x03\x02\x02\x02\u088F\u0892\x03\x02\x02\x02\u0890" +
    "\u088E\x03\x02\x02\x02\u0890\u0891\x03\x02\x02\x02\u0891\u0893\x03\x02" +
    "\x02\x02\u0892\u0890\x03\x02\x02\x02\u0893\u0897\x07\n\x02\x02\u0894\u0896" +
    "\x07\x07\x02\x02\u0895\u0894\x03\x02\x02\x02\u0896\u0899\x03\x02\x02\x02" +
    "\u0897\u0895\x03\x02\x02\x02\u0897\u0898\x03\x02\x02\x02\u0898\u089A\x03" +
    "\x02\x02\x02\u0899\u0897\x03\x02\x02\x02\u089A\u089C\x05\xBA^\x02\u089B" +
    "\u0890\x03\x02\x02\x02\u089C\u089F\x03\x02\x02\x02\u089D\u089B\x03\x02" +
    "\x02\x02\u089D\u089E\x03\x02\x02\x02\u089E\u08A3\x03\x02\x02\x02\u089F" +
    "\u089D\x03\x02\x02\x02\u08A0\u08A2\x07\x07\x02\x02\u08A1\u08A0\x03\x02" +
    "\x02\x02\u08A2\u08A5\x03\x02\x02\x02\u08A3\u08A1\x03\x02\x02\x02\u08A3" +
    "\u08A4\x03\x02\x02\x02\u08A4\u08A7\x03\x02\x02\x02\u08A5\u08A3\x03\x02" +
    "\x02\x02\u08A6\u08A8\x07\n\x02\x02\u08A7\u08A6\x03\x02\x02\x02\u08A7\u08A8" +
    "\x03\x02\x02\x02\u08A8\u08A9\x03\x02\x02\x02\u08A9\u08AA\x07\f\x02\x02" +
    "\u08AA\u08AC\x03\x02\x02\x02\u08AB\u087D\x03\x02\x02\x02\u08AB\u0885\x03" +
    "\x02\x02\x02\u08AC\xB1\x03\x02\x02\x02\u08AD\u08B1\x07.\x02\x02\u08AE" +
    "\u08B0\x07\x07\x02\x02\u08AF\u08AE\x03\x02\x02\x02\u08B0\u08B3\x03\x02" +
    "\x02\x02\u08B1\u08AF\x03\x02\x02\x02\u08B1\u08B2\x03\x02\x02\x02\u08B2" +
    "\u08B4\x03\x02\x02\x02\u08B3\u08B1\x03\x02\x02\x02\u08B4\u08C5\x05\xB4" +
    "[\x02\u08B5\u08B7\x07\x07\x02\x02\u08B6\u08B5\x03\x02\x02\x02\u08B7\u08BA" +
    "\x03\x02\x02\x02\u08B8\u08B6\x03\x02\x02\x02\u08B8\u08B9\x03\x02\x02\x02" +
    "\u08B9\u08BB\x03\x02\x02\x02\u08BA\u08B8\x03\x02\x02\x02\u08BB\u08BF\x07" +
    "\n\x02\x02\u08BC\u08BE\x07\x07\x02\x02\u08BD\u08BC\x03\x02\x02\x02\u08BE" +
    "\u08C1\x03\x02\x02\x02\u08BF\u08BD\x03\x02\x02\x02\u08BF\u08C0\x03\x02" +
    "\x02\x02\u08C0\u08C2\x03\x02\x02\x02\u08C1\u08BF\x03\x02\x02\x02\u08C2" +
    "\u08C4\x05\xB4[\x02\u08C3\u08B8\x03\x02\x02\x02\u08C4\u08C7\x03\x02\x02" +
    "\x02\u08C5\u08C3\x03\x02\x02\x02\u08C5\u08C6\x03\x02\x02\x02\u08C6\u08CB" +
    "\x03\x02\x02\x02\u08C7\u08C5\x03\x02\x02\x02\u08C8\u08CA\x07\x07\x02\x02" +
    "\u08C9\u08C8\x03\x02\x02\x02\u08CA\u08CD\x03\x02\x02\x02\u08CB\u08C9\x03" +
    "\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CF\x03\x02\x02\x02\u08CD" +
    "\u08CB\x03\x02\x02\x02\u08CE\u08D0\x07\n\x02\x02\u08CF\u08CE\x03\x02\x02" +
    "\x02\u08CF\u08D0\x03\x02\x02\x02\u08D0\u08D1\x03\x02\x02\x02\u08D1\u08D2" +
    "\x07/\x02\x02\u08D2\xB3\x03\x02\x02\x02\u08D3\u08D5\x05\xB6\\\x02\u08D4" +
    "\u08D3\x03\x02\x02\x02\u08D4\u08D5\x03\x02\x02\x02\u08D5\u08D6\x03\x02" +
    "\x02\x02\u08D6\u08D9\x05\\/\x02\u08D7\u08D9\x07\x11\x02\x02\u08D8\u08D4" +
    "\x03\x02\x02\x02\u08D8\u08D7\x03\x02\x02\x02\u08D9\xB5\x03\x02\x02\x02" +
    "\u08DA\u08DC\x05\xB8]\x02\u08DB\u08DA\x03\x02\x02\x02\u08DC\u08DD\x03" +
    "\x02\x02\x02\u08DD\u08DB\x03\x02\x02\x02\u08DD\u08DE\x03\x02\x02\x02\u08DE" +
    "\xB7\x03\x02\x02\x02\u08DF\u08E3\x05\u0122\x92\x02\u08E0\u08E2\x07\x07" +
    "\x02\x02\u08E1\u08E0\x03\x02\x02\x02\u08E2\u08E5\x03\x02\x02\x02\u08E3" +
    "\u08E1\x03\x02\x02\x02\u08E3\u08E4\x03\x02\x02\x02\u08E4\u08E8\x03\x02" +
    "\x02\x02\u08E5\u08E3\x03\x02\x02\x02\u08E6\u08E8\x05\u0132\x9A\x02\u08E7" +
    "\u08DF\x03\x02\x02\x02\u08E7\u08E6\x03\x02\x02\x02\u08E8\xB9\x03\x02\x02" +
    "\x02\u08E9\u08EB\x05\u0132\x9A\x02\u08EA\u08E9\x03\x02\x02\x02\u08EA\u08EB" +
    "\x03\x02\x02\x02\u08EB\u08EF\x03\x02\x02\x02\u08EC\u08EE\x07\x07\x02\x02" +
    "\u08ED\u08EC\x03\x02\x02\x02\u08EE\u08F1\x03\x02\x02\x02\u08EF\u08ED\x03" +
    "\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\u0900\x03\x02\x02\x02\u08F1" +
    "\u08EF\x03\x02\x02\x02\u08F2\u08F6\x05\u013C\x9F\x02\u08F3\u08F5\x07\x07" +
    "\x02\x02\u08F4\u08F3\x03\x02\x02\x02\u08F5\u08F8\x03\x02\x02\x02\u08F6" +
    "\u08F4\x03\x02\x02\x02\u08F6\u08F7\x03\x02\x02\x02\u08F7\u08F9\x03\x02" +
    "\x02\x02\u08F8\u08F6\x03\x02\x02\x02\u08F9\u08FD\x07\x1E\x02\x02\u08FA" +
    "\u08FC\x07\x07\x02\x02\u08FB\u08FA\x03\x02\x02\x02\u08FC\u08FF\x03\x02" +
    "\x02\x02\u08FD\u08FB\x03\x02\x02\x02\u08FD\u08FE\x03\x02\x02\x02\u08FE" +
    "\u0901\x03\x02\x02\x02\u08FF\u08FD\x03\x02\x02\x02\u0900\u08F2\x03\x02" +
    "\x02\x02\u0900\u0901\x03\x02\x02\x02\u0901\u0903\x03\x02\x02\x02\u0902" +
    "\u0904\x07\x11\x02\x02\u0903\u0902\x03\x02\x02\x02\u0903\u0904\x03\x02" +
    "\x02\x02\u0904\u0908\x03\x02\x02\x02\u0905\u0907\x07\x07\x02\x02\u0906" +
    "\u0905\x03\x02\x02\x02\u0907\u090A\x03\x02\x02\x02\u0908\u0906\x03\x02" +
    "\x02\x02\u0908\u0909\x03\x02\x02\x02\u0909\u090B\x03\x02\x02\x02\u090A" +
    "\u0908\x03\x02\x02\x02\u090B\u090C\x05\x82B\x02\u090C\xBB\x03\x02\x02" +
    "\x02\u090D\u091C\x05\xBE`\x02\u090E\u091C\x05\xC2b\x02\u090F\u091C\x05" +
    "\xC4c\x02\u0910\u091C\x05\u013C\x9F\x02\u0911\u091C\x05\u0100\x81\x02" +
    "\u0912\u091C\x05\xDAn\x02\u0913\u091C\x05\xDCo\x02\u0914\u091C\x05\xC0" +
    "a\x02\u0915\u091C\x05\xDEp\x02\u0916\u091C\x05\xE0q\x02\u0917\u091C\x05" +
    "\xE4s\x02\u0918\u091C\x05\xE6t\x02\u0919\u091C\x05\xF0y\x02\u091A\u091C" +
    "\x05\xFE\x80\x02\u091B\u090D\x03\x02\x02\x02\u091B\u090E\x03\x02\x02\x02" +
    "\u091B\u090F\x03\x02\x02\x02\u091B\u0910\x03\x02\x02\x02\u091B\u0911\x03" +
    "\x02\x02\x02\u091B\u0912\x03\x02\x02\x02\u091B\u0913\x03\x02\x02\x02\u091B" +
    "\u0914\x03\x02\x02\x02\u091B\u0915\x03\x02\x02\x02\u091B\u0916\x03\x02" +
    "\x02\x02\u091B\u0917\x03\x02\x02\x02\u091B\u0918\x03\x02\x02\x02\u091B" +
    "\u0919\x03\x02\x02\x02\u091B\u091A\x03\x02\x02\x02\u091C\xBD\x03\x02\x02" +
    "\x02\u091D\u0921\x07\v\x02\x02\u091E\u0920\x07\x07\x02\x02\u091F\u091E" +
    "\x03\x02\x02\x02\u0920\u0923\x03\x02\x02\x02\u0921\u091F\x03\x02\x02\x02" +
    "\u0921\u0922\x03\x02\x02\x02\u0922\u0924\x03\x02\x02\x02\u0923\u0921\x03" +
    "\x02\x02\x02\u0924\u0928\x05\x82B\x02\u0925\u0927\x07\x07\x02\x02\u0926" +
    "\u0925\x03\x02\x02\x02\u0927\u092A\x03\x02\x02\x02\u0928\u0926\x03\x02" +
    "\x02\x02\u0928\u0929\x03\x02\x02\x02\u0929\u092B\x03\x02\x02\x02\u092A" +
    "\u0928\x03\x02\x02\x02\u092B\u092C\x07\f\x02\x02\u092C\xBF\x03\x02\x02" +
    "\x02\u092D\u0931\x07\r\x02\x02\u092E\u0930\x07\x07\x02\x02\u092F\u092E" +
    "\x03\x02\x02\x02\u0930\u0933\x03\x02\x02\x02\u0931\u092F\x03\x02\x02\x02" +
    "\u0931\u0932\x03\x02\x02\x02\u0932\u0934\x03\x02\x02\x02\u0933\u0931\x03" +
    "\x02\x02\x02\u0934\u0945\x05\x82B\x02\u0935\u0937\x07\x07\x02\x02\u0936" +
    "\u0935\x03\x02\x02\x02\u0937\u093A\x03\x02\x02\x02\u0938\u0936\x03\x02" +
    "\x02\x02\u0938\u0939\x03\x02\x02\x02\u0939\u093B\x03\x02\x02\x02\u093A" +
    "\u0938\x03\x02\x02\x02\u093B\u093F\x07\n\x02\x02\u093C\u093E\x07\x07\x02" +
    "\x02\u093D\u093C\x03\x02\x02\x02\u093E\u0941\x03\x02\x02\x02\u093F\u093D" +
    "\x03\x02\x02\x02\u093F\u0940\x03\x02\x02\x02\u0940\u0942\x03\x02\x02\x02" +
    "\u0941\u093F\x03\x02\x02\x02\u0942\u0944\x05\x82B\x02\u0943\u0938\x03" +
    "\x02\x02\x02\u0944\u0947\x03\x02\x02\x02\u0945\u0943\x03\x02\x02\x02\u0945" +
    "\u0946\x03\x02\x02\x02\u0946\u094B\x03\x02\x02\x02\u0947\u0945\x03\x02" +
    "\x02\x02\u0948\u094A\x07\x07\x02\x02\u0949\u0948\x03\x02\x02\x02\u094A" +
    "\u094D\x03\x02\x02\x02\u094B\u0949\x03\x02\x02\x02\u094B\u094C\x03\x02" +
    "\x02\x02\u094C\u094F\x03\x02\x02\x02\u094D\u094B\x03\x02\x02\x02\u094E" +
    "\u0950\x07\n\x02\x02\u094F\u094E\x03\x02\x02\x02\u094F\u0950\x03\x02\x02" +
    "\x02\u0950\u0951\x03\x02\x02\x02\u0951\u0952\x07\x0E\x02\x02\u0952\u095C" +
    "\x03\x02\x02\x02\u0953\u0957\x07\r\x02\x02\u0954\u0956\x07\x07\x02\x02" +
    "\u0955\u0954\x03\x02\x02\x02\u0956\u0959\x03\x02\x02\x02\u0957\u0955\x03" +
    "\x02\x02\x02\u0957\u0958\x03\x02\x02\x02\u0958\u095A\x03\x02\x02\x02\u0959" +
    "\u0957\x03\x02\x02\x02\u095A\u095C\x07\x0E\x02\x02\u095B\u092D\x03\x02" +
    "\x02\x02\u095B\u0953\x03\x02\x02\x02\u095C\xC1\x03\x02\x02\x02\u095D\u095E" +
    "\t\x05\x02\x02\u095E\xC3\x03\x02\x02\x02\u095F\u0962\x05\xC6d\x02\u0960" +
    "\u0962\x05\xC8e\x02\u0961\u095F\x03\x02\x02\x02\u0961\u0960\x03\x02\x02" +
    "\x02\u0962\xC5\x03\x02\x02\x02\u0963\u0968\x07\x88\x02\x02\u0964\u0967" +
    "\x05\xCAf\x02\u0965\u0967\x05\xCCg\x02\u0966\u0964\x03\x02\x02\x02\u0966" +
    "\u0965\x03\x02\x02\x02\u0967\u096A\x03\x02\x02\x02\u0968\u0966\x03\x02" +
    "\x02\x02\u0968\u0969\x03\x02\x02\x02\u0969\u096B\x03\x02\x02\x02\u096A" +
    "\u0968\x03\x02\x02\x02\u096B\u096C\x07\xA2\x02\x02\u096C\xC7\x03\x02\x02" +
    "\x02\u096D\u0973\x07\x89\x02\x02\u096E\u0972\x05\xCEh\x02\u096F\u0972" +
    "\x05\xD0i\x02\u0970\u0972\x07\xA8\x02\x02\u0971\u096E\x03\x02\x02\x02" +
    "\u0971\u096F\x03\x02\x02\x02\u0971\u0970\x03\x02\x02\x02\u0972\u0975\x03" +
    "\x02\x02\x02\u0973\u0971\x03\x02\x02\x02\u0973\u0974\x03\x02\x02\x02\u0974" +
    "\u0976\x03\x02\x02\x02\u0975\u0973\x03\x02\x02\x02\u0976\u0977\x07\xA7" +
    "\x02\x02\u0977\xC9\x03\x02\x02\x02\u0978\u0979\t\x06\x02\x02\u0979\xCB" +
    "\x03\x02\x02\x02\u097A\u097B\x07\xA6\x02\x02\u097B\u097C\x05\x82B\x02" +
    "\u097C\u097D\x07\x10\x02\x02\u097D\xCD\x03\x02\x02\x02\u097E\u097F\t\x07" +
    "\x02\x02\u097F\xCF\x03\x02\x02\x02\u0980\u0984\x07\xAB\x02\x02\u0981\u0983" +
    "\x07\x07\x02\x02\u0982\u0981\x03\x02\x02\x02\u0983\u0986\x03\x02\x02\x02" +
    "\u0984\u0982\x03\x02\x02\x02\u0984\u0985\x03\x02\x02\x02\u0985\u0987\x03" +
    "\x02\x02\x02\u0986\u0984\x03\x02\x02\x02\u0987\u098B\x05\x82B\x02\u0988" +
    "\u098A\x07\x07\x02\x02\u0989\u0988\x03\x02\x02\x02\u098A\u098D\x03\x02" +
    "\x02\x02\u098B\u0989\x03\x02\x02\x02\u098B\u098C\x03\x02\x02\x02\u098C" +
    "\u098E\x03\x02\x02\x02\u098D\u098B\x03\x02\x02\x02\u098E\u098F\x07\x10" +
    "\x02\x02\u098F\xD1\x03\x02\x02\x02\u0990\u0994\x07\x0F\x02\x02\u0991\u0993" +
    "\x07\x07\x02\x02\u0992\u0991\x03\x02\x02\x02\u0993\u0996\x03\x02\x02\x02" +
    "\u0994\u0992\x03\x02\x02\x02\u0994\u0995\x03\x02\x02\x02\u0995\u0997\x03" +
    "\x02\x02\x02\u0996\u0994\x03\x02\x02\x02\u0997\u099B\x05z>\x02\u0998\u099A" +
    "\x07\x07\x02\x02\u0999\u0998\x03\x02\x02\x02\u099A\u099D\x03\x02\x02\x02" +
    "\u099B\u0999\x03\x02\x02\x02\u099B\u099C\x03\x02\x02\x02\u099C\u099E\x03" +
    "\x02\x02\x02\u099D\u099B\x03\x02\x02\x02\u099E\u099F\x07\x10\x02\x02\u099F" +
    "\u09C1\x03\x02\x02\x02\u09A0\u09A4\x07\x0F\x02\x02\u09A1\u09A3\x07\x07" +
    "\x02\x02\u09A2\u09A1\x03\x02\x02\x02\u09A3\u09A6\x03\x02\x02\x02\u09A4" +
    "\u09A2\x03\x02\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u09A8\x03\x02" +
    "\x02\x02\u09A6\u09A4\x03\x02\x02\x02\u09A7\u09A9\x05\xD4k\x02\u09A8\u09A7" +
    "\x03\x02\x02\x02\u09A8\u09A9\x03\x02\x02\x02\u09A9\u09AD\x03\x02\x02\x02" +
    "\u09AA\u09AC\x07\x07\x02\x02\u09AB\u09AA\x03\x02\x02\x02\u09AC\u09AF\x03" +
    "\x02\x02\x02\u09AD\u09AB\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02\x02\u09AE" +
    "\u09B0\x03\x02\x02\x02\u09AF\u09AD\x03\x02\x02\x02\u09B0\u09B4\x07$\x02" +
    "\x02\u09B1\u09B3\x07\x07\x02\x02\u09B2\u09B1\x03\x02\x02\x02\u09B3\u09B6" +
    "\x03\x02\x02\x02\u09B4\u09B2\x03\x02\x02\x02\u09B4\u09B5\x03\x02\x02\x02" +
    "\u09B5\u09B7\x03\x02\x02\x02\u09B6\u09B4\x03\x02\x02\x02\u09B7\u09BB\x05" +
    "z>\x02\u09B8\u09BA\x07\x07\x02\x02\u09B9\u09B8\x03\x02\x02\x02\u09BA\u09BD" +
    "\x03\x02\x02\x02\u09BB\u09B9\x03\x02\x02\x02\u09BB\u09BC\x03\x02\x02\x02" +
    "\u09BC\u09BE\x03\x02\x02\x02\u09BD\u09BB\x03\x02\x02\x02\u09BE\u09BF\x07" +
    "\x10\x02\x02\u09BF\u09C1\x03\x02\x02\x02\u09C0\u0990\x03\x02\x02\x02\u09C0" +
    "\u09A0\x03\x02\x02\x02\u09C1\xD3\x03\x02\x02\x02\u09C2\u09D3\x05\xD6l" +
    "\x02\u09C3\u09C5\x07\x07\x02\x02\u09C4\u09C3\x03\x02\x02\x02\u09C5\u09C8" +
    "\x03\x02\x02\x02\u09C6\u09C4\x03\x02\x02\x02\u09C6\u09C7\x03\x02\x02\x02" +
    "\u09C7\u09C9\x03\x02\x02\x02\u09C8\u09C6\x03\x02\x02\x02\u09C9\u09CD\x07" +
    "\n\x02\x02\u09CA\u09CC\x07\x07\x02\x02\u09CB\u09CA\x03\x02\x02\x02\u09CC" +
    "\u09CF\x03\x02\x02\x02\u09CD\u09CB\x03\x02\x02\x02\u09CD\u09CE\x03\x02" +
    "\x02\x02\u09CE\u09D0\x03\x02\x02\x02\u09CF\u09CD\x03\x02\x02\x02\u09D0" +
    "\u09D2\x05\xD6l\x02\u09D1\u09C6\x03\x02\x02\x02\u09D2\u09D5\x03\x02\x02" +
    "\x02\u09D3\u09D1\x03\x02\x02\x02\u09D3\u09D4\x03\x02\x02\x02\u09D4\u09D7" +
    "\x03\x02\x02\x02\u09D5\u09D3\x03\x02\x02\x02\u09D6\u09D8\x07\n\x02\x02" +
    "\u09D7\u09D6\x03\x02\x02\x02\u09D7\u09D8\x03\x02\x02\x02\u09D8\xD5\x03" +
    "\x02\x02\x02\u09D9\u09EC\x05J&\x02\u09DA\u09E9\x05H%\x02\u09DB\u09DD\x07" +
    "\x07\x02\x02\u09DC\u09DB\x03\x02\x02\x02\u09DD\u09E0\x03\x02\x02\x02\u09DE" +
    "\u09DC\x03\x02\x02\x02\u09DE\u09DF\x03\x02\x02\x02\u09DF\u09E1\x03\x02" +
    "\x02\x02\u09E0\u09DE\x03\x02\x02\x02\u09E1\u09E5\x07\x1C\x02\x02\u09E2" +
    "\u09E4\x07\x07\x02\x02\u09E3\u09E2\x03\x02\x02\x02\u09E4\u09E7\x03\x02" +
    "\x02\x02\u09E5\u09E3\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6" +
    "\u09E8\x03\x02\x02\x02\u09E7\u09E5\x03\x02\x02\x02\u09E8\u09EA\x05\\/" +
    "\x02\u09E9\u09DE\x03\x02\x02\x02\u09E9\u09EA\x03\x02\x02\x02\u09EA\u09EC" +
    "\x03\x02\x02\x02\u09EB\u09D9\x03\x02\x02\x02\u09EB\u09DA\x03\x02\x02\x02" +
    "\u09EC\xD7\x03\x02\x02\x02\u09ED\u09FD\x07A\x02\x02\u09EE\u09F0\x07\x07" +
    "\x02\x02\u09EF\u09EE\x03\x02\x02\x02\u09F0\u09F3\x03\x02\x02\x02\u09F1" +
    "\u09EF\x03\x02\x02\x02\u09F1\u09F2\x03\x02\x02\x02\u09F2\u09F4\x03\x02" +
    "\x02\x02\u09F3\u09F1\x03\x02\x02\x02\u09F4\u09F8\x05\\/\x02\u09F5\u09F7" +
    "\x07\x07\x02\x02\u09F6\u09F5\x03\x02\x02\x02\u09F7\u09FA\x03\x02\x02\x02" +
    "\u09F8\u09F6\x03\x02\x02\x02\u09F8\u09F9\x03\x02\x02\x02\u09F9\u09FB\x03" +
    "\x02\x02\x02\u09FA\u09F8\x03\x02\x02\x02\u09FB\u09FC\x07\t\x02\x02\u09FC" +
    "\u09FE\x03\x02\x02\x02\u09FD\u09F1\x03\x02\x02\x02\u09FD\u09FE\x03\x02" +
    "\x02\x02\u09FE\u0A02\x03\x02\x02\x02\u09FF\u0A01\x07\x07\x02\x02\u0A00" +
    "\u09FF\x03\x02\x02\x02\u0A01\u0A04\x03\x02\x02\x02\u0A02\u0A00\x03\x02" +
    "\x02\x02\u0A02\u0A03\x03\x02\x02\x02\u0A03\u0A05\x03\x02\x02\x02\u0A04" +
    "\u0A02\x03\x02\x02\x02\u0A05\u0A14\x058\x1D\x02\u0A06\u0A08\x07\x07\x02" +
    "\x02\u0A07\u0A06\x03\x02\x02\x02\u0A08\u0A0B\x03\x02\x02\x02\u0A09\u0A07" +
    "\x03\x02\x02\x02\u0A09\u0A0A\x03\x02\x02\x02\u0A0A\u0A0C\x03\x02\x02\x02" +
    "\u0A0B\u0A09\x03\x02\x02\x02\u0A0C\u0A10\x07\x1C\x02\x02\u0A0D\u0A0F\x07" +
    "\x07\x02\x02\u0A0E\u0A0D\x03\x02\x02\x02\u0A0F\u0A12\x03\x02\x02\x02\u0A10" +
    "\u0A0E\x03\x02\x02\x02\u0A10\u0A11\x03\x02\x02\x02\u0A11\u0A13\x03\x02" +
    "\x02\x02\u0A12\u0A10\x03\x02\x02\x02\u0A13\u0A15\x05\\/\x02\u0A14\u0A09" +
    "\x03\x02\x02\x02\u0A14\u0A15\x03\x02\x02\x02\u0A15\u0A1D\x03\x02\x02\x02" +
    "\u0A16\u0A18\x07\x07\x02\x02\u0A17\u0A16\x03\x02\x02\x02\u0A18\u0A1B\x03" +
    "\x02\x02\x02\u0A19\u0A17\x03\x02\x02\x02\u0A19\u0A1A\x03\x02\x02\x02\u0A1A" +
    "\u0A1C\x03\x02\x02";
KotlinParser._serializedATNSegment5 = "\x02\u0A1B\u0A19\x03\x02\x02\x02\u0A1C\u0A1E\x05t;\x02\u0A1D\u0A19\x03" +
    "\x02\x02\x02\u0A1D\u0A1E\x03\x02\x02\x02\u0A1E\u0A26\x03\x02\x02\x02\u0A1F" +
    "\u0A21\x07\x07\x02\x02\u0A20\u0A1F\x03\x02\x02\x02\u0A21\u0A24\x03\x02" +
    "\x02\x02\u0A22\u0A20\x03\x02\x02\x02\u0A22\u0A23\x03\x02\x02\x02\u0A23" +
    "\u0A25\x03\x02\x02\x02\u0A24\u0A22\x03\x02\x02\x02\u0A25\u0A27\x05@!\x02" +
    "\u0A26\u0A22\x03\x02\x02\x02\u0A26\u0A27\x03\x02\x02\x02\u0A27\xD9\x03" +
    "\x02\x02\x02\u0A28\u0A2B\x05\xD2j\x02\u0A29\u0A2B\x05\xD8m\x02\u0A2A\u0A28" +
    "\x03\x02\x02\x02\u0A2A\u0A29\x03\x02\x02\x02\u0A2B\xDB\x03\x02\x02\x02" +
    "\u0A2C\u0A30\x07B\x02\x02\u0A2D\u0A2F\x07\x07\x02\x02\u0A2E\u0A2D\x03" +
    "\x02\x02\x02\u0A2F\u0A32\x03\x02\x02\x02\u0A30\u0A2E\x03\x02\x02\x02\u0A30" +
    "\u0A31\x03\x02\x02\x02\u0A31\u0A33\x03\x02\x02\x02\u0A32\u0A30\x03\x02" +
    "\x02\x02\u0A33\u0A37\x07\x1C\x02\x02\u0A34\u0A36\x07\x07\x02\x02\u0A35" +
    "\u0A34\x03\x02\x02\x02\u0A36\u0A39\x03\x02\x02\x02\u0A37\u0A35\x03\x02" +
    "\x02\x02\u0A37\u0A38\x03\x02\x02\x02\u0A38\u0A3A\x03\x02\x02\x02\u0A39" +
    "\u0A37\x03\x02\x02\x02\u0A3A\u0A42\x05\x1A\x0E\x02\u0A3B\u0A3D\x07\x07" +
    "\x02\x02\u0A3C\u0A3B\x03\x02\x02\x02\u0A3D\u0A40\x03\x02\x02\x02\u0A3E" +
    "\u0A3C\x03\x02\x02\x02\u0A3E\u0A3F\x03\x02\x02\x02\u0A3F\u0A41\x03\x02" +
    "\x02\x02\u0A40\u0A3E\x03\x02\x02\x02\u0A41\u0A43\x05$\x13\x02\u0A42\u0A3E" +
    "\x03\x02\x02\x02\u0A42\u0A43\x03\x02\x02\x02\u0A43\u0A4D\x03\x02\x02\x02" +
    "\u0A44\u0A48\x07B\x02\x02\u0A45\u0A47\x07\x07\x02\x02\u0A46\u0A45\x03" +
    "\x02\x02\x02\u0A47\u0A4A\x03\x02\x02\x02\u0A48\u0A46\x03\x02\x02\x02\u0A48" +
    "\u0A49\x03\x02\x02\x02\u0A49\u0A4B\x03\x02\x02\x02\u0A4A\u0A48\x03\x02" +
    "\x02\x02\u0A4B\u0A4D\x05$\x13\x02\u0A4C\u0A2C\x03\x02\x02\x02\u0A4C\u0A44" +
    "\x03\x02\x02\x02\u0A4D\xDD\x03\x02\x02\x02\u0A4E\u0A4F\t\b\x02\x02\u0A4F" +
    "\xDF\x03\x02\x02\x02\u0A50\u0A61\x07K\x02\x02\u0A51\u0A55\x07.\x02\x02" +
    "\u0A52\u0A54\x07\x07\x02\x02\u0A53\u0A52\x03\x02\x02\x02\u0A54\u0A57\x03" +
    "\x02\x02\x02\u0A55\u0A53\x03\x02\x02\x02\u0A55\u0A56\x03\x02\x02\x02\u0A56" +
    "\u0A58\x03\x02\x02\x02\u0A57\u0A55\x03\x02\x02\x02\u0A58\u0A5C\x05\\/" +
    "\x02\u0A59\u0A5B\x07\x07\x02\x02\u0A5A\u0A59\x03\x02\x02\x02\u0A5B\u0A5E" +
    "\x03\x02\x02\x02\u0A5C\u0A5A\x03\x02\x02\x02\u0A5C\u0A5D\x03\x02\x02\x02" +
    "\u0A5D\u0A5F\x03\x02\x02\x02\u0A5E\u0A5C\x03\x02\x02\x02\u0A5F\u0A60\x07" +
    "/\x02\x02\u0A60\u0A62\x03\x02\x02\x02\u0A61\u0A51\x03\x02\x02\x02\u0A61" +
    "\u0A62\x03\x02\x02\x02\u0A62\u0A65\x03\x02\x02\x02\u0A63\u0A64\x07*\x02" +
    "\x02\u0A64\u0A66\x05\u013C\x9F\x02\u0A65\u0A63\x03\x02\x02\x02\u0A65\u0A66" +
    "\x03\x02\x02\x02\u0A66\u0A69\x03\x02\x02\x02\u0A67\u0A69\x07<\x02\x02" +
    "\u0A68\u0A50\x03\x02\x02\x02\u0A68\u0A67\x03\x02\x02\x02\u0A69\xE1\x03" +
    "\x02\x02\x02\u0A6A\u0A6D\x05x=\x02\u0A6B\u0A6D\x05|?\x02\u0A6C\u0A6A\x03" +
    "\x02\x02\x02\u0A6C\u0A6B\x03\x02\x02\x02\u0A6D\xE3\x03\x02\x02\x02\u0A6E" +
    "\u0A72\x07N\x02\x02\u0A6F\u0A71\x07\x07\x02\x02\u0A70\u0A6F\x03\x02\x02" +
    "\x02\u0A71\u0A74\x03\x02\x02\x02\u0A72\u0A70\x03\x02\x02\x02\u0A72\u0A73" +
    "\x03\x02\x02\x02\u0A73\u0A75\x03\x02\x02\x02\u0A74\u0A72\x03\x02\x02\x02" +
    "\u0A75\u0A79\x07\v\x02\x02\u0A76\u0A78\x07\x07\x02\x02\u0A77\u0A76\x03" +
    "\x02\x02\x02\u0A78\u0A7B\x03\x02\x02\x02\u0A79\u0A77\x03\x02\x02\x02\u0A79" +
    "\u0A7A\x03\x02\x02\x02\u0A7A\u0A7C\x03\x02\x02\x02\u0A7B\u0A79\x03\x02" +
    "\x02\x02\u0A7C\u0A80\x05\x82B\x02\u0A7D\u0A7F\x07\x07\x02\x02\u0A7E\u0A7D" +
    "\x03\x02\x02\x02\u0A7F\u0A82\x03\x02\x02\x02\u0A80\u0A7E\x03\x02\x02\x02" +
    "\u0A80\u0A81\x03\x02\x02\x02\u0A81\u0A83\x03\x02\x02\x02\u0A82\u0A80\x03" +
    "\x02\x02\x02\u0A83\u0A87\x07\f\x02\x02\u0A84\u0A86\x07\x07\x02\x02\u0A85" +
    "\u0A84\x03\x02\x02\x02\u0A86\u0A89\x03\x02\x02\x02\u0A87\u0A85\x03\x02" +
    "\x02\x02\u0A87\u0A88\x03\x02\x02\x02\u0A88\u0A8A\x03\x02\x02\x02\u0A89" +
    "\u0A87\x03\x02\x02\x02\u0A8A\u0A9C\x05\xE2r\x02\u0A8B\u0A8D\x07\x1D\x02" +
    "\x02\u0A8C\u0A8B\x03\x02\x02\x02\u0A8C\u0A8D\x03\x02\x02\x02\u0A8D\u0A91" +
    "\x03\x02\x02\x02\u0A8E\u0A90\x07\x07\x02\x02\u0A8F\u0A8E\x03\x02\x02\x02" +
    "\u0A90\u0A93\x03\x02\x02\x02\u0A91\u0A8F\x03\x02\x02\x02\u0A91\u0A92\x03" +
    "\x02\x02\x02\u0A92\u0A94\x03\x02\x02\x02\u0A93\u0A91\x03\x02\x02\x02\u0A94" +
    "\u0A98\x07O\x02\x02\u0A95\u0A97\x07\x07\x02\x02\u0A96\u0A95\x03\x02\x02" +
    "\x02\u0A97\u0A9A\x03\x02\x02\x02\u0A98\u0A96\x03\x02\x02\x02\u0A98\u0A99" +
    "\x03\x02\x02\x02\u0A99\u0A9B\x03\x02\x02\x02\u0A9A\u0A98\x03\x02\x02\x02" +
    "\u0A9B\u0A9D\x05\xE2r\x02\u0A9C\u0A8C\x03\x02\x02\x02\u0A9C\u0A9D\x03" +
    "\x02\x02\x02\u0A9D\u0ACD\x03\x02\x02\x02\u0A9E\u0AA2\x07N\x02\x02\u0A9F" +
    "\u0AA1\x07\x07\x02\x02\u0AA0\u0A9F\x03\x02\x02\x02\u0AA1\u0AA4\x03\x02" +
    "\x02\x02\u0AA2\u0AA0\x03\x02\x02\x02\u0AA2\u0AA3\x03\x02\x02\x02\u0AA3" +
    "\u0AA5\x03\x02\x02\x02\u0AA4\u0AA2\x03\x02\x02\x02\u0AA5\u0AA9\x07\v\x02" +
    "\x02\u0AA6\u0AA8\x07\x07\x02\x02\u0AA7\u0AA6\x03\x02\x02\x02\u0AA8\u0AAB" +
    "\x03\x02\x02\x02\u0AA9\u0AA7\x03\x02\x02\x02\u0AA9\u0AAA\x03\x02\x02\x02" +
    "\u0AAA\u0AAC\x03\x02\x02\x02\u0AAB\u0AA9\x03\x02\x02\x02\u0AAC\u0AB0\x05" +
    "\x82B\x02\u0AAD\u0AAF\x07\x07\x02\x02\u0AAE\u0AAD\x03\x02\x02\x02\u0AAF" +
    "\u0AB2\x03\x02\x02\x02\u0AB0\u0AAE\x03\x02\x02\x02\u0AB0\u0AB1\x03\x02" +
    "\x02\x02\u0AB1\u0AB3\x03\x02\x02\x02\u0AB2\u0AB0\x03\x02\x02\x02\u0AB3" +
    "\u0AB7\x07\f\x02\x02\u0AB4\u0AB6\x07\x07\x02\x02\u0AB5\u0AB4\x03\x02\x02" +
    "\x02\u0AB6\u0AB9\x03\x02\x02\x02\u0AB7\u0AB5\x03\x02\x02\x02\u0AB7\u0AB8" +
    "\x03\x02\x02\x02\u0AB8\u0AC1\x03\x02\x02\x02\u0AB9\u0AB7\x03\x02\x02\x02" +
    "\u0ABA\u0ABE\x07\x1D\x02\x02\u0ABB\u0ABD\x07\x07\x02\x02\u0ABC\u0ABB\x03" +
    "\x02\x02\x02\u0ABD\u0AC0\x03\x02\x02\x02\u0ABE\u0ABC\x03\x02\x02\x02\u0ABE" +
    "\u0ABF\x03\x02\x02\x02\u0ABF\u0AC2\x03\x02\x02\x02\u0AC0\u0ABE\x03\x02" +
    "\x02\x02\u0AC1\u0ABA\x03\x02\x02\x02\u0AC1\u0AC2\x03\x02\x02\x02\u0AC2" +
    "\u0AC3\x03\x02\x02\x02\u0AC3\u0AC7\x07O\x02\x02\u0AC4\u0AC6\x07\x07\x02" +
    "\x02\u0AC5\u0AC4\x03\x02\x02\x02\u0AC6\u0AC9\x03\x02\x02\x02\u0AC7\u0AC5" +
    "\x03\x02\x02\x02\u0AC7\u0AC8\x03\x02\x02\x02\u0AC8\u0ACA\x03\x02\x02\x02" +
    "\u0AC9\u0AC7\x03\x02\x02\x02\u0ACA\u0ACB\x05\xE2r\x02\u0ACB\u0ACD\x03" +
    "\x02\x02\x02\u0ACC\u0A6E\x03\x02\x02\x02\u0ACC\u0A9E\x03\x02\x02\x02\u0ACD" +
    "\xE5\x03\x02\x02\x02\u0ACE\u0AD2\x07P\x02\x02\u0ACF\u0AD1\x07\x07\x02" +
    "\x02\u0AD0\u0ACF\x03\x02\x02\x02\u0AD1\u0AD4\x03\x02\x02\x02\u0AD2\u0AD0" +
    "\x03\x02\x02\x02\u0AD2\u0AD3\x03\x02\x02\x02\u0AD3\u0AD9\x03\x02\x02\x02" +
    "\u0AD4\u0AD2\x03\x02\x02\x02\u0AD5\u0AD6\x07\v\x02\x02\u0AD6\u0AD7\x05" +
    "\x82B\x02\u0AD7\u0AD8\x07\f\x02\x02\u0AD8\u0ADA\x03\x02\x02\x02\u0AD9" +
    "\u0AD5\x03\x02\x02\x02\u0AD9\u0ADA\x03\x02\x02\x02\u0ADA\u0ADE\x03\x02" +
    "\x02\x02\u0ADB\u0ADD\x07\x07\x02\x02\u0ADC\u0ADB\x03\x02\x02\x02\u0ADD" +
    "\u0AE0\x03\x02\x02\x02\u0ADE\u0ADC\x03\x02\x02\x02\u0ADE\u0ADF\x03\x02" +
    "\x02\x02\u0ADF\u0AE1\x03\x02\x02\x02\u0AE0\u0ADE\x03\x02\x02\x02\u0AE1" +
    "\u0AE5\x07\x0F\x02\x02\u0AE2\u0AE4\x07\x07\x02\x02\u0AE3\u0AE2\x03\x02" +
    "\x02\x02\u0AE4\u0AE7\x03\x02\x02\x02\u0AE5\u0AE3\x03\x02\x02\x02\u0AE5" +
    "\u0AE6\x03\x02\x02\x02\u0AE6\u0AF1\x03\x02\x02\x02\u0AE7\u0AE5\x03\x02" +
    "\x02\x02\u0AE8\u0AEC\x05\xE8u\x02\u0AE9\u0AEB\x07\x07\x02\x02\u0AEA\u0AE9" +
    "\x03\x02\x02\x02\u0AEB\u0AEE\x03\x02\x02\x02\u0AEC\u0AEA\x03\x02\x02\x02" +
    "\u0AEC\u0AED\x03\x02\x02\x02\u0AED\u0AF0\x03\x02\x02\x02\u0AEE\u0AEC\x03" +
    "\x02\x02\x02\u0AEF\u0AE8\x03\x02\x02\x02\u0AF0\u0AF3\x03\x02\x02\x02\u0AF1" +
    "\u0AEF\x03\x02\x02\x02\u0AF1\u0AF2\x03\x02\x02\x02\u0AF2\u0AF7\x03\x02" +
    "\x02\x02\u0AF3\u0AF1\x03\x02\x02\x02\u0AF4\u0AF6\x07\x07\x02\x02\u0AF5" +
    "\u0AF4\x03\x02\x02\x02\u0AF6\u0AF9\x03\x02\x02\x02\u0AF7\u0AF5\x03\x02" +
    "\x02\x02\u0AF7\u0AF8\x03\x02\x02\x02\u0AF8\u0AFA\x03\x02\x02\x02\u0AF9" +
    "\u0AF7\x03\x02\x02\x02\u0AFA\u0AFB\x07\x10\x02\x02\u0AFB\xE7\x03\x02\x02" +
    "\x02\u0AFC\u0B0D\x05\xEAv\x02\u0AFD\u0AFF\x07\x07\x02\x02\u0AFE\u0AFD" +
    "\x03\x02\x02\x02\u0AFF\u0B02\x03\x02\x02\x02\u0B00\u0AFE\x03\x02\x02\x02" +
    "\u0B00\u0B01\x03\x02\x02\x02\u0B01\u0B03\x03\x02\x02\x02\u0B02\u0B00\x03" +
    "\x02\x02\x02\u0B03\u0B07\x07\n\x02\x02\u0B04\u0B06\x07\x07\x02\x02\u0B05" +
    "\u0B04\x03\x02\x02\x02\u0B06\u0B09\x03\x02\x02\x02\u0B07\u0B05\x03\x02" +
    "\x02\x02\u0B07\u0B08\x03\x02\x02\x02\u0B08\u0B0A\x03\x02\x02\x02\u0B09" +
    "\u0B07\x03\x02\x02\x02\u0B0A\u0B0C\x05\xEAv\x02\u0B0B\u0B00\x03\x02\x02" +
    "\x02\u0B0C\u0B0F\x03\x02\x02\x02\u0B0D\u0B0B\x03\x02\x02\x02\u0B0D\u0B0E" +
    "\x03\x02\x02\x02\u0B0E\u0B13\x03\x02\x02\x02\u0B0F\u0B0D\x03\x02\x02\x02" +
    "\u0B10\u0B12\x07\x07\x02\x02\u0B11\u0B10\x03\x02\x02\x02\u0B12\u0B15\x03" +
    "\x02\x02\x02\u0B13\u0B11\x03\x02\x02\x02\u0B13\u0B14\x03\x02\x02\x02\u0B14" +
    "\u0B16\x03\x02\x02\x02\u0B15\u0B13\x03\x02\x02\x02\u0B16\u0B1A\x07$\x02" +
    "\x02\u0B17\u0B19\x07\x07\x02\x02\u0B18\u0B17\x03\x02\x02\x02\u0B19\u0B1C" +
    "\x03\x02\x02\x02\u0B1A\u0B18\x03\x02\x02\x02\u0B1A\u0B1B\x03\x02\x02\x02" +
    "\u0B1B\u0B1D\x03\x02\x02\x02\u0B1C\u0B1A\x03\x02\x02\x02\u0B1D\u0B1F\x05" +
    "\xE2r\x02\u0B1E\u0B20\x05\u014A\xA6\x02\u0B1F\u0B1E\x03\x02\x02\x02\u0B1F" +
    "\u0B20\x03\x02\x02\x02\u0B20\u0B34\x03\x02\x02\x02\u0B21\u0B25\x07O\x02" +
    "\x02\u0B22\u0B24\x07\x07\x02\x02\u0B23\u0B22\x03\x02\x02\x02\u0B24\u0B27" +
    "\x03\x02\x02\x02\u0B25\u0B23\x03\x02\x02\x02\u0B25\u0B26\x03\x02\x02\x02" +
    "\u0B26\u0B28\x03\x02\x02\x02\u0B27\u0B25\x03\x02\x02\x02\u0B28\u0B2C\x07" +
    "$\x02\x02\u0B29\u0B2B\x07\x07\x02\x02\u0B2A\u0B29\x03\x02\x02\x02\u0B2B" +
    "\u0B2E\x03\x02\x02\x02\u0B2C\u0B2A\x03\x02\x02\x02\u0B2C\u0B2D\x03\x02" +
    "\x02\x02\u0B2D\u0B2F\x03\x02\x02\x02\u0B2E\u0B2C\x03\x02\x02\x02\u0B2F" +
    "\u0B31\x05\xE2r\x02\u0B30\u0B32\x05\u014A\xA6\x02\u0B31\u0B30\x03\x02" +
    "\x02\x02\u0B31\u0B32\x03\x02\x02\x02\u0B32\u0B34\x03\x02\x02\x02\u0B33" +
    "\u0AFC\x03\x02\x02\x02\u0B33\u0B21\x03\x02\x02\x02\u0B34\xE9\x03\x02\x02" +
    "\x02\u0B35\u0B39\x05\x82B\x02\u0B36\u0B39\x05\xECw\x02\u0B37\u0B39\x05" +
    "\xEEx\x02\u0B38\u0B35\x03\x02\x02\x02\u0B38\u0B36\x03\x02\x02\x02\u0B38" +
    "\u0B37\x03\x02\x02\x02\u0B39\xEB\x03\x02\x02\x02\u0B3A\u0B3E\x05\u0108" +
    "\x85\x02\u0B3B\u0B3D\x07\x07\x02\x02\u0B3C\u0B3B\x03\x02\x02\x02\u0B3D" +
    "\u0B40\x03\x02\x02\x02\u0B3E\u0B3C\x03\x02\x02\x02\u0B3E\u0B3F\x03\x02" +
    "\x02\x02\u0B3F\u0B41\x03\x02\x02\x02\u0B40\u0B3E\x03\x02\x02\x02\u0B41" +
    "\u0B42\x05\x82B\x02\u0B42\xED\x03\x02\x02\x02\u0B43\u0B47\x05\u010A\x86" +
    "\x02\u0B44\u0B46\x07\x07\x02\x02\u0B45\u0B44\x03\x02\x02\x02\u0B46\u0B49" +
    "\x03\x02\x02\x02\u0B47\u0B45\x03\x02\x02\x02\u0B47\u0B48\x03\x02\x02\x02" +
    "\u0B48\u0B4A\x03\x02\x02\x02\u0B49\u0B47\x03\x02\x02\x02\u0B4A\u0B4B\x05" +
    "\\/\x02\u0B4B\xEF\x03\x02\x02\x02\u0B4C\u0B50\x07Q\x02\x02\u0B4D\u0B4F" +
    "\x07\x07\x02\x02\u0B4E\u0B4D\x03\x02\x02\x02\u0B4F\u0B52\x03\x02\x02\x02" +
    "\u0B50\u0B4E\x03\x02\x02\x02\u0B50\u0B51\x03\x02\x02\x02\u0B51\u0B53\x03" +
    "\x02\x02\x02\u0B52\u0B50\x03\x02\x02\x02\u0B53\u0B6F\x05x=\x02\u0B54\u0B56" +
    "\x07\x07\x02\x02\u0B55\u0B54\x03\x02\x02\x02\u0B56\u0B59\x03\x02\x02\x02" +
    "\u0B57\u0B55\x03\x02\x02\x02\u0B57\u0B58\x03\x02\x02\x02\u0B58\u0B5A\x03" +
    "\x02\x02\x02\u0B59\u0B57\x03\x02\x02\x02\u0B5A\u0B5C\x05\xF2z\x02\u0B5B" +
    "\u0B57\x03\x02\x02\x02\u0B5C\u0B5D\x03\x02\x02\x02\u0B5D\u0B5B\x03\x02" +
    "\x02\x02\u0B5D\u0B5E\x03\x02\x02\x02\u0B5E\u0B66\x03\x02\x02\x02\u0B5F" +
    "\u0B61\x07\x07\x02\x02\u0B60\u0B5F\x03\x02\x02\x02\u0B61\u0B64\x03\x02" +
    "\x02\x02\u0B62\u0B60\x03\x02\x02\x02\u0B62\u0B63\x03\x02\x02\x02\u0B63" +
    "\u0B65\x03\x02\x02\x02\u0B64\u0B62\x03\x02\x02\x02\u0B65\u0B67\x05\xF4" +
    "{\x02\u0B66\u0B62\x03\x02\x02\x02\u0B66\u0B67\x03\x02\x02\x02\u0B67\u0B70" +
    "\x03\x02\x02\x02\u0B68\u0B6A\x07\x07\x02\x02\u0B69\u0B68\x03\x02\x02\x02" +
    "\u0B6A\u0B6D\x03\x02\x02\x02\u0B6B\u0B69\x03\x02\x02\x02\u0B6B\u0B6C\x03" +
    "\x02\x02\x02\u0B6C\u0B6E\x03\x02\x02\x02\u0B6D\u0B6B\x03\x02\x02\x02\u0B6E" +
    "\u0B70\x05\xF4{\x02\u0B6F\u0B5B\x03\x02\x02\x02\u0B6F\u0B6B\x03\x02\x02" +
    "\x02\u0B70\xF1\x03\x02\x02\x02\u0B71\u0B75\x07R\x02\x02\u0B72\u0B74\x07" +
    "\x07\x02\x02\u0B73\u0B72\x03\x02\x02\x02\u0B74\u0B77\x03\x02\x02\x02\u0B75" +
    "\u0B73\x03\x02\x02\x02\u0B75\u0B76\x03\x02\x02\x02\u0B76\u0B78\x03\x02" +
    "\x02\x02\u0B77\u0B75\x03\x02\x02\x02\u0B78\u0B7C\x07\v\x02\x02\u0B79\u0B7B" +
    "\x05\u0132\x9A\x02\u0B7A\u0B79\x03\x02\x02\x02\u0B7B\u0B7E\x03\x02\x02" +
    "\x02\u0B7C\u0B7A\x03\x02\x02\x02\u0B7C\u0B7D\x03\x02\x02\x02\u0B7D\u0B7F" +
    "\x03\x02\x02\x02\u0B7E\u0B7C\x03\x02\x02\x02\u0B7F\u0B80\x05\u013C\x9F" +
    "\x02\u0B80\u0B81\x07\x1C\x02\x02\u0B81\u0B82\x05l7\x02\u0B82\u0B86\x07" +
    "\f\x02\x02\u0B83\u0B85\x07\x07\x02\x02\u0B84\u0B83\x03\x02\x02\x02\u0B85" +
    "\u0B88\x03\x02\x02\x02\u0B86\u0B84\x03\x02\x02\x02\u0B86\u0B87\x03\x02" +
    "\x02\x02\u0B87\u0B89\x03\x02\x02\x02\u0B88\u0B86\x03\x02\x02\x02\u0B89" +
    "\u0B8A\x05x=\x02\u0B8A\xF3\x03\x02\x02\x02\u0B8B\u0B8F\x07S\x02\x02\u0B8C" +
    "\u0B8E\x07\x07\x02\x02\u0B8D\u0B8C\x03\x02\x02\x02\u0B8E\u0B91\x03\x02" +
    "\x02\x02\u0B8F\u0B8D\x03\x02\x02\x02\u0B8F\u0B90\x03\x02\x02\x02\u0B90" +
    "\u0B92\x03\x02\x02\x02\u0B91\u0B8F\x03\x02\x02\x02\u0B92\u0B93\x05x=\x02" +
    "\u0B93\xF5\x03\x02\x02\x02\u0B94\u0B98\x05\xF8}\x02\u0B95\u0B98\x05\xFA" +
    "~\x02\u0B96\u0B98\x05\xFC\x7F\x02\u0B97\u0B94\x03\x02\x02\x02\u0B97\u0B95" +
    "\x03\x02\x02\x02\u0B97\u0B96\x03\x02\x02\x02\u0B98\xF7\x03\x02\x02\x02" +
    "\u0B99\u0B9D\x07T\x02\x02\u0B9A\u0B9C\x07\x07\x02\x02\u0B9B\u0B9A\x03" +
    "\x02\x02\x02\u0B9C\u0B9F\x03\x02\x02\x02\u0B9D\u0B9B\x03\x02\x02\x02\u0B9D" +
    "\u0B9E\x03\x02\x02\x02\u0B9E\u0BA0\x03\x02\x02\x02\u0B9F\u0B9D\x03\x02" +
    "\x02\x02\u0BA0\u0BA4\x07\v\x02\x02\u0BA1\u0BA3\x05\u0132\x9A\x02\u0BA2" +
    "\u0BA1\x03\x02\x02\x02\u0BA3\u0BA6\x03\x02\x02\x02\u0BA4\u0BA2\x03\x02" +
    "\x02\x02\u0BA4\u0BA5\x03\x02\x02\x02\u0BA5\u0BA9\x03\x02\x02\x02\u0BA6" +
    "\u0BA4\x03\x02\x02\x02\u0BA7\u0BAA\x05J&\x02\u0BA8\u0BAA\x05H%\x02\u0BA9" +
    "\u0BA7\x03\x02\x02\x02\u0BA9\u0BA8\x03\x02\x02\x02\u0BAA\u0BAB\x03\x02" +
    "\x02\x02\u0BAB\u0BAC\x07]\x02\x02\u0BAC\u0BAD\x05\x82B\x02\u0BAD\u0BB1" +
    "\x07\f\x02\x02\u0BAE\u0BB0\x07\x07\x02\x02\u0BAF\u0BAE\x03\x02\x02\x02" +
    "\u0BB0\u0BB3\x03\x02\x02\x02\u0BB1\u0BAF\x03\x02\x02\x02\u0BB1\u0BB2\x03" +
    "\x02\x02\x02\u0BB2\u0BB5\x03\x02\x02\x02\u0BB3\u0BB1\x03\x02\x02\x02\u0BB4" +
    "\u0BB6\x05\xE2r\x02\u0BB5\u0BB4\x03\x02\x02\x02\u0BB5\u0BB6\x03\x02\x02" +
    "\x02\u0BB6\xF9\x03\x02\x02\x02\u0BB7\u0BBB\x07V\x02\x02\u0BB8\u0BBA\x07" +
    "\x07\x02\x02\u0BB9\u0BB8\x03\x02\x02\x02\u0BBA\u0BBD\x03\x02\x02\x02\u0BBB" +
    "\u0BB9\x03\x02\x02\x02\u0BBB\u0BBC\x03\x02\x02\x02\u0BBC\u0BBE\x03\x02" +
    "\x02\x02\u0BBD\u0BBB\x03\x02\x02\x02\u0BBE\u0BBF\x07\v\x02\x02\u0BBF\u0BC0" +
    "\x05\x82B\x02\u0BC0\u0BC4\x07\f\x02\x02\u0BC1\u0BC3\x07\x07\x02\x02\u0BC2" +
    "\u0BC1\x03\x02\x02\x02\u0BC3\u0BC6\x03\x02\x02\x02\u0BC4\u0BC2\x03\x02" +
    "\x02\x02\u0BC4\u0BC5\x03\x02\x02\x02\u0BC5\u0BC7\x03\x02\x02\x02\u0BC6" +
    "\u0BC4\x03\x02\x02\x02\u0BC7\u0BC8\x05\xE2r\x02\u0BC8\u0BDC\x03\x02\x02" +
    "\x02\u0BC9\u0BCD\x07V\x02\x02\u0BCA\u0BCC\x07\x07\x02\x02\u0BCB\u0BCA" +
    "\x03\x02\x02\x02\u0BCC\u0BCF\x03\x02\x02\x02\u0BCD\u0BCB\x03\x02\x02\x02" +
    "\u0BCD\u0BCE\x03\x02\x02\x02\u0BCE\u0BD0\x03\x02\x02\x02\u0BCF\u0BCD\x03" +
    "\x02\x02\x02\u0BD0\u0BD1\x07\v\x02\x02\u0BD1\u0BD2\x05\x82B\x02\u0BD2" +
    "\u0BD6\x07\f\x02\x02\u0BD3\u0BD5\x07\x07\x02\x02\u0BD4\u0BD3\x03\x02\x02" +
    "\x02\u0BD5\u0BD8\x03\x02\x02\x02\u0BD6\u0BD4\x03\x02\x02\x02\u0BD6\u0BD7" +
    "\x03\x02\x02\x02\u0BD7\u0BD9\x03\x02\x02\x02\u0BD8\u0BD6\x03\x02\x02\x02" +
    "\u0BD9\u0BDA\x07\x1D\x02\x02\u0BDA\u0BDC\x03\x02\x02\x02\u0BDB\u0BB7\x03" +
    "\x02\x02\x02\u0BDB\u0BC9\x03\x02\x02\x02\u0BDC\xFB\x03\x02\x02\x02\u0BDD" +
    "\u0BE1\x07U\x02\x02\u0BDE\u0BE0\x07\x07\x02\x02\u0BDF\u0BDE\x03\x02\x02" +
    "\x02\u0BE0\u0BE3\x03\x02\x02\x02\u0BE1\u0BDF\x03\x02\x02\x02\u0BE1\u0BE2" +
    "\x03\x02\x02\x02\u0BE2\u0BE5\x03\x02\x02\x02\u0BE3\u0BE1\x03\x02\x02\x02" +
    "\u0BE4\u0BE6\x05\xE2r\x02\u0BE5\u0BE4\x03\x02\x02\x02\u0BE5\u0BE6\x03" +
    "\x02\x02\x02\u0BE6\u0BEA\x03\x02\x02\x02\u0BE7\u0BE9\x07\x07\x02\x02\u0BE8" +
    "\u0BE7\x03\x02\x02\x02\u0BE9\u0BEC\x03\x02\x02\x02\u0BEA\u0BE8\x03\x02" +
    "\x02\x02\u0BEA\u0BEB\x03\x02\x02\x02\u0BEB\u0BED\x03\x02\x02\x02\u0BEC" +
    "\u0BEA\x03\x02\x02\x02\u0BED\u0BF1\x07V\x02\x02\u0BEE\u0BF0\x07\x07\x02" +
    "\x02\u0BEF\u0BEE\x03\x02\x02\x02\u0BF0\u0BF3\x03\x02\x02\x02\u0BF1\u0BEF" +
    "\x03\x02\x02\x02\u0BF1\u0BF2\x03\x02\x02\x02\u0BF2\u0BF4\x03\x02\x02\x02" +
    "\u0BF3\u0BF1\x03\x02\x02\x02\u0BF4\u0BF5\x07\v\x02\x02\u0BF5\u0BF6\x05" +
    "\x82B\x02\u0BF6\u0BF7\x07\f\x02\x02\u0BF7\xFD\x03\x02\x02\x02\u0BF8\u0BFC" +
    "\x07W\x02\x02\u0BF9\u0BFB\x07\x07\x02\x02\u0BFA\u0BF9\x03\x02\x02\x02" +
    "\u0BFB\u0BFE\x03\x02\x02\x02\u0BFC\u0BFA\x03\x02\x02\x02\u0BFC\u0BFD\x03" +
    "\x02\x02\x02\u0BFD\u0BFF\x03\x02\x02\x02\u0BFE\u0BFC\x03\x02\x02\x02\u0BFF" +
    "\u0C09\x05\x82B\x02\u0C00\u0C02\t\t\x02\x02\u0C01\u0C03\x05\x82B\x02\u0C02" +
    "\u0C01\x03\x02\x02\x02\u0C02\u0C03\x03\x02\x02\x02\u0C03\u0C09\x03\x02" +
    "\x02\x02\u0C04\u0C09\x07Y\x02\x02\u0C05\u0C09\x079\x02\x02\u0C06\u0C09" +
    "\x07Z\x02\x02\u0C07\u0C09\x07:\x02\x02\u0C08\u0BF8\x03\x02\x02\x02\u0C08" +
    "\u0C00\x03\x02\x02\x02\u0C08\u0C04\x03\x02\x02\x02\u0C08\u0C05\x03\x02" +
    "\x02\x02\u0C08\u0C06\x03\x02\x02\x02\u0C08\u0C07\x03\x02\x02\x02\u0C09" +
    "\xFF\x03\x02\x02\x02\u0C0A\u0C0C\x05j6\x02\u0C0B\u0C0A\x03\x02\x02\x02" +
    "\u0C0B\u0C0C\x03\x02\x02\x02\u0C0C\u0C10\x03\x02\x02\x02\u0C0D\u0C0F\x07" +
    "\x07\x02\x02\u0C0E\u0C0D\x03\x02\x02\x02\u0C0F\u0C12\x03\x02\x02\x02\u0C10" +
    "\u0C0E\x03\x02\x02\x02\u0C10\u0C11\x03\x02\x02\x02\u0C11\u0C13\x03\x02" +
    "\x02\x02\u0C12\u0C10\x03\x02\x02\x02\u0C13\u0C17\x07\'\x02\x02\u0C14\u0C16" +
    "\x07\x07\x02\x02\u0C15\u0C14\x03\x02\x02\x02\u0C16\u0C19\x03\x02\x02\x02" +
    "\u0C17\u0C15\x03\x02\x02\x02\u0C17\u0C18\x03\x02\x02\x02\u0C18\u0C1C\x03" +
    "\x02\x02\x02\u0C19\u0C17\x03\x02\x02\x02\u0C1A\u0C1D\x05\u013C\x9F\x02" +
    "\u0C1B\u0C1D\x07?\x02\x02\u0C1C\u0C1A\x03\x02\x02\x02\u0C1C\u0C1B\x03" +
    "\x02\x02\x02\u0C1D\u0101\x03\x02\x02\x02\u0C1E\u0C1F\t\n\x02\x02\u0C1F" +
    "\u0103\x03\x02\x02\x02\u0C20\u0C21\t\v\x02\x02\u0C21\u0105\x03\x02\x02" +
    "\x02\u0C22\u0C23\t\f\x02\x02\u0C23\u0107\x03\x02\x02\x02\u0C24\u0C25\t" +
    "\r\x02\x02\u0C25\u0109\x03\x02\x02\x02\u0C26\u0C27\t\x0E\x02\x02\u0C27" +
    "\u010B\x03\x02\x02\x02\u0C28\u0C29\t\x0F\x02\x02\u0C29\u010D\x03\x02\x02" +
    "\x02\u0C2A\u0C2B\t\x10\x02\x02\u0C2B\u010F\x03\x02\x02\x02\u0C2C\u0C2D" +
    "\t\x11\x02\x02\u0C2D\u0111\x03\x02\x02\x02\u0C2E\u0C34\x07\x16\x02\x02" +
    "\u0C2F\u0C34\x07\x17\x02\x02\u0C30\u0C34\x07\x15\x02\x02\u0C31\u0C34\x07" +
    "\x14\x02\x02\u0C32\u0C34\x05\u0148\xA5\x02\u0C33\u0C2E\x03\x02\x02\x02" +
    "\u0C33\u0C2F\x03\x02\x02\x02\u0C33\u0C30\x03\x02\x02\x02\u0C33\u0C31\x03" +
    "\x02\x02\x02\u0C33\u0C32\x03\x02\x02\x02\u0C34\u0113\x03\x02\x02\x02\u0C35" +
    "\u0C3A\x07\x16\x02\x02\u0C36\u0C3A\x07\x17\x02\x02\u0C37\u0C38\x07\x1B" +
    "\x02\x02\u0C38\u0C3A\x05\u0148\xA5\x02\u0C39\u0C35\x03\x02\x02\x02\u0C39" +
    "\u0C36\x03\x02\x02\x02\u0C39\u0C37\x03\x02\x02\x02\u0C3A\u0115\x03\x02" +
    "\x02\x02\u0C3B\u0C3F\x07\t\x02\x02\u0C3C\u0C3F\x05\u0146\xA4\x02\u0C3D" +
    "\u0C3F\x07\'\x02\x02\u0C3E\u0C3B\x03\x02\x02\x02\u0C3E\u0C3C\x03\x02\x02" +
    "\x02\u0C3E\u0C3D\x03\x02\x02\x02\u0C3F\u0117\x03\x02\x02\x02\u0C40\u0C43" +
    "\x05\u0132\x9A\x02\u0C41\u0C43\x05\u011A\x8E\x02\u0C42\u0C40\x03\x02\x02" +
    "\x02\u0C42\u0C41\x03\x02\x02\x02\u0C43\u0C44\x03\x02\x02\x02\u0C44\u0C42" +
    "\x03\x02\x02\x02\u0C44\u0C45\x03\x02\x02\x02\u0C45\u0119\x03\x02\x02\x02" +
    "\u0C46\u0C4F\x05\u011C\x8F\x02\u0C47\u0C4F\x05\u011E\x90\x02\u0C48\u0C4F" +
    "\x05\u0120\x91\x02\u0C49\u0C4F\x05\u0124\x93\x02\u0C4A\u0C4F\x05\u0126" +
    "\x94\x02\u0C4B\u0C4F\x05\u0128\x95\x02\u0C4C\u0C4F\x05\u012A\x96\x02\u0C4D" +
    "\u0C4F\x05\u012E\x98\x02\u0C4E\u0C46\x03\x02\x02\x02\u0C4E\u0C47\x03\x02" +
    "\x02\x02\u0C4E\u0C48\x03\x02\x02\x02\u0C4E\u0C49\x03\x02\x02\x02\u0C4E" +
    "\u0C4A\x03\x02\x02\x02\u0C4E\u0C4B\x03\x02\x02\x02\u0C4E\u0C4C\x03\x02" +
    "\x02\x02\u0C4E\u0C4D\x03\x02\x02\x02\u0C4F\u0C53\x03\x02\x02\x02\u0C50" +
    "\u0C52\x07\x07\x02\x02\u0C51\u0C50\x03\x02\x02\x02\u0C52\u0C55\x03\x02" +
    "\x02\x02\u0C53\u0C51\x03\x02\x02\x02\u0C53\u0C54\x03\x02\x02\x02\u0C54" +
    "\u011B\x03\x02\x02\x02\u0C55\u0C53\x03\x02\x02\x02\u0C56\u0C57\t\x12\x02" +
    "\x02\u0C57\u011D\x03\x02\x02\x02\u0C58\u0C59\t\x13\x02\x02\u0C59\u011F" +
    "\x03\x02\x02\x02\u0C5A\u0C5B\t\x14\x02\x02\u0C5B\u0121\x03\x02\x02\x02" +
    "\u0C5C\u0C5D\t\x15\x02\x02\u0C5D\u0123\x03\x02\x02\x02\u0C5E\u0C5F\t\x16" +
    "\x02\x02\u0C5F\u0125\x03\x02\x02\x02\u0C60\u0C61\x07\x80\x02\x02\u0C61" +
    "\u0127\x03\x02\x02\x02\u0C62\u0C63\t\x17\x02\x02\u0C63\u0129\x03\x02\x02" +
    "\x02\u0C64\u0C65\t\x18\x02\x02\u0C65\u012B\x03\x02\x02\x02\u0C66\u0C67" +
    "\x07\x85\x02\x02\u0C67\u012D\x03\x02\x02\x02\u0C68\u0C69\t\x19\x02\x02" +
    "\u0C69\u012F\x03\x02\x02\x02\u0C6A\u0C6E\x07\x94\x02\x02\u0C6B\u0C6D\x07" +
    "\x07\x02\x02\u0C6C\u0C6B\x03\x02\x02\x02\u0C6D\u0C70\x03\x02\x02\x02\u0C6E" +
    "\u0C6C\x03\x02\x02\x02\u0C6E\u0C6F\x03\x02\x02\x02\u0C6F\u0131\x03\x02" +
    "\x02\x02\u0C70\u0C6E\x03\x02\x02\x02\u0C71\u0C74\x05\u0134\x9B\x02\u0C72" +
    "\u0C74\x05\u0136\x9C\x02\u0C73\u0C71\x03\x02\x02\x02\u0C73\u0C72\x03\x02" +
    "\x02\x02\u0C74\u0C78\x03\x02\x02\x02\u0C75\u0C77\x07\x07\x02\x02\u0C76" +
    "\u0C75\x03\x02\x02\x02\u0C77\u0C7A\x03\x02\x02\x02\u0C78\u0C76\x03\x02" +
    "\x02\x02\u0C78\u0C79\x03\x02\x02\x02\u0C79\u0133\x03\x02\x02\x02\u0C7A" +
    "\u0C78\x03\x02\x02\x02\u0C7B\u0C7F\x05\u0138\x9D\x02\u0C7C\u0C7E\x07\x07" +
    "\x02\x02\u0C7D\u0C7C\x03\x02\x02\x02\u0C7E\u0C81\x03\x02\x02\x02\u0C7F" +
    "\u0C7D\x03\x02\x02\x02\u0C7F\u0C80\x03\x02\x02\x02\u0C80\u0C82\x03\x02" +
    "\x02\x02\u0C81\u0C7F\x03\x02\x02\x02\u0C82\u0C86\x07\x1C\x02\x02\u0C83" +
    "\u0C85\x07\x07\x02\x02\u0C84\u0C83\x03\x02\x02\x02\u0C85\u0C88\x03\x02" +
    "\x02\x02\u0C86\u0C84\x03\x02\x02\x02\u0C86\u0C87\x03\x02\x02\x02\u0C87" +
    "\u0C89\x03\x02\x02\x02\u0C88\u0C86\x03\x02\x02\x02\u0C89\u0C8A\x05\u013A" +
    "\x9E\x02\u0C8A\u0C8E\x03\x02\x02\x02\u0C8B\u0C8C\x07*\x02\x02\u0C8C\u0C8E" +
    "\x05\u013A\x9E\x02\u0C8D\u0C7B\x03\x02\x02\x02\u0C8D\u0C8B\x03\x02\x02" +
    "\x02\u0C8E\u0135\x03\x02\x02\x02\u0C8F\u0C93\x05\u0138\x9D\x02\u0C90\u0C92" +
    "\x07\x07\x02\x02\u0C91\u0C90\x03\x02\x02\x02\u0C92\u0C95\x03\x02\x02\x02" +
    "\u0C93\u0C91\x03\x02\x02\x02\u0C93\u0C94\x03\x02\x02\x02\u0C94\u0C96\x03" +
    "\x02\x02\x02\u0C95\u0C93\x03\x02\x02\x02\u0C96\u0C9A\x07\x1C\x02\x02\u0C97" +
    "\u0C99\x07\x07\x02\x02\u0C98\u0C97\x03\x02\x02\x02\u0C99\u0C9C\x03\x02" +
    "\x02\x02\u0C9A\u0C98\x03\x02\x02\x02\u0C9A\u0C9B\x03\x02\x02\x02\u0C9B" +
    "\u0C9D\x03\x02\x02\x02\u0C9C\u0C9A\x03\x02\x02\x02\u0C9D\u0C9F\x07\r\x02" +
    "\x02\u0C9E\u0CA0\x05\u013A\x9E\x02\u0C9F\u0C9E\x03\x02\x02\x02\u0CA0\u0CA1" +
    "\x03\x02\x02\x02\u0CA1\u0C9F\x03\x02\x02\x02\u0CA1\u0CA2\x03\x02\x02\x02" +
    "\u0CA2\u0CA3\x03\x02\x02\x02\u0CA3\u0CA4\x07\x0E\x02\x02\u0CA4\u0CAF\x03" +
    "\x02\x02\x02\u0CA5\u0CA6\x07*\x02\x02\u0CA6\u0CA8\x07\r\x02\x02\u0CA7" +
    "\u0CA9\x05\u013A\x9E\x02\u0CA8\u0CA7\x03\x02\x02\x02\u0CA9\u0CAA\x03\x02" +
    "\x02\x02\u0CAA\u0CA8\x03\x02\x02\x02\u0CAA\u0CAB\x03\x02\x02\x02\u0CAB" +
    "\u0CAC\x03\x02\x02\x02\u0CAC\u0CAD\x07\x0E\x02\x02\u0CAD\u0CAF\x03\x02" +
    "\x02\x02\u0CAE\u0C8F\x03\x02\x02\x02\u0CAE\u0CA5\x03\x02\x02\x02\u0CAF" +
    "\u0137\x03\x02\x02\x02\u0CB0\u0CB1\t\x1A\x02\x02\u0CB1\u0139\x03\x02\x02" +
    "\x02\u0CB2\u0CB5\x05 \x11\x02\u0CB3\u0CB5\x05l7\x02\u0CB4\u0CB2\x03\x02" +
    "\x02\x02\u0CB4\u0CB3\x03\x02\x02\x02\u0CB5\u013B\x03\x02\x02\x02\u0CB6" +
    "\u0CB7\t\x1B\x02\x02\u0CB7\u013D\x03\x02\x02\x02\u0CB8\u0CC3\x05\u013C" +
    "\x9F\x02\u0CB9\u0CBB\x07\x07\x02\x02\u0CBA\u0CB9\x03\x02\x02\x02\u0CBB" +
    "\u0CBE\x03\x02\x02\x02\u0CBC\u0CBA\x03\x02\x02\x02\u0CBC\u0CBD\x03\x02" +
    "\x02\x02\u0CBD\u0CBF\x03\x02\x02\x02\u0CBE\u0CBC\x03\x02\x02\x02\u0CBF" +
    "\u0CC0\x07\t\x02\x02\u0CC0\u0CC2\x05\u013C\x9F\x02\u0CC1\u0CBC\x03\x02" +
    "\x02\x02\u0CC2\u0CC5\x03\x02\x02\x02\u0CC3\u0CC1\x03\x02\x02\x02\u0CC3" +
    "\u0CC4\x03\x02\x02\x02\u0CC4\u013F\x03\x02\x02\x02\u0CC5\u0CC3\x03\x02" +
    "\x02\x02\u0CC6\u0CC8\x07\x03\x02\x02\u0CC7\u0CC9\x07\x07\x02\x02\u0CC8" +
    "\u0CC7\x03\x02\x02\x02\u0CC9\u0CCA\x03\x02\x02\x02\u0CCA\u0CC8\x03\x02" +
    "\x02\x02\u0CCA\u0CCB\x03\x02\x02\x02\u0CCB\u0141\x03\x02\x02\x02\u0CCC" +
    "\u0CCD\t\x1C\x02\x02\u0CCD\u0143\x03\x02\x02\x02\u0CCE\u0CCF\x07-\x02" +
    "\x02\u0CCF\u0CD0\x07\x1C\x02\x02\u0CD0\u0145\x03\x02\x02\x02\u0CD1\u0CD2" +
    "\x07-\x02\x02\u0CD2\u0CD3\x07\t\x02\x02\u0CD3\u0147\x03\x02\x02\x02\u0CD4" +
    "\u0CD5\t\x1D\x02\x02\u0CD5\u0149\x03\x02\x02\x02\u0CD6\u0CDA\t\x04\x02" +
    "\x02\u0CD7\u0CD9\x07\x07\x02\x02\u0CD8\u0CD7\x03\x02\x02\x02\u0CD9\u0CDC" +
    "\x03\x02\x02\x02\u0CDA\u0CD8\x03\x02\x02\x02\u0CDA\u0CDB\x03\x02\x02\x02" +
    "\u0CDB\u0CDF\x03\x02\x02\x02\u0CDC\u0CDA\x03\x02\x02\x02\u0CDD\u0CDF\x07" +
    "\x02\x02\x03\u0CDE\u0CD6\x03\x02\x02\x02\u0CDE";
KotlinParser._serializedATNSegment6 = "\u0CDD\x03\x02\x02\x02\u0CDF\u014B\x03\x02\x02\x02\u0CE0\u0CE2\t\x04\x02" +
    "\x02\u0CE1\u0CE0\x03\x02\x02\x02\u0CE2\u0CE3\x03\x02\x02\x02\u0CE3\u0CE1" +
    "\x03\x02\x02\x02\u0CE3\u0CE4\x03\x02\x02\x02\u0CE4\u0CE7\x03\x02\x02\x02" +
    "\u0CE5\u0CE7\x07\x02\x02\x03\u0CE6\u0CE1\x03\x02\x02\x02\u0CE6\u0CE5\x03" +
    "\x02\x02\x02\u0CE7\u014D\x03\x02\x02\x02\u01F9\u014F\u0154\u015A\u0162" +
    "\u0168\u016D\u0173\u017D\u0186\u018D\u0194\u0199\u019E\u01A4\u01A6\u01AB" +
    "\u01B3\u01B6\u01BD\u01C0\u01C6\u01CD\u01D1\u01D6\u01DA\u01DF\u01E6\u01EA" +
    "\u01EF\u01F3\u01F8\u01FF\u0203\u0206\u020C\u020F\u0217\u021E\u0225\u022B" +
    "\u022E\u0233\u0237\u023C\u023F\u0244\u024C\u0253\u025A\u025E\u0264\u026B" +
    "\u0271\u0277\u027D\u0286\u028D\u0292\u0299\u02A2\u02A9\u02B0\u02B4\u02BB" +
    "\u02C1\u02C7\u02CD\u02D4\u02DB\u02DF\u02E4\u02E8\u02EE\u02F6\u02FA\u0300" +
    "\u0304\u0309\u0310\u0314\u0319\u0322\u0329\u032F\u0335\u0339\u033F\u0342" +
    "\u0348\u034C\u0351\u0355\u0358\u035E\u0362\u0367\u036E\u0373\u0378\u037F" +
    "\u0386\u038D\u0391\u0396\u039A\u039F\u03A3\u03A9\u03B0\u03B7\u03BD\u03C0" +
    "\u03C5\u03C9\u03CE\u03D4\u03DB\u03DF\u03E5\u03EC\u03F5\u03FC\u0400\u0407" +
    "\u040B\u040E\u0414\u041B\u0422\u0426\u042B\u042F\u0432\u0438\u043F\u0443" +
    "\u0448\u044F\u0453\u0458\u045C\u045F\u0465\u0469\u046E\u0475\u047A\u047F" +
    "\u0484\u0489\u048D\u0492\u0499\u049E\u04A0\u04A5\u04A8\u04AD\u04B1\u04B6" +
    "\u04BA\u04BD\u04C0\u04C5\u04C9\u04CC\u04CE\u04D4\u04DB\u04E2\u04E8\u04EE" +
    "\u04F6\u04FC\u0503\u050A\u050E\u0514\u051A\u051E\u0524\u052B\u0532\u0539" +
    "\u053D\u0542\u0546\u0549\u054D\u0553\u0559\u055B\u0563\u056A\u056E\u0573" +
    "\u0578\u057B\u0581\u0588\u058C\u0591\u0598\u05A1\u05A8\u05AF\u05B5\u05BB" +
    "\u05BF\u05C4\u05C9\u05D0\u05D7\u05DB\u05E0\u05E6\u05ED\u05F1\u05F4\u05FA" +
    "\u05FF\u0606\u0609\u060F\u0616\u061D\u0622\u0628\u062C\u0632\u0639\u063C" +
    "\u0642\u0649\u064F\u0654\u065A\u0661\u0667\u066E\u0675\u067E\u0685\u068A" +
    "\u0690\u0694\u069A\u069F\u06A4\u06AB\u06B0\u06B4\u06BA\u06C3\u06CA\u06D1" +
    "\u06D7\u06DD\u06E4\u06EB\u06F4\u06FB\u0704\u0709\u070D\u070F\u0713\u0715" +
    "\u071C\u0723\u072A\u0734\u0739\u0741\u0748\u074E\u0755\u075C\u0762\u076A" +
    "\u0771\u0779\u077E\u0785\u078E\u0793\u0795\u079C\u07A3\u07AA\u07B2\u07B9" +
    "\u07C1\u07C7\u07CF\u07D6\u07DE\u07E5\u07EC\u07F3\u07F8\u07FD\u0808\u080B" +
    "\u0812\u0814\u081B\u0821\u0828\u082E\u0835\u083C\u0842\u0848\u0850\u0857" +
    "\u085D\u0860\u0863\u0867\u086A\u086F\u0873\u0878\u0881\u0889\u0890\u0897" +
    "\u089D\u08A3\u08A7\u08AB\u08B1\u08B8\u08BF\u08C5\u08CB\u08CF\u08D4\u08D8" +
    "\u08DD\u08E3\u08E7\u08EA\u08EF\u08F6\u08FD\u0900\u0903\u0908\u091B\u0921" +
    "\u0928\u0931\u0938\u093F\u0945\u094B\u094F\u0957\u095B\u0961\u0966\u0968" +
    "\u0971\u0973\u0984\u098B\u0994\u099B\u09A4\u09A8\u09AD\u09B4\u09BB\u09C0" +
    "\u09C6\u09CD\u09D3\u09D7\u09DE\u09E5\u09E9\u09EB\u09F1\u09F8\u09FD\u0A02" +
    "\u0A09\u0A10\u0A14\u0A19\u0A1D\u0A22\u0A26\u0A2A\u0A30\u0A37\u0A3E\u0A42" +
    "\u0A48\u0A4C\u0A55\u0A5C\u0A61\u0A65\u0A68\u0A6C\u0A72\u0A79\u0A80\u0A87" +
    "\u0A8C\u0A91\u0A98\u0A9C\u0AA2\u0AA9\u0AB0\u0AB7\u0ABE\u0AC1\u0AC7\u0ACC" +
    "\u0AD2\u0AD9\u0ADE\u0AE5\u0AEC\u0AF1\u0AF7\u0B00\u0B07\u0B0D\u0B13\u0B1A" +
    "\u0B1F\u0B25\u0B2C\u0B31\u0B33\u0B38\u0B3E\u0B47\u0B50\u0B57\u0B5D\u0B62" +
    "\u0B66\u0B6B\u0B6F\u0B75\u0B7C\u0B86\u0B8F\u0B97\u0B9D\u0BA4\u0BA9\u0BB1" +
    "\u0BB5\u0BBB\u0BC4\u0BCD\u0BD6\u0BDB\u0BE1\u0BE5\u0BEA\u0BF1\u0BFC\u0C02" +
    "\u0C08\u0C0B\u0C10\u0C17\u0C1C\u0C33\u0C39\u0C3E\u0C42\u0C44\u0C4E\u0C53" +
    "\u0C6E\u0C73\u0C78\u0C7F\u0C86\u0C8D\u0C93\u0C9A\u0CA1\u0CAA\u0CAE\u0CB4" +
    "\u0CBC\u0CC3\u0CCA\u0CDA\u0CDE\u0CE3\u0CE6";
KotlinParser._serializedATN = Utils.join([
    KotlinParser._serializedATNSegment0,
    KotlinParser._serializedATNSegment1,
    KotlinParser._serializedATNSegment2,
    KotlinParser._serializedATNSegment3,
    KotlinParser._serializedATNSegment4,
    KotlinParser._serializedATNSegment5,
    KotlinParser._serializedATNSegment6,
], "");
class KotlinFileContext extends ParserRuleContext_1.ParserRuleContext {
    packageHeader() {
        return this.getRuleContext(0, PackageHeaderContext);
    }
    importList() {
        return this.getRuleContext(0, ImportListContext);
    }
    EOF() { return this.getToken(KotlinParser.EOF, 0); }
    shebangLine() {
        return this.tryGetRuleContext(0, ShebangLineContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    fileAnnotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(FileAnnotationContext);
        }
        else {
            return this.getRuleContext(i, FileAnnotationContext);
        }
    }
    topLevelObject(i) {
        if (i === undefined) {
            return this.getRuleContexts(TopLevelObjectContext);
        }
        else {
            return this.getRuleContext(i, TopLevelObjectContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_kotlinFile; }
    // @Override
    enterRule(listener) {
        if (listener.enterKotlinFile) {
            listener.enterKotlinFile(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitKotlinFile) {
            listener.exitKotlinFile(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitKotlinFile) {
            return visitor.visitKotlinFile(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.KotlinFileContext = KotlinFileContext;
class ScriptContext extends ParserRuleContext_1.ParserRuleContext {
    packageHeader() {
        return this.getRuleContext(0, PackageHeaderContext);
    }
    importList() {
        return this.getRuleContext(0, ImportListContext);
    }
    EOF() { return this.getToken(KotlinParser.EOF, 0); }
    shebangLine() {
        return this.tryGetRuleContext(0, ShebangLineContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    fileAnnotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(FileAnnotationContext);
        }
        else {
            return this.getRuleContext(i, FileAnnotationContext);
        }
    }
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    semi(i) {
        if (i === undefined) {
            return this.getRuleContexts(SemiContext);
        }
        else {
            return this.getRuleContext(i, SemiContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_script; }
    // @Override
    enterRule(listener) {
        if (listener.enterScript) {
            listener.enterScript(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitScript) {
            listener.exitScript(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitScript) {
            return visitor.visitScript(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ScriptContext = ScriptContext;
class FileAnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    AT_FILE() { return this.getToken(KotlinParser.AT_FILE, 0); }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    LSQUARE() { return this.tryGetToken(KotlinParser.LSQUARE, 0); }
    RSQUARE() { return this.tryGetToken(KotlinParser.RSQUARE, 0); }
    unescapedAnnotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        }
        else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_fileAnnotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterFileAnnotation) {
            listener.enterFileAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFileAnnotation) {
            listener.exitFileAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFileAnnotation) {
            return visitor.visitFileAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FileAnnotationContext = FileAnnotationContext;
class PackageHeaderContext extends ParserRuleContext_1.ParserRuleContext {
    PACKAGE() { return this.tryGetToken(KotlinParser.PACKAGE, 0); }
    identifier() {
        return this.tryGetRuleContext(0, IdentifierContext);
    }
    semi() {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_packageHeader; }
    // @Override
    enterRule(listener) {
        if (listener.enterPackageHeader) {
            listener.enterPackageHeader(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPackageHeader) {
            listener.exitPackageHeader(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPackageHeader) {
            return visitor.visitPackageHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PackageHeaderContext = PackageHeaderContext;
class ImportListContext extends ParserRuleContext_1.ParserRuleContext {
    importHeader(i) {
        if (i === undefined) {
            return this.getRuleContexts(ImportHeaderContext);
        }
        else {
            return this.getRuleContext(i, ImportHeaderContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_importList; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportList) {
            listener.enterImportList(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportList) {
            listener.exitImportList(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportList) {
            return visitor.visitImportList(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportListContext = ImportListContext;
class ImportHeaderContext extends ParserRuleContext_1.ParserRuleContext {
    IMPORT() { return this.getToken(KotlinParser.IMPORT, 0); }
    identifier() {
        return this.getRuleContext(0, IdentifierContext);
    }
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    MULT() { return this.tryGetToken(KotlinParser.MULT, 0); }
    importAlias() {
        return this.tryGetRuleContext(0, ImportAliasContext);
    }
    semi() {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_importHeader; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportHeader) {
            listener.enterImportHeader(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportHeader) {
            listener.exitImportHeader(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportHeader) {
            return visitor.visitImportHeader(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportHeaderContext = ImportHeaderContext;
class ImportAliasContext extends ParserRuleContext_1.ParserRuleContext {
    AS() { return this.getToken(KotlinParser.AS, 0); }
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_importAlias; }
    // @Override
    enterRule(listener) {
        if (listener.enterImportAlias) {
            listener.enterImportAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitImportAlias) {
            listener.exitImportAlias(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitImportAlias) {
            return visitor.visitImportAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ImportAliasContext = ImportAliasContext;
class TopLevelObjectContext extends ParserRuleContext_1.ParserRuleContext {
    declaration() {
        return this.getRuleContext(0, DeclarationContext);
    }
    semis() {
        return this.tryGetRuleContext(0, SemisContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_topLevelObject; }
    // @Override
    enterRule(listener) {
        if (listener.enterTopLevelObject) {
            listener.enterTopLevelObject(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTopLevelObject) {
            listener.exitTopLevelObject(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTopLevelObject) {
            return visitor.visitTopLevelObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TopLevelObjectContext = TopLevelObjectContext;
class ClassDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    CLASS() { return this.tryGetToken(KotlinParser.CLASS, 0); }
    INTERFACE() { return this.tryGetToken(KotlinParser.INTERFACE, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    primaryConstructor() {
        return this.tryGetRuleContext(0, PrimaryConstructorContext);
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    delegationSpecifiers() {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    typeConstraints() {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    enumClassBody() {
        return this.tryGetRuleContext(0, EnumClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassDeclaration) {
            listener.enterClassDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassDeclaration) {
            listener.exitClassDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassDeclaration) {
            return visitor.visitClassDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassDeclarationContext = ClassDeclarationContext;
class PrimaryConstructorContext extends ParserRuleContext_1.ParserRuleContext {
    classParameters() {
        return this.getRuleContext(0, ClassParametersContext);
    }
    CONSTRUCTOR() { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_primaryConstructor; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimaryConstructor) {
            listener.enterPrimaryConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimaryConstructor) {
            listener.exitPrimaryConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimaryConstructor) {
            return visitor.visitPrimaryConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimaryConstructorContext = PrimaryConstructorContext;
class ClassParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    classParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassParameterContext);
        }
        else {
            return this.getRuleContext(i, ClassParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassParameters) {
            listener.enterClassParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassParameters) {
            listener.exitClassParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassParameters) {
            return visitor.visitClassParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassParametersContext = ClassParametersContext;
class ClassParameterContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    VAL() { return this.tryGetToken(KotlinParser.VAL, 0); }
    VAR() { return this.tryGetToken(KotlinParser.VAR, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassParameter) {
            listener.enterClassParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassParameter) {
            listener.exitClassParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassParameter) {
            return visitor.visitClassParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassParameterContext = ClassParameterContext;
class DelegationSpecifiersContext extends ParserRuleContext_1.ParserRuleContext {
    annotatedDelegationSpecifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotatedDelegationSpecifierContext);
        }
        else {
            return this.getRuleContext(i, AnnotatedDelegationSpecifierContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_delegationSpecifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterDelegationSpecifiers) {
            listener.enterDelegationSpecifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDelegationSpecifiers) {
            listener.exitDelegationSpecifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDelegationSpecifiers) {
            return visitor.visitDelegationSpecifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DelegationSpecifiersContext = DelegationSpecifiersContext;
class AnnotatedDelegationSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    delegationSpecifier() {
        return this.getRuleContext(0, DelegationSpecifierContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_annotatedDelegationSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotatedDelegationSpecifier) {
            listener.enterAnnotatedDelegationSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotatedDelegationSpecifier) {
            listener.exitAnnotatedDelegationSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotatedDelegationSpecifier) {
            return visitor.visitAnnotatedDelegationSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotatedDelegationSpecifierContext = AnnotatedDelegationSpecifierContext;
class DelegationSpecifierContext extends ParserRuleContext_1.ParserRuleContext {
    constructorInvocation() {
        return this.tryGetRuleContext(0, ConstructorInvocationContext);
    }
    explicitDelegation() {
        return this.tryGetRuleContext(0, ExplicitDelegationContext);
    }
    userType() {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    functionType() {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_delegationSpecifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterDelegationSpecifier) {
            listener.enterDelegationSpecifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDelegationSpecifier) {
            listener.exitDelegationSpecifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDelegationSpecifier) {
            return visitor.visitDelegationSpecifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DelegationSpecifierContext = DelegationSpecifierContext;
class ConstructorInvocationContext extends ParserRuleContext_1.ParserRuleContext {
    userType() {
        return this.getRuleContext(0, UserTypeContext);
    }
    valueArguments() {
        return this.getRuleContext(0, ValueArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_constructorInvocation; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstructorInvocation) {
            listener.enterConstructorInvocation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstructorInvocation) {
            listener.exitConstructorInvocation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstructorInvocation) {
            return visitor.visitConstructorInvocation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstructorInvocationContext = ConstructorInvocationContext;
class ExplicitDelegationContext extends ParserRuleContext_1.ParserRuleContext {
    BY() { return this.getToken(KotlinParser.BY, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    userType() {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    functionType() {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_explicitDelegation; }
    // @Override
    enterRule(listener) {
        if (listener.enterExplicitDelegation) {
            listener.enterExplicitDelegation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExplicitDelegation) {
            listener.exitExplicitDelegation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExplicitDelegation) {
            return visitor.visitExplicitDelegation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExplicitDelegationContext = ExplicitDelegationContext;
class ClassBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LCURL() { return this.getToken(KotlinParser.LCURL, 0); }
    classMemberDeclarations() {
        return this.getRuleContext(0, ClassMemberDeclarationsContext);
    }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassBody) {
            listener.enterClassBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassBody) {
            listener.exitClassBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassBody) {
            return visitor.visitClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassBodyContext = ClassBodyContext;
class ClassMemberDeclarationsContext extends ParserRuleContext_1.ParserRuleContext {
    classMemberDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(ClassMemberDeclarationContext);
        }
        else {
            return this.getRuleContext(i, ClassMemberDeclarationContext);
        }
    }
    semis(i) {
        if (i === undefined) {
            return this.getRuleContexts(SemisContext);
        }
        else {
            return this.getRuleContext(i, SemisContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classMemberDeclarations; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassMemberDeclarations) {
            listener.enterClassMemberDeclarations(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassMemberDeclarations) {
            listener.exitClassMemberDeclarations(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassMemberDeclarations) {
            return visitor.visitClassMemberDeclarations(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassMemberDeclarationsContext = ClassMemberDeclarationsContext;
class ClassMemberDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    companionObject() {
        return this.tryGetRuleContext(0, CompanionObjectContext);
    }
    anonymousInitializer() {
        return this.tryGetRuleContext(0, AnonymousInitializerContext);
    }
    secondaryConstructor() {
        return this.tryGetRuleContext(0, SecondaryConstructorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classMemberDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassMemberDeclaration) {
            listener.enterClassMemberDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassMemberDeclaration) {
            listener.exitClassMemberDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassMemberDeclaration) {
            return visitor.visitClassMemberDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassMemberDeclarationContext = ClassMemberDeclarationContext;
class AnonymousInitializerContext extends ParserRuleContext_1.ParserRuleContext {
    INIT() { return this.getToken(KotlinParser.INIT, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_anonymousInitializer; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnonymousInitializer) {
            listener.enterAnonymousInitializer(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnonymousInitializer) {
            listener.exitAnonymousInitializer(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnonymousInitializer) {
            return visitor.visitAnonymousInitializer(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnonymousInitializerContext = AnonymousInitializerContext;
class SecondaryConstructorContext extends ParserRuleContext_1.ParserRuleContext {
    CONSTRUCTOR() { return this.getToken(KotlinParser.CONSTRUCTOR, 0); }
    functionValueParameters() {
        return this.getRuleContext(0, FunctionValueParametersContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    constructorDelegationCall() {
        return this.tryGetRuleContext(0, ConstructorDelegationCallContext);
    }
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_secondaryConstructor; }
    // @Override
    enterRule(listener) {
        if (listener.enterSecondaryConstructor) {
            listener.enterSecondaryConstructor(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSecondaryConstructor) {
            listener.exitSecondaryConstructor(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSecondaryConstructor) {
            return visitor.visitSecondaryConstructor(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SecondaryConstructorContext = SecondaryConstructorContext;
class ConstructorDelegationCallContext extends ParserRuleContext_1.ParserRuleContext {
    THIS() { return this.tryGetToken(KotlinParser.THIS, 0); }
    valueArguments() {
        return this.getRuleContext(0, ValueArgumentsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    SUPER() { return this.tryGetToken(KotlinParser.SUPER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_constructorDelegationCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterConstructorDelegationCall) {
            listener.enterConstructorDelegationCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConstructorDelegationCall) {
            listener.exitConstructorDelegationCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConstructorDelegationCall) {
            return visitor.visitConstructorDelegationCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConstructorDelegationCallContext = ConstructorDelegationCallContext;
class EnumClassBodyContext extends ParserRuleContext_1.ParserRuleContext {
    LCURL() { return this.getToken(KotlinParser.LCURL, 0); }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    enumEntries() {
        return this.tryGetRuleContext(0, EnumEntriesContext);
    }
    SEMICOLON() { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    classMemberDeclarations() {
        return this.tryGetRuleContext(0, ClassMemberDeclarationsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_enumClassBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumClassBody) {
            listener.enterEnumClassBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumClassBody) {
            listener.exitEnumClassBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumClassBody) {
            return visitor.visitEnumClassBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumClassBodyContext = EnumClassBodyContext;
class EnumEntriesContext extends ParserRuleContext_1.ParserRuleContext {
    enumEntry(i) {
        if (i === undefined) {
            return this.getRuleContexts(EnumEntryContext);
        }
        else {
            return this.getRuleContext(i, EnumEntryContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_enumEntries; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumEntries) {
            listener.enterEnumEntries(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumEntries) {
            listener.exitEnumEntries(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumEntries) {
            return visitor.visitEnumEntries(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumEntriesContext = EnumEntriesContext;
class EnumEntryContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    valueArguments() {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_enumEntry; }
    // @Override
    enterRule(listener) {
        if (listener.enterEnumEntry) {
            listener.enterEnumEntry(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEnumEntry) {
            listener.exitEnumEntry(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEnumEntry) {
            return visitor.visitEnumEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EnumEntryContext = EnumEntryContext;
class FunctionDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    FUN() { return this.getToken(KotlinParser.FUN, 0); }
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    functionValueParameters() {
        return this.getRuleContext(0, FunctionValueParametersContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    receiverType() {
        return this.tryGetRuleContext(0, ReceiverTypeContext);
    }
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    typeConstraints() {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    functionBody() {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionDeclaration) {
            listener.enterFunctionDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionDeclaration) {
            listener.exitFunctionDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionDeclaration) {
            return visitor.visitFunctionDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionDeclarationContext = FunctionDeclarationContext;
class FunctionValueParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    functionValueParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(FunctionValueParameterContext);
        }
        else {
            return this.getRuleContext(i, FunctionValueParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionValueParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionValueParameters) {
            listener.enterFunctionValueParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionValueParameters) {
            listener.exitFunctionValueParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionValueParameters) {
            return visitor.visitFunctionValueParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionValueParametersContext = FunctionValueParametersContext;
class FunctionValueParameterContext extends ParserRuleContext_1.ParserRuleContext {
    parameter() {
        return this.getRuleContext(0, ParameterContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionValueParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionValueParameter) {
            listener.enterFunctionValueParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionValueParameter) {
            listener.exitFunctionValueParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionValueParameter) {
            return visitor.visitFunctionValueParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionValueParameterContext = FunctionValueParameterContext;
class ParameterContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_parameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameter) {
            listener.enterParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameter) {
            listener.exitParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterContext = ParameterContext;
class SetterParameterContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_setterParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterSetterParameter) {
            listener.enterSetterParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSetterParameter) {
            listener.exitSetterParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetterParameter) {
            return visitor.visitSetterParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetterParameterContext = SetterParameterContext;
class FunctionBodyContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionBody) {
            listener.enterFunctionBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionBody) {
            listener.exitFunctionBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionBody) {
            return visitor.visitFunctionBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionBodyContext = FunctionBodyContext;
class ObjectDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    OBJECT() { return this.getToken(KotlinParser.OBJECT, 0); }
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    delegationSpecifiers() {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_objectDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterObjectDeclaration) {
            listener.enterObjectDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObjectDeclaration) {
            listener.exitObjectDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectDeclaration) {
            return visitor.visitObjectDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectDeclarationContext = ObjectDeclarationContext;
class CompanionObjectContext extends ParserRuleContext_1.ParserRuleContext {
    COMPANION() { return this.getToken(KotlinParser.COMPANION, 0); }
    OBJECT() { return this.getToken(KotlinParser.OBJECT, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    delegationSpecifiers() {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_companionObject; }
    // @Override
    enterRule(listener) {
        if (listener.enterCompanionObject) {
            listener.enterCompanionObject(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCompanionObject) {
            listener.exitCompanionObject(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCompanionObject) {
            return visitor.visitCompanionObject(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CompanionObjectContext = CompanionObjectContext;
class PropertyDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    VAL() { return this.tryGetToken(KotlinParser.VAL, 0); }
    VAR() { return this.tryGetToken(KotlinParser.VAR, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    receiverType() {
        return this.tryGetRuleContext(0, ReceiverTypeContext);
    }
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    typeConstraints() {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    SEMICOLON() { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    multiVariableDeclaration() {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    variableDeclaration() {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    propertyDelegate() {
        return this.tryGetRuleContext(0, PropertyDelegateContext);
    }
    getter() {
        return this.tryGetRuleContext(0, GetterContext);
    }
    setter() {
        return this.tryGetRuleContext(0, SetterContext);
    }
    semi() {
        return this.tryGetRuleContext(0, SemiContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_propertyDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterPropertyDeclaration) {
            listener.enterPropertyDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPropertyDeclaration) {
            listener.exitPropertyDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyDeclaration) {
            return visitor.visitPropertyDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyDeclarationContext = PropertyDeclarationContext;
class MultiVariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    variableDeclaration(i) {
        if (i === undefined) {
            return this.getRuleContexts(VariableDeclarationContext);
        }
        else {
            return this.getRuleContext(i, VariableDeclarationContext);
        }
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiVariableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiVariableDeclaration) {
            listener.enterMultiVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiVariableDeclaration) {
            listener.exitMultiVariableDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiVariableDeclaration) {
            return visitor.visitMultiVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiVariableDeclarationContext = MultiVariableDeclarationContext;
class VariableDeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_variableDeclaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterVariableDeclaration) {
            listener.enterVariableDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVariableDeclaration) {
            listener.exitVariableDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVariableDeclaration) {
            return visitor.visitVariableDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VariableDeclarationContext = VariableDeclarationContext;
class PropertyDelegateContext extends ParserRuleContext_1.ParserRuleContext {
    BY() { return this.getToken(KotlinParser.BY, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_propertyDelegate; }
    // @Override
    enterRule(listener) {
        if (listener.enterPropertyDelegate) {
            listener.enterPropertyDelegate(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPropertyDelegate) {
            listener.exitPropertyDelegate(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyDelegate) {
            return visitor.visitPropertyDelegate(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyDelegateContext = PropertyDelegateContext;
class GetterContext extends ParserRuleContext_1.ParserRuleContext {
    GETTER() { return this.getToken(KotlinParser.GETTER, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    LPAREN() { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    RPAREN() { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    functionBody() {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_getter; }
    // @Override
    enterRule(listener) {
        if (listener.enterGetter) {
            listener.enterGetter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitGetter) {
            listener.exitGetter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitGetter) {
            return visitor.visitGetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.GetterContext = GetterContext;
class SetterContext extends ParserRuleContext_1.ParserRuleContext {
    SETTER() { return this.getToken(KotlinParser.SETTER, 0); }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    LPAREN() { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    setterParameter() {
        return this.tryGetRuleContext(0, SetterParameterContext);
    }
    RPAREN() { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    functionBody() {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    parameterModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterModifierContext);
        }
        else {
            return this.getRuleContext(i, ParameterModifierContext);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_setter; }
    // @Override
    enterRule(listener) {
        if (listener.enterSetter) {
            listener.enterSetter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSetter) {
            listener.exitSetter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSetter) {
            return visitor.visitSetter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SetterContext = SetterContext;
class TypeAliasContext extends ParserRuleContext_1.ParserRuleContext {
    TYPE_ALIAS() { return this.getToken(KotlinParser.TYPE_ALIAS, 0); }
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    ASSIGNMENT() { return this.getToken(KotlinParser.ASSIGNMENT, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    modifiers() {
        return this.tryGetRuleContext(0, ModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    typeParameters() {
        return this.tryGetRuleContext(0, TypeParametersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeAlias; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeAlias) {
            listener.enterTypeAlias(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeAlias) {
            listener.exitTypeAlias(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeAlias) {
            return visitor.visitTypeAlias(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeAliasContext = TypeAliasContext;
class TypeParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LANGLE() { return this.getToken(KotlinParser.LANGLE, 0); }
    typeParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterContext);
        }
    }
    RANGLE() { return this.getToken(KotlinParser.RANGLE, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameters) {
            listener.enterTypeParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameters) {
            listener.exitTypeParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameters) {
            return visitor.visitTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParametersContext = TypeParametersContext;
class TypeParameterContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    typeParameterModifiers() {
        return this.tryGetRuleContext(0, TypeParameterModifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameter) {
            listener.enterTypeParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameter) {
            listener.exitTypeParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameter) {
            return visitor.visitTypeParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterContext = TypeParameterContext;
class TypeParameterModifiersContext extends ParserRuleContext_1.ParserRuleContext {
    typeParameterModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeParameterModifierContext);
        }
        else {
            return this.getRuleContext(i, TypeParameterModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeParameterModifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameterModifiers) {
            listener.enterTypeParameterModifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameterModifiers) {
            listener.exitTypeParameterModifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameterModifiers) {
            return visitor.visitTypeParameterModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterModifiersContext = TypeParameterModifiersContext;
class TypeParameterModifierContext extends ParserRuleContext_1.ParserRuleContext {
    reificationModifier() {
        return this.tryGetRuleContext(0, ReificationModifierContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    varianceModifier() {
        return this.tryGetRuleContext(0, VarianceModifierContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeParameterModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeParameterModifier) {
            listener.enterTypeParameterModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeParameterModifier) {
            listener.exitTypeParameterModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeParameterModifier) {
            return visitor.visitTypeParameterModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeParameterModifierContext = TypeParameterModifierContext;
class Type_Context extends ParserRuleContext_1.ParserRuleContext {
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    nullableType() {
        return this.tryGetRuleContext(0, NullableTypeContext);
    }
    typeReference() {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    functionType() {
        return this.tryGetRuleContext(0, FunctionTypeContext);
    }
    typeModifiers() {
        return this.tryGetRuleContext(0, TypeModifiersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_type_; }
    // @Override
    enterRule(listener) {
        if (listener.enterType_) {
            listener.enterType_(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitType_) {
            listener.exitType_(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitType_) {
            return visitor.visitType_(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.Type_Context = Type_Context;
class TypeModifiersContext extends ParserRuleContext_1.ParserRuleContext {
    typeModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeModifierContext);
        }
        else {
            return this.getRuleContext(i, TypeModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeModifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeModifiers) {
            listener.enterTypeModifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeModifiers) {
            listener.exitTypeModifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeModifiers) {
            return visitor.visitTypeModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeModifiersContext = TypeModifiersContext;
class TypeModifierContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    SUSPEND() { return this.tryGetToken(KotlinParser.SUSPEND, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeModifier) {
            listener.enterTypeModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeModifier) {
            listener.exitTypeModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeModifier) {
            return visitor.visitTypeModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeModifierContext = TypeModifierContext;
class ParenthesizedTypeContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_parenthesizedType; }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedType) {
            listener.enterParenthesizedType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedType) {
            listener.exitParenthesizedType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedType) {
            return visitor.visitParenthesizedType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesizedTypeContext = ParenthesizedTypeContext;
class NullableTypeContext extends ParserRuleContext_1.ParserRuleContext {
    typeReference() {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    quest(i) {
        if (i === undefined) {
            return this.getRuleContexts(QuestContext);
        }
        else {
            return this.getRuleContext(i, QuestContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_nullableType; }
    // @Override
    enterRule(listener) {
        if (listener.enterNullableType) {
            listener.enterNullableType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNullableType) {
            listener.exitNullableType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNullableType) {
            return visitor.visitNullableType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NullableTypeContext = NullableTypeContext;
class TypeReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    userType() {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    DYNAMIC() { return this.tryGetToken(KotlinParser.DYNAMIC, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeReference; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeReference) {
            listener.enterTypeReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeReference) {
            listener.exitTypeReference(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeReference) {
            return visitor.visitTypeReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeReferenceContext = TypeReferenceContext;
class FunctionTypeContext extends ParserRuleContext_1.ParserRuleContext {
    functionTypeParameters() {
        return this.getRuleContext(0, FunctionTypeParametersContext);
    }
    ARROW() { return this.getToken(KotlinParser.ARROW, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    receiverType() {
        return this.tryGetRuleContext(0, ReceiverTypeContext);
    }
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionType; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionType) {
            listener.enterFunctionType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionType) {
            listener.exitFunctionType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionType) {
            return visitor.visitFunctionType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionTypeContext = FunctionTypeContext;
class ReceiverTypeContext extends ParserRuleContext_1.ParserRuleContext {
    parenthesizedType() {
        return this.tryGetRuleContext(0, ParenthesizedTypeContext);
    }
    nullableType() {
        return this.tryGetRuleContext(0, NullableTypeContext);
    }
    typeReference() {
        return this.tryGetRuleContext(0, TypeReferenceContext);
    }
    typeModifiers() {
        return this.tryGetRuleContext(0, TypeModifiersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_receiverType; }
    // @Override
    enterRule(listener) {
        if (listener.enterReceiverType) {
            listener.enterReceiverType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReceiverType) {
            listener.exitReceiverType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReceiverType) {
            return visitor.visitReceiverType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReceiverTypeContext = ReceiverTypeContext;
class UserTypeContext extends ParserRuleContext_1.ParserRuleContext {
    simpleUserType(i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleUserTypeContext);
        }
        else {
            return this.getRuleContext(i, SimpleUserTypeContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        }
        else {
            return this.getToken(KotlinParser.DOT, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_userType; }
    // @Override
    enterRule(listener) {
        if (listener.enterUserType) {
            listener.enterUserType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUserType) {
            listener.exitUserType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUserType) {
            return visitor.visitUserType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UserTypeContext = UserTypeContext;
class ParenthesizedUserTypeContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    userType() {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    parenthesizedUserType() {
        return this.tryGetRuleContext(0, ParenthesizedUserTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_parenthesizedUserType; }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedUserType) {
            listener.enterParenthesizedUserType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedUserType) {
            listener.exitParenthesizedUserType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedUserType) {
            return visitor.visitParenthesizedUserType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesizedUserTypeContext = ParenthesizedUserTypeContext;
class SimpleUserTypeContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_simpleUserType; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleUserType) {
            listener.enterSimpleUserType(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleUserType) {
            listener.exitSimpleUserType(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleUserType) {
            return visitor.visitSimpleUserType(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleUserTypeContext = SimpleUserTypeContext;
class FunctionTypeParametersContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    parameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }
        else {
            return this.getRuleContext(i, ParameterContext);
        }
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionTypeParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionTypeParameters) {
            listener.enterFunctionTypeParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionTypeParameters) {
            listener.exitFunctionTypeParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionTypeParameters) {
            return visitor.visitFunctionTypeParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionTypeParametersContext = FunctionTypeParametersContext;
class TypeConstraintsContext extends ParserRuleContext_1.ParserRuleContext {
    WHERE() { return this.getToken(KotlinParser.WHERE, 0); }
    typeConstraint(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeConstraintContext);
        }
        else {
            return this.getRuleContext(i, TypeConstraintContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeConstraints; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeConstraints) {
            listener.enterTypeConstraints(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeConstraints) {
            listener.exitTypeConstraints(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeConstraints) {
            return visitor.visitTypeConstraints(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeConstraintsContext = TypeConstraintsContext;
class TypeConstraintContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeConstraint; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeConstraint) {
            listener.enterTypeConstraint(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeConstraint) {
            listener.exitTypeConstraint(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeConstraint) {
            return visitor.visitTypeConstraint(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeConstraintContext = TypeConstraintContext;
class BlockContext extends ParserRuleContext_1.ParserRuleContext {
    LCURL() { return this.getToken(KotlinParser.LCURL, 0); }
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_block; }
    // @Override
    enterRule(listener) {
        if (listener.enterBlock) {
            listener.enterBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitBlock) {
            listener.exitBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.BlockContext = BlockContext;
class StatementsContext extends ParserRuleContext_1.ParserRuleContext {
    statement(i) {
        if (i === undefined) {
            return this.getRuleContexts(StatementContext);
        }
        else {
            return this.getRuleContext(i, StatementContext);
        }
    }
    semis() {
        return this.tryGetRuleContext(0, SemisContext);
    }
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.SEMICOLON);
        }
        else {
            return this.getToken(KotlinParser.SEMICOLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_statements; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatements) {
            listener.enterStatements(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatements) {
            listener.exitStatements(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatements) {
            return visitor.visitStatements(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementsContext = StatementsContext;
class StatementContext extends ParserRuleContext_1.ParserRuleContext {
    declaration() {
        return this.tryGetRuleContext(0, DeclarationContext);
    }
    assignment() {
        return this.tryGetRuleContext(0, AssignmentContext);
    }
    loopStatement() {
        return this.tryGetRuleContext(0, LoopStatementContext);
    }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    label(i) {
        if (i === undefined) {
            return this.getRuleContexts(LabelContext);
        }
        else {
            return this.getRuleContext(i, LabelContext);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_statement; }
    // @Override
    enterRule(listener) {
        if (listener.enterStatement) {
            listener.enterStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStatement) {
            listener.exitStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStatement) {
            return visitor.visitStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StatementContext = StatementContext;
class DeclarationContext extends ParserRuleContext_1.ParserRuleContext {
    classDeclaration() {
        return this.tryGetRuleContext(0, ClassDeclarationContext);
    }
    objectDeclaration() {
        return this.tryGetRuleContext(0, ObjectDeclarationContext);
    }
    functionDeclaration() {
        return this.tryGetRuleContext(0, FunctionDeclarationContext);
    }
    propertyDeclaration() {
        return this.tryGetRuleContext(0, PropertyDeclarationContext);
    }
    typeAlias() {
        return this.tryGetRuleContext(0, TypeAliasContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_declaration; }
    // @Override
    enterRule(listener) {
        if (listener.enterDeclaration) {
            listener.enterDeclaration(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDeclaration) {
            listener.exitDeclaration(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDeclaration) {
            return visitor.visitDeclaration(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DeclarationContext = DeclarationContext;
class AssignmentContext extends ParserRuleContext_1.ParserRuleContext {
    directlyAssignableExpression() {
        return this.tryGetRuleContext(0, DirectlyAssignableExpressionContext);
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    assignableExpression() {
        return this.tryGetRuleContext(0, AssignableExpressionContext);
    }
    assignmentAndOperator() {
        return this.tryGetRuleContext(0, AssignmentAndOperatorContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_assignment; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignment) {
            listener.enterAssignment(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignment) {
            listener.exitAssignment(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignment) {
            return visitor.visitAssignment(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentContext = AssignmentContext;
class ExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    disjunction() {
        return this.getRuleContext(0, DisjunctionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_expression; }
    // @Override
    enterRule(listener) {
        if (listener.enterExpression) {
            listener.enterExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExpression) {
            listener.exitExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExpression) {
            return visitor.visitExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExpressionContext = ExpressionContext;
class DisjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    conjunction(i) {
        if (i === undefined) {
            return this.getRuleContexts(ConjunctionContext);
        }
        else {
            return this.getRuleContext(i, ConjunctionContext);
        }
    }
    DISJ(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DISJ);
        }
        else {
            return this.getToken(KotlinParser.DISJ, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_disjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterDisjunction) {
            listener.enterDisjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDisjunction) {
            listener.exitDisjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDisjunction) {
            return visitor.visitDisjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DisjunctionContext = DisjunctionContext;
class ConjunctionContext extends ParserRuleContext_1.ParserRuleContext {
    equality(i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityContext);
        }
        else {
            return this.getRuleContext(i, EqualityContext);
        }
    }
    CONJ(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.CONJ);
        }
        else {
            return this.getToken(KotlinParser.CONJ, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_conjunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterConjunction) {
            listener.enterConjunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitConjunction) {
            listener.exitConjunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitConjunction) {
            return visitor.visitConjunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ConjunctionContext = ConjunctionContext;
class EqualityContext extends ParserRuleContext_1.ParserRuleContext {
    comparison(i) {
        if (i === undefined) {
            return this.getRuleContexts(ComparisonContext);
        }
        else {
            return this.getRuleContext(i, ComparisonContext);
        }
    }
    equalityOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(EqualityOperatorContext);
        }
        else {
            return this.getRuleContext(i, EqualityOperatorContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_equality; }
    // @Override
    enterRule(listener) {
        if (listener.enterEquality) {
            listener.enterEquality(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEquality) {
            listener.exitEquality(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEquality) {
            return visitor.visitEquality(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualityContext = EqualityContext;
class ComparisonContext extends ParserRuleContext_1.ParserRuleContext {
    infixOperation(i) {
        if (i === undefined) {
            return this.getRuleContexts(InfixOperationContext);
        }
        else {
            return this.getRuleContext(i, InfixOperationContext);
        }
    }
    comparisonOperator() {
        return this.tryGetRuleContext(0, ComparisonOperatorContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_comparison; }
    // @Override
    enterRule(listener) {
        if (listener.enterComparison) {
            listener.enterComparison(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComparison) {
            listener.exitComparison(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComparison) {
            return visitor.visitComparison(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComparisonContext = ComparisonContext;
class InfixOperationContext extends ParserRuleContext_1.ParserRuleContext {
    elvisExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElvisExpressionContext);
        }
        else {
            return this.getRuleContext(i, ElvisExpressionContext);
        }
    }
    inOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(InOperatorContext);
        }
        else {
            return this.getRuleContext(i, InOperatorContext);
        }
    }
    isOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(IsOperatorContext);
        }
        else {
            return this.getRuleContext(i, IsOperatorContext);
        }
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_infixOperation; }
    // @Override
    enterRule(listener) {
        if (listener.enterInfixOperation) {
            listener.enterInfixOperation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInfixOperation) {
            listener.exitInfixOperation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInfixOperation) {
            return visitor.visitInfixOperation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InfixOperationContext = InfixOperationContext;
class ElvisExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    infixFunctionCall(i) {
        if (i === undefined) {
            return this.getRuleContexts(InfixFunctionCallContext);
        }
        else {
            return this.getRuleContext(i, InfixFunctionCallContext);
        }
    }
    elvis(i) {
        if (i === undefined) {
            return this.getRuleContexts(ElvisContext);
        }
        else {
            return this.getRuleContext(i, ElvisContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_elvisExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterElvisExpression) {
            listener.enterElvisExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElvisExpression) {
            listener.exitElvisExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElvisExpression) {
            return visitor.visitElvisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElvisExpressionContext = ElvisExpressionContext;
class InfixFunctionCallContext extends ParserRuleContext_1.ParserRuleContext {
    rangeExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(RangeExpressionContext);
        }
        else {
            return this.getRuleContext(i, RangeExpressionContext);
        }
    }
    simpleIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        }
        else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_infixFunctionCall; }
    // @Override
    enterRule(listener) {
        if (listener.enterInfixFunctionCall) {
            listener.enterInfixFunctionCall(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInfixFunctionCall) {
            listener.exitInfixFunctionCall(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInfixFunctionCall) {
            return visitor.visitInfixFunctionCall(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InfixFunctionCallContext = InfixFunctionCallContext;
class RangeExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    additiveExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveExpressionContext);
        }
        else {
            return this.getRuleContext(i, AdditiveExpressionContext);
        }
    }
    RANGE(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.RANGE);
        }
        else {
            return this.getToken(KotlinParser.RANGE, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_rangeExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterRangeExpression) {
            listener.enterRangeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRangeExpression) {
            listener.exitRangeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRangeExpression) {
            return visitor.visitRangeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RangeExpressionContext = RangeExpressionContext;
class AdditiveExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    multiplicativeExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeExpressionContext);
        }
    }
    additiveOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(AdditiveOperatorContext);
        }
        else {
            return this.getRuleContext(i, AdditiveOperatorContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_additiveExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveExpression) {
            listener.enterAdditiveExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveExpression) {
            listener.exitAdditiveExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveExpression) {
            return visitor.visitAdditiveExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveExpressionContext = AdditiveExpressionContext;
class MultiplicativeExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    asExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(AsExpressionContext);
        }
        else {
            return this.getRuleContext(i, AsExpressionContext);
        }
    }
    multiplicativeOperator(i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiplicativeOperatorContext);
        }
        else {
            return this.getRuleContext(i, MultiplicativeOperatorContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiplicativeExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeExpression) {
            listener.enterMultiplicativeExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeExpression) {
            listener.exitMultiplicativeExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeExpression) {
            return visitor.visitMultiplicativeExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeExpressionContext = MultiplicativeExpressionContext;
class AsExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    prefixUnaryExpression() {
        return this.getRuleContext(0, PrefixUnaryExpressionContext);
    }
    asOperator() {
        return this.tryGetRuleContext(0, AsOperatorContext);
    }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_asExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterAsExpression) {
            listener.enterAsExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAsExpression) {
            listener.exitAsExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAsExpression) {
            return visitor.visitAsExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AsExpressionContext = AsExpressionContext;
class PrefixUnaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    postfixUnaryExpression() {
        return this.getRuleContext(0, PostfixUnaryExpressionContext);
    }
    unaryPrefix(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnaryPrefixContext);
        }
        else {
            return this.getRuleContext(i, UnaryPrefixContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_prefixUnaryExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrefixUnaryExpression) {
            listener.enterPrefixUnaryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrefixUnaryExpression) {
            listener.exitPrefixUnaryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrefixUnaryExpression) {
            return visitor.visitPrefixUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrefixUnaryExpressionContext = PrefixUnaryExpressionContext;
class UnaryPrefixContext extends ParserRuleContext_1.ParserRuleContext {
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    prefixUnaryOperator() {
        return this.tryGetRuleContext(0, PrefixUnaryOperatorContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_unaryPrefix; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnaryPrefix) {
            listener.enterUnaryPrefix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnaryPrefix) {
            listener.exitUnaryPrefix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnaryPrefix) {
            return visitor.visitUnaryPrefix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnaryPrefixContext = UnaryPrefixContext;
class PostfixUnaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    primaryExpression() {
        return this.getRuleContext(0, PrimaryExpressionContext);
    }
    postfixUnarySuffix(i) {
        if (i === undefined) {
            return this.getRuleContexts(PostfixUnarySuffixContext);
        }
        else {
            return this.getRuleContext(i, PostfixUnarySuffixContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_postfixUnaryExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterPostfixUnaryExpression) {
            listener.enterPostfixUnaryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPostfixUnaryExpression) {
            listener.exitPostfixUnaryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostfixUnaryExpression) {
            return visitor.visitPostfixUnaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PostfixUnaryExpressionContext = PostfixUnaryExpressionContext;
class PostfixUnarySuffixContext extends ParserRuleContext_1.ParserRuleContext {
    postfixUnaryOperator() {
        return this.tryGetRuleContext(0, PostfixUnaryOperatorContext);
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    callSuffix() {
        return this.tryGetRuleContext(0, CallSuffixContext);
    }
    indexingSuffix() {
        return this.tryGetRuleContext(0, IndexingSuffixContext);
    }
    navigationSuffix() {
        return this.tryGetRuleContext(0, NavigationSuffixContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_postfixUnarySuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterPostfixUnarySuffix) {
            listener.enterPostfixUnarySuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPostfixUnarySuffix) {
            listener.exitPostfixUnarySuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostfixUnarySuffix) {
            return visitor.visitPostfixUnarySuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PostfixUnarySuffixContext = PostfixUnarySuffixContext;
class DirectlyAssignableExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    postfixUnaryExpression() {
        return this.tryGetRuleContext(0, PostfixUnaryExpressionContext);
    }
    assignableSuffix() {
        return this.tryGetRuleContext(0, AssignableSuffixContext);
    }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_directlyAssignableExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterDirectlyAssignableExpression) {
            listener.enterDirectlyAssignableExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDirectlyAssignableExpression) {
            listener.exitDirectlyAssignableExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDirectlyAssignableExpression) {
            return visitor.visitDirectlyAssignableExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DirectlyAssignableExpressionContext = DirectlyAssignableExpressionContext;
class AssignableExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    prefixUnaryExpression() {
        return this.getRuleContext(0, PrefixUnaryExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_assignableExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignableExpression) {
            listener.enterAssignableExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignableExpression) {
            listener.exitAssignableExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignableExpression) {
            return visitor.visitAssignableExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignableExpressionContext = AssignableExpressionContext;
class AssignableSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    indexingSuffix() {
        return this.tryGetRuleContext(0, IndexingSuffixContext);
    }
    navigationSuffix() {
        return this.tryGetRuleContext(0, NavigationSuffixContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_assignableSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignableSuffix) {
            listener.enterAssignableSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignableSuffix) {
            listener.exitAssignableSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignableSuffix) {
            return visitor.visitAssignableSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignableSuffixContext = AssignableSuffixContext;
class IndexingSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    LSQUARE() { return this.getToken(KotlinParser.LSQUARE, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    RSQUARE() { return this.getToken(KotlinParser.RSQUARE, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_indexingSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterIndexingSuffix) {
            listener.enterIndexingSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIndexingSuffix) {
            listener.exitIndexingSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIndexingSuffix) {
            return visitor.visitIndexingSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IndexingSuffixContext = IndexingSuffixContext;
class NavigationSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    memberAccessOperator() {
        return this.getRuleContext(0, MemberAccessOperatorContext);
    }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    parenthesizedExpression() {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    CLASS() { return this.tryGetToken(KotlinParser.CLASS, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_navigationSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterNavigationSuffix) {
            listener.enterNavigationSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitNavigationSuffix) {
            listener.exitNavigationSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitNavigationSuffix) {
            return visitor.visitNavigationSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.NavigationSuffixContext = NavigationSuffixContext;
class CallSuffixContext extends ParserRuleContext_1.ParserRuleContext {
    annotatedLambda() {
        return this.tryGetRuleContext(0, AnnotatedLambdaContext);
    }
    typeArguments() {
        return this.tryGetRuleContext(0, TypeArgumentsContext);
    }
    valueArguments() {
        return this.tryGetRuleContext(0, ValueArgumentsContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_callSuffix; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallSuffix) {
            listener.enterCallSuffix(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallSuffix) {
            listener.exitCallSuffix(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallSuffix) {
            return visitor.visitCallSuffix(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallSuffixContext = CallSuffixContext;
class AnnotatedLambdaContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaLiteral() {
        return this.getRuleContext(0, LambdaLiteralContext);
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    label() {
        return this.tryGetRuleContext(0, LabelContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_annotatedLambda; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotatedLambda) {
            listener.enterAnnotatedLambda(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotatedLambda) {
            listener.exitAnnotatedLambda(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotatedLambda) {
            return visitor.visitAnnotatedLambda(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotatedLambdaContext = AnnotatedLambdaContext;
class ValueArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    valueArgument(i) {
        if (i === undefined) {
            return this.getRuleContexts(ValueArgumentContext);
        }
        else {
            return this.getRuleContext(i, ValueArgumentContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_valueArguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterValueArguments) {
            listener.enterValueArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueArguments) {
            listener.exitValueArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueArguments) {
            return visitor.visitValueArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueArgumentsContext = ValueArgumentsContext;
class TypeArgumentsContext extends ParserRuleContext_1.ParserRuleContext {
    LANGLE() { return this.getToken(KotlinParser.LANGLE, 0); }
    typeProjection(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeProjectionContext);
        }
        else {
            return this.getRuleContext(i, TypeProjectionContext);
        }
    }
    RANGLE() { return this.getToken(KotlinParser.RANGLE, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeArguments; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeArguments) {
            listener.enterTypeArguments(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeArguments) {
            listener.exitTypeArguments(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeArguments) {
            return visitor.visitTypeArguments(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeArgumentsContext = TypeArgumentsContext;
class TypeProjectionContext extends ParserRuleContext_1.ParserRuleContext {
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    typeProjectionModifiers() {
        return this.tryGetRuleContext(0, TypeProjectionModifiersContext);
    }
    MULT() { return this.tryGetToken(KotlinParser.MULT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeProjection; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeProjection) {
            listener.enterTypeProjection(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeProjection) {
            listener.exitTypeProjection(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeProjection) {
            return visitor.visitTypeProjection(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeProjectionContext = TypeProjectionContext;
class TypeProjectionModifiersContext extends ParserRuleContext_1.ParserRuleContext {
    typeProjectionModifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(TypeProjectionModifierContext);
        }
        else {
            return this.getRuleContext(i, TypeProjectionModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeProjectionModifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeProjectionModifiers) {
            listener.enterTypeProjectionModifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeProjectionModifiers) {
            listener.exitTypeProjectionModifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeProjectionModifiers) {
            return visitor.visitTypeProjectionModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeProjectionModifiersContext = TypeProjectionModifiersContext;
class TypeProjectionModifierContext extends ParserRuleContext_1.ParserRuleContext {
    varianceModifier() {
        return this.tryGetRuleContext(0, VarianceModifierContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeProjectionModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeProjectionModifier) {
            listener.enterTypeProjectionModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeProjectionModifier) {
            listener.exitTypeProjectionModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeProjectionModifier) {
            return visitor.visitTypeProjectionModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeProjectionModifierContext = TypeProjectionModifierContext;
class ValueArgumentContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    annotation() {
        return this.tryGetRuleContext(0, AnnotationContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    ASSIGNMENT() { return this.tryGetToken(KotlinParser.ASSIGNMENT, 0); }
    MULT() { return this.tryGetToken(KotlinParser.MULT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_valueArgument; }
    // @Override
    enterRule(listener) {
        if (listener.enterValueArgument) {
            listener.enterValueArgument(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitValueArgument) {
            listener.exitValueArgument(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitValueArgument) {
            return visitor.visitValueArgument(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ValueArgumentContext = ValueArgumentContext;
class PrimaryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    parenthesizedExpression() {
        return this.tryGetRuleContext(0, ParenthesizedExpressionContext);
    }
    literalConstant() {
        return this.tryGetRuleContext(0, LiteralConstantContext);
    }
    stringLiteral() {
        return this.tryGetRuleContext(0, StringLiteralContext);
    }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    callableReference() {
        return this.tryGetRuleContext(0, CallableReferenceContext);
    }
    functionLiteral() {
        return this.tryGetRuleContext(0, FunctionLiteralContext);
    }
    objectLiteral() {
        return this.tryGetRuleContext(0, ObjectLiteralContext);
    }
    collectionLiteral() {
        return this.tryGetRuleContext(0, CollectionLiteralContext);
    }
    thisExpression() {
        return this.tryGetRuleContext(0, ThisExpressionContext);
    }
    superExpression() {
        return this.tryGetRuleContext(0, SuperExpressionContext);
    }
    ifExpression() {
        return this.tryGetRuleContext(0, IfExpressionContext);
    }
    whenExpression() {
        return this.tryGetRuleContext(0, WhenExpressionContext);
    }
    tryExpression() {
        return this.tryGetRuleContext(0, TryExpressionContext);
    }
    jumpExpression() {
        return this.tryGetRuleContext(0, JumpExpressionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_primaryExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrimaryExpression) {
            listener.enterPrimaryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrimaryExpression) {
            listener.exitPrimaryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrimaryExpression) {
            return visitor.visitPrimaryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrimaryExpressionContext = PrimaryExpressionContext;
class ParenthesizedExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_parenthesizedExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterParenthesizedExpression) {
            listener.enterParenthesizedExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParenthesizedExpression) {
            listener.exitParenthesizedExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParenthesizedExpression) {
            return visitor.visitParenthesizedExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParenthesizedExpressionContext = ParenthesizedExpressionContext;
class CollectionLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    LSQUARE() { return this.getToken(KotlinParser.LSQUARE, 0); }
    expression(i) {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }
        else {
            return this.getRuleContext(i, ExpressionContext);
        }
    }
    RSQUARE() { return this.getToken(KotlinParser.RSQUARE, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_collectionLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterCollectionLiteral) {
            listener.enterCollectionLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCollectionLiteral) {
            listener.exitCollectionLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCollectionLiteral) {
            return visitor.visitCollectionLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CollectionLiteralContext = CollectionLiteralContext;
class LiteralConstantContext extends ParserRuleContext_1.ParserRuleContext {
    BooleanLiteral() { return this.tryGetToken(KotlinParser.BooleanLiteral, 0); }
    IntegerLiteral() { return this.tryGetToken(KotlinParser.IntegerLiteral, 0); }
    HexLiteral() { return this.tryGetToken(KotlinParser.HexLiteral, 0); }
    BinLiteral() { return this.tryGetToken(KotlinParser.BinLiteral, 0); }
    CharacterLiteral() { return this.tryGetToken(KotlinParser.CharacterLiteral, 0); }
    RealLiteral() { return this.tryGetToken(KotlinParser.RealLiteral, 0); }
    NullLiteral() { return this.tryGetToken(KotlinParser.NullLiteral, 0); }
    LongLiteral() { return this.tryGetToken(KotlinParser.LongLiteral, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_literalConstant; }
    // @Override
    enterRule(listener) {
        if (listener.enterLiteralConstant) {
            listener.enterLiteralConstant(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLiteralConstant) {
            listener.exitLiteralConstant(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLiteralConstant) {
            return visitor.visitLiteralConstant(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LiteralConstantContext = LiteralConstantContext;
class StringLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    lineStringLiteral() {
        return this.tryGetRuleContext(0, LineStringLiteralContext);
    }
    multiLineStringLiteral() {
        return this.tryGetRuleContext(0, MultiLineStringLiteralContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_stringLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterStringLiteral) {
            listener.enterStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitStringLiteral) {
            listener.exitStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.StringLiteralContext = StringLiteralContext;
class LineStringLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    QUOTE_OPEN() { return this.getToken(KotlinParser.QUOTE_OPEN, 0); }
    QUOTE_CLOSE() { return this.getToken(KotlinParser.QUOTE_CLOSE, 0); }
    lineStringContent(i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringContentContext);
        }
        else {
            return this.getRuleContext(i, LineStringContentContext);
        }
    }
    lineStringExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(LineStringExpressionContext);
        }
        else {
            return this.getRuleContext(i, LineStringExpressionContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lineStringLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterLineStringLiteral) {
            listener.enterLineStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLineStringLiteral) {
            listener.exitLineStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLineStringLiteral) {
            return visitor.visitLineStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LineStringLiteralContext = LineStringLiteralContext;
class MultiLineStringLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    TRIPLE_QUOTE_OPEN() { return this.getToken(KotlinParser.TRIPLE_QUOTE_OPEN, 0); }
    TRIPLE_QUOTE_CLOSE() { return this.getToken(KotlinParser.TRIPLE_QUOTE_CLOSE, 0); }
    multiLineStringContent(i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringContentContext);
        }
        else {
            return this.getRuleContext(i, MultiLineStringContentContext);
        }
    }
    multiLineStringExpression(i) {
        if (i === undefined) {
            return this.getRuleContexts(MultiLineStringExpressionContext);
        }
        else {
            return this.getRuleContext(i, MultiLineStringExpressionContext);
        }
    }
    MultiLineStringQuote(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.MultiLineStringQuote);
        }
        else {
            return this.getToken(KotlinParser.MultiLineStringQuote, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiLineStringLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiLineStringLiteral) {
            listener.enterMultiLineStringLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiLineStringLiteral) {
            listener.exitMultiLineStringLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiLineStringLiteral) {
            return visitor.visitMultiLineStringLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiLineStringLiteralContext = MultiLineStringLiteralContext;
class LineStringContentContext extends ParserRuleContext_1.ParserRuleContext {
    LineStrText() { return this.tryGetToken(KotlinParser.LineStrText, 0); }
    LineStrEscapedChar() { return this.tryGetToken(KotlinParser.LineStrEscapedChar, 0); }
    LineStrRef() { return this.tryGetToken(KotlinParser.LineStrRef, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lineStringContent; }
    // @Override
    enterRule(listener) {
        if (listener.enterLineStringContent) {
            listener.enterLineStringContent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLineStringContent) {
            listener.exitLineStringContent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLineStringContent) {
            return visitor.visitLineStringContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LineStringContentContext = LineStringContentContext;
class LineStringExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    LineStrExprStart() { return this.getToken(KotlinParser.LineStrExprStart, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lineStringExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterLineStringExpression) {
            listener.enterLineStringExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLineStringExpression) {
            listener.exitLineStringExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLineStringExpression) {
            return visitor.visitLineStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LineStringExpressionContext = LineStringExpressionContext;
class MultiLineStringContentContext extends ParserRuleContext_1.ParserRuleContext {
    MultiLineStrText() { return this.tryGetToken(KotlinParser.MultiLineStrText, 0); }
    MultiLineStringQuote() { return this.tryGetToken(KotlinParser.MultiLineStringQuote, 0); }
    MultiLineStrRef() { return this.tryGetToken(KotlinParser.MultiLineStrRef, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiLineStringContent; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiLineStringContent) {
            listener.enterMultiLineStringContent(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiLineStringContent) {
            listener.exitMultiLineStringContent(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiLineStringContent) {
            return visitor.visitMultiLineStringContent(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiLineStringContentContext = MultiLineStringContentContext;
class MultiLineStringExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    MultiLineStrExprStart() { return this.getToken(KotlinParser.MultiLineStrExprStart, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiLineStringExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiLineStringExpression) {
            listener.enterMultiLineStringExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiLineStringExpression) {
            listener.exitMultiLineStringExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiLineStringExpression) {
            return visitor.visitMultiLineStringExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiLineStringExpressionContext = MultiLineStringExpressionContext;
class LambdaLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    LCURL() { return this.getToken(KotlinParser.LCURL, 0); }
    statements() {
        return this.getRuleContext(0, StatementsContext);
    }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    ARROW() { return this.tryGetToken(KotlinParser.ARROW, 0); }
    lambdaParameters() {
        return this.tryGetRuleContext(0, LambdaParametersContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lambdaLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaLiteral) {
            listener.enterLambdaLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaLiteral) {
            listener.exitLambdaLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaLiteral) {
            return visitor.visitLambdaLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaLiteralContext = LambdaLiteralContext;
class LambdaParametersContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaParameter(i) {
        if (i === undefined) {
            return this.getRuleContexts(LambdaParameterContext);
        }
        else {
            return this.getRuleContext(i, LambdaParameterContext);
        }
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lambdaParameters; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaParameters) {
            listener.enterLambdaParameters(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaParameters) {
            listener.exitLambdaParameters(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaParameters) {
            return visitor.visitLambdaParameters(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaParametersContext = LambdaParametersContext;
class LambdaParameterContext extends ParserRuleContext_1.ParserRuleContext {
    variableDeclaration() {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    multiVariableDeclaration() {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_lambdaParameter; }
    // @Override
    enterRule(listener) {
        if (listener.enterLambdaParameter) {
            listener.enterLambdaParameter(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLambdaParameter) {
            listener.exitLambdaParameter(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLambdaParameter) {
            return visitor.visitLambdaParameter(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LambdaParameterContext = LambdaParameterContext;
class AnonymousFunctionContext extends ParserRuleContext_1.ParserRuleContext {
    FUN() { return this.getToken(KotlinParser.FUN, 0); }
    functionValueParameters() {
        return this.getRuleContext(0, FunctionValueParametersContext);
    }
    type_(i) {
        if (i === undefined) {
            return this.getRuleContexts(Type_Context);
        }
        else {
            return this.getRuleContext(i, Type_Context);
        }
    }
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    typeConstraints() {
        return this.tryGetRuleContext(0, TypeConstraintsContext);
    }
    functionBody() {
        return this.tryGetRuleContext(0, FunctionBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_anonymousFunction; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnonymousFunction) {
            listener.enterAnonymousFunction(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnonymousFunction) {
            listener.exitAnonymousFunction(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnonymousFunction) {
            return visitor.visitAnonymousFunction(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnonymousFunctionContext = AnonymousFunctionContext;
class FunctionLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    lambdaLiteral() {
        return this.tryGetRuleContext(0, LambdaLiteralContext);
    }
    anonymousFunction() {
        return this.tryGetRuleContext(0, AnonymousFunctionContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionLiteral) {
            listener.enterFunctionLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionLiteral) {
            listener.exitFunctionLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionLiteral) {
            return visitor.visitFunctionLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionLiteralContext = FunctionLiteralContext;
class ObjectLiteralContext extends ParserRuleContext_1.ParserRuleContext {
    OBJECT() { return this.getToken(KotlinParser.OBJECT, 0); }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    delegationSpecifiers() {
        return this.tryGetRuleContext(0, DelegationSpecifiersContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    classBody() {
        return this.tryGetRuleContext(0, ClassBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_objectLiteral; }
    // @Override
    enterRule(listener) {
        if (listener.enterObjectLiteral) {
            listener.enterObjectLiteral(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitObjectLiteral) {
            listener.exitObjectLiteral(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitObjectLiteral) {
            return visitor.visitObjectLiteral(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ObjectLiteralContext = ObjectLiteralContext;
class ThisExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    THIS() { return this.tryGetToken(KotlinParser.THIS, 0); }
    THIS_AT() { return this.tryGetToken(KotlinParser.THIS_AT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_thisExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterThisExpression) {
            listener.enterThisExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitThisExpression) {
            listener.exitThisExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitThisExpression) {
            return visitor.visitThisExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ThisExpressionContext = ThisExpressionContext;
class SuperExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    SUPER() { return this.tryGetToken(KotlinParser.SUPER, 0); }
    LANGLE() { return this.tryGetToken(KotlinParser.LANGLE, 0); }
    type_() {
        return this.tryGetRuleContext(0, Type_Context);
    }
    RANGLE() { return this.tryGetToken(KotlinParser.RANGLE, 0); }
    AT() { return this.tryGetToken(KotlinParser.AT, 0); }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    SUPER_AT() { return this.tryGetToken(KotlinParser.SUPER_AT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_superExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterSuperExpression) {
            listener.enterSuperExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSuperExpression) {
            listener.exitSuperExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSuperExpression) {
            return visitor.visitSuperExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SuperExpressionContext = SuperExpressionContext;
class ControlStructureBodyContext extends ParserRuleContext_1.ParserRuleContext {
    block() {
        return this.tryGetRuleContext(0, BlockContext);
    }
    statement() {
        return this.tryGetRuleContext(0, StatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_controlStructureBody; }
    // @Override
    enterRule(listener) {
        if (listener.enterControlStructureBody) {
            listener.enterControlStructureBody(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitControlStructureBody) {
            listener.exitControlStructureBody(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitControlStructureBody) {
            return visitor.visitControlStructureBody(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ControlStructureBodyContext = ControlStructureBodyContext;
class IfExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    IF() { return this.getToken(KotlinParser.IF, 0); }
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    controlStructureBody(i) {
        if (i === undefined) {
            return this.getRuleContexts(ControlStructureBodyContext);
        }
        else {
            return this.getRuleContext(i, ControlStructureBodyContext);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    ELSE() { return this.tryGetToken(KotlinParser.ELSE, 0); }
    SEMICOLON() { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_ifExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterIfExpression) {
            listener.enterIfExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIfExpression) {
            listener.exitIfExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIfExpression) {
            return visitor.visitIfExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IfExpressionContext = IfExpressionContext;
class WhenExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    WHEN() { return this.getToken(KotlinParser.WHEN, 0); }
    LCURL() { return this.getToken(KotlinParser.LCURL, 0); }
    RCURL() { return this.getToken(KotlinParser.RCURL, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    LPAREN() { return this.tryGetToken(KotlinParser.LPAREN, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.tryGetToken(KotlinParser.RPAREN, 0); }
    whenEntry(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenEntryContext);
        }
        else {
            return this.getRuleContext(i, WhenEntryContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_whenExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhenExpression) {
            listener.enterWhenExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhenExpression) {
            listener.exitWhenExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhenExpression) {
            return visitor.visitWhenExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhenExpressionContext = WhenExpressionContext;
class WhenEntryContext extends ParserRuleContext_1.ParserRuleContext {
    whenCondition(i) {
        if (i === undefined) {
            return this.getRuleContexts(WhenConditionContext);
        }
        else {
            return this.getRuleContext(i, WhenConditionContext);
        }
    }
    ARROW() { return this.getToken(KotlinParser.ARROW, 0); }
    controlStructureBody() {
        return this.getRuleContext(0, ControlStructureBodyContext);
    }
    COMMA(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.COMMA);
        }
        else {
            return this.getToken(KotlinParser.COMMA, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    semi() {
        return this.tryGetRuleContext(0, SemiContext);
    }
    ELSE() { return this.tryGetToken(KotlinParser.ELSE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_whenEntry; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhenEntry) {
            listener.enterWhenEntry(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhenEntry) {
            listener.exitWhenEntry(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhenEntry) {
            return visitor.visitWhenEntry(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhenEntryContext = WhenEntryContext;
class WhenConditionContext extends ParserRuleContext_1.ParserRuleContext {
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    rangeTest() {
        return this.tryGetRuleContext(0, RangeTestContext);
    }
    typeTest() {
        return this.tryGetRuleContext(0, TypeTestContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_whenCondition; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhenCondition) {
            listener.enterWhenCondition(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhenCondition) {
            listener.exitWhenCondition(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhenCondition) {
            return visitor.visitWhenCondition(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhenConditionContext = WhenConditionContext;
class RangeTestContext extends ParserRuleContext_1.ParserRuleContext {
    inOperator() {
        return this.getRuleContext(0, InOperatorContext);
    }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_rangeTest; }
    // @Override
    enterRule(listener) {
        if (listener.enterRangeTest) {
            listener.enterRangeTest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitRangeTest) {
            listener.exitRangeTest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitRangeTest) {
            return visitor.visitRangeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.RangeTestContext = RangeTestContext;
class TypeTestContext extends ParserRuleContext_1.ParserRuleContext {
    isOperator() {
        return this.getRuleContext(0, IsOperatorContext);
    }
    type_() {
        return this.getRuleContext(0, Type_Context);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_typeTest; }
    // @Override
    enterRule(listener) {
        if (listener.enterTypeTest) {
            listener.enterTypeTest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTypeTest) {
            listener.exitTypeTest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTypeTest) {
            return visitor.visitTypeTest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TypeTestContext = TypeTestContext;
class TryExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    TRY() { return this.getToken(KotlinParser.TRY, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    finallyBlock() {
        return this.tryGetRuleContext(0, FinallyBlockContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    catchBlock(i) {
        if (i === undefined) {
            return this.getRuleContexts(CatchBlockContext);
        }
        else {
            return this.getRuleContext(i, CatchBlockContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_tryExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterTryExpression) {
            listener.enterTryExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitTryExpression) {
            listener.exitTryExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitTryExpression) {
            return visitor.visitTryExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.TryExpressionContext = TryExpressionContext;
class CatchBlockContext extends ParserRuleContext_1.ParserRuleContext {
    CATCH() { return this.getToken(KotlinParser.CATCH, 0); }
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    simpleIdentifier() {
        return this.getRuleContext(0, SimpleIdentifierContext);
    }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    userType() {
        return this.getRuleContext(0, UserTypeContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_catchBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterCatchBlock) {
            listener.enterCatchBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCatchBlock) {
            listener.exitCatchBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCatchBlock) {
            return visitor.visitCatchBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CatchBlockContext = CatchBlockContext;
class FinallyBlockContext extends ParserRuleContext_1.ParserRuleContext {
    FINALLY() { return this.getToken(KotlinParser.FINALLY, 0); }
    block() {
        return this.getRuleContext(0, BlockContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_finallyBlock; }
    // @Override
    enterRule(listener) {
        if (listener.enterFinallyBlock) {
            listener.enterFinallyBlock(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFinallyBlock) {
            listener.exitFinallyBlock(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFinallyBlock) {
            return visitor.visitFinallyBlock(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FinallyBlockContext = FinallyBlockContext;
class LoopStatementContext extends ParserRuleContext_1.ParserRuleContext {
    forStatement() {
        return this.tryGetRuleContext(0, ForStatementContext);
    }
    whileStatement() {
        return this.tryGetRuleContext(0, WhileStatementContext);
    }
    doWhileStatement() {
        return this.tryGetRuleContext(0, DoWhileStatementContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_loopStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterLoopStatement) {
            listener.enterLoopStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLoopStatement) {
            listener.exitLoopStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLoopStatement) {
            return visitor.visitLoopStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LoopStatementContext = LoopStatementContext;
class ForStatementContext extends ParserRuleContext_1.ParserRuleContext {
    FOR() { return this.getToken(KotlinParser.FOR, 0); }
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    IN() { return this.getToken(KotlinParser.IN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    variableDeclaration() {
        return this.tryGetRuleContext(0, VariableDeclarationContext);
    }
    multiVariableDeclaration() {
        return this.tryGetRuleContext(0, MultiVariableDeclarationContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    controlStructureBody() {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_forStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterForStatement) {
            listener.enterForStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitForStatement) {
            listener.exitForStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitForStatement) {
            return visitor.visitForStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ForStatementContext = ForStatementContext;
class WhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    WHILE() { return this.getToken(KotlinParser.WHILE, 0); }
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    controlStructureBody() {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    SEMICOLON() { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_whileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterWhileStatement) {
            listener.enterWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitWhileStatement) {
            listener.exitWhileStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitWhileStatement) {
            return visitor.visitWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.WhileStatementContext = WhileStatementContext;
class DoWhileStatementContext extends ParserRuleContext_1.ParserRuleContext {
    DO() { return this.getToken(KotlinParser.DO, 0); }
    WHILE() { return this.getToken(KotlinParser.WHILE, 0); }
    LPAREN() { return this.getToken(KotlinParser.LPAREN, 0); }
    expression() {
        return this.getRuleContext(0, ExpressionContext);
    }
    RPAREN() { return this.getToken(KotlinParser.RPAREN, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    controlStructureBody() {
        return this.tryGetRuleContext(0, ControlStructureBodyContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_doWhileStatement; }
    // @Override
    enterRule(listener) {
        if (listener.enterDoWhileStatement) {
            listener.enterDoWhileStatement(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitDoWhileStatement) {
            listener.exitDoWhileStatement(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitDoWhileStatement) {
            return visitor.visitDoWhileStatement(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.DoWhileStatementContext = DoWhileStatementContext;
class JumpExpressionContext extends ParserRuleContext_1.ParserRuleContext {
    THROW() { return this.tryGetToken(KotlinParser.THROW, 0); }
    expression() {
        return this.tryGetRuleContext(0, ExpressionContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    RETURN() { return this.tryGetToken(KotlinParser.RETURN, 0); }
    RETURN_AT() { return this.tryGetToken(KotlinParser.RETURN_AT, 0); }
    CONTINUE() { return this.tryGetToken(KotlinParser.CONTINUE, 0); }
    CONTINUE_AT() { return this.tryGetToken(KotlinParser.CONTINUE_AT, 0); }
    BREAK() { return this.tryGetToken(KotlinParser.BREAK, 0); }
    BREAK_AT() { return this.tryGetToken(KotlinParser.BREAK_AT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_jumpExpression; }
    // @Override
    enterRule(listener) {
        if (listener.enterJumpExpression) {
            listener.enterJumpExpression(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitJumpExpression) {
            listener.exitJumpExpression(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitJumpExpression) {
            return visitor.visitJumpExpression(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.JumpExpressionContext = JumpExpressionContext;
class CallableReferenceContext extends ParserRuleContext_1.ParserRuleContext {
    COLONCOLON() { return this.tryGetToken(KotlinParser.COLONCOLON, 0); }
    simpleIdentifier() {
        return this.tryGetRuleContext(0, SimpleIdentifierContext);
    }
    CLASS() { return this.tryGetToken(KotlinParser.CLASS, 0); }
    receiverType() {
        return this.tryGetRuleContext(0, ReceiverTypeContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_callableReference; }
    // @Override
    enterRule(listener) {
        if (listener.enterCallableReference) {
            listener.enterCallableReference(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitCallableReference) {
            listener.exitCallableReference(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitCallableReference) {
            return visitor.visitCallableReference(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.CallableReferenceContext = CallableReferenceContext;
class AssignmentAndOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    ADD_ASSIGNMENT() { return this.tryGetToken(KotlinParser.ADD_ASSIGNMENT, 0); }
    SUB_ASSIGNMENT() { return this.tryGetToken(KotlinParser.SUB_ASSIGNMENT, 0); }
    MULT_ASSIGNMENT() { return this.tryGetToken(KotlinParser.MULT_ASSIGNMENT, 0); }
    DIV_ASSIGNMENT() { return this.tryGetToken(KotlinParser.DIV_ASSIGNMENT, 0); }
    MOD_ASSIGNMENT() { return this.tryGetToken(KotlinParser.MOD_ASSIGNMENT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_assignmentAndOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAssignmentAndOperator) {
            listener.enterAssignmentAndOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAssignmentAndOperator) {
            listener.exitAssignmentAndOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAssignmentAndOperator) {
            return visitor.visitAssignmentAndOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AssignmentAndOperatorContext = AssignmentAndOperatorContext;
class EqualityOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    EXCL_EQ() { return this.tryGetToken(KotlinParser.EXCL_EQ, 0); }
    EXCL_EQEQ() { return this.tryGetToken(KotlinParser.EXCL_EQEQ, 0); }
    EQEQ() { return this.tryGetToken(KotlinParser.EQEQ, 0); }
    EQEQEQ() { return this.tryGetToken(KotlinParser.EQEQEQ, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_equalityOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterEqualityOperator) {
            listener.enterEqualityOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitEqualityOperator) {
            listener.exitEqualityOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitEqualityOperator) {
            return visitor.visitEqualityOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.EqualityOperatorContext = EqualityOperatorContext;
class ComparisonOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    LANGLE() { return this.tryGetToken(KotlinParser.LANGLE, 0); }
    RANGLE() { return this.tryGetToken(KotlinParser.RANGLE, 0); }
    LE() { return this.tryGetToken(KotlinParser.LE, 0); }
    GE() { return this.tryGetToken(KotlinParser.GE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_comparisonOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterComparisonOperator) {
            listener.enterComparisonOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitComparisonOperator) {
            listener.exitComparisonOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitComparisonOperator) {
            return visitor.visitComparisonOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ComparisonOperatorContext = ComparisonOperatorContext;
class InOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    IN() { return this.tryGetToken(KotlinParser.IN, 0); }
    NOT_IN() { return this.tryGetToken(KotlinParser.NOT_IN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_inOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterInOperator) {
            listener.enterInOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInOperator) {
            listener.exitInOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInOperator) {
            return visitor.visitInOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InOperatorContext = InOperatorContext;
class IsOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    IS() { return this.tryGetToken(KotlinParser.IS, 0); }
    NOT_IS() { return this.tryGetToken(KotlinParser.NOT_IS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_isOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterIsOperator) {
            listener.enterIsOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIsOperator) {
            listener.exitIsOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIsOperator) {
            return visitor.visitIsOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IsOperatorContext = IsOperatorContext;
class AdditiveOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    ADD() { return this.tryGetToken(KotlinParser.ADD, 0); }
    SUB() { return this.tryGetToken(KotlinParser.SUB, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_additiveOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAdditiveOperator) {
            listener.enterAdditiveOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAdditiveOperator) {
            listener.exitAdditiveOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAdditiveOperator) {
            return visitor.visitAdditiveOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AdditiveOperatorContext = AdditiveOperatorContext;
class MultiplicativeOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    MULT() { return this.tryGetToken(KotlinParser.MULT, 0); }
    DIV() { return this.tryGetToken(KotlinParser.DIV, 0); }
    MOD() { return this.tryGetToken(KotlinParser.MOD, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiplicativeOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiplicativeOperator) {
            listener.enterMultiplicativeOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiplicativeOperator) {
            listener.exitMultiplicativeOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiplicativeOperator) {
            return visitor.visitMultiplicativeOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiplicativeOperatorContext = MultiplicativeOperatorContext;
class AsOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    AS() { return this.tryGetToken(KotlinParser.AS, 0); }
    AS_SAFE() { return this.tryGetToken(KotlinParser.AS_SAFE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_asOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterAsOperator) {
            listener.enterAsOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAsOperator) {
            listener.exitAsOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAsOperator) {
            return visitor.visitAsOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AsOperatorContext = AsOperatorContext;
class PrefixUnaryOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    INCR() { return this.tryGetToken(KotlinParser.INCR, 0); }
    DECR() { return this.tryGetToken(KotlinParser.DECR, 0); }
    SUB() { return this.tryGetToken(KotlinParser.SUB, 0); }
    ADD() { return this.tryGetToken(KotlinParser.ADD, 0); }
    excl() {
        return this.tryGetRuleContext(0, ExclContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_prefixUnaryOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterPrefixUnaryOperator) {
            listener.enterPrefixUnaryOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPrefixUnaryOperator) {
            listener.exitPrefixUnaryOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPrefixUnaryOperator) {
            return visitor.visitPrefixUnaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PrefixUnaryOperatorContext = PrefixUnaryOperatorContext;
class PostfixUnaryOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    INCR() { return this.tryGetToken(KotlinParser.INCR, 0); }
    DECR() { return this.tryGetToken(KotlinParser.DECR, 0); }
    EXCL_NO_WS() { return this.tryGetToken(KotlinParser.EXCL_NO_WS, 0); }
    excl() {
        return this.tryGetRuleContext(0, ExclContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_postfixUnaryOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterPostfixUnaryOperator) {
            listener.enterPostfixUnaryOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPostfixUnaryOperator) {
            listener.exitPostfixUnaryOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPostfixUnaryOperator) {
            return visitor.visitPostfixUnaryOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PostfixUnaryOperatorContext = PostfixUnaryOperatorContext;
class MemberAccessOperatorContext extends ParserRuleContext_1.ParserRuleContext {
    DOT() { return this.tryGetToken(KotlinParser.DOT, 0); }
    safeNav() {
        return this.tryGetRuleContext(0, SafeNavContext);
    }
    COLONCOLON() { return this.tryGetToken(KotlinParser.COLONCOLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_memberAccessOperator; }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberAccessOperator) {
            listener.enterMemberAccessOperator(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberAccessOperator) {
            listener.exitMemberAccessOperator(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberAccessOperator) {
            return visitor.visitMemberAccessOperator(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberAccessOperatorContext = MemberAccessOperatorContext;
class ModifiersContext extends ParserRuleContext_1.ParserRuleContext {
    annotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(AnnotationContext);
        }
        else {
            return this.getRuleContext(i, AnnotationContext);
        }
    }
    modifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(ModifierContext);
        }
        else {
            return this.getRuleContext(i, ModifierContext);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_modifiers; }
    // @Override
    enterRule(listener) {
        if (listener.enterModifiers) {
            listener.enterModifiers(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModifiers) {
            listener.exitModifiers(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModifiers) {
            return visitor.visitModifiers(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModifiersContext = ModifiersContext;
class ModifierContext extends ParserRuleContext_1.ParserRuleContext {
    classModifier() {
        return this.tryGetRuleContext(0, ClassModifierContext);
    }
    memberModifier() {
        return this.tryGetRuleContext(0, MemberModifierContext);
    }
    visibilityModifier() {
        return this.tryGetRuleContext(0, VisibilityModifierContext);
    }
    functionModifier() {
        return this.tryGetRuleContext(0, FunctionModifierContext);
    }
    propertyModifier() {
        return this.tryGetRuleContext(0, PropertyModifierContext);
    }
    inheritanceModifier() {
        return this.tryGetRuleContext(0, InheritanceModifierContext);
    }
    parameterModifier() {
        return this.tryGetRuleContext(0, ParameterModifierContext);
    }
    platformModifier() {
        return this.tryGetRuleContext(0, PlatformModifierContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_modifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterModifier) {
            listener.enterModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitModifier) {
            listener.exitModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitModifier) {
            return visitor.visitModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ModifierContext = ModifierContext;
class ClassModifierContext extends ParserRuleContext_1.ParserRuleContext {
    ENUM() { return this.tryGetToken(KotlinParser.ENUM, 0); }
    SEALED() { return this.tryGetToken(KotlinParser.SEALED, 0); }
    ANNOTATION() { return this.tryGetToken(KotlinParser.ANNOTATION, 0); }
    DATA() { return this.tryGetToken(KotlinParser.DATA, 0); }
    INNER() { return this.tryGetToken(KotlinParser.INNER, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_classModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterClassModifier) {
            listener.enterClassModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitClassModifier) {
            listener.exitClassModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitClassModifier) {
            return visitor.visitClassModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ClassModifierContext = ClassModifierContext;
class MemberModifierContext extends ParserRuleContext_1.ParserRuleContext {
    OVERRIDE() { return this.tryGetToken(KotlinParser.OVERRIDE, 0); }
    LATEINIT() { return this.tryGetToken(KotlinParser.LATEINIT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_memberModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterMemberModifier) {
            listener.enterMemberModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMemberModifier) {
            listener.exitMemberModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMemberModifier) {
            return visitor.visitMemberModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MemberModifierContext = MemberModifierContext;
class VisibilityModifierContext extends ParserRuleContext_1.ParserRuleContext {
    PUBLIC() { return this.tryGetToken(KotlinParser.PUBLIC, 0); }
    PRIVATE() { return this.tryGetToken(KotlinParser.PRIVATE, 0); }
    INTERNAL() { return this.tryGetToken(KotlinParser.INTERNAL, 0); }
    PROTECTED() { return this.tryGetToken(KotlinParser.PROTECTED, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_visibilityModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterVisibilityModifier) {
            listener.enterVisibilityModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVisibilityModifier) {
            listener.exitVisibilityModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVisibilityModifier) {
            return visitor.visitVisibilityModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VisibilityModifierContext = VisibilityModifierContext;
class VarianceModifierContext extends ParserRuleContext_1.ParserRuleContext {
    IN() { return this.tryGetToken(KotlinParser.IN, 0); }
    OUT() { return this.tryGetToken(KotlinParser.OUT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_varianceModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterVarianceModifier) {
            listener.enterVarianceModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitVarianceModifier) {
            listener.exitVarianceModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitVarianceModifier) {
            return visitor.visitVarianceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.VarianceModifierContext = VarianceModifierContext;
class FunctionModifierContext extends ParserRuleContext_1.ParserRuleContext {
    TAILREC() { return this.tryGetToken(KotlinParser.TAILREC, 0); }
    OPERATOR() { return this.tryGetToken(KotlinParser.OPERATOR, 0); }
    INFIX() { return this.tryGetToken(KotlinParser.INFIX, 0); }
    INLINE() { return this.tryGetToken(KotlinParser.INLINE, 0); }
    EXTERNAL() { return this.tryGetToken(KotlinParser.EXTERNAL, 0); }
    SUSPEND() { return this.tryGetToken(KotlinParser.SUSPEND, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_functionModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterFunctionModifier) {
            listener.enterFunctionModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitFunctionModifier) {
            listener.exitFunctionModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitFunctionModifier) {
            return visitor.visitFunctionModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.FunctionModifierContext = FunctionModifierContext;
class PropertyModifierContext extends ParserRuleContext_1.ParserRuleContext {
    CONST() { return this.getToken(KotlinParser.CONST, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_propertyModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterPropertyModifier) {
            listener.enterPropertyModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPropertyModifier) {
            listener.exitPropertyModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPropertyModifier) {
            return visitor.visitPropertyModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PropertyModifierContext = PropertyModifierContext;
class InheritanceModifierContext extends ParserRuleContext_1.ParserRuleContext {
    ABSTRACT() { return this.tryGetToken(KotlinParser.ABSTRACT, 0); }
    FINAL() { return this.tryGetToken(KotlinParser.FINAL, 0); }
    OPEN() { return this.tryGetToken(KotlinParser.OPEN, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_inheritanceModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterInheritanceModifier) {
            listener.enterInheritanceModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitInheritanceModifier) {
            listener.exitInheritanceModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitInheritanceModifier) {
            return visitor.visitInheritanceModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.InheritanceModifierContext = InheritanceModifierContext;
class ParameterModifierContext extends ParserRuleContext_1.ParserRuleContext {
    VARARG() { return this.tryGetToken(KotlinParser.VARARG, 0); }
    NOINLINE() { return this.tryGetToken(KotlinParser.NOINLINE, 0); }
    CROSSINLINE() { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_parameterModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterParameterModifier) {
            listener.enterParameterModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitParameterModifier) {
            listener.exitParameterModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitParameterModifier) {
            return visitor.visitParameterModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ParameterModifierContext = ParameterModifierContext;
class ReificationModifierContext extends ParserRuleContext_1.ParserRuleContext {
    REIFIED() { return this.getToken(KotlinParser.REIFIED, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_reificationModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterReificationModifier) {
            listener.enterReificationModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitReificationModifier) {
            listener.exitReificationModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitReificationModifier) {
            return visitor.visitReificationModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ReificationModifierContext = ReificationModifierContext;
class PlatformModifierContext extends ParserRuleContext_1.ParserRuleContext {
    EXPECT() { return this.tryGetToken(KotlinParser.EXPECT, 0); }
    ACTUAL() { return this.tryGetToken(KotlinParser.ACTUAL, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_platformModifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterPlatformModifier) {
            listener.enterPlatformModifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitPlatformModifier) {
            listener.exitPlatformModifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitPlatformModifier) {
            return visitor.visitPlatformModifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.PlatformModifierContext = PlatformModifierContext;
class LabelContext extends ParserRuleContext_1.ParserRuleContext {
    IdentifierAt() { return this.getToken(KotlinParser.IdentifierAt, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_label; }
    // @Override
    enterRule(listener) {
        if (listener.enterLabel) {
            listener.enterLabel(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitLabel) {
            listener.exitLabel(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitLabel) {
            return visitor.visitLabel(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.LabelContext = LabelContext;
class AnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    singleAnnotation() {
        return this.tryGetRuleContext(0, SingleAnnotationContext);
    }
    multiAnnotation() {
        return this.tryGetRuleContext(0, MultiAnnotationContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_annotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotation) {
            listener.enterAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotation) {
            listener.exitAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotation) {
            return visitor.visitAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationContext = AnnotationContext;
class SingleAnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    annotationUseSiteTarget() {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    unescapedAnnotation() {
        return this.getRuleContext(0, UnescapedAnnotationContext);
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    AT() { return this.tryGetToken(KotlinParser.AT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_singleAnnotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterSingleAnnotation) {
            listener.enterSingleAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSingleAnnotation) {
            listener.exitSingleAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSingleAnnotation) {
            return visitor.visitSingleAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SingleAnnotationContext = SingleAnnotationContext;
class MultiAnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    annotationUseSiteTarget() {
        return this.tryGetRuleContext(0, AnnotationUseSiteTargetContext);
    }
    COLON() { return this.tryGetToken(KotlinParser.COLON, 0); }
    LSQUARE() { return this.getToken(KotlinParser.LSQUARE, 0); }
    RSQUARE() { return this.getToken(KotlinParser.RSQUARE, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    unescapedAnnotation(i) {
        if (i === undefined) {
            return this.getRuleContexts(UnescapedAnnotationContext);
        }
        else {
            return this.getRuleContext(i, UnescapedAnnotationContext);
        }
    }
    AT() { return this.tryGetToken(KotlinParser.AT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_multiAnnotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterMultiAnnotation) {
            listener.enterMultiAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitMultiAnnotation) {
            listener.exitMultiAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitMultiAnnotation) {
            return visitor.visitMultiAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.MultiAnnotationContext = MultiAnnotationContext;
class AnnotationUseSiteTargetContext extends ParserRuleContext_1.ParserRuleContext {
    AT_FIELD() { return this.tryGetToken(KotlinParser.AT_FIELD, 0); }
    AT_PROPERTY() { return this.tryGetToken(KotlinParser.AT_PROPERTY, 0); }
    AT_GET() { return this.tryGetToken(KotlinParser.AT_GET, 0); }
    AT_SET() { return this.tryGetToken(KotlinParser.AT_SET, 0); }
    AT_RECEIVER() { return this.tryGetToken(KotlinParser.AT_RECEIVER, 0); }
    AT_PARAM() { return this.tryGetToken(KotlinParser.AT_PARAM, 0); }
    AT_SETPARAM() { return this.tryGetToken(KotlinParser.AT_SETPARAM, 0); }
    AT_DELEGATE() { return this.tryGetToken(KotlinParser.AT_DELEGATE, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_annotationUseSiteTarget; }
    // @Override
    enterRule(listener) {
        if (listener.enterAnnotationUseSiteTarget) {
            listener.enterAnnotationUseSiteTarget(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitAnnotationUseSiteTarget) {
            listener.exitAnnotationUseSiteTarget(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitAnnotationUseSiteTarget) {
            return visitor.visitAnnotationUseSiteTarget(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.AnnotationUseSiteTargetContext = AnnotationUseSiteTargetContext;
class UnescapedAnnotationContext extends ParserRuleContext_1.ParserRuleContext {
    constructorInvocation() {
        return this.tryGetRuleContext(0, ConstructorInvocationContext);
    }
    userType() {
        return this.tryGetRuleContext(0, UserTypeContext);
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_unescapedAnnotation; }
    // @Override
    enterRule(listener) {
        if (listener.enterUnescapedAnnotation) {
            listener.enterUnescapedAnnotation(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitUnescapedAnnotation) {
            listener.exitUnescapedAnnotation(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitUnescapedAnnotation) {
            return visitor.visitUnescapedAnnotation(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.UnescapedAnnotationContext = UnescapedAnnotationContext;
class SimpleIdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    Identifier() { return this.tryGetToken(KotlinParser.Identifier, 0); }
    ABSTRACT() { return this.tryGetToken(KotlinParser.ABSTRACT, 0); }
    ANNOTATION() { return this.tryGetToken(KotlinParser.ANNOTATION, 0); }
    BY() { return this.tryGetToken(KotlinParser.BY, 0); }
    CATCH() { return this.tryGetToken(KotlinParser.CATCH, 0); }
    COMPANION() { return this.tryGetToken(KotlinParser.COMPANION, 0); }
    CONSTRUCTOR() { return this.tryGetToken(KotlinParser.CONSTRUCTOR, 0); }
    CROSSINLINE() { return this.tryGetToken(KotlinParser.CROSSINLINE, 0); }
    DATA() { return this.tryGetToken(KotlinParser.DATA, 0); }
    DYNAMIC() { return this.tryGetToken(KotlinParser.DYNAMIC, 0); }
    ENUM() { return this.tryGetToken(KotlinParser.ENUM, 0); }
    EXTERNAL() { return this.tryGetToken(KotlinParser.EXTERNAL, 0); }
    FINAL() { return this.tryGetToken(KotlinParser.FINAL, 0); }
    FINALLY() { return this.tryGetToken(KotlinParser.FINALLY, 0); }
    GETTER() { return this.tryGetToken(KotlinParser.GETTER, 0); }
    IMPORT() { return this.tryGetToken(KotlinParser.IMPORT, 0); }
    INFIX() { return this.tryGetToken(KotlinParser.INFIX, 0); }
    INIT() { return this.tryGetToken(KotlinParser.INIT, 0); }
    INLINE() { return this.tryGetToken(KotlinParser.INLINE, 0); }
    INNER() { return this.tryGetToken(KotlinParser.INNER, 0); }
    INTERNAL() { return this.tryGetToken(KotlinParser.INTERNAL, 0); }
    LATEINIT() { return this.tryGetToken(KotlinParser.LATEINIT, 0); }
    NOINLINE() { return this.tryGetToken(KotlinParser.NOINLINE, 0); }
    OPEN() { return this.tryGetToken(KotlinParser.OPEN, 0); }
    OPERATOR() { return this.tryGetToken(KotlinParser.OPERATOR, 0); }
    OUT() { return this.tryGetToken(KotlinParser.OUT, 0); }
    OVERRIDE() { return this.tryGetToken(KotlinParser.OVERRIDE, 0); }
    PRIVATE() { return this.tryGetToken(KotlinParser.PRIVATE, 0); }
    PROTECTED() { return this.tryGetToken(KotlinParser.PROTECTED, 0); }
    PUBLIC() { return this.tryGetToken(KotlinParser.PUBLIC, 0); }
    REIFIED() { return this.tryGetToken(KotlinParser.REIFIED, 0); }
    SEALED() { return this.tryGetToken(KotlinParser.SEALED, 0); }
    TAILREC() { return this.tryGetToken(KotlinParser.TAILREC, 0); }
    SETTER() { return this.tryGetToken(KotlinParser.SETTER, 0); }
    VARARG() { return this.tryGetToken(KotlinParser.VARARG, 0); }
    WHERE() { return this.tryGetToken(KotlinParser.WHERE, 0); }
    EXPECT() { return this.tryGetToken(KotlinParser.EXPECT, 0); }
    ACTUAL() { return this.tryGetToken(KotlinParser.ACTUAL, 0); }
    CONST() { return this.tryGetToken(KotlinParser.CONST, 0); }
    SUSPEND() { return this.tryGetToken(KotlinParser.SUSPEND, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_simpleIdentifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterSimpleIdentifier) {
            listener.enterSimpleIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSimpleIdentifier) {
            listener.exitSimpleIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSimpleIdentifier) {
            return visitor.visitSimpleIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SimpleIdentifierContext = SimpleIdentifierContext;
class IdentifierContext extends ParserRuleContext_1.ParserRuleContext {
    simpleIdentifier(i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleIdentifierContext);
        }
        else {
            return this.getRuleContext(i, SimpleIdentifierContext);
        }
    }
    DOT(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.DOT);
        }
        else {
            return this.getToken(KotlinParser.DOT, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_identifier; }
    // @Override
    enterRule(listener) {
        if (listener.enterIdentifier) {
            listener.enterIdentifier(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitIdentifier) {
            listener.exitIdentifier(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.IdentifierContext = IdentifierContext;
class ShebangLineContext extends ParserRuleContext_1.ParserRuleContext {
    ShebangLine() { return this.getToken(KotlinParser.ShebangLine, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_shebangLine; }
    // @Override
    enterRule(listener) {
        if (listener.enterShebangLine) {
            listener.enterShebangLine(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitShebangLine) {
            listener.exitShebangLine(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitShebangLine) {
            return visitor.visitShebangLine(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ShebangLineContext = ShebangLineContext;
class QuestContext extends ParserRuleContext_1.ParserRuleContext {
    QUEST_NO_WS() { return this.tryGetToken(KotlinParser.QUEST_NO_WS, 0); }
    QUEST_WS() { return this.tryGetToken(KotlinParser.QUEST_WS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_quest; }
    // @Override
    enterRule(listener) {
        if (listener.enterQuest) {
            listener.enterQuest(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitQuest) {
            listener.exitQuest(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitQuest) {
            return visitor.visitQuest(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.QuestContext = QuestContext;
class ElvisContext extends ParserRuleContext_1.ParserRuleContext {
    QUEST_NO_WS() { return this.getToken(KotlinParser.QUEST_NO_WS, 0); }
    COLON() { return this.getToken(KotlinParser.COLON, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_elvis; }
    // @Override
    enterRule(listener) {
        if (listener.enterElvis) {
            listener.enterElvis(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitElvis) {
            listener.exitElvis(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitElvis) {
            return visitor.visitElvis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ElvisContext = ElvisContext;
class SafeNavContext extends ParserRuleContext_1.ParserRuleContext {
    QUEST_NO_WS() { return this.getToken(KotlinParser.QUEST_NO_WS, 0); }
    DOT() { return this.getToken(KotlinParser.DOT, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_safeNav; }
    // @Override
    enterRule(listener) {
        if (listener.enterSafeNav) {
            listener.enterSafeNav(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSafeNav) {
            listener.exitSafeNav(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSafeNav) {
            return visitor.visitSafeNav(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SafeNavContext = SafeNavContext;
class ExclContext extends ParserRuleContext_1.ParserRuleContext {
    EXCL_NO_WS() { return this.tryGetToken(KotlinParser.EXCL_NO_WS, 0); }
    EXCL_WS() { return this.tryGetToken(KotlinParser.EXCL_WS, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_excl; }
    // @Override
    enterRule(listener) {
        if (listener.enterExcl) {
            listener.enterExcl(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitExcl) {
            listener.exitExcl(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitExcl) {
            return visitor.visitExcl(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.ExclContext = ExclContext;
class SemiContext extends ParserRuleContext_1.ParserRuleContext {
    SEMICOLON() { return this.tryGetToken(KotlinParser.SEMICOLON, 0); }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(KotlinParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_semi; }
    // @Override
    enterRule(listener) {
        if (listener.enterSemi) {
            listener.enterSemi(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSemi) {
            listener.exitSemi(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSemi) {
            return visitor.visitSemi(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SemiContext = SemiContext;
class SemisContext extends ParserRuleContext_1.ParserRuleContext {
    SEMICOLON(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.SEMICOLON);
        }
        else {
            return this.getToken(KotlinParser.SEMICOLON, i);
        }
    }
    NL(i) {
        if (i === undefined) {
            return this.getTokens(KotlinParser.NL);
        }
        else {
            return this.getToken(KotlinParser.NL, i);
        }
    }
    EOF() { return this.tryGetToken(KotlinParser.EOF, 0); }
    constructor(parent, invokingState) {
        super(parent, invokingState);
    }
    // @Override
    get ruleIndex() { return KotlinParser.RULE_semis; }
    // @Override
    enterRule(listener) {
        if (listener.enterSemis) {
            listener.enterSemis(this);
        }
    }
    // @Override
    exitRule(listener) {
        if (listener.exitSemis) {
            listener.exitSemis(this);
        }
    }
    // @Override
    accept(visitor) {
        if (visitor.visitSemis) {
            return visitor.visitSemis(this);
        }
        else {
            return visitor.visitChildren(this);
        }
    }
}
exports.SemisContext = SemisContext;
