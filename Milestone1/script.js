const photosContainer = document.getElementById('photos');

function fetchPhotos() {
    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
        .then(resp => {
            const photos = resp.data;
            console.log(photos);
            displayPhotos(photos);
        })
    }

function displayPhotos(photos) {

    photos.forEach(photo => {
        const card = document.createElement('div');
        card.classList.add('col');

        card.innerHTML = `
            <div class="card rounded-0 p-3">
                <svg class="pin" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_11_3)">
                        <circle cx="17" cy="16" r="16" fill="url(#paint0_linear_11_3)" />
                        <circle cx="17" cy="16" r="15" stroke="url(#paint1_linear_11_3)" stroke-width="2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_11_3" x="0.6" y="0" width="34.8" height="35.4"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="1" dy="2" />
                            <feGaussianBlur stdDeviation="0.7" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_11_3" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_11_3" result="shape" />
                        </filter>
                        <linearGradient id="paint0_linear_11_3" x1="17" y1="0" x2="17" y2="32"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5D0B03" />
                            <stop offset="1" stop-color="#F66659" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_11_3" x1="10.1429" y1="7.76563e-07" x2="30.2571" y2="24.6857"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF3EB" />
                            <stop offset="1" stop-color="#512312" />
                        </linearGradient>
                    </defs>
                </svg>
                <img src="${photo.url}" class="card-img-top" alt="${photo.title}" loading="lazy">
                <div class="card-body p-0 pt-2">
                    <p class="card-text">${photo.title}</p>
                </div>
            </div>
        `;
        
        photosContainer.appendChild(card);
    });
}

fetchPhotos();