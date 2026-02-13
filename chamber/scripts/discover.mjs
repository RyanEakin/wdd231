import { itemsOfInterest } from "../data/ioi.mjs";
const cards = document.querySelector('.discover-grid');

const displayMembers = (revelations) => {
    revelations.forEach((revelation) => {
        const card = document.createElement('section');
        const Item = document.createElement('h2');
        const imageName = document.createElement('figure');
        const address = document.createElement('address');
        const desc = document.createElement('p')
        const learn = document.createElement('button');

        Item.textContent = `${revelation.name}`;
        address.textContent = `${revelation.address}`
        desc.textContent = `${revelation.address}`


        card.appendChild();

        cards.appendChild(card);
    });
}

async function getmemberData() {
    const response = await fetch(localurl);
    let data = await response.json();

    //
    try {
        const response = await fetch(localurl);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data.members); // references the members array not just JSON object
            return data;
            // displayResults(data); // this also works for parsing through JSON data
        }
        else {
            throw Error(await response.text());
        }

    }
    catch (error) {
        console.log(error);
    }
    //

    //console.table(data.members); // temporary testing of data response

}

getmemberData();