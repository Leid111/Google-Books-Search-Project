const createResultsElement = (array) => {
    const resultsIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < resultsIndex.length; i++) {
        const resultNumber = resultsIndex[i];
        const newElementImage = document.createElement("img");
        newElementImage.setAttribute("src", array[resultNumber].Image);
        newElementImage.setAttribute("alt", "na");
        const parentImage = document.getElementById("results" + resultNumber);
        parentImage.appendChild(newElementImage);

        const newElementTitle = document.createElement("h3");
        const textNodeTitle = document.createTextNode(
            `Title: ${array[resultNumber].Title}`
        );
        newElementTitle.appendChild(textNodeTitle);
        const parentTitle = document.getElementById("results" + resultNumber);
        parentTitle.appendChild(newElementTitle);

        const newElementAuthor = document.createElement("h4");
        const textNodeAuthor = document.createTextNode(
            `Author: ${array[resultNumber].Author}`
        );
        newElementAuthor.appendChild(textNodeAuthor);
        const parentAuthor = document.getElementById("results" + resultNumber);
        parentAuthor.appendChild(newElementAuthor);

        const newElementDescripton = document.createElement("p");
        const textNodeDescripton = document.createTextNode(
            `Descripton: ${array[resultNumber].Description}`
        );
        newElementDescripton.appendChild(textNodeDescripton);
        const parentDescripton = document.getElementById(
            "results" + resultNumber
        );
        parentDescripton.appendChild(newElementDescripton);
    }
};

export default createResultsElement;
