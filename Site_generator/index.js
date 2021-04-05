class Component{
    self ;

    addSelf(elem){
        elem.appendChild(self);
    }
}

class HeaderComponent extends Component{
    constructor(head_text){
        super();
        self = document.createElement("header");
        let H1 = document.createElement("h1");
        H1.innerText = head_text;
        self.appendChild(H1);
    }

}

class ProductComponent extends Component{
    constructor(Product_name,product_description){
        super();
        self = document.createElement("div");

    }
    constructor(Product_name,product_description,img_source){
        super();
        self = document.createElement("div");
    }
}

class FooterComponent extends Component{
    constructor(text){
        super();
        self = document.createElement("footer");
        self.innerText = text;
    }
}

let test = new HeaderComponent("Test 123");
test.addSelf(document.body);

let foot = new FooterComponent("footer of this site");
foot.addSelf(document.body);