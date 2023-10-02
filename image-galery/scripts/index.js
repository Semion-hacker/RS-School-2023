const headerInput = document.querySelector('.header_input'),
      imgDiv = document.querySelector('.img_div'),
      initialValue = 'winter',
      headerButton = document.querySelector('.header_button');

async function getImages(query = initialValue) { 
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape&client_id=69GYOFbtB8cjDldnol2WxVm5B0P3qjp_uzHFKYDceco`);
    const data = await response.json();
    openImage(data);
}

function openImage(data) {  
    data.results.forEach(image => {
        const image1 = document.createElement('img');
        image1.classList.add('image');
        image1.src = image.urls.regular;
        image1.alt = `${headerInput.value} image`;
        imgDiv.appendChild(image1);
    });
}

function updateImage() {
    if (headerInput.value) {    
        removeImage();
        getImages(headerInput.value);
    }
}

function removeImage() {
    const image1 = imgDiv.querySelectorAll('img');
    image1.forEach(img => img.remove());
}

headerButton.addEventListener('click', () => {
    updateImage()
});

headerInput.addEventListener("keypress", event => {
    if (event.key === "Enter") updateImage();
});

getImages();