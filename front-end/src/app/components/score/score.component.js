import template from "../views/score.html"
  /* class ScoreComponent constructor */
import {parseUrl} from "./utils";
import {Component} from "./component";

export class ScoreComponent extends Component{
    constructor() {
        super(template);
        const params = parseUrl();
        // TODO #import-html: assign template to this.template
        this.template = template;
        this.name = params.name;
        this.size = parseInt(params.size);
        this.time = parseInt(params.time);
    }
    init() {
        document.getElementById("name").innerText = this.name;
        document.getElementById("size").innerText = this.size;
        document.getElementById("time").innerText = this.time;
    }

  }

