export async function getCharacters(page) {
    const response = await fetch(`https://the-one-api.dev/v2/character?limit=8&page=${page}`, {
        headers: {
            'Authorization': 'Bearer TwQIbPHtEzf4AIcfUOiw'
        }
    });
    if (response.status !== 200) {
        console.log('response.status=' + response.status);
        return Promise.reject("Could not fetch the characters");
    }
    const data = await response.json();
    // console.log(JSON.stringify(data))
    return data;
};

export async function getCharacterQuotes(id) {
    console.log('id=' + id);
    const response = await fetch(`https://the-one-api.dev/v2/character/${id}/quote?limit=10`, {
        headers: {
            'Authorization': 'Bearer TwQIbPHtEzf4AIcfUOiw'
        }
    });
    if (response.status !== 200) {
        console.log('response.status=' + response.status);
        return Promise.reject("Could not fetch the quotes");
    }
    const data = await response.json();
    console.log(JSON.stringify(data));
    return data;
};
