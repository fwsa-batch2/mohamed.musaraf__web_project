

function bookTicket() {
    let seats =JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seats.length > 0) {
        window.open("/pages/bookTicket.html")
    } else {
        document.getElementById('check').innerText = "Please Select Your Seat To Proceed";
    }
}


