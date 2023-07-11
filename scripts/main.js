let count=0;

function changeImage(src) {
    document.querySelector("img").src = src;
}
 
document.body.onmousedown = function () {
    count += 1;
    document.querySelector("#pop").textContent=count;
    changeImage("../images/darake-hiyoko-1024x1024.png");
}
document.body.onmouseup = function () {
    changeImage("../images/tanabata-star-hiyoko-1024x1024.png");
}