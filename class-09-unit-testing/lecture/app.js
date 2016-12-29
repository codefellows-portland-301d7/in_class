function yellAboutMysticAnimal(topHalf, bottomHalf) {
  var tops = ['were', 'mer', 'uni'];
  var bottoms = ['wolf', 'maid', 'corn'];

  return 'OH NO A ' + tops[topHalf] + bottoms[bottomHalf];
}

function MysticAnimal(topHalf, bottomHalf) {
  var tops = ['were', 'mer', 'uni'];
  var bottoms = ['wolf', 'maid', 'corn'];

  this.name = tops[topHalf] + bottoms[bottomHalf];
}
