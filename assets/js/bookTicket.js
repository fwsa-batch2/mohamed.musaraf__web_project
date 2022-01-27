

function bookTicket() {
    let seats =JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seats.length > 0) {
                $('.bookBg').show(500);
                $('.screen').hide();
                document.getElementById('check').innerText = "";

            } else {
        document.getElementById('check').innerText = "Please Select Your Seat To Proceed";
    }
}

let totalRating = JSON.parse(localStorage.getItem('Reviews')).length;
$(document).ready(function () {
    $(".rate1").click(function () {
        if ('.rate1') {
            $('.rate1').css('color', 'gold');
            $('.rate2,.rate3,.rate4,.rate5').css('color', 'black');
            $('.totalRate').text(totalRating);
            let rateOfValue = $('.rate1').attr('value')
            localStorage.setItem('rate1',rateOfValue);
            $('.hideReview').show()
        }
    })
    $(".rate2").click(function () {
        if ('.rate2') {
            $('.rate1,.rate2').css('color', 'gold');
            $('.rate3,.rate4,.rate5').css('color', 'black');
            $('.totalRate').text(totalRating);
            let rateOfValue = $('.rate2').attr('value');
            localStorage.setItem('rate1',rateOfValue);
            $('.hideReview').show()

        }
    })
    $(".rate3").click(function () {
        if ('.rate3') {
            $('.rate1,.rate2,.rate3').css('color', 'gold');
            $('.rate4,.rate5').css('color', 'black');
            $('.totalRate').text(totalRating);
            let rateOfValue = $('.rate3').attr('value');
            localStorage.setItem('rate1',rateOfValue);
            $('.hideReview').show()


        }
    })
    $(".rate4").click(function () {
        if ('.rate4') {
            $('.rate1,.rate2,.rate3,.rate4').css('color', 'gold');
            $('.rate5').css('color', 'black');
            $('.totalRate').text(totalRating);
            let rateOfValue = $('.rate4').attr('value');
            localStorage.setItem('rate1',rateOfValue);
            $('.hideReview').show()


        }
    })
    $(".rate5").click(function () {
        if ('.rate5') {
            $('.rate1,.rate2,.rate3,.rate4,.rate5').css('color', 'gold');
            $('.totalRate').text(totalRating);
            let rateOfValue = $('.rate5').attr('value');
            localStorage.setItem('rate1',rateOfValue);
            $('.hideReview').show()


        }
    })


})


