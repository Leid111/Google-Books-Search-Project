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

    document.getElementById("resultsImage2").src =
        searchResultTemplate[2].Image;
    document.getElementById(
        "resultsTitle2"
    ).innerText = `Title: ${searchResultTemplate[2].Title}`;
    document.getElementById(
        "resultsAuthor2"
    ).innerText = `Author: ${searchResultTemplate[2].Author}`;
    document.getElementById(
        "resultsDescription2"
    ).innerText = `Descripton: ${searchResultTemplate[2].Description}`;

    document.getElementById("resultsImage3").src =
        searchResultTemplate[3].Image;
    document.getElementById(
        "resultsTitle3"
    ).innerText = `Title: ${searchResultTemplate[3].Title}`;
    document.getElementById(
        "resultsAuthor3"
    ).innerText = `Author: ${searchResultTemplate[3].Author}`;
    document.getElementById(
        "resultsDescription3"
    ).innerText = `Descripton: ${searchResultTemplate[3].Description}`;

    document.getElementById("resultsImage4").src =
        searchResultTemplate[4].Image;
    document.getElementById(
        "resultsTitle4"
    ).innerText = `Title: ${searchResultTemplate[4].Title}`;
    document.getElementById(
        "resultsAuthor4"
    ).innerText = `Author: ${searchResultTemplate[4].Author}`;
    document.getElementById(
        "resultsDescription4"
    ).innerText = `Descripton: ${searchResultTemplate[4].Description}`;
    console.log(searchResultTemplate);

    document.getElementById("resultsImage5").src =
        searchResultTemplate[5].Image;
    document.getElementById(
        "resultsTitle5"
    ).innerText = `Title: ${searchResultTemplate[5].Title}`;
    document.getElementById(
        "resultsAuthor5"
    ).innerText = `Author: ${searchResultTemplate[5].Author}`;
    document.getElementById(
        "resultsDescription5"
    ).innerText = `Descripton: ${searchResultTemplate[5].Description}`;

    document.getElementById("resultsImage6").src =
        searchResultTemplate[6].Image;
    document.getElementById(
        "resultsTitle6"
    ).innerText = `Title: ${searchResultTemplate[6].Title}`;
    document.getElementById(
        "resultsAuthor6"
    ).innerText = `Author: ${searchResultTemplate[6].Author}`;
    document.getElementById(
        "resultsDescription6"
    ).innerText = `Descripton: ${searchResultTemplate[6].Description}`;

    document.getElementById("resultsImage7").src =
        searchResultTemplate[7].Image;
    document.getElementById(
        "resultsTitle7"
    ).innerText = `Title: ${searchResultTemplate[7].Title}`;
    document.getElementById(
        "resultsAuthor7"
    ).innerText = `Author: ${searchResultTemplate[7].Author}`;
    document.getElementById(
        "resultsDescription7"
    ).innerText = `Descripton: ${searchResultTemplate[7].Description}`;

    document.getElementById("resultsImage8").src =
        searchResultTemplate[8].Image;
    document.getElementById(
        "resultsTitle8"
    ).innerText = `Title: ${searchResultTemplate[8].Title}`;
    document.getElementById(
        "resultsAuthor8"
    ).innerText = `Author: ${searchResultTemplate[8].Author}`;
    document.getElementById(
        "resultsDescription8"
    ).innerText = `Descripton: ${searchResultTemplate[8].Description}`;

    document.getElementById("resultsImage9").src =
        searchResultTemplate[9].Image;
    document.getElementById(
        "resultsTitle9"
    ).innerText = `Title: ${searchResultTemplate[9].Title}`;
    document.getElementById(
        "resultsAuthor9"
    ).innerText = `Author: ${searchResultTemplate[9].Author}`;
    document.getElementById(
        "resultsDescription9"
    ).innerText = `Descripton: ${searchResultTemplate[9].Description}`;

    console.log(searchResultTemplate);
};

// const buttonSearch = document.getElementById("buttonSearch");
// buttonSearch.addEventListener("click", search(searchTerm));

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchBarTerm = document.getElementById("searchBarTerm").value;
    search(searchBarTerm);
});

// have a loop for all the books

//     const responsePromise = fetch(url);
//     const response = await responsePromise;
//     const object = await response.json();
//     console.log(object);
//
