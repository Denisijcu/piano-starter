//create vars / grab html elements
var keys = document.querySelectorAll('.key');
var notes = {
  ckey: document.querySelector('#cAudio'),
  dkey: document.querySelector('#dAudio'),
  ekey: document.querySelector('#eAudio'),
  fkey: document.querySelector('#fAudio'),
  gkey: document.querySelector('#gAudio'),
  akey: document.querySelector('#aAudio'),
  bkey: document.querySelector('#bAudio'),
};


// create note text
var textNote = document.querySelector('#texto');


// define functions
function playNote(key) {
  notes[key].currentTime = 0;
  notes[key].play();
}


//call function and / or add event listeners
keys.forEach(function (key) {
  key.addEventListener("click", function () {
    playNote(key.id);
  });
});

document.addEventListener("keydown", function (event) {



  if (texto.textContent.length >= 25) {
    texto.innerHTML = '';
  }

  console.log(event.which);

  switch (event.which) {
    case 67:
      playNote("ckey");
      texto.innerHTML += '&#9833;';
      break;
    case 68:
      playNote("dkey");
      texto.innerHTML += '&#9834;';
      break;
    case 69:
      playNote("ekey");
      texto.innerHTML += '&#9835;';
      break;
    case 70:
      playNote("fkey");
      texto.innerHTML += '&#9836;';
      break;
    case 71:
      playNote("gkey");
      texto.innerHTML += '&#119070;';
      break;
    case 65:
      playNote("akey");
      texto.innerHTML += '&#119074;';
      break;
    case 66:
      playNote("bkey");
      texto.innerHTML += '&#127932;';
      break;
  }

});