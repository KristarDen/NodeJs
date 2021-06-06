class Component{
    self = "";
    addSelf(elem){
        elem.appendChild(self);
    }
    set Font(font){
        self.style.fontFamily = font;
    }
    set ForegroundColor(color){
        self.style.color = color;
    }
    set BackgroundColor(color){
        self.style.backgroundColor = color;
    }
    set Height(height){
        self.style.height = height;
    }
    set Width(width){
        self.style.width = width;
    }
    get Self(){
        return self;
    }
}

class HeaderComponent extends Component{
    constructor(head_text){
        super();
        self = document.createElement("header");
        let H1 = document.createElement("h1");
        
        H1.innerText = head_text;
        H1.style.textAlign = "center";
        H1.style.margin = "0px"
        H1.style.padding = "0px"
        self.style.display = "flexbox";
        self.style.margin = "0px 0px 10px 0px";
        self.style.padding = "0px"
        self.appendChild(H1);
    }

}

class ProductComponent extends Component{
   
    constructor(Product_name,product_description,img_source){
        super();
        let Image;

        if(img_source != "")
        {
            Image = document.createElement("img");
            Image.src = img_source;
            Image.width = "200";
            Image.height = "200";
            Image.style.alignSelf = "center";
        }
        
        this.self = document.createElement("div");
        this.self.style.display = "flex";
        this.self.style.flexWrap = "wrap";
        this.self.style.flexFlow = "column";
        this.self.style.maxWidth = "200px";
        this.self.style.margin = "15px";
        this.self.style.alignItems = "center";
        this.self.style.fontFamily = "Trebuchet MS";
        this.self.style.backgroundColor = "rgba(180, 182, 190, 0.5)";
        //this.self.style.alignItems = 

        let Description  = document.createElement("a");
        Description.innerText = product_description;
        Description.textAlign = "center";
        Description.style.alignSelf = "center";

        let Name = document.createElement("h3");
        Name.innerText = Product_name;
        Name.style.textAlign = "center";
        Name.style.margin = "0px";
        Name.style.alignSelf = "center";

        this.self.appendChild(Name);
        this.self.appendChild(Description);
        if(img_source != "") this.self.appendChild(Image);
    }
}

class ContentComponent extends Component{
    Items = [];
    constructor(){
        super();
        
        this.self = document.createElement("div");
        this.self.style.display = "flex";
        this.self.style.flexWrap = "wrap";
        this.self.style.alignItems = "center";
        this.self.id = Date.now();
        document.body.appendChild(this.self);
    }

    addProduct(Product_name,product_description,img_source){
        debugger;
        let NewProd = new ProductComponent(Product_name,product_description,img_source);
        this.Items.push(NewProd);
        document.getElementById(this.self.id).appendChild(NewProd.self);
    }
}

class FooterComponent extends Component{
    constructor(text){
        super();
        self = document.createElement("footer");
        self.innerText = text;
        self.style.textAlign = "center";
        self.style.position = "absolute";
        self.style.height = "30px";
        self.style.marginTop = "-30px";
        self.style.top= `100%`;
        self.style.width = "100%";
    }
}

class MainComponent {
    ContentBlock = null;

    createHeader(Header_text){
        let test = new HeaderComponent(Header_text);
        test.BackgroundColor = "rgba(129, 25, 12, 0.7)";
        test.ForegroundColor = "white";
        test.Font = "Verdana";
        test.addSelf(document.body);
    }

    addBlock(Product_name,product_description,img_source){
        if(this.ContentBlock == null){
            this.ContentBlock = new ContentComponent();
        }
        this.ContentBlock.addProduct(Product_name,product_description,img_source);
    }

    createFooter(Footer_text){
        let foot = new FooterComponent(Footer_text);
        foot.ForegroundColor = "white";
        foot.BackgroundColor = "rgba(51, 88, 120, 0.5)";
        
        foot.addSelf(document.body);
    }

}

let Main = new MainComponent();
Main.createHeader("Test123");
Main.addBlock("Return of Bloodred","Powerwolf 2005","./images/Return_in_bloodred.jpg" );
Main.addBlock("Blessed & Possesed","Powerwolf 2015","./images/Blessed_and_Possesed.jpg");
Main.addBlock("Metallum Nostrum","Powerwolf 2019","./images/Metallum_Nostrum.jpg");
Main.addBlock("Preachers of the night","Powerwolf 2013","./images/Preachers_of_the_night.jpg");
Main.addBlock("Bible of the Beast","Powerwolf 2009","./images/Bible_of_the_Beast.jpg");
Main.addBlock("Lupus Dei","Powerwolf 2007","./images/Lupus_Dei.jpg");
Main.createFooter("footer of this site");


