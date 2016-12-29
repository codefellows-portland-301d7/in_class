(function(module) {
  function Zip (opts) {
    for (var key in opts) {
      this[key] = opts[key];
    }
  };

  Zip.all = [];

  function createTable() {
    webDB.execute(
      'CREATE TABLE IF NOT EXISTS zips (id INTEGER PRIMARY KEY, zip INTEGER, neighborhood VARCHAR, county VARCHAR)'
    );
  };

  Zip.fetchAll = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      data.features.map(function(bigDataSet) {
        return bigDataSet.properties;
      })
      .forEach(function(obj) {
        var aZipInstance = new Zip(obj);
        Zip.all.push(aZipInstance);
        aZipInstance.insertRecord();
      });
    });
  };

  Zip.prototype.insertRecord = function() {
    webDB.execute(
      [
        {
          sql: 'INSERT INTO zips (zip, neighborhood, county) VALUES (?, ?, ?);',
          'data': [this.zip, this.neighborhood, this.county]
        }
      ]
    );
  };
  createTable()
  Zip.fetchAll()
  module.Zip = Zip;
})(window);
