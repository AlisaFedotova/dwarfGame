const NUMBER_OF_DICE = 13;
const NUMBER_OF_HANDFRAMES = 6;
const PLAYER1 = 'player1';
const PLAYER2 = 'player2';
let frames = document.getElementsByClassName("frame");

function initStructure() {

    initHand(PLAYER1);
    initHand(PLAYER2);
    initField();
}

function initField() {
    let field = document.createElement('div');
    field.className = 'field';
    document.body.appendChild(field);
    for (let i = 0; i < 15; i++) createFrame(field);
}

function initHand(hand) {
    let player = document.createElement('div');
    player.className = hand;
    document.body.appendChild(player);
    for (let i = 0; i < NUMBER_OF_HANDFRAMES; i++) createFrame(player);
}


function createFrame(frameParent) {
    let frame = document.createElement('div');
    frame.className = 'frame';
    frameParent.appendChild(frame);
    let subFrame = document.createElement('div');
    subFrame.className = 'subFrame';
    frame.appendChild(subFrame);
}

function fillDices() {
    let set = createDiceSet();
    for (let i = 0; i < frames.length; i++) {
        if (!frames[i].hasAttribute('lost')) {
            let frame = frames[i].appendChild(document.createElement('div'));
            frame.setAttribute('class', 'dice-' + set[i]);
        }
    }
}

function createDiceSet() {
    let set = [];
    for (let i = 0; i < NUMBER_OF_DICE; i++) {
        set[i] = generatePips();
    }
    return set;
}

function generatePips() {
    return Math.floor(Math.random() * 4) + '-' + Math.floor(Math.random() * 4);

}

initStructure();