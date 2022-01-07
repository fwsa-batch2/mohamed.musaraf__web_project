

function bookTicket() {
    let seats =JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seats.length > 0) {
        alert('ticket booked successfully')
        window.open("/pages/bookTicket.html")
    } else {
        document.getElementById('check').innerText = "Please Select Your Seat To Proceed";
    }
}


// function ticketDownload() {
//     let seatIndex = JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
// let movieIndex= localStorage.getItem('seletedMovieIndex');
// let totalPrice= localStorage.getItem('SelectedSeatsTotalPrice');
// let moviePrice= localStorage.getItem('selectedMoviePrice');
// let docs=document.getElementById('news')
// console.log(seatIndex);
// docs.innerHTML=seatIndex;
    // let divs = `<p>` +seatIndex+ `</p>`;
    // divs=innerText;
// }
