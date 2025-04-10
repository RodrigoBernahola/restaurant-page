import "./styles.css";
import pageLoad from "./page-load.js";
import menuTab from "./menu-tab.js";
import contactTab from "./contact-tab.js";

//Se crearán dos archivos (módulos) cada uno se encargará de generar y modificar el contenido del div#content. Además en este archivo se creará una clase encargada de borrar el contenido del DOM con un método y "reaccionar" ante los clicks en los botones que cambiarán el contenido de la página dependiendo de qué botón se toque.


class DOMcontroller {

    //Borrar el contenido actual del div#content
    clearDiv(div) {

        div.replaceChildren();

    }

}


document.addEventListener('DOMContentLoaded', () => {

    //Cada vez que se carga la página principal se ejecuta el módulo encargado de mostrar la sección Home (pageLoad)
    pageLoad();

    const divContent = document.querySelector('div#content');
    const controllerInstance = new DOMcontroller();
    const navElement = document.querySelector('nav');

    navElement.addEventListener('click', (e) => {

        const target = e.target.className;
        controllerInstance.clearDiv(divContent);

        switch (target) {

            case 'about':
                divContent.appendChild(contactTab());
                console.log("about");
                break;

            case 'menu':
                console.log("menu");
                divContent.appendChild(menuTab());
                break;
            
            case 'home':
                pageLoad();
                console.log('home');
                break;

            default:
                break;

        }

    })


})
