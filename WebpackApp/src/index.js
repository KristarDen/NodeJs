import Article from './article';
import ArticleComponent from './articleComponent';
import './styles/styles.css'

import webpackLogo from './assets/img.png';

let title = "Webpack";
let text = `Webpack is a static module bundler for modern JavaScript applications. When webpack 
processes your application, it internally builds a dependency graph which maps every module your 
project needs and generates one or more bundles. Since version 4.0.0, webpack does not require a 
configuration file to bundle your project. Nevertheless, it is incredibly configurable to 
better fit your needs. To get started you only need to understand its Core Concepts: `;

let article = new Article(title, text, webpackLogo);
let articleComponent = new ArticleComponent(article);

let container = document.getElementById("container");
container.appendChild(articleComponent.createDomElement());

