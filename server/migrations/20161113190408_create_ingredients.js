
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('ingredients', function(table) {
        table.increments('id');
        table.text('name');
        table.text('type');
        table.text('serving_size');
        table.integer('protein');
        table.integer('carbohydrates');
        table.integer('salt');
        table.integer('sugar');
        table.integer('fat');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('ingredients')
  ])
};
