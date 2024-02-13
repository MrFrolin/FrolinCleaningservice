class Service{
    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }
}

const services =  [
    new Service("living-room.webp","Veckostäd", 
    "Med regelbunden städning ser vi till att ditt hem håller sig rent & fräscht över tid. De flesta som anlitar oss vill ha hjälp med kontinuerlig städning.",
    549),
    new Service("kitchen.webp","Storstäd", 
    "Vår storstädning innehåller allt som ingår i veckostädningen, men vi fokuserar ytterligare på de detaljer som är lite svårare att komma åt och behöver mer tid. ",
    740),
    new Service("windowClean.webp","Fönsterputs", 
    "Rena fönster förändrar ett helt hem. Anlita våra utbildade fönsterputsare och njut av känslan av fritt ljusinsläpp och ostörd utsikt.",
    200),
    new Service("https://raw.githubusercontent.com/MrFrolin/MrFrolin.github.io/main/Image/bathroom.webp","Flyttstäd", 
    "När flytten går från en bostad är städningen en viktig del av överlåtelsen från säljare till köpare. ingenting man alltid har tid och klarar av att ordna med på egen hand.",
    1459),
    new Service("backyard.webp","Trädgård", 
    "Våra trädgårdstjänster kan hjälper dig ta hand om din trädgård, även när du är på semester eller om du behöver avlastning med den årliga höst- och vårstädningen. .",
    600),
    new Service("husVisning.webp","Visningsstäd", 
    "Vi arbetar hårt för att möta de höga krav som mäklare, stylist, fotograf och potentiella köpare ställer inför och under en lägenhetsförsäljning.",
    999),
    new Service("kontor.webp","Kontorsstäd", 
    "Genom noggrann kontorsstädning genererar vi effektiva och attraktiva arbetsplatser oavsett kontorets storlek.",
    3449)
];

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

        applyStylesServices(li, card, image, cardBody, cardTitle, cardText, cardFooter, cardPrice, addToCartBtn)

        cardTitle.innerText = service.title;
        cardText.innerText = service.description;
        cardPrice.innerText = service.price + " kr/h";

        image.src = service.image;
        image.alt = "Bilden kunde inte laddas..."

        addToCartBtn.innerText = "Lägg i varukorg";
        addToCartBtn.onclick = () => {
            addToCart(service);
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

displayServices();

function applyStylesServices(
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
    addToCartBtn.classList.add("btn", "addtocartbtn");
}


function addToCart(service){
    const li = document.createElement("li");
    const row = document.createElement("div");
    const imgBox = document.createElement("div");
    const img = document.createElement("img");
    const cardBody = document.createElement("div");
    const h5 = document.createElement("h5");
    const price = document.createElement("p");
    const removeBtn = document.createElement("button");

    applyStylesCart(li, row, imgBox, img, cardBody, h5, price, removeBtn);

    img.src = "../image/" + service.image;
    img.alt = "Picture could not load";

    removeBtn.onclick = (event) => {
            let clickedButton = event.target;
            clickedButton.parentElement.parentElement.parentElement.remove();
        };

    h5.innerText = service.title;
    price.innerText = service.price + "kr";


    imgBox.appendChild(img);

    cardBody.appendChild(h5);
    cardBody.appendChild(price);
    cardBody.appendChild(removeBtn);

    row.appendChild(imgBox);
    row.appendChild(cardBody);

    li.appendChild(row);
    modalcart.appendChild(li);
}

function applyStylesCart(
    li,
    row,
    imgBox,
    img,
    cardBody,
    h5,
    price,
    removeBtn
){
    li.classList.add("list-group-item", "card", "mb-3", "border-bottom");
    row.classList.add("row");
    imgBox.classList.add("col-md-4", "p-3", "pe-0");
    img.classList.add("img-fluid", "rounded-start");
    cardBody.classList.add("col-md-8","card-body", "p-4", "pe-0");
    h5.classList.add("m-0");
    price.classList.add("m-0");
    removeBtn.classList.add("btn","fa", "fa-trash-o", "p-0");
}





