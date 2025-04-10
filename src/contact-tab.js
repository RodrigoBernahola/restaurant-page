class DOMGenerator {

    constructor() {

        this.container = document.createElement('div');
        this.container.classList.add('container');

    }

    createContact() {

        const h3 = document.createElement('h3');
        const para = document.createElement('p');

        h3.textContent = 'This is the contact page';
        para.textContent = 'If you want to contact the restaurant page follow this link';

        this.container.appendChild(h3);
        this.container.appendChild(para);

        
    }

    getContent() {
        return this.container;
    }

}

export default function contactTab() {

    //Que la función retorne un div con el contenido y luego pueda ser agregado con append al div#content, luego de haber borrado el contenido que haya tenido

    const controllerInstance = new DOMGenerator;
    controllerInstance.createContact();
    return controllerInstance.getContent();
    
}
