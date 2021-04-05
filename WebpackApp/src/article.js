export default class Article{
    constructor(title, text, image){
        this._title = title;
        this._text = text;
        this._date = new Date();
        this._image = image;
    }

    get title(){
        return this._title;
    }

    get text(){
        return this._text;
    }

    get date(){
        return this._date;
    }
    get image(){
        return this._image;
    }
}