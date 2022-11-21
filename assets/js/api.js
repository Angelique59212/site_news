let requestUrl = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-20&to=2022-11-20&sortBy=popularity&apiKey=0bbc52e16fa6451e8c3354b59dd06f98';
let xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.responseType = 'json';

xhr.onload = ()=> {
    if (xhr.status !== 200) {
        return;
    }
    let response = xhr.response;
}
xhr.send();