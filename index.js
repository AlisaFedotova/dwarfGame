let frames = document.getElementsByClassName("frame");

function fillDices() {
    frames.forEach(function (frame,i,frames) {
       let rand = Math.floor(Math.random()*4);
        console.log(rand);
    });
}