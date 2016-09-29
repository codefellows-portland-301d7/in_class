var count = 100;

function counter() {
  console.log('counter called');
  var count = 3;

  return function() {
    count++;
    console.log(count);
  };
}
console.log('global count = ', ++count);
var incrementCount = counter();
incrementCount();
console.log('global count = ', count);
incrementCount();
console.log('global count = ', ++count);
incrementCount();
console.log('global count = ', ++count);


var things = ['lol Ill show you but its not what you want'];
function CollectionOfThings() {
  var things = [];

  this.addThing = function(thing) {
    things.push(thing);
  };

  this.takeThing = function() {
    return things.pop();
  };
}
var collectionOfRadAnimals = new CollectionOfThings();

console.log(collectionOfRadAnimals.things);
collectionOfRadAnimals.addThing('batsss');
console.log(collectionOfRadAnimals.things);
collectionOfRadAnimals.addThing('sloths');
console.log(collectionOfRadAnimals.things);
var lastAnimal = collectionOfRadAnimals.takeThing();
console.log(collectionOfRadAnimals.things);
console.log(lastAnimal);

collectionOfRadAnimals.showMeThingsDamnit = function() {
  console.log('THINGS DAMNIT', things);
};

collectionOfRadAnimals.showMeThingsDamnit();
var module = (function() {
  var collection = [];
  return {
    addToCollection: function(item) {
      collection.push(item);
    },
    getCollection: function() {
      return collection;
    }
  };
})();

module.addToCollection('an article');
module.addToCollection('another article');
console.log(module.getCollection());
console.log(collection);
