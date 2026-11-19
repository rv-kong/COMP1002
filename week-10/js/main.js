// Runs on every page. It uses the components from the components.js
// Ask what page are we on?
const page = document.body.dataset.page;
// Once we have our page, add our metadata
const pageMeta = {
    home: {
        title: "Home",
        description: "This is a home description"
    },
    about: {
        title: "About",
            description: "This is an about description"    
    },
    contact: {
        title: "Contact",
        description: "This is a contact descript"
    }
};
// CTA Content
const ctaContent = {
    home: {
        heading: "home heading",
        text: "home text",
        buttonText: "home button text",
        link: "index.html"
    },
    about: {
        heading: "about heading",
        text: "about text",
        buttonText: "about button text",
        link: "about.html"
    },
    contact: {
        heading: "contact heading",
        text: "contact text",
        buttonText: "contact button text",
        link: "contact.html"
    }
};
const favourites = [
    {title: "Espresso", text: "Depresso"},
    {title: "Cold Brew", text: "go brrr"},
    {title: "Croissant", text: "cwoissaant"}
];
// Build
// MetaData goes in the <head>
const meta = pageMeta[page];
renderHead(createMetadata(meta.title, meta.decsription, meta.robots));
// Fill our pages
render("#site-header", createHeader(page));
render("#site-footer", createFooter(sitName));
render("#cta", createCallToAction(ctaContentContent[page]));
// Turn every object in the array into a card
const cardHtml = favourites
    .map((item) => createCard(item.title, item.text))
    .join("");

render("#cards", cardsHtml);