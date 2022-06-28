
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=R555wRl5aqQY100CHwPdClD9zf4VXyzD&q=${category}$&limit=25&offset=0&rating=g&lang=es`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gift = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }
    ));
    return gift;
}