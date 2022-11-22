export function Api (requestURL) {

    this.getApiData = async function () {
        const data = await fetch(requestURL);
        return await data.json();
    }
}

