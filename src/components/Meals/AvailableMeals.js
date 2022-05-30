import React from 'react';

import DUMMY_MEALS from '../../.data/dummy-meals';
import Card from '../UI/Card';

import styles from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      header={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <Card className={styles.meals}>
      <ul>{mealsList}</ul>
    </Card>
  );
};

export default AvailableMeals;
