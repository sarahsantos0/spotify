const searchInput = document.getElementById('search__input');
const resultArtists = document.getElementById('result__artist');
const resultPlaylist = document.getElementById('result__playlists');

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add('hidden');
    const artistImage = document.getElementById('artist__img');
    const artistName = document.getElementById('artist__name');

    result.forEach((element) => {
        artistImage.src = element.urlImg;
        artistName.innerText = element.name;
    });

    resultArtists.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtists.classList.add('hidden');
        return;
    }

    requestApi(searchTerm);
})