function playSong(audioSelector) {
    const element = document.querySelector(audioSelector);

    if(element && element.localName === 'audio') {
        // console.log(element); //firefox -> element.localName
            element.play();
        
    }
    else {
        console.log('Element not found or Invalid selector');
    }
}


const keyList = document.querySelectorAll('.tecla');

const listSize = keyList.length;

for (let cont = 0; cont < listSize; cont++) {

    const key = keyList[cont];

    const instrument = key.classList[1];

    //template string
    const audioId = `#som_${instrument}`;

    key.onclick = function () {
        playSong(audioId);
    };

    //to turn red when clicked by enter and not the mouse
    key.onkeydown = function (event) {

        //console.log(event.code);

        if (event.code === 'Space' || event.code === 'Enter') {
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function () {
            key.classList.remove('ativa');
    }
}
