exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredients_name: 'apple', food_group: 'fruit' },
        { ingredients_name: 'cherry', food_group: 'fruit' },
        { ingredients_name: 'carrot', food_group: 'vegetable' }
      ]);
    });
};
