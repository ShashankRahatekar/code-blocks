class Requestmaker {
    static get(url: string) {
        return fetch(`http://127.0.0.1:5000/api/${url}`);
    }

    static post(url: string, body: any) {
        return fetch(`http://127.0.0.1:5000/api/${url}`, {method: "POST", body})
    }
}

export default Requestmaker;