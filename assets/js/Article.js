let containerArticle = document.getElementById('container');

export let Article = function (title, content, author,date) {

    this.displayArticle = () => {
        let article = document.createElement('article');
        article.id = 'articles';
        containerArticle.appendChild(article);
    }
}