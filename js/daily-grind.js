/*

    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page that rotates unique colors and content for each weekday (Sunday to Saturday) into the page.  The content must include:
    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content
    The unique color could affect the background HTML, or an element on the page for each day of the week.  All of the above must occur within one page.

    name - for example Bubble Tea
    pic - for example bubble-tea.jpg
    alt - name of coffee in alt tag
    color - color associated with coffee
    desc - description of coffee
    day - day of the week



*/

let myDate = new Date();
let myDay = myDate.getDay();
let coffee = "";
let today = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    myDay = urlParams.get("day");
 }

 myDay = parseInt(myDay);//must change to integer for switch

// myDay = 0;

switch(myDay){

    case 0:
        today = "Sunday";

        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A pic of caramel latte",
            color: "light-brown", //"rgb(196, 164, 132)" 
            day: "Sunday",
            desc: `Where your latte dreams come true!`,
            details: [
                "Caramel Latte is a creamy blend of espresso and caramel syrup topped with steamed milk.",
                "Enjoy it with a hint of whipped cream for a sweet indulgence."
            ]
        };
    break;

    case 1:
        today = "Monday";

        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A pic of a cold brew",
            color: "brown",
            day: "Monday",
            desc: `For when I need a quick pick me up!`,
            details: [
                "Cold Brew is brewed for 12 hours to extract a smooth, rich flavor.",
                "Best served over ice with a splash of milk or sweet cream."
            ]
        };
    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Drip",
            pic: "images/drip.jpg",
            alt: "A pic of a drip",
            color: "black",
            day: "Tuesday",
            desc: `I just drink regular drip coffee!`,
            details: [
                "Drip Coffee is brewed to perfection with freshly ground beans.",
                "Pairs perfectly with a light breakfast to energize your morning."
            ]
        };
    break;

    case 3:
        today = "Wednesday";

        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A pic of a bubble tea",
            color: "pink",
            day: "Wednesday",
            desc: `I like me some bubble tea!`,
            details: [
                "Bubble Tea is a delicious mix of tea, milk, and chewy tapioca pearls.",
                "Perfect for adding a touch of fun and sweetness to your Wednesday!"
            ]
        };
    break;

    case 4:
        today = "Thursday";

        coffee = {
            name: "Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A pic of a frappaccino",
            color: "green",
            day: "Thursday",
            desc: `I would rather have a frappaccino!`,
            details: [
                "Frappuccino is a creamy blend of ice, coffee, and your choice of flavoring.",
                "Enjoy it topped with whipped cream and a drizzle of caramel or chocolate."
            ]
        };
    break;

    case 5:
        today = "Friday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A pic of a mocha",
            color: "Yellow",
            day: "Friday",
            desc: `I like me some mocha!`,
            details: [
                "Mocha combines espresso, steamed milk, and chocolate syrup for a decadent drink.",
                "Top it off with whipped cream and chocolate shavings for a Friday treat."
            ]
        };
    break;

    case 6:
        today = "Saturday";

        coffee = {
            name: "Pumpkin-spice-latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A pic of a pumpkin-spice-latte",
            color: "orange",
            day: "Saturday",
            desc: `I like me some pumpkin-spice-latte!`,
            details: [
                "Pumpkin Spice Latte combines espresso, milk, and pumpkin spice syrup.",
                "Perfectly spiced with cinnamon, nutmeg, and cloves for a cozy Saturday."
            ]
        };
    break;

     default:
        today = "Something went wrong";

}

// alert(today);
console.log(coffee);

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let detailsHtml = "";
    coffee.details.forEach((detail) => {
        detailsHtml += `<p>${detail}</p>`;
    });

    return `<p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">
            ${coffee.name}</strong>, ${coffee.desc}</p>
            ${detailsHtml}
            `

}
