import React from 'react';
import {Route} from 'react-router-dom';

import CitiesList from './containers/CitiesList';
import AddedCity from './containers/AddedCityView';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={CitiesList} />
        <Route exact path='/new_city/:city_name' component={AddedCity} />
    </div>
);

export default BaseRouter