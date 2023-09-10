let offset = 0;
const sliderLine = document.querySelector('.Carret_image_wrapper')
const CarouselPagination1 = document.querySelector('.Carousel-pagination1_item1')
const CarouselPagination2 = document.querySelector('.Carousel-pagination1_item2')
const CarouselPagination3 = document.querySelector('.Carousel-pagination1_item3')
const CarouselPagination4 = document.querySelector('.Carousel-pagination1_item4')
const CarouselPagination5 = document.querySelector('.Carousel-pagination1_item5')


document.querySelector('.Carret_Right').addEventListener('click', function(){
    offset += 475;
    if (offset > 2350) {
        offset = 0
    }
    sliderLine.style.left = -offset + 'px';
    examination()
});

document.querySelector('.Carret_Left').addEventListener('click', function(){
    offset -= 475;
    if (offset < 0) {
        offset = 1900;
    }
    sliderLine.style.left = -offset + 'px';
    examination()
});

document.querySelector('.Carousel-pagination1').addEventListener('click', function(){
    sliderLine.style.left = 0;
    offset = 0;
    examination()
});

document.querySelector('.Carousel-pagination2').addEventListener('click', function(){
    sliderLine.style.left = -475 + 'px';
    offset = 475;
    examination()
});

document.querySelector('.Carousel-pagination3').addEventListener('click', function(){
    sliderLine.style.left = -950 + 'px';
    offset = 950;
    examination()
});

document.querySelector('.Carousel-pagination4').addEventListener('click', function(){
    sliderLine.style.left = -1425 + 'px';
    offset = 1425;
    examination()
});

document.querySelector('.Carousel-pagination5').addEventListener('click', function(){
    sliderLine.style.left = -1900 + 'px';
    offset = 1900;
    examination()
});
function examination() {
    if (offset === 0) {
        CarouselPagination1.style.background = "#BB945F";
        CarouselPagination2.style.background = "#0C0C0E";
        CarouselPagination3.style.background = "#0C0C0E";
        CarouselPagination4.style.background = "#0C0C0E";
        CarouselPagination5.style.background = "#0C0C0E";
    };
    
    if (offset === 475) {
        CarouselPagination1.style.background = "#0C0C0E";
        CarouselPagination2.style.background = "#BB945F";
        CarouselPagination3.style.background = "#0C0C0E";
        CarouselPagination4.style.background = "#0C0C0E";
        CarouselPagination5.style.background = "#0C0C0E";
    };
    
    if (offset === 950) {
        CarouselPagination1.style.background = "#0C0C0E";
        CarouselPagination2.style.background = "#0C0C0E";
        CarouselPagination3.style.background = "#BB945F";
        CarouselPagination4.style.background = "#0C0C0E";
        CarouselPagination5.style.background = "#0C0C0E";
    };
    
    if (offset === 1425) {
        CarouselPagination1.style.background = "#0C0C0E";
        CarouselPagination2.style.background = "#0C0C0E";
        CarouselPagination3.style.background = "#0C0C0E";
        CarouselPagination4.style.background = "#BB945F";
        CarouselPagination5.style.background = "#0C0C0E";
    };
    
    if (offset === 1900) {
        CarouselPagination1.style.background = "#0C0C0E";
        CarouselPagination2.style.background = "#0C0C0E";
        CarouselPagination3.style.background = "#0C0C0E";
        CarouselPagination4.style.background = "#0C0C0E";
        CarouselPagination5.style.background = "#BB945F";
    };
};