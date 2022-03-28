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

    console.log("seatIndex",seatIndex);


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


$(document).ready(function () {
    $('.show').click(function () {
        $('.bookBg').hide(500);
        $('.screen').show();

    })
})

function onTicket() {

    let noseat = JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    let seatPrice = localStorage.getItem('SelectedSeatsTotalPrice');

    let innerSeat = document.querySelector('.noSeat');
    let innerPrice = document.querySelector('.seatPrice');

    innerSeat.innerHTML = noseat;
    innerPrice.innerHTML = seatPrice;
    bookTicket()
}


function onLoadCard() {
    localStorage.setItem('cardNumber', 4444333322221111)
    localStorage.setItem('cardExpiry', '01/24')
    localStorage.setItem('cvv', 333)
    localStorage.setItem('cardHolderName', 'musaraf')
}

onLoadCard();
// 

// payment otp---------------------------------------------------------------->


$(document).ready(function () {

    $('#paynow').click(function (event) {
        event.preventDefault();

        let getCard = localStorage.getItem('cardNumber');
        let getCardExpiry = localStorage.getItem('cardExpiry');
        let getCardCvv = localStorage.getItem('cvv');
        let getCardName = localStorage.getItem('cardHolderName');

        let cardInt = document.querySelector('.cardInt').value;
        let cardIntExp = document.querySelector('.cardIntExp').value;
        let cardIntCvv = document.querySelector('.cardIntCvv').value;
        let cardIntName = document.querySelector('.cardIntName').value;

        if (cardInt == getCard && getCardExpiry == cardIntExp && getCardCvv == cardIntCvv && getCardName == cardIntName) {
            $('.otp').show(500);
            $('.bookBg').hide();
        } else {
            alert('Card Details not Available')
        }
    })
    $('.show1').click(function () {
        $('.otp').hide(500);
        $('.bookBg').show();
    })
    $('.revealOtp').click(function () {
        $('.otpNo').show();
    })

})



function otpGenerate() {

    let nw = new Uint16Array(1);
    let ots = crypto.getRandomValues(nw);
    let parseOtp = JSON.parse([...ots])
    let user = localStorage.getItem('User_Detail');
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bookmyshow.fws@gmail.com",
        Password: "Asha128127@",
        To: user,
        From: "bookmyshow.fws@gmail.com",
        Subject: "Security Verification",
        Body: "<#>  " + parseOtp + " is your BookMyShow Verification Code. Enjoy Watching."
    }).then(
        alert('Please Check Your Registered Email!')
    );

    localStorage.setItem('OTP', parseOtp)
}



function verifyOtp() {
    let getOtp = localStorage.getItem('OTP');
    let num = document.getElementById('num').value;
    let OtpAlert = document.querySelector('.otpAlert');
    console.log("get", getOtp);
    if (getOtp == num) {
        window.open('/pages/bookTicket.html')
    } else {
        OtpAlert.innerHTML = 'Please Check Your OTP'
    }
}
