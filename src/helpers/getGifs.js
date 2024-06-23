export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Bs5Uix1odnoVtNWa9u5nUBM1Vj6cmmgA&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    // console.log(gifs);
    return gifs;
}