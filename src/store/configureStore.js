import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import contacts from '../reducers/contact';

const configureStore = () => {

    // Combine APP reducers
    const appReducers = combineReducers({
        contacts,
        form: formReducer
    })

    let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
    return createStoreWithMiddleware(appReducers);

}

export default configureStore;