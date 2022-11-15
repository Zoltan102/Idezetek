interface QuoteList {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
}

interface Quote {
  id: number;
  quote: string;
  author: string;
}


let quotes : QuoteList;

document.addEventListener('DOMContentLoaded', () => {

    getJson();
    console.log('JSON loaded');

    (document.getElementById('getQuotes') as HTMLInputElement).addEventListener('click', () => {
        quotes.quotes.sort(function (a, b){
            if (a.author < b.author){
                return -1;
            }else if(a.author > b.author){
                return 1;
            }else{
                return 0;
            }
        });
        let list = document.createElement('ul') as HTMLElement;
        for (let q of quotes.quotes){
            let listItem = document.createElement('li') as HTMLElement;
            listItem.innerHTML = q.author + ": " + q.quote;
            list.appendChild(listItem);
        }
    });

});

async function getJson() {
    let response = await fetch("./quotes.json");
    quotes = await response.json();
}