
quickDrawDataset=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus", "axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear", "beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang", "bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly", "cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot"];
randomNo = Math.floor((Math.random() *quickDrawDataset.length)+1);
console.log(quickDrawDataset[randomNo]);
var sketch=quickDrawDataset[randomNo];
document.getElementById("seuesboço").innerHTML="esboço a ser desenhado : "+sketch;
var timerCounter=0
var timerCheck=""
var drawSketch=""
var answerHolder=""
var score=0