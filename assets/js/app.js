import {Api} from "./Api";
import {Dark} from "./Dark";
import {Article} from "./Article";
import {logPlugin} from "@babel/preset-env/lib/debug";

import ('../styles/style.scss');

const requestUrl = 'https://newsapi.org/v2/everything?q=apple&from=2022-11-20&to=2022-11-20&sortBy=popularity&apiKey=0bbc52e16fa6451e8c3354b59dd06f98';

let Theme = new Dark();
Theme.display();

let Articles = new Article();
Articles.displayArticle();

let ApiArticle = new Api(requestUrl);
const data = ApiArticle.getApiData().then(res => {
    res.articles.map(articleData => new Article());
});
