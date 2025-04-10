class DOMGenerator {

    constructor() {

        this.container = document.createElement('div');
        this.container.classList.add('container');

    }

    createCard() {

        const div = document.createElement('div');
        div.classList.add('card');

        const h3 = document.createElement('h3');
        const para = document.createElement('p');

        h3.textContent = 'This is a h3 element create using Javascript';

        para.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt fugiat officia expedita ex voluptatem quibusdam commodi, numquam praesentium laborum in ipsam, voluptatum soluta architecto aut odit et sit deleniti?';

        div.appendChild(h3);
        div.appendChild(para);

        this.container.appendChild(div);
        
    }

    getContent() {
        return this.container;
    }


}


export default function menuTab() {

    //Que la función retorne un div con el contenido y luego pueda ser agregado con append al div#content, luego de haber borrado el contenido que haya tenido

    const controllerInstance = new DOMGenerator;
    controllerInstance.createCard();
    controllerInstance.createCard();

    return controllerInstance.getContent();
    

}

