import {Api} from "./Api";
import {Dark} from "./Dark";
import {Article} from "./Article";

import '../styles/style.scss';

const requestUrl = 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=0bbc52e16fa6451e8c3354b59dd06f98';

let Theme = new Dark();
Theme.display();

let ApiArticle = new Api(requestUrl);
export const data = ApiArticle.getApiData().then(res => {
    res.articles.map(artData => {
        const article = new Article(artData.title, artData.description, artData.author, artData.publishedAt, artData.urlToImage);
        article.hydrate();
    });
});


