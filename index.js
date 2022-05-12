const urlBase = `https://www.googleapis.com/books/v1/volumes?q=`;

const getSearchUrl = (searchTerm) => {
    //clean URL to mak sure its a valid url;
    return urlBase + searchTerm;
};

const search = async (searchTerm) => {
    const requestPromise = fetch(getSearchUrl(searchTerm));
    const response = await requestPromise;
    const searchObject = await response.json();

    const searchResultTemplate = searchObject.items.map((book) => {
        const bookInfo = {};
        try {
            if (book.volumeInfo.authors[0])
                bookInfo.Author = book.volumeInfo.authors[0];
            else bookInfo.Author = "Unkown";
        } catch (error) {
            bookInfo.Author = "Unkown";
        }
        try {
            if (book.volumeInfo.title) bookInfo.Title = book.volumeInfo.title;
            else bookInfo.Title = "Unkown";
        } catch (error) {
            bookInfo.Title = "Unkown";
        }

        try {
            if (book.volumeInfo.description)
                bookInfo.Description = book.volumeInfo.description;
            else bookInfo.Description = "Unkown";
        } catch (error) {
            bookInfo.Description = "Unkown";
        }

        try {
            if (book.volumeInfo.imageLinks.smallThumbnail)
                bookInfo.Image = book.volumeInfo.imageLinks.smallThumbnail;
            else bookInfo.Image = "unknown";
        } catch (error) {
            bookInfo.Image = "unknown";
        }

        return bookInfo;
    });

    const resultsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < resultsIndex.length; i++) {
        const resultNumber = resultsIndex[i];
        const newElementImage = document.createElement("img");
        newElementImage.setAttribute(
            "src",
            searchResultTemplate[resultNumber].Image
        );
        newElementImage.setAttribute("alt", "na");
        const parentImage = document.getElementById("results" + resultNumber);
        parentImage.appendChild(newElementImage);

        const newElementTitle = document.createElement("p");
        const textNodeTitle = document.createTextNode(
            `Title: ${searchResultTemplate[resultNumber].Title}`
        );
        newElementTitle.appendChild(textNodeTitle);
        const parentTitle = document.getElementById("results" + resultNumber);
        parentTitle.appendChild(newElementTitle);

        const newElementAuthor = document.createElement("p");
        const textNodeAuthor = document.createTextNode(
            `Author: ${searchResultTemplate[resultNumber].Author}`
        );
        newElementAuthor.appendChild(textNodeAuthor);
        const parentAuthor = document.getElementById("results" + resultNumber);
        parentAuthor.appendChild(newElementAuthor);

        const newElementDescripton = document.createElement("p");
        const textNodeDescripton = document.createTextNode(
            `Descripton: ${searchResultTemplate[resultNumber].Description}`
        );
        newElementDescripton.appendChild(textNodeDescripton);
        const parentDescripton = document.getElementById(
            "results" + resultNumber
        );
        parentDescripton.appendChild(newElementDescripton);
    }

    console.log(searchResultTemplate);
};

buttonSearch.addEventListener("click", (e) => {
    e.preventDefault();
    const searchBarTerm = document.getElementById("searchBarTerm").value;
    search(searchBarTerm);
});
