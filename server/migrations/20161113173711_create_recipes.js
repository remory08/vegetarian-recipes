
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
   }).createTableIfNotExists('recipes', function(table){
     table.increments('id');
     table.string('title');
     table.text('description');
     table.integer('ingredient_id');
     table.integer('ingredient_id').references('ingredients.id');
     table.text('steps');
     table.integer('prep_time');
     table.integer('cook_time');
     table.integer('total_time');
   })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('recipes'),
    knex.schema.dropTableIfExists('ingredients')
  ])
};
