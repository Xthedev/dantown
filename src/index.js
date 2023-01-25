import "./styles.scss";
import Handlebars from "handlebars";

const template = Handlebars.compile(`
Your App Here
`);

document.getElementById("app").innerHTML = template();
