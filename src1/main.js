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
const plugin_json_1 = __importDefault(require("../plugin.json"));
const testTree_1 = require("./completion/grammar/manager/test/testTree");
class AcodePlugin {
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            alert('hello world');
            editorManager.on('switch-file', (file) => {
                alert("l'evenemnt fonctionne");
                const cond = file.name.endsWith('.kt');
                alert(cond);
                if (file) {
                    alert(file.name);
                }
                window.addEventListener('click', () => {
                    const acodeTest = new testTree_1.test();
                    alert(`Temps d'analyse => ${acodeTest.fin - acodeTest.depart} ms`);
                });
            });
        });
    }
    destroy() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
if (window.acode) {
    const acodePlugin = new AcodePlugin();
    acode.setPluginInit(plugin_json_1.default.id, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
        if (!baseUrl.endsWith('/')) {
            baseUrl += '/';
        }
        acodePlugin.baseUrl = baseUrl;
        acodePlugin.init($page, cacheFile, cacheFileUrl);
    });
    acode.setPluginUnmount(plugin_json_1.default.id, () => {
        acodePlugin.destroy();
    });
}
