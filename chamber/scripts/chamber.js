const url = '../data/members.json';
const cards = document.querySelector('#cards');


const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const email = document.createElement('p')
        const phone = document.createElement('p')
        const corpURL = document.createElement('p')
        const portrait = document.createElement('img');

        fullName.textContent = `${member.name} ${member.lastname}`;

        birthDate.textContent = `Date of Birth: ${member.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${member.birthplace}`;

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.name}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '440');
        portrait.setAttribute('height', '340');

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

async function getmemberData() {
    const response = await fetch(url);
    let data = await response.json();
    //console.table(data.members); // temporary testing of data response
    displayMembers(data.members); // references the members array not just JSON object
}

getMemberData();