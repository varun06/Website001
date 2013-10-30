/**
 * Created by Varun on 10/29/13.
 */
var init = function() {
  props.groovy = document.getElementById('text');
  setTimeout( animate, 1 );
  setTimeout(	moveText, 1);
};

function moveText(moveBy){
    var text1 = document.getElementById('text');
    text1.style.marginLeft = moveBy + 'px';
};

var speed = 100;
var moveBy = 0;
var offset = 5;
timer = setInterval(function () {
        moveText(moveBy);
        moveBy = moveBy + offset;
    		if(moveBy > 100)
        	 offset = offset * -1;
    		if(moveBy < 0)
         offset = offset * -1;
				}, speed);

	var colorTime = 0,
    waveTheta = 0,
    maxCount = 100,
    colorIncrement = -12,
    waveIncrement = 0.1,
    xPos = [ -2, -1, 0, 1, 2 ],
    yPos = [ -2, -1, 0, 1, 2 ],
    props = {};

var getTextShadow = function( x, y, hue ) {
  return ', ' + x + 'px ' + y + 'px hsl(' + hue + ', 100%, 50%)';
};

var animate = function() {
  var shadows = '0 0 transparent',
      hue0 = colorTime % 360,
      i, j, x, y,
      iLen = xPos.length,
      jLen = yPos.length;

  // outline
  for ( i = 0; i < iLen; i++ ) {
    x = xPos[i];
    for ( j = 0; j < jLen; j++ ) {
      y = yPos[j];
      shadows += getTextShadow( x, y, hue0 );
    }
  }

  props.groovy.style.textShadow = shadows;
  colorTime += colorIncrement;
  waveTheta += waveIncrement;
  setTimeout( animate, 30 );
};

window.addEventListener( 'DOMContentLoaded', init, false);

