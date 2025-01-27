import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from '../RegionsContainer';
import CategoriesContainer from '../CategoriesContainer';
import RestaurantsContainer from '../RestaurantsContainer';

import {
  loadInitialData,
} from '../actions';

export default function RestaurantsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <h2>Restaurants</h2>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
