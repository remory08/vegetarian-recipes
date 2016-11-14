
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
   }).createTableIfNotExists('users', function(table){
     table.increments('id');
     table.text('username').unique();
     table.text('password');
     table.integer('text'); // array of user-recipes ids which links a user to a recipe
     table.text('sex');
     table.integer('age');
     table.integer('weight');
     table.integer('protein_needed');
   }).createTableIfNotExists('user-recipes', fucntion(table){
     table.increments('id');
     table.integer('recipe_id');
     table.integaer('recipe_id').references('recipes.id');
     table.integer('user_id');
     table.integaer('user_id').references('users.id');
   })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('recipes'),
    knex.schema.dropTableIfExists('ingredients'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('user-recipes')

  ])
};
