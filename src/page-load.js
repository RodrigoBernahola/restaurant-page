import backgroundImage from './images.jpeg';

class DOMGenerator {

    createImg(parent, srcString) {

        const newImg = document.createElement('img');
        newImg.setAttribute('src', srcString);
        parent.appendChild(newImg);

    }

    createHeadline(parent, text) {

        const headlineTwo = document.createElement('h2');
        headlineTwo.textContent = text;
        parent.appendChild(headlineTwo);

    }

    createParagraph(parent, text) {

        const newPara = document.createElement('p');
        newPara.textContent = text;
        parent.appendChild(newPara);

    }

}


export default function pageLoad() {

    const domInstance = new DOMGenerator();
    const contentDiv = document.querySelector('#content');
    const paraText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt fugiat officia expedita ex voluptatem quibusdam commodi, numquam praesentium laborum in ipsam, voluptatum soluta architecto aut odit et sit deleniti?';

    domInstance.createImg(contentDiv, backgroundImage);
    domInstance.createHeadline(contentDiv, 'Restaurant Page');
    domInstance.createParagraph(contentDiv, paraText);

}