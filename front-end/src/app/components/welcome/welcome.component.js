// TODO #import-html: use ES default imports to import welcome.component.html as template
import template from "./welcome.component.html"
import {Component} from "../../scripts/component";
import "./welcome.component.css";

/* class WelcomeComponent constructor  */
export class WelcomeComponent extends Component {
    constructor() {
        super(template);
        this.template = template;

    }

    init() {
        const form = document.querySelector("form.form-signin");

        form.addEventListener(
            "submit",
            (event) => {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                    form.classList.add("was-validated");
                } else {
                    const name = event.srcElement.querySelector("#nickname").value;
                    const size = parseInt(event.srcElement.querySelector("#size").value);

                    this._startGame(name, size);
                }
            },
            false
        );

        return this;
    }

    _startGame(name, size) {
        const gamePage = "./#game";
        window.location = `${gamePage}?name=${name}&size=${size}`;
    }
}

