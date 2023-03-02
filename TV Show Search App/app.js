const searchForm = document.querySelector("#searchForm")
searchForm.addEventListener('submit', async function (e) {
    e.preventDefault()
    const userSearch = searchForm.elements.query.value;

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${userSearch}`);
    console.log(res.data);
    displayImage(res.data);
    searchForm.elements.query.value = '';
})

const displayImage = (shows) => {
    for (let show of shows) {
        if (show.show.image) {
            const img = document.createElement("IMG");
            img.src = show.show.image.medium;
            document.body.append(img)

        }

    }
}