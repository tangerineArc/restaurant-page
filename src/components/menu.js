"use strict";

import akutagawaImage from "../images/characters/akutagawa.png";
import atshushiImage from "../images/characters/atshushi.png";
import dazaiImage from "../images/characters/dazai.png";
import eliseImage from "../images/characters/elise.png";
import fukuzawaImage from "../images/characters/fukuzawa.png";
import fyodorImage from "../images/characters/fyodor.png";
import ginImage from "../images/characters/gin.png";
import gogolImage from "../images/characters/gogol.png";
import hermanImage from "../images/characters/herman.png";
import moriImage from "../images/characters/mori.png";
import odaImage from "../images/characters/oda.png";
import yosanoImage from "../images/characters/yosano.png";

import beastNachosImage from "../images/dishes/beast-nachos.jpeg";
import blackoutCakeImage from "../images/dishes/blackout-cake.jpeg";
import harmoniousBentoImage from "../images/dishes/harmonious-bento.jpeg";
import quietResolveCurryImage from "../images/dishes/quiet-resolve-curry.jpg";
import rashomonRamenImage from "../images/dishes/rashomon-ramen.jpg";
import reviveAndDineImage from "../images/dishes/revive-and-dine.jpg";
import shadowRollsImage from "../images/dishes/shadow-rolls.jpg";
import silentTreatmentImage from "../images/dishes/silent-treatment.jpg";
import suicideWingsImage from "../images/dishes/suicide-wings.jpeg";
import sweetEscapeImage from "../images/dishes/sweet-escape.webp";
import theMobyDickSundaeImage from "../images/dishes/the-moby-dick-sundae.jpg";
import tricksterTorteImage from "../images/dishes/trickster-torte.jpeg";

const data = [
    {
        categoryType: "Appetizers",
        items: [
            {
                dishImagesSrc: suicideWingsImage,
                dishImagesAlt: "Suicide Wings",
                itemName: "Suicide Wings",
                itemDescription: "spicy chicken wings with a deadly kick, served with a cooling dip",
                characterImageSrc: dazaiImage,
                characterImageAlt: "Osamu Dazai"
            },
            {
                dishImagesSrc: silentTreatmentImage,
                dishImagesAlt: "Silent Treatment",
                itemName: "Silent Treatment",
                itemDescription: "a charcuterie board with fine cheeses, meats, and crackers",
                characterImageSrc: moriImage,
                characterImageAlt: "Ogai Mori"
            },
            {
                dishImagesSrc: shadowRollsImage,
                dishImagesAlt: "Shadow Rolls",
                itemName: "Shadow Rolls",
                itemDescription: "elegant sushi rolls with a dark soy glaze",
                characterImageSrc: ginImage,
                characterImageAlt: "Gin Akutagawa"
            },
            {
                dishImagesSrc: beastNachosImage,
                dishImagesAlt: "Beast Nachos",
                itemName: "Beast Nachos",
                itemDescription: "charcoal-tinted tortilla chips with molten cheese and a smoky salsa",
                characterImageSrc: atshushiImage,
                characterImageAlt: "Atshushi Nakajima",
            }
        ]
    },
    {
        categoryType: "Main Dishes",
        items: [
            {
                dishImagesSrc: rashomonRamenImage,
                dishImagesAlt: "Rashomon Ramen",
                itemName: "Rashomon Ramen",
                itemDescription: "a bold black garlic ramen with a spicy edge",
                characterImageSrc: akutagawaImage,
                characterImageAlt: "Ryunosuke Akutagawa",
            },
            {
                dishImagesSrc: reviveAndDineImage,
                dishImagesAlt: "Revive & Dine",
                itemName: "Revive & Dine",
                itemDescription: "a vibrant vegan bowl with fresh greens, quinoa, and tangy dressing",
                characterImageSrc: yosanoImage,
                characterImageAlt: "Akiko Yosano",
            },
            {
                dishImagesSrc: quietResolveCurryImage,
                dishImagesAlt: "Quiet Resolve Curry",
                itemName: "Quiet Resolve Curry",
                itemDescription: "curry served with tender beef, steamed rice, and a touch of spice",
                characterImageSrc: odaImage,
                characterImageAlt: "Sakunosuke Oda",
            },
            {
                dishImagesSrc: harmoniousBentoImage,
                dishImagesAlt: "Harmonious Bento",
                itemName: "Harmonious Bento",
                itemDescription: "featuring grilled salmon, rolled omelet, vegies, and pickled radishes",
                characterImageSrc: fukuzawaImage,
                characterImageAlt: "Fukuzawa Yukichi",
            }
        ]
    },
    {
        categoryType: "Desserts & Drinks",
        items: [
            {
                dishImagesSrc: blackoutCakeImage,
                dishImagesAlt: "Blackout Cake",
                itemName: "Blackout Cake",
                itemDescription: "a decadent dark chocolate cake with a hint of espresso",
                characterImageSrc: fyodorImage,
                characterImageAlt: "Fyodor Dostoevsky",
            },
            {
                dishImagesSrc: sweetEscapeImage,
                dishImagesAlt: "Sweet Escape",
                itemName: "Sweet Escape",
                itemDescription: "a creamy strawberry milkshake with whipped cream and candy sprinkles",
                characterImageSrc: eliseImage,
                characterImageAlt: "Elise",
            },
            {
                dishImagesSrc: theMobyDickSundaeImage,
                dishImagesAlt: "The Moby Dick Sundae",
                itemName: "The Moby Dick Sundae",
                itemDescription: "vanilla ice cream, blueberry compote, and chocolate shavings",
                characterImageSrc: hermanImage,
                characterImageAlt: "Herman Melville",
            },
            {
                dishImagesSrc: tricksterTorteImage,
                dishImagesAlt: "Trickster Torte",
                itemName: "Trickster Torte",
                itemDescription: "dark chocolate ganache, a swirl of raspberry filling, and chocolate",
                characterImageSrc: gogolImage,
                characterImageAlt: "Nikolai Gogol",
            }
        ]
    }
];

const menuContainer = document.createElement("div");
menuContainer.id = "menu-container";

for (let i = 0; i < 3; i ++) {
    const menuCategorySection = document.createElement("section");
    menuCategorySection.className = "menu-category";

    const categoryHeading = document.createElement("h2");
    categoryHeading.textContent = data[i].categoryType;

    const menuItemsContainer = document.createElement("div");
    menuItemsContainer.className = "menu-items";

    for (let j = 0; j < 4; j ++) {
        const itemContainer = document.createElement("div");
        itemContainer.className = "item";

        const dishImage = document.createElement("img");
        dishImage.src = data[i].items[j].dishImagesSrc;
        dishImage.alt = data[i].items[j].dishImagesAlt;
        dishImage.width = "200";
        dishImage.height = "220";

        const itemHeading = document.createElement("h3");
        itemHeading.textContent = data[i].items[j].itemName;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = data[i].items[j].itemDescription;

        const characterImage = document.createElement("img");
        characterImage.src = data[i].items[j].characterImageSrc;
        characterImage.alt = data[i].items[j].characterImageAlt;
        characterImage.height = "300";

        itemContainer.appendChild(dishImage);
        itemContainer.appendChild(itemHeading);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(characterImage);

        menuItemsContainer.appendChild(itemContainer);
    }

    menuCategorySection.appendChild(categoryHeading);
    menuCategorySection.appendChild(menuItemsContainer);

    menuContainer.appendChild(menuCategorySection);
}

export default function createMenuDOM(contentNode) {
    while (contentNode.firstChild) {
        contentNode.removeChild(contentNode.firstChild);
    }

    contentNode.appendChild(menuContainer);
}