export function http_get(url) {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}

export function http_get_as_json(url) {
    return JSON.parse(http_get(url));
}

export function host(bool) {
    if (bool == "Thorin") return "https://ominous-space-carnival-499xxjrrg77f5754-8000.app.github.dev/";
    if (bool == "Benjamin") return "https://urban-adventure-699qvj7wvr94c5v9q-8000.app.github.dev/";
    return "http://localhost:8000/";
}