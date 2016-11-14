
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('recipes', function(table){
      table.increments('id');
      table.string('title');
      table.text('description');
      table.integer('ingredient_id').references('ingredients.id').onDelete('CASCADE');
      table.text('steps');
      table.integer('prep_time');
      table.integer('cook_time');
      table.integer('total_time');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('recipes')
  ])
};
