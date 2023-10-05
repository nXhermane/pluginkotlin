"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const db = (0, knex_1.default)({
    client: 'sqlite3',
    connection: {
        filename: './database/auto_complt.db',
    },
    useNullAsDefault: true,
});
class daoManager {
    constructor(db) {
        this.db = db;
        this.searchkeyword("has");
    }
    searchkeyword(keyword) {
        return __awaiter(this, void 0, void 0, function* () {
            const result1 = yield this.db
                .select("*")
                .from("kotlin_native")
                .whereLike('global_keyword', `${keyword}%%`);
            const result2 = yield this.db
                .select("*")
                .from("kotlin_native_keyword")
                .whereLike('keyword', `${keyword}%%`);
            const table = result1.map((row) => (Object.assign(Object.assign({}, row), { active: true })));
            console.log(result1);
            result1.forEach(e => {
                console.log(e.id_native);
                console.log(e.global_keyword);
                console.log(JSON.parse(e.global_code));
            });
            result2.forEach(e => {
                console.log(e.id_keyword);
                console.log(e.keyword);
                console.log(e.keyword_type);
                console.log(e.keyword_code);
            });
        });
    }
    searchkeywordWithType(keyword, type) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
var daoInstance = new daoManager(db);
