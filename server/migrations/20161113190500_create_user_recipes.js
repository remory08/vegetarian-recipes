
exports.up = function(knex, Promise) {
 return Promise.all([
   knex.schema.createTableIfNotExists('user_recipes', function(table){
     table.increments('id');
     table.integer('recipe_id').references('recipes.id').onDelete('CASCADE');
     table.integer('user_id').references('users.id').onDelete('CASCADE');
   })
 ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('user_recipes')

  ])
};
