"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const fs_1 = __importDefault(require("fs"));
const SyntaxTreeGenerator_1 = __importDefault(require("./../SyntaxTreeGenerator"));
const KotlinLexer_1 = require("./../../antlr4_res//KotlinLexer");
const KotlinParser_1 = require("./../../antlr4_res/KotlinParser");
const CustomErrorListener_1 = require("./../customClass/CustomErrorListener");
const CustomVisitor_1 = __importDefault(require("./../customClass/CustomVisitor"));
const sourceCode = fs_1.default.readFileSync('./test.kt', 'utf-8');
class test {
    constructor() {
        this.depart = Date.now();
        this.newTree = new SyntaxTreeGenerator_1.default(sourceCode)
            .applyLexer(KotlinLexer_1.KotlinLexer)
            .applyParser(KotlinParser_1.KotlinParser)
            .applyCustomError(CustomErrorListener_1.CustomErrorListener)
            .generate().applyVisitor(CustomVisitor_1.default).build();
        this.fin = Date.now();
        console.log(this.fin);
    }
}
exports.test = test;
