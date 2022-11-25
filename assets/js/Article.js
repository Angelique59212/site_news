import {data} from "./app";

let containerArticle = document.getElementById('container');

export let Article = function (articleTitle, articleDescription, articleAuthor, articleDate, articleImage) {

    this.hydrate = function () {
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

        article.addEventListener('click', () => {
            let articles = document.querySelectorAll('article');
            const titleArt = document.createElement('h1');
            const resumeArt = document.createElement('p');
            const authorArt = document.createElement('span');
            const dateArt = document.createElement('span');
            const imageArt = document.createElement('img');

            titleArt.innerHTML = articleTitle;
            resumeArt.innerHTML = articleDescription;
            authorArt.innerHTML = articleAuthor;
            dateArt.innerHTML = articleDate;
            imageArt.src = articleImage;

            titleArt.style.fontSize = '2.5rem';
            imageArt.style.width = "37vw";
            authorArt.style.display = 'block';
            dateArt.style.display = 'block';
            imageArt.style.padding = '2rem';
            displayOneArticle.style.padding = '2rem';

            articles.forEach((currentElement) => {
                currentElement.classList.add('hidden');
            })

            let closeButton = document.createElement('button');
            closeButton.id = 'close';
            closeButton.innerHTML = 'Close';

            closeButton.addEventListener('click', () => {
                let hiddenArticle = document.querySelectorAll('.hidden');
                hiddenArticle.forEach((art) => {
                    art.className = 'article';

                    for (let j = 0; j < displayOneArticle.children.length; j++) {
                        displayOneArticle.children[j].remove();
                    }
                    displayOneArticle.remove();
                })
            })

            displayOneArticle.appendChild(titleArt);
            displayOneArticle.appendChild(resumeArt);
            displayOneArticle.appendChild(imageArt);
            displayOneArticle.appendChild(authorArt);
            displayOneArticle.appendChild(dateArt);
            displayOneArticle.appendChild(closeButton);

            containerArticle.appendChild(displayOneArticle);
        });
        containerArticle.appendChild(article);

    }
}