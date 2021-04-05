export default class ArticleComponent{
    constructor(article){
        this._article = article;
    }

    createDomElement(){
        let header = document.createElement("h2");
        header.innerHTML = this._article.title;

        let content = document.createElement("p");
        content.innerHTML = this._article.text;

        let date = document.createElement("time");
        date.innerHTML = this._article.date.toDateString();

        let image = document.createElement("img");
        image.src = this._article.image;

        let article = document.createElement("article");
        article.appendChild(header);
        article.appendChild(content);
        article.appendChild(date);
        article.appendChild(image);

        return article;
    }
}