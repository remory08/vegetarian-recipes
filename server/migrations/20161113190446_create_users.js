
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('users', function(table){
      table.increments('id');
      table.text('username').unique();
      table.text('password');
      table.integer('text'); // array of user-recipes ids which links a user to a recipe
      table.text('sex');
      table.integer('age');
      table.integer('weight');
      table.integer('protein_needed');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('users')
  ])
};
