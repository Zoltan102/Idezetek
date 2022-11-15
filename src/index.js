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
            listItem.textContent = q.author + ": " + q.quote;
            list.appendChild(listItem);
        }
        document.body.appendChild(list);
    });
    document.getElementById('the').addEventListener('click', () => {
        let boldThe = [];
        for (let q of quotes.quotes) {
            boldThe.push(q.quote);
        }
        let list = document.createElement('ul');
        for (let i = 0; i < boldThe.length; i++) {
            boldThe[i] = boldThe[i].replace(new RegExp(/\b(the)\b|\b(The)\b/gm), makeBold("$1$2"));
            console.log(boldThe[i]);
            let listItem = document.createElement('li');
            listItem.innerHTML = boldThe[i];
            list.appendChild(listItem);
        }
        document.body.appendChild(list);
    });
    document.getElementById('length').addEventListener('click', () => {
        let lengths = [];
        for (let q of quotes.quotes) {
            lengths.push(q.quote.length);
        }
        let p = document.createElement('p');
        p.innerHTML = lengths.join();
        document.body.appendChild(p);
    });
    let author = document.getElementById('author');
    let checkBox = document.getElementById('checkBox');
    author.addEventListener('input', () => {
        let value = author.value.toLowerCase();
        let filteredQuotes = [];
        if (checkBox.checked) {
            filteredQuotes = quotes.quotes.filter(q => q.author.toLowerCase() === value);
            console.log(filteredQuotes);
        }
        else {
            filteredQuotes = [];
            for (let q of quotes.quotes) {
                if (q.author.toLowerCase().includes(value)) {
                    filteredQuotes.push(q);
                }
            }
            console.log(filteredQuotes);
        }
        let asd = filteredQuotes.length;
        let p = document.createElement('p');
        p.innerHTML = asd.toString();
        document.body.appendChild(p);
    });
});
function makeBold(str) {
    return "<b>" + str + "</b>";
}
function getJson() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch("./quotes.json");
        quotes = yield response.json();
    });
}
