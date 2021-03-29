module.exports = class Article{
    constructor(title, text){
        this._title = title;
        this._text = text;
        this._date = new Date();
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
}