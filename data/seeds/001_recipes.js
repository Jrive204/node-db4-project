exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        { recipe_name: 'ApplePie', ingredient_id: 2, instruction_id: 1 },
        { recipe_name: 'CherryPie', ingredients_id: 3, instruction_id: 2 },
        { recipe_name: 'PumpkinPie', ingredient_id: 4, instruction_id: 3 }
      ]);
    });
};
