

let i1 = 0;

let images1 = [];

let time1 = 2000;

// img list

images1[0] = '/bookmyshowapp-ui/assets/img/the-investigation-stream-cover.webp';
images1[1] = '/bookmyshowapp-ui/assets/img/fast-and-furious-9-stream-cover.webp';
images1[2] = '/bookmyshowapp-ui/assets/img/venom-let-there-be-carnage-cover.webp';
images1[3] = '/bookmyshowapp-ui/assets/img/old-cover.webp';
images1[4] = '/bookmyshowapp-ui/assets/img/spider-man-far-from-home-cover.webp';
images1[5] = '/bookmyshowapp-ui/assets/img/quiet-place--2-cover.webp';
images1[6] = '/bookmyshowapp-ui/assets/img/the-croods-cover.webp';


// change images

function changeImg1() {


    if (i1 < images1.length - 1) {
        i1++
    } else {
        i1 = 0;
    }
    document.querySelector(".streamImage").src = images1[i1];

    setTimeout('changeImg1()', time1);

}

changeImg1();


let i2 = 0;

let images2 = [];

let time2 = 2000;

// img list

images2[0] = '/bookmyshowapp-ui/assets/img/the-investigation-stream.webp';
images2[1] = '/bookmyshowapp-ui/assets/img/fast-and-furious-9-stream.jpg';
images2[2] = '/bookmyshowapp-ui/assets/img/venom-let-there-be-carnage.webp';
images2[3] = '/bookmyshowapp-ui/assets/img/old.webp';
images2[4] = '/bookmyshowapp-ui/assets/img/spider-man-far-from-home.webp';
images2[5] = '/bookmyshowapp-ui/assets/img/quiet-place--2.webp';
images2[6] = '/bookmyshowapp-ui/assets/img/the-croods.webp';


// change images

function changeImg2() {


    if (i2 < images2.length - 1) {
        i2++
    } else {
        i2 = 0;
    }
    document.querySelector(".streamImage2").src = images2[i2];

    setTimeout('changeImg2()', time2);

}

changeImg2();

// filter------------------------------------------------------------------------

$(document).ready(function() {
    

$(".list").click(function() {
    const value = $(this).attr("data-filter");
    if (value == "all") {
        $(".item").show("1000");
    } else{
        $(".item").not("."+value).hide("1000");
        $(".item").filter("."+value).show("1000");
    }
})

$(".list").click(function() {
    $(this).addClass('active').siblings().removeClass("active")
})


})