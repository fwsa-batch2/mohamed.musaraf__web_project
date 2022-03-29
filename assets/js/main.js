function showNav() {
    document.getElementById('sidebar').classList.toggle('active')
}

// image slide----------------------------------------------------------

let i = 0;

let images = [];

let time = 2000;

// img list

images[0] = './assets/img/freeaccessbannercopy.webp';
images[1] = './assets/img/inoxbannerdesktop.webp';


// change images

function changeImg() {


    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }
    document.querySelector(".slide").src = images[i];

    setTimeout('changeImg()', time);

}

changeImg();


// search bar------------------------------------------------------------------------------------//

function searchPages() {
    
    let searchBar =document.getElementById("search").value;

    if ('movies' == searchBar) {
        window.open('./index.html')
    } else if ('spiderman' == searchBar) {
        window.open('./pages/spider.html')
    } else if ('sooriyavanshi' == searchBar) {
        window.open('./pages/sooriyavanshi.html')
    }else if ('residentevil' == searchBar) {
        window.open('./pages/residentEvil.html')
    }else if ('pushpa' == searchBar) {
        window.open('./pages/pushpa.html')
    }else if ('maanadu' == searchBar) {
        window.open('./pages/maanadu.html')
    }else if ('kurup' == searchBar) {
        window.open('./pages/kurup.html')
    }else if ('jail' == searchBar) {
        window.open('./pages/jail.html')
    }else if ('eternals' == searchBar) {
        window.open('./pages/eternals.html')
    }else if ('encanto' == searchBar) {
        window.open('./pages/encanto.html')
    }else if ('clifford' == searchBar) {
        window.open('./pages/clifford.html')
    }else if ('chandigarh' == searchBar) {
        window.open('./pages/chandigarh.html')
    }else if ('bachelor' == searchBar) {
        window.open('./pages/bachelor.html')
    }else if ('antiindian' == searchBar) {
        window.open('./pages/antiIndian.html')
    } else {
        alert("Please check your key")
    }
}

// movie filter---------------------------------------------------------------------//

$(document).ready(function() {
    

    $(".list1").click(function() {
        const value1 = $(this).attr("data-filter");
        if (value1 == "all1") {
            $(".item1").show("1000");
        } else{
            $(".item1").not("."+value1).hide("1000");
            $(".item1").filter("."+value1).show("1000");
        }
    })
    
    $(".list1").click(function() {
        $(this).addClass('active1').siblings().removeClass("active1")
    })
    
    
    })