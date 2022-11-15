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
let quotes;
document.addEventListener('DOMContentLoaded', () => {
    getJson();
    console.log('JSON loaded');
    document.getElementById('getQuotes').addEventListener('click', () => {
        quotes.quotes.sort(function (a, b) {
            if (a.author < b.author) {
                return -1;
            }
            else if (a.author > b.author) {
                return 1;
            }
            else {
                return 0;
            }
        });
        let list = document.createElement('ul');
        for (let q of quotes.quotes) {
            let listItem = document.createElement('li');
            listItem.innerHTML = q.author + ": " + q.quote;
            list.appendChild(listItem);
        }
    });
});
function getJson() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("./quotes.json");
        quotes = yield response.json();
    });
}
