// export function Api (requestUrl) {
//     this.getApiData = function () {
//         let xhr = new XMLHttpRequest();
//         xhr.open("GET", requestUrl);
//         xhr.responseType = 'json';
//
//         xhr.onload = ()=> {
//             if (xhr.status !== 200) {
//                 return;
//             }
//             return xhr.response;
//         }
//         xhr.send();
//     }
// }
export function Api (requestURL) {

    this.getApiData = async function () {
        const data = await fetch(requestURL);
        return await data.json();
    }

}

