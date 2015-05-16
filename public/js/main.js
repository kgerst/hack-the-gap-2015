/***
 *       __  __________  _____________ ______________  _  __
 *      /  |/  / __/ _ \/  _/_  __/ _ /_  __/  _/ __ \/ |/ /
 *     / /|_/ / _// // // /  / / / __ |/ / _/ // /_/ /    / 
 *    /_/  /_/___/____/___/ /_/ /_/ |_/_/ /___/\____/_/|_/  
 *                                                          
 */
//set variables
var levelOfMeditation = 55;
var meditationColor = "#FF5131";

var socket = io();
socket.on('meditation', function(msg) {
    levelOfMeditation = msg;
    console.log('meditation: ' + levelOfMeditation);    
});


//set up SVG
var meditationVis = d3.select("#meditation").append("svg");
var meditationCircle = d3.select("#meditation svg").append("circle");

//svg and circle set-up
meditationVis.attr("width", "600").attr("height", "600"); // Added height and width so svgs are visible

meditationCircle.attr('class','meditationCircle')
      .attr('cy','250')
      .attr('cx','250')
      .attr('r', '20')
      .attr('fill-opacity', '0');

function setMeditationColor() {
  if (levelOfMeditation <= 51) {
    meditationColor = "#00FFFF";
    meditationOpacity = "0.2";
  } else if (levelOfMeditation <= 102) {
    meditationColor = "#33FFFF";
    meditationOpacity = "0.4";
  } else if (levelOfMeditation <= 153) {
    meditationColor = "#66FFFF";
    meditationOpacity = "0.6";
  } else if (levelOfMeditation <= 204) {
    meditationColor = "#99FFFF";
    meditationOpacity = "0.8";
  } else if (levelOfMeditation <= 255) {
    meditationColor = "#CCFFFF";
    meditationOpacity = "1";
  }
}

  //update circle color and radius
  setInterval(function(){ 
    setMeditationColor();
        meditationCircle
        .transition()
        .duration(1000)
        .attr('fill', meditationColor)
        .attr('r', levelOfMeditation)
        .attr('fill-opacity', meditationOpacity);
  }, 1000);

// setInterval(function(){ 
//     levelOfMeditation = Math.random() * (0 - 255) + 255;
// }, 10000);



/***
 *       ___ _________________  ________________  _  __
 *      / _ /_  __/_  __/ __/ |/ /_  __/  _/ __ \/ |/ /
 *     / __ |/ /   / / / _//    / / / _/ // /_/ /    / 
 *    /_/ |_/_/   /_/ /___/_/|_/ /_/ /___/\____/_/|_/  
 *                                                     
 */
//set variables
var levelOfAttention = 55;

socket.on('attention', function(msg) {
    levelOfAttention = msg;
    console.log('attention: ' + levelOfAttention);    
});

var attentionColor = "#FF5131";
var attentionCircle = d3.select("#meditation svg").append("circle");

attentionCircle.attr('class','attentionCircle')
      .attr('cy','250')
      .attr('cx','250')
      .attr('r', '20')
      .attr('fill-opacity', '0');

function setAttentionColor() {
  if (levelOfAttention <= 51) {
    attentionColor = "#FFCCCC";
    attentionOpacity = "0.2";
  } else if (levelOfAttention <= 102) {
    attentionColor = "#FF9999";
    attentionOpacity = "0.4";
  } else if (levelOfAttention <= 153) {
    attentionColor = "#FF6666";
    attentionOpacity = "0.6";
  } else if (levelOfAttention <= 204) {
    attentionColor = "#FF3333";
    attentionOpacity = "0.8";
  } else if (levelOfAttention <= 255) {
    attentionColor = "#FF0000";
    attentionOpacity = "1";
  }
}

  //update circle color and radius
  setInterval(function(){ 
    setAttentionColor();
        attentionCircle
        .transition()
        .duration(1000)
        .attr('fill', attentionColor)
        .attr('r', levelOfAttention)
        .attr('fill-opacity', attentionOpacity);
  }, 1000);

// setInterval(function(){ 
//     levelOfAttention = Math.random() * (0 - 255) + 255;
// }, 1000);














