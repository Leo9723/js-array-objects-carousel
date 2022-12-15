let slider_cont = document.getElementById('slider-container')

const imagesArray = [
    {
        immagine: "01.webp",
        titolo: "Miles Morales",
        descrizione: "Vivi l'ascesa di Miles Morales, un nuovo eroe che deve imparare a padroneggiare nuovi incredibili ed esplosivi poteri per diventare la sua personalissima versione di Spider-Man."
    },
    {
        immagine: "02.webp",
        titolo: "Ratchet & Clank",
        descrizione: "Ratchet & Clank è una serie di videogiochi platform-adventure sviluppati da Insomniac Games e pubblicati da Sony Computer Entertainment."
    },
    {
        immagine: "03.webp",
        titolo: "Fortnite",
        descrizione: "Fortnite è un gioco di Battaglia reale free-to-play con numerose modalità per ogni tipo di giocatore. Guarda un concerto, costruisci un'isola o combatti."
    },
    {
        immagine: "04.webp",
        titolo: "Stray",
        descrizione: "Stray è un'avventura in terza persona con protagonista un gatto, ambientata nei dettagliati vicoli illuminati al neon di una decadente città cibernetica"
    },
    {
        immagine: "05.webp",
        titolo: "The Avengers",
        descrizione: "Gioca una storia originale sugli Avengers: Marvel's Avengers è un'interpretazione di questi iconici supereroi, tra cui Captain America, Iron Man ed Hulk"
    },
]

let itemsContent = '';
let itemtumbnail = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].immagine}">
        <div>
            <h3>${imagesArray[i].titolo}</h3>
            <p>${imagesArray[i].descrizione}</p>
        </div>
    </div>`

    itemtumbnail += `<img src="./img/${imagesArray[i].immagine}" class="tumb-img">`
}
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

const tumbnails = document.getElementById('tumbnail');
tumbnails.innerHTML += itemtumbnail;

const items = document.getElementsByClassName('item');
const tumb_item = document.getElementsByClassName('tumb-img');
let itemActive = 0;



items[itemActive].classList.add('active');
tumb_item[itemActive].classList.add('tumb-active')

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
console.log(itemActive)


next.addEventListener('click', function(){

    if(itemActive < items.length -1){
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive++
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
    else {
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive = 0
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
});

prev.addEventListener('click', function(){

    if(itemActive > 0){
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive--
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
    else {
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive = items.length -1
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
})

const TimeInterval = setInterval(autoplay, 3000);

const TimeInterval_2 = setInterval(back, 3000)
    function autoplay() {
    if(itemActive < items.length -1){
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive++
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
    else {
        items[itemActive].classList.remove('active')
        circles[itemActive].classList.remove('active')
        tumb_item[itemActive].classList.remove('tumb-active')
        itemActive = 0
        items[itemActive].classList.add('active')
        circles[itemActive].classList.add('active')
        tumb_item[itemActive].classList.add('tumb-active')
    }
  }

let play_button = document.getElementById('play')
let stop_button = document.getElementById('stop')
let back_button = document.getElementById('back')

function myStop() {
    clearInterval(TimeInterval);
  }

stop_button.addEventListener('click', function(){
    myStop()
})

play_button.addEventListener('click', function(){
    myStop()
    TimeInterval = setInterval(autoplay, 3000);
    autoplay()
})

back_button.addEventListener('click', function(){
    myStop()
    TimeInterval_2 = setInterval(back, 3000);
    function back() {
        if(itemActive > 0){
            items[itemActive].classList.remove('active')
            circles[itemActive].classList.remove('active')
            tumb_item[itemActive].classList.remove('tumb-active')
            itemActive--
            items[itemActive].classList.add('active')
            circles[itemActive].classList.add('active')
            tumb_item[itemActive].classList.add('tumb-active')
        }
        else {
            items[itemActive].classList.remove('active')
            circles[itemActive].classList.remove('active')
            tumb_item[itemActive].classList.remove('tumb-active')
            itemActive = items.length -1
            items[itemActive].classList.add('active')
            circles[itemActive].classList.add('active')
            tumb_item[itemActive].classList.add('tumb-active')
        }
      }
})