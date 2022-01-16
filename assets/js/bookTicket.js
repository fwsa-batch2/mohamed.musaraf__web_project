

function bookTicket() {
    let seats =JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    if (seats.length > 0) {
        window.open("/pages/bookTicket.html")
    } else {
        document.getElementById('check').innerText = "Please Select Your Seat To Proceed";
    }
}


$(document).ready(function () {
    $(".rat1").click(function () {
        if ('.rat1') {
            $('.rat1').css('color', 'orange');
            $('.rat2,.rat3,.rat4,.rat5').css('color', 'black');
            $('.bar-5,.bar-4,.bar-3,.bar-2').css({ "width": "100%", "height": "18px", "background-color": "gray" });
            $('.bar-1').css({ "width": "100%", "height": "18px", "background-color": "#f44336" });
            $('.text1').text(1);
            $('.totalRate').text(1);
            $('.text2,.text3,.text4,.text5').text(0)
            let rr = $('.rat1').attr('value')
            localStorage.setItem('rate1',rr);
            $('.hideReview').show()
        }
    })
    $(".rat2").click(function () {
        if ('.rat2') {
            $('.rat1,.rat2').css('color', 'orange');
            $('.rat3,.rat4,.rat5').css('color', 'black');
            $('.bar-5,.bar-4,.bar-3,.bar-1').css({ "width": "100%", "height": "18px", "background-color": "gray" });
            $('.bar-2').css({ "width": "100%", "height": "18px", "background-color": "#ff9800" });
            $('.text2').text(1);
            $('.totalRate').text(1);
            $('.text1,.text3,.text4,.text5').text(0);
            let rr = $('.rat2').attr('value');
            localStorage.setItem('rate1',rr);
            $('.hideReview').show()

        }
    })
    $(".rat3").click(function () {
        if ('.rat3') {
            $('.rat1,.rat2,.rat3').css('color', 'orange');
            $('.rat4,.rat5').css('color', 'black');
            $('.bar-5,.bar-4,.bar-2,.bar-1').css({ "width": "100%", "height": "18px", "background-color": "gray" });
            $('.bar-3').css({ "width": "100%", "height": "18px", "background-color": "#00bcd4" });
            $('.text3').text(1);
            $('.text1,.text2,.text4,.text5').text(0);
            $('.totalRate').text(1);
            let rr = $('.rat3').attr('value');
            localStorage.setItem('rate1',rr);
            $('.hideReview').show()


        }
    })
    $(".rat4").click(function () {
        if ('.rat4') {
            $('.rat1,.rat2,.rat3,.rat4').css('color', 'orange');
            $('.rat5').css('color', 'black');
            $('.bar-4').css({ "width": "100%", "height": "18px", "background-color": "#2196F3" });
            $('.bar-3,.bar-5,.bar-2,.bar-1').css({ "width": "100%", "height": "18px", "background-color": "gray" });
            $('.text4').text(1);
            $('.text1,.text2,.text3,.text5').text(0);
            $('.totalRate').text(1);
            let rr = $('.rat4').attr('value');
            localStorage.setItem('rate1',rr);
            $('.hideReview').show()


        }
    })
    $(".rat5").click(function () {
        if ('.rat5') {
            $('.rat1,.rat2,.rat3,.rat4,.rat5').css('color', 'orange');
            $('.bar-5').css({ "width": "100%", "height": "18px", "background-color": "#04AA6D" });
            $('.bar-4,.bar-3,.bar-2,.bar-1').css({ "width": "100%", "height": "18px", "background-color": "gray" });
            $('.text5').text(1);
            $('.text1,.text2,.text3,.text4').text(0);
            $('.totalRate').text(1);
            let rr = $('.rat5').attr('value');
            localStorage.setItem('rate1',rr);
            $('.hideReview').show()


        }
    })


})


