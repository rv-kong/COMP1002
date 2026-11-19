// In this file each component is a function that returns a string of HTML.
// Our Shared Data
// A const holding text we want to reuse everywhere
const siteName = "Bright Bean Coffee";
// An ARRAY of objects: one per nav item
const navLinks = [
    {label: "Home", href: "index.html", page: "home"},
    {label: "About", href: "about.html", page: "about"},
    {label: "Contact", href: "contact.html", page: "contact"}
];
// Our 1st component ... Metadata
// Small helper: makes text safe to sit inside an HTML attribute
function escapeAttribute(text){
    return String(text).replace(/&/g, "$amp;").replace(/"/g, "&quot;");
}
// Title, description, and robots are parameters, so every page can send in its own values.
function createMetadata(title, description, robots = "index, nofollow"){
    //Every page title end with the site name, for example: "About | Bright Bean Coffee"
    const fullTitle = '${title} | ${siteName}';
    return `
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="${escapeAttribute(robots)}">
        <meta name="description" content="${escapeAttribute(description)}">
        <title>${escapeAttribute(fullTitle)}</title>
    `;
}
// Header Component
function createHeader(currentPage){
    // map turns every link object into a string of HTML
    // join glues the strings together with nothing between them
    // skip join and you get unwanted commas between the links
    const links = navLinks
        .map((link) => {
            // Ternary operator from Part 1: if this link is the current page,
            // add aria-current="page". Otherwise add nothing ("").
            const current = link.page === curentPage ? 'aria-current="page"' : "";

            return `<li><a href="${link.href}" ${current}>${link.label}</a></li>`;
        })
        .join("");
        return `
            <a class-"logo href="index".html">${siteName}</a>
            <nav>
                <menu>
                    ${links}
                </menu>
            </nav>
        `;
}
// Footer component
function createFooter(name, year = new Date().getFullYear()){
    return `
        <p>&copy; ${year} ${name}. All rights reserved.</p>
        <p>Some Address</p>
    `;
}
// Call to action Component
function createCallToAction(content){
    // this functiont akes one parameter and object holding all the content
    // Each page can send in different content, but the layout will stay the same
    return `
        <h2>${content.heading}</h2>
        <p>${content.text}</p>
        <a class="button" href="${content.link}">${content.buttonText}</a>
    `;
}
// Card component
function createCard(title, text){
    return `
        <article class="card">
        <h3>${title}</h3>
        <p>${text}</p>
        </article>
    `;
}
// HTML to page helper
// This function finds the element that matches the selector and fills it with HTML
function render(selector, html){
    const element = document.querySelector(selector);
    // if the page doesn't have that placeholder querySelector gives a null
    if(element === null){
        console.log("Could not find " + selector + " on this page.");
        return;
    }
    element.innerHTML = html;
}
// like render(), but for the head. "afterbegin" means at the very start of the head .. we are doing this so the metadata sits above the CSS and JS
function renderHead(html){
    document.head.insertAdjacentHTML("afterbegin", html);
}