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
            listItem.textContent = q.author + ": " + q.quote;
            list.appendChild(listItem);
        }
        document.body.appendChild(list);
    });

    (document.getElementById('the') as HTMLInputElement).addEventListener('click', () => {
        let boldThe : string[] = [];
        for(let q of quotes.quotes){
            boldThe.push(q.quote);
        }
        let list = document.createElement('ul') as HTMLElement;
        for(let i = 0; i < boldThe.length; i++){
            boldThe[i] =  boldThe[i].replace(new RegExp(/\b(the)\b|\b(The)\b/gm), makeBold("$1$2"));
            console.log(boldThe[i])
            let listItem = document.createElement('li') as HTMLElement;
            listItem.innerHTML = boldThe[i];
            list.appendChild(listItem)
        }
        document.body.appendChild(list);
    });

    (document.getElementById('length') as HTMLElement).addEventListener('click', () => {
        let lengths : number[] = [];
        for(let q of quotes.quotes){
            lengths.push(q.quote.length);
        }
        let p = document.createElement('p') as HTMLElement;
        p.innerHTML = lengths.join();
        document.body.appendChild(p);
    });

    let author = document.getElementById('author') as HTMLInputElement;
    let checkBox = document.getElementById('checkBox') as HTMLInputElement;

    author.addEventListener('input', () => {
        let value = author.value.toLowerCase();
        let filteredQuotes = [];
        if(checkBox.checked){
            filteredQuotes = quotes.quotes.filter( q => q.author.toLowerCase() === value);
            console.log(filteredQuotes);
        }else{
            filteredQuotes = [];
            for (let q of quotes.quotes){
                if(q.author.toLowerCase().includes(value)){
                    filteredQuotes.push(q);
                }
            }
            console.log(filteredQuotes);
        }

        let asd = filteredQuotes.length;
        let p = document.createElement('p') as HTMLElement;
        p.innerHTML = asd.toString();
        document.body.appendChild(p)

    });

});

function makeBold(str : string) {
    return "<b>" + str + "</b>";
}

async function getJson() {
    let response = await fetch("./quotes.json");
    quotes = await response.json();
}