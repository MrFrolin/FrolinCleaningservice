class Service{
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

const services =  [
    new Service("Fresh-Livingroom.jpg","Veckorstäd", 
    "Med regelbunden städning ser vi till att ditt hem håller sig rent & fräscht över tid. De flesta som anlitar oss vill ha hjälp med kontinuerlig städning.",
    549),
    new Service("kitchen.jpg","Storstäd", 
    "Vår storstädning innehåller allt som ingår i veckostädningen, men vi fokuserar ytterligare på de detaljer som är lite svårare att komma åt och behöver mer tid. ",
    739),
    new Service("windowClean.jpg","Fönsterputs", 
    "Rena fönster förändrar ett helt hem. Anlita våra utbildade fönsterputsare och njut av känslan av fritt ljusinsläpp och ostörd utsikt.",
    199),
    new Service("bathroom.jpeg","Flyttstäd", 
    "När flytten går från en bostad är städningen en viktig del av överlåtelsen från säljare till köpare. ingenting man alltid har tid och klarar av att ordna med på egen hand.",
    1459),
    new Service("backyard.jpg","Trädgård", 
    "Våra trädgårdstjänster kan hjälper dig ta hand om din trädgård, även när du är på semester eller om du behöver avlastning med den årliga höst- och vårstädningen. .",
    599),
    new Service("husVisning.jpg","Visningsstäd", 
    "Vi arbetar hårt för att möta de höga krav som mäklare, stylist, fotograf och potentiella köpare ställer inför och under en lägenhetsförsäljning.",
    999),
    new Service("kontor.jpg","Kontorsstäd", 
    "Genom noggrann kontorsstädning genererar vi effektiva och attraktiva arbetsplatser oavsett kontorets storlek.",
    3449)
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
        const cardFooter = document.createElement("footer");
        const cardPrice = document.createElement("p");
        const addToCartBtn = document.createElement("button"); 

        console.log(service.description);

        applyStyles(li, card, image, cardBody, cardTitle, cardText, cardFooter, cardPrice, addToCartBtn)

        cardTitle.innerText = service.title;
        cardText.innerText = service.description;
        cardPrice.innerText = "fr. " + service.price + " kr";

        image.src = "../image/" + service.image;
        image.alt = "Bilden kunde inte laddas..."

        addToCartBtn.innerText = "Lägg i varukorg";
        addToCartBtn.onclick = () => {
            console.log("button was clicked. Add to cart");
        };

        cardFooter.appendChild(cardPrice);
        cardFooter.appendChild(addToCartBtn);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardFooter);
        
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
    cardFooter,
    cardPrice,
    addToCartBtn
) {
   li.classList.add("col", "d-flex", "justify-content-center", "list-group-item","mt-5");
   card.classList.add("card","mt-5", "border-0", "card-style");
   image.classList.add("card-img-top", "service-img");
   cardBody.classList.add("card-body", "d-flex", "flex-column");
   cardTitle.classList.add("card-title");
   cardText.classList.add("card-text", "cart-text", "mt-3");

    cardFooter.classList.add("mt-auto");
    cardPrice.classList.add("card-price");
    addToCartBtn.classList.add("btn", "btn-primary");
}