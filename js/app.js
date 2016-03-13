 function Character(options){
  var options = options || {};
  this.name = options.name || "hipster";
  this.speed = options.speed || 5;
  this.energy = options.energy || 100;
};

Character.prototype.ride = function(){
  this.bike = bikes[Math.floor(Math.random()*4)];
  console.log("the", this.name,"is going to be riding a",this.bike.name, "\n\nGreat job looks like your ready to race!\n\nNow that you've got your character and your bike let's give our character a new instruction. This time type in your character's name and .race() *Like this: oldLady.race() **\n\nOnce you've done that someone will be selected to race against you.\n\nIf you've got everything typed in and your ready to go just click enter!");
};

Character.prototype.race = function(){
  var racer = randomizer(characters);
  var terrain = randomizer(environments);
  var racerBike = randomizer(bikes);
  console.log(`it looks like ${this.name} on a ${this.bike.name} will be racing against ${racer.name} on a ${racerBike.name} on the ${terrain.type}`);
  if (this.bike.weight + this.speed + this.energy > racerBike.weight + racer.speed + racer.energy){
    return this.name + " wins the race";
  } else {
    return racer.name + " wins the race";
  }
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
var randomizer = function(param){
  var result = param[Math.floor(Math.random()*param.length)];
  return result;
};

// Bikes
var trackBike = new Bike({name: "track bike", weight: 5, adaptability: "low"});
var hybrid = new Bike({name: "hybrid", weight: 10, adaptability: "high"});
var mountain = new Bike({name: "mountain bike", weight: 1, adaptability: "low"});
var road = new Bike({name: "road bike", weight: 9, adaptability: "moderate"});
var bikes = [trackBike,hybrid,mountain,road];

// Environments
var street = new Environment({type: "street",terrain: "bumpy"});
var track = new Environment({type: "track", terrain: "smooth"});
var beach = new Environment({type: "beach", terrain: "sandy"});
var dirt = new Environment({type: "dirt",terrain: "rocky"});
var environments = [street,track,beach,dirt];
