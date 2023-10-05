"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const KotlinParser_1 = require("./../antlr4_res/KotlinParser");
class SyntaxTreeGenerator {
    constructor(sourceCode) {
        this.inputStream = new antlr4ts_1.ANTLRInputStream(sourceCode);
    }
    applyLexer(Lexer) {
        this.lexer = new Lexer(this.inputStream);
        return this;
    }
    applyParser(Parser) {
        this.tokenStream = new antlr4ts_1.CommonTokenStream(this.lexer);
        this.parser = new Parser(this.tokenStream);
        return this;
    }
    applyCustomError(CustomError) {
        this.parser.removeErrorListeners();
        this.error = new CustomError();
        this.parser.addErrorListener(this.error);
        return this;
    }
    generate() {
        this.tree = this.parser.kotlinFile();
        return this;
    }
    applyVisitor(CustomVisitor) {
        this.visitor = new CustomVisitor();
        this.visitor.visit(this.tree);
        return this;
    }
    build() {
        return this;
    }
    initError() {
        this.error.errorArray = [];
    }
    getErrorArray() {
        return this.error.errorArray;
    }
    getTypeName(type) {
        return KotlinParser_1.KotlinParser.VOCABULARY.getLiteralName(type);
    }
}
exports.default = SyntaxTreeGenerator;
