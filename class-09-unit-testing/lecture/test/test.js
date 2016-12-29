

QUnit.module('app tests', function() {
  QUnit.test('first test', function(assert) {
    assert.equal(true, true);
  });

  QUnit.test('yellAboutMysticAnimal should yell about animal', function(assert) {
    var topHalf = 1;
    var bottomHalf = 2;

    var result = yellAboutMysticAnimal(topHalf, bottomHalf);

    assert.equal(result, 'OH NO A mercorn');
  });

  QUnit.test('MysticAnimal should make an animal', function(assert) {
    var topHalf = 2;
    var bottomHalf = 0;

    var testAnimal = new MysticAnimal(topHalf, bottomHalf);

    assert.equal(testAnimal.name, 'uniwolf');
  });
});
