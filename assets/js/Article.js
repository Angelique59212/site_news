import {data} from "./app";

let containerArticle = document.getElementById('container');

export let Article = function (articleTitle, articleDescription, articleAuthor, articleDate, articleImage) {

    this.hydrate = function() {
        const article = document.createElement('article');
        const title = document.createElement('h1');
        const resume = document.createElement('p');
        const author = document.createElement('span');
        const date = document.createElement('span');
        const image = document.createElement('img');
        article.className = 'article';
        title.className = 'title';
        resume.className = 'resume';
        author.className = 'author';
        date.className = 'date';
        image.className = 'image';

        title.innerHTML = articleTitle;
        resume.innerHTML = articleDescription;
        author.innerHTML = articleAuthor;
        date.innerHTML = articleDate;
        image.src = articleImage;

        article.appendChild(title);
        article.appendChild(image);
        article.appendChild(author);
        article.appendChild(date);

        /* display one article in onePage */
        let displayOneArticle = document.createElement('div');
        displayOneArticle.id = 'newDisplay';
        displayOneArticle.style.width = '100%';

        article.addEventListener('click' ,()=> {
            let articles = document.querySelectorAll('article');
            articles.forEach((currentElement)=> {
                currentElement.classList += ' ' + 'hidden';
            })

            let closeButton = document.createElement('button');
            closeButton.id = 'close';
            closeButton.innerHTML = 'Close';
            closeButton.addEventListener('click', ()=> {
                let hiddenArticle = document.querySelectorAll('.hidden');
                hiddenArticle.forEach((art)=> {
                    art.className = 'article';
                    displayOneArticle.remove();
                })
            })
            displayOneArticle.appendChild(title);
            displayOneArticle.appendChild(resume);
            displayOneArticle.appendChild(image);
            displayOneArticle.appendChild(author);
            displayOneArticle.appendChild(date);
            displayOneArticle.appendChild(closeButton);
            containerArticle.appendChild(displayOneArticle);
        })
        containerArticle.appendChild(article);
    }
}