

let arra = []


function review(event) {
    event.preventDefault();
    let getInput = document.getElementById('text').value;
    if (getInput == "") {
        alert('Please Write your Review')
    } else {
        arra.push(getInput)
        let stringy = JSON.stringify(arra)
        localStorage.setItem('Reviews', stringy)
        document.getElementById('form').reset();

        console.log((stringy));

    }
     setReview();
}

function setReview() {
    let rev = JSON.parse(localStorage.getItem('Reviews'));
    let rate1 = localStorage.getItem('rate1')
    let ul = "";
    for (let value of rev) {
        let ul1 = `<div class=com><h2 class=thx> Thanks for Your Review</h2><h3> Ratings : ${rate1}/5</h3><br><li class=value>${value}</li></div>`;
        ul = ul + ul1
    }
    let news = document.getElementById('comment');
    news.innerHTML = ul
}

setReview()

function onReviewPage() {
    let localValue = JSON.parse(localStorage.getItem('Reviews'));
    if (localValue !== null) {
        arra = localValue
    }
}

onReviewPage();