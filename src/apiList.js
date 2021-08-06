const LIST_URL = 'https://jsonplaceholder.typicode.com/comments/';

export function deleteList(id) {
    fetch(LIST_URL + id, {
        method: 'DELETE',
    });
}

export function createList(title) {
    fetch(LIST_URL, {
        method: 'POST',
        body: JSON.stringify(title),
        headers: {'Content-Type': 'application/json'},
    })
        .then((resp) => resp.json())
}


