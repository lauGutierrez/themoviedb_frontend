const getRequest = async (url, key) => {
    let response = await fetch(url);
    let data = await response.json();
    return key ? data[key] : data;
}

export {
    getRequest
}