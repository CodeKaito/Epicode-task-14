import data from '../data/data.js';

console.log(data);

let row = document.querySelector('.row');

const createCard = () => {
    data.forEach(element => {
        let card = document.createElement('div');
        card.className = 'col-md-3 col-sm-6 col-xs-12 p-3 element';

        let cardInnerHtml = `
            <div class="card">
                <a href="#">
                    <img src="${element.image}" class="card-img-top" alt="${element.title}">
                </a>
                <div class="card-body">
                    <h5 class="album-title">${element.title}</h5>
                    <button class="btn btn-primary" data-bs-toggle="collapse" data-bs-target="#${element.id}" aria-expanded="false" aria-controls="collapseExample">
                        View details
                    </button>
                    
                    <div class="collapse" id="${element.id}">
                        <div class="card card-body">
                            <p class="album-artist">Artist: ${element.artist}</p>
                            <p class="album-genre">Genre: ${element.genre}</p>
                            <p class="duration">Duration: ${element.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        card.innerHTML = cardInnerHtml;
        row.appendChild(card);
    });
}

createCard();