function getTheme() {
  var configJson = localStorage.getItem('gurpsy-mc-gurps-face.config');

  if (!!configJson) {
    var config = JSON.parse(configJson);

    if (!!config && !!config.theme) {
      return config.theme;
    }
  }
}

function setColor() {
  var backgroundColor = '#FFFFFF';
  var fontColor = '#000000';

  if (getTheme() === 'night') {

    backgroundColor = '#101822';
    fontColor = '#FFFFFF';
  }

  document.body.style.backgroundColor = backgroundColor;
  document.body.style.color = fontColor;
}

setColor();
