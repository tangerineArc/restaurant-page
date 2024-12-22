import portMafiaCharacters from "../images/port-mafia-characters.png";

const heading = document.createElement("h1");

const contentDescription = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

const imageContainer = document.createElement("div");
const image = document.createElement("img");

heading.textContent = "Port Mafia Café";

contentDescription.className = "content-description";
p1.textContent = "Secrets in the Shadows, Flavors in the Spotlight";
p2.textContent = "Our menu is a blend of mystery and mastery, designed for fans and foodies alike to uncover something extraordinary.";

contentDescription.appendChild(p1);
contentDescription.appendChild(p2);

imageContainer.className = "image-container";
image.src = portMafiaCharacters;
image.alt = "port mafia characters from BSD anime";
image.width = "700";

imageContainer.appendChild(image);

export default function createHomeDOM(contentNode) {
    while (contentNode.firstChild) {
        contentNode.removeChild(contentNode.firstChild);
    }

    contentNode.appendChild(heading);
    contentNode.appendChild(contentDescription);
    contentNode.appendChild(imageContainer);
}