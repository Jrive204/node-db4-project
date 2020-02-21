exports.up = function(knex) {
  return knex.schema
    .createTable('instructions', tbl => {
      tbl.increments();

      tbl.string('recipe_instructions').notNullable();
      tbl.string('measurements').notNullable();
      tbl.string('equipment');
    })

    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('ingredients_name')
        .notNullable()
        .unique();
      tbl.string('food_group');
    })

    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name').notNullable();
      tbl
        .integer('ingredients_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl
        .integer('instructions_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('instructions')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

      tbl.unique(['ingredients_id', 'instructions_id']);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions');
};
