// let searchterms = "javascript";
// // document.getElementById("xxx").innerText = searchBar

const urlBase = `https://www.googleapis.com/books/v1/volumes?q=`;

const getSearchUrl = (searchTerm) => {
    //clean URL to mak sure its a valid url;
    return urlBase + searchTerm;
};

const search = async (searchTerm) => {
    const requestPromise = fetch(getSearchUrl(searchTerm));
    const response = await requestPromise;
    const searchObject = await response.json();
    // console.log(searchObject);

    const searchResultTemplate = searchObject.items.map((book) => {
        const bookInfo = {};
        if (book.volumeInfo.authors[0]) {
            bookInfo.Author = book.volumeInfo.authors[0];
        } else {
            bookInfo.Author = "Unkown";
        }
        if (book.volumeInfo.title) {
            bookInfo.Title = book.volumeInfo.title;
        } else {
            bookInfo.Title = "Unkown";
        }
        if (book.volumeInfo.description) {
            bookInfo.Description = book.volumeInfo.description;
        } else {
            bookInfo.Description = "Unkown";
        }
        if (book.volumeInfo.imageLinks.smallThumbnail) {
            bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
        } else {
            bookInfo.Image = "Unkown";
        }
        bookInfo.Title = book.volumeInfo.title;
        bookInfo.Description = book.volumeInfo.description;
        bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
        return bookInfo;
    });
    const resultsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < resultsIndex.length; i++) {
        const resultNumber = resultsIndex[i];
        document.getElementById("resultsImage" + resultNumber).src =
            searchResultTemplate[resultNumber].Image;
        document.getElementById(
            "resultsTitle" + resultNumber
        ).innerText = `Title: ${searchResultTemplate[resultNumber].Title}`;
        document.getElementById(
            "resultsAuthor" + resultNumber
        ).innerText = `Author: ${searchResultTemplate[resultNumber].Author}`;
        document.getElementById(
            "resultsDescription" + resultNumber
        ).innerText = `Descripton: ${searchResultTemplate[resultNumber].Description}`;
    }
    console.log(searchResultTemplate);
};

// const buttonSearch = document.getElementById("buttonSearch");
// buttonSearch.addEventListener("click", search(searchTerm));

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchBarTerm = document.getElementById("searchBarTerm").value;
    search(searchBarTerm);
});
