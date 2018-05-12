var winCount = 0;
var lossCount = 0;
var currTotal = 0;
var randomNumber = Math.floor(Math.random()*(120-19)) + 19;
console.log(randomNumber);
function reset() {
      currTotal = 0;
    randomNumber = Math.floor(Math.random()*(120-19)) + 19;
        $(".randomNumber").html(randomNumber);
    $("#crystal1").attr("data-crystalvalue",Math.floor(Math.random()*13));
    alert($("#crystal1"));
    $("#crystal2").attr("data-crystalvalue",Math.floor(Math.random()*13));
    $("#crystal3").attr("data-crystalvalue",Math.floor(Math.random()*13));
    $("#crystal4").attr("data-crystalvalue",Math.floor(Math.random()*13));

};

$(".crystal-image").on("click", ".crystal-image", function() { 
    alert('you clicked me!');
    var crystalValue = ($(this).attr("data-crystalvalue"));
    console.log(this);
    crystalValue = parseInt(crystalValue);

    currTotal += crystalValue;
alert(currTotal);
    if (currTotal === randomNumber) {
        winCount ++;
        reset();
      }
  
      else if (currTotal >= randomNumber) {
        lossCount ++;
        reset();
      }
      $("#winCount").html(winCount);
      $("#lossCount").html(lossCount);
});
$(".randomnumber").append(randomNumber)

reset();