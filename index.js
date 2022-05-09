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
            bookInfo.Title = book.volumeInfo.title;
            bookInfo.Author = book.volumeInfo.authors[0];
            bookInfo.Description = book.volumeInfo.description;
            bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
        } else {
            bookInfo.Title = book.volumeInfo.title;
            bookInfo.Author = "Unkown";
            bookInfo.Description = book.volumeInfo.description;
            bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
        }

        document.getElementById("resultsOneImage").scr = bookInfo.Image;
        document.getElementById(
            "resultsOneTitle"
        ).innerText = `Title: ${bookInfo.Title}`;
        document.getElementById(
            "resultsOneAuthor"
        ).innerText = `Author: ${bookInfo.Author}`;
        document.getElementById(
            "resultsOneDescription"
        ).innerText = `Descripton: ${bookInfo.Description}`;
        return bookInfo;
    });
    console.log(searchResultTemplate);
};

// have a loop for all the books

//     const responsePromise = fetch(url);
//     const response = await responsePromise;
//     const object = await response.json();
//     console.log(object);
//
