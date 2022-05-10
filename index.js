// let searchterms = "javascript";
// // document.getElementById("xxx").innerText = searchBar

const urlBase = `https://www.googleapis.com/books/v1/volumes?q=`;

const getSearchUrl = (searchTerm) => {
    //clean URL to mak sure its a valid url;
    return urlBase + searchTerm;
};

console.log(getSearchUrl("javascript"));

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

    document.getElementById("resultsImage0").src =
        searchResultTemplate[0].Image;
    document.getElementById(
        "resultsTitle0"
    ).innerText = `Title: ${searchResultTemplate[0].Title}`;
    document.getElementById(
        "resultsAuthor0"
    ).innerText = `Author: ${searchResultTemplate[0].Author}`;
    document.getElementById(
        "resultsDescription0"
    ).innerText = `Descripton: ${searchResultTemplate[0].Description}`;

    document.getElementById("resultsImage1").src =
        searchResultTemplate[1].Image;
    document.getElementById(
        "resultsTitle1"
    ).innerText = `Title: ${searchResultTemplate[1].Title}`;
    document.getElementById(
        "resultsAuthor1"
    ).innerText = `Author: ${searchResultTemplate[1].Author}`;
    document.getElementById(
        "resultsDescription1"
    ).innerText = `Descripton: ${searchResultTemplate[1].Description}`;
    console.log(searchResultTemplate);
};

// have a loop for all the books

//     const responsePromise = fetch(url);
//     const response = await responsePromise;
//     const object = await response.json();
//     console.log(object);
//
