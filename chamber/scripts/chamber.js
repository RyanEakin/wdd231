const url = 'data/members.json';
const cards = document.querySelector('.cards');


const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section');
        const businessName = document.createElement('h2');
        const email = document.createElement('p')
        const info = document.createElement('div')
        const phone = document.createElement('p')
        const corpURL = document.createElement('p')
        const portrait = document.createElement('img');

        businessName.textContent = `Business: ${member.name}`;

        email.textContent = `email: ${member.email}`;
        email.setAttribute('class', 'email');
        phone.textContent = `phone: ${member.phone}`;
        phone.setAttribute('class', 'phone');
        corpURL.textContent = `website: ${member.websiteURL}`;
        corpURL.setAttribute('class', 'URL');

        portrait.setAttribute('src', member.imageurl);
        portrait.setAttribute('alt', `Portrait of ${member.imageName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '64px');
        portrait.setAttribute('height', '64px');

        card.appendChild(businessName);

        card.appendChild(portrait);
        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(corpURL);

        card.appendChild(info);

        cards.appendChild(card);
    });
}

async function getmemberData() {
    const response = await fetch(url);
    let data = await response.json();

    //
    try {
        const response = await fetch(url);
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