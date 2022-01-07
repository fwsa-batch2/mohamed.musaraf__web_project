

function bookTicket() {
    let seats =JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seats.length > 0) {
        alert('ticket booked successfully')
        window.open("/pages/bookTicket.html")
    } else {
        document.getElementById('check').innerText = "Please Select Your Seat To Proceed";
    }
}


