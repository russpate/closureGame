console.log("Welcome to Pedalton where we love to race bikes. To get started racing type in 'getStarted' and click enter.");

var getStarted = "Awesome, The first thing we need to do is choose your character. \n\nYou can choose oldLady, pro, hipster, or littleKid.\n\nType the character name exactly as it appears *like this: oldLady as opposed to old lady ** and append it with the instruction .ride() *like this: oldLady.ride() **\n\nHere in Pedalton we like to keep things spicy and randomly select a bike for you. Once you've chosen a player and typed everything in just click enter";


function Character(options){
  var options = options || {};
  this.name = options.name || "hipster";
  this.speed = options.speed || 5;
  this.energy = options.energy || 100;
  this.ride = function(){
    this.bike = bikes[Math.floor(Math.random()*4)];
    // this.environment = environments[Math.floor(Math.random()*4)];
    console.log("the", this.name,"is going to be riding a",this.bike.name, "\n\nGreat job looks like your ready to race!\n\nNow that you've got your character and your bike let's give our character a new instruction. This time type in your character's name and .race() *Like this: oldLady.race() **\n\nOnce you've done that someone will be selected to race against you.\n\nIf you've got everything typed in and your ready to go just click enter!");
  };
  this.race = function(){
    var racer = characters[Math.floor(Math.random()*4)];
    var terrain = environments[Math.floor(Math.random()*4)];
    racer.ride();
    console.log(`it looks like ${this.name} on a ${this.bike.name} will be racing against ${racer.name} on a ${racer.bike.name} on the ${terrain.type}`);

    if (this.bike.weight + this.speed + this.energy > racer.bike.weight + racer.speed + racer.energy){
      return this.name + " wins the race";
    } else {
      return racer.name + " wins the race";
    }

  };
};
function Bike(options){
  var options = options || {};
  this.name = options.name || "Beach Cruiser";
  this.weight = options.weight || 20;
  this.adaptability = options.adaptability || "medium";
};
function Environment(options){
  var options = options || {};
  this.type = options.type || "street";
  this.terrain = options.terrain || "Smooth";
};

// Characters
var oldLady = new Character({name: "old Lady", speed: 100, energy: 20});
var pro = new Character({name: "pro", speed: 60, energy: 60});
var hipster = new Character({name: "hipster", speed: 40, energy: 50});
var littleKid = new Character({name: "littleKid", speed: 15, energy: 100});
var characters = [oldLady,pro,hipster,littleKid];
// Bikes
var trackBike = new Bike({name: "track bike", weight: 5, adaptability: "low"});
var hybrid = new Bike({name: "hybrid", weight: 12, adaptability: "high"});
var mountain = new Bike({name: "mountain bike", weight: 20, adaptability: "low"});
var road = new Bike({name: "road bike", weight: 9, adaptability: "moderate"});
var bikes = [trackBike,hybrid,mountain,road];
// Environments
var street = new Environment({type: "street",terrain: "bumpy"});
var track = new Environment({type: "track", terrain: "smooth"});
var beach = new Environment({type: "beach", terrain: "sandy"});
var dirt = new Environment({type: "dirt",terrain: "rocky"});
var environments = [street,track,beach,dirt];
