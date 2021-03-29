import Article from './article';
import ArticleComponent from './articleComponent';


let title = "Webpack";
let text = "Webpack is a static module bundler for modern JavaScript applications";

let article = new Article(title, text);
let articleComponent = new ArticleComponent(article);

let container = document.getElementById("container");
container.appendChild(articleComponent.createDomElement());

