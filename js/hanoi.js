var pinkRing = document.getElementsByClassName('small');
var greenRing = document.getElementsByClassName('med');
var orangeRing = document.getElementsByClassName('big');
var ringObj = document.getElementsByClassName('ring');
var towerRef = document.getElementsByClassName('tower');

function selectRing(x) {
    ringObj[x].style.display = 'none';
    sessionStorage.setItem('ringId', ringObj[x].id);
    sessionStorage.setItem('ringClass', ringObj[x].classList[1]);

    console.log(ringObj[x].id + ' selected');
}

function placeRing(y) {
    let newRing = sessionStorage.getItem('ring');
    let newDiv = document.createElement('div');
    newDiv.classList.add('ring', sessionStorage.getItem('ringClass'));
    newDiv.id = newRing;
    towerRef[y].appendChild(newDiv);

    console.log(towerRef[y].id + ' selected');
}