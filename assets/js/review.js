let arrayOfRating = []

function review() {
    let reviewValue = document.getElementById('text').value;
    let rate1 = localStorage.getItem('rate1')
    let ratingObject = {
        reviewToObject: reviewValue,
        rateToObject: rate1
    }
    if (reviewValue == "") {
        alert('Please Write your Review')
    } else {
        arrayOfRating.push(ratingObject)
        let stringy = JSON.stringify(arrayOfRating)
        localStorage.setItem('Reviews', stringy)
        document.getElementById('form').reset();
    }
    setReview();
}

function setReview() {
    
    let getReviewFromLocal = JSON.parse(localStorage.getItem('Reviews'));
    let ul = "";
    for (let value of getReviewFromLocal) {
        let valueOFRate = value.rateToObject;
        let valueOfReview = value.reviewToObject;
        let ul1 = `<div class=com><h2 class=thx> Thanks for Your Review</h2><h3> Ratings : ${valueOFRate}/5</h3><br><li class=value>${valueOfReview}</li></div>`;
        ul = ul + ul1
    }
    let news = document.getElementById('comment');
    news.innerHTML = ul
}

setReview()

function onReviewPage() {
    let localValue = JSON.parse(localStorage.getItem('Reviews'));
    if (localValue !== null) {
        arrayOfRating = localValue
    }
}

onReviewPage();