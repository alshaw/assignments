let box = document.getElementById('box');

this.onmouseover = () => {
  box.style.backgroundColor = "blue";
};

this.onmousedown = () => {
  box.style.backgroundColor = "red";
};

this.onmouseup = () => {
  box.style.backgroundColor = "yellow";
};

this.ondblclick = () => {
  box.style.backgroundColor = "green";
};

window.onscroll = () => {
  box.style.backgroundColor = "orange";
};

window.onkeypress = e => {
  if (e.keyCode === 98) {
    box.style.backgroundColor = "blue";
  } else if (e.keyCode === 114) {
    box.style.backgroundColor = "red";
  } else if (e.keyCode === 121) {
    box.style.backgroundColor = "yellow";
  } else if (e.keyCode === 103) {
    box.style.backgroundColor = "green";
  } else if (e.keyCode === 111) {
    box.style.backgroundColor = "orange";
  }
};
