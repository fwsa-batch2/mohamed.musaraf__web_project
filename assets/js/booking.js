const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;


onPageLoad();
// onpagload function

function onPageLoad() {
    let seatIndex = JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seatIndex !== null) {
        seats.forEach((seat, index) => {
            if (seatIndex.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    }
    let movieIndex = localStorage.getItem('seletedMovieIndex');
    if (movieIndex !== null) {
        movieSelect.selectedIndex = movieIndex;
    }


}

// seave selected movie index and price

function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('seletedMovieIndex', (movieIndex));
    localStorage.setItem('selectedMoviePrice', (moviePrice));

}

// update total and count 

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length
    count.innerHTML = selectedSeatsCount;
    total.innerHTML = selectedSeatsCount * ticketPrice;
    let seatIndex = [...selectedSeats].map(function (seat) {
        return [...seats].indexOf(seat);
    })
    localStorage.setItem('SelectedSeatsIndex', JSON.stringify(seatIndex));
    localStorage.setItem('SelectedSeatsTotalPrice', (total.innerHTML));

    console.log(seatIndex);


}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount()
    setMovieData(e.target.selectedIndex, e.target.value)


})

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected')
    }

    updateSelectedCount()
})

updateSelectedCount();


///////// seats Proceed--------------------------------------------------------------/////////////////


