export function http_get(url) {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.open("GET", url, false);
    xmlHttp.send();
    return xmlHttp.responseText;
}

export function http_get_as_json(url) {
    return JSON.parse(http_get(url));
}

cont name = "local"

export function host() {
    if (name == "Thorin") return "https://ominous-space-carnival-499xxjrrg77f5754-8000.app.github.dev/";
    if (name == "Benjamin") return "https://urban-adventure-699qvj7wvr94c5v9q-8000.app.github.dev/";
    return "http://localhost:8000/";
}
