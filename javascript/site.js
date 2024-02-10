class Service{
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

const services =  [
    new Service("../Image/FrölinsStäd-Logo.png","Veckorstäd", 
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    2000),
    new Service("../Image/FrölinsStäd-Logo.png","helgstäd", 
    "Städar på helgen.",
    1000)
];

displayServices();

async function displayServices(){
    for (const service of services) {
        const li = document.createElement("li");
        const card = document.createElement("div");
        const image = document.createElement("img");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h5");
        const cardText = document.createElement("p");
        const cardPrice = document.createElement("p");
        const addToCartBtn = document.createElement("button"); 

        console.log(service.description);

        applyStyles(li, card, image, cardBody, cardTitle, cardText, cardPrice, addToCartBtn)

        cardTitle.innerText = service.title;
        cardText.innerText = service.description;
        cardPrice.innerText = service.price;

        image.src = service.image;
        image.alt = "Bilden kunde inte laddas..."

        addToCartBtn.innerText = "Lägg i varukorg";
        addToCartBtn.onclick = () => {
            console.log("button was clicked. Add to cart");
        };

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardPrice);
        cardBody.appendChild(addToCartBtn);

        card.appendChild(image);
        card.appendChild(cardBody);

        li.appendChild(card);

        servicelist.appendChild(li);
    }
}

function applyStyles(
    li,
    card,
    image,
    cardBody,
    cardTitle,
    cardText,
    cardPrice,
    addToCartBtn
) {
   li.classList.add("col", "d-flex", "justify-content-center", "list-group-item","mt-5");
   card.classList.add("card","mt-5", "border-0", "card-style");
   image.classList.add("card-img-top", "service-img");
   cardBody.classList.add("card-body");
   cardTitle.classList.add("card-title");
   cardText.classList.add("card-text", "cart-text");
   cardPrice.classList.add("card-price");
   addToCartBtn.classList.add("btn", "btn-primary");
}