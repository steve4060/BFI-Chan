export function http_get(url) {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}

export function http_get_as_json(url) {
    return JSON.parse(http_get(url));
}

