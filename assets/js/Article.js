let containerArticle = document.getElementById('container');

export let Article = function (articleTitle, articleDescription, articleAuthor, articleDate, articleImage) {

    this.hydrate = function() {
        const article = document.createElement('article');
        const title = document.createElement('h1');
        const resume = document.createElement('p');
        const author = document.createElement('span');
        const date = document.createElement('span');
        const image = document.createElement('img');
        article.id = 'article';
        author.id = 'author';
        date.id = 'date';

        title.innerHTML = articleTitle;
        resume.innerHTML = articleDescription;
        author.innerHTML = articleAuthor;
        date.innerHTML = articleDate;
        image.src = articleImage;

        article.appendChild(title);
        article.appendChild(resume);
        article.appendChild(author);
        article.appendChild(date);
        article.appendChild(image);

        containerArticle.appendChild(article);
    }
}