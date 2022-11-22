let buttonContainer = document.getElementById('button');
let body = document.querySelector('body');
export let Dark = function () {
    this.display = ()=> {
        let buttonTheme = document.createElement('button');
            buttonTheme.innerHTML = 'Dark';
            buttonTheme.addEventListener("click", ()=> {
                body.classList.toggle('dark') ;
                if (body.className === 'dark') {
                    buttonTheme.innerHTML = 'Light';
                }
                else {
                    buttonTheme.innerHTML = 'Dark';
                }
            })
            buttonContainer.appendChild(buttonTheme);
    }
}