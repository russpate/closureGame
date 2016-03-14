 function Character(options){
  var options = options || {};
  this.name = options.name || "hipster";
  this.speed = options.speed || 5;
  this.energy = options.energy || 100;
  this.img = options.img || "img/default.jpg"
};

Character.prototype.ride = function(){
  this.bike = randomizer(bikes)
};

Character.prototype.race = function(){
  var racer = randomizer(characters);
  var terrain = randomizer(environments);
  var racerBike = randomizer(bikes);
  console.log(`it looks like ${this.name} on a ${this.bike.name} will be racing against ${racer.name} on a ${racerBike.name} on the ${terrain.type}`);
  // if (this.bike.weight + this.speed + this.energy > racerBike.weight + racer.speed + racer.energy){
  //   return this.name + " wins the race";
  // } else {
  //   return racer.name + " wins the race";
  // }
};

Character.prototype.racer = function(){
  return randomizer(characters)
};
Character.prototype.racerBike = function(){
  return randomizer(bikes)
};
Character.prototype.go = function(){
  if (page.charChoice().bike.weight + page.charChoice().speed + page.charChoice().energy > Character.prototype.racerBike().weight + Character.prototype.racer().speed + Character.prototype.racer().energy){
    return page.charChoice().name + " wins the race";
  } else {
    return Character.prototype.racer().name + " wins the race";
  }
}

function Bike(options){
  var options = options || {};
  this.name = options.name || "Beach Cruiser";
  this.weight = options.weight || 20;
  this.adaptability = options.adaptability || "medium";
  this.img = options.img || "img/default.jpg"
};

function Environment(options){
  var options = options || {};
  this.type = options.type || "street";
  this.terrain = options.terrain || "Smooth";
};

// Characters
var oldLady = new Character({name: "old Lady", speed: 100, energy: 20, img:"img/oldLady.png"});
var pro = new Character({name: "pro", speed: 60, energy: 60, img:"img/pro.png"});
var hipster = new Character({name: "hipster", speed: 40, energy: 50, img:"img/hipster.png"});
var littleKid = new Character({name: "littleKid", speed: 15, energy: 100, img:"img/littleKid.png"});
var characters = [oldLady,pro,hipster,littleKid];
var randomizer = function(param){
  var result = param[Math.floor(Math.random()*param.length)];
  return result;
};

// Bikes
var trackBike = new Bike({name: "track bike", weight: 5, adaptability: "low", img: "img/trackBike.jpg"});
var hybrid = new Bike({name: "hybrid", weight: 10, adaptability: "high", img: "img/hybrid.jpg"});
var mountain = new Bike({name: "mountain bike", weight: 1, adaptability: "low", img: "img/mountainBike.jpg"});
var road = new Bike({name: "road bike", weight: 9, adaptability: "moderate", img: "img/roadBike.jpg"});
var bikes = [trackBike,hybrid,mountain,road];

// Environments
var street = new Environment({type: "street",terrain: "bumpy"});
var track = new Environment({type: "track", terrain: "smooth"});
var beach = new Environment({type: "beach", terrain: "sandy"});
var dirt = new Environment({type: "dirt",terrain: "rocky"});
var environments = [street,track,beach,dirt];
