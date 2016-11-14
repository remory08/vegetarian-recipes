
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(table){
    table.increments('id');
    table.string('title');
    table.text('description');
    table.integer('ingredient_id');
    table.text('steps');
    table.integer('prep_time');
    table.integer('cook_time');
    table.integer('total_time');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
