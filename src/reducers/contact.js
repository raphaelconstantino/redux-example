import {getOrder} from '../utils/sortUtil';
import initState from './initialState';
import {
  CONTACT_LIST_REQUEST, CONTACT_DELETE_REQUEST, CONTACT_INSERT_REQUEST, 
  CONTACT_UPDATE_REQUEST, CONTACT_SORT_REQUEST, CONTACT_FILTER_REQUEST,
  CONTACT_RESET_FILTER_REQUEST
} from '../actions/contactActionCreator'

export default function list(state = initState, action) {
  
  switch (action.type) {
    // FETCH
    case CONTACT_LIST_REQUEST:
      return Object.assign({}, state, action);
    // DELETE   
    case CONTACT_DELETE_REQUEST:
      let deleteData = state.data.filter(contact => contact.id !== action.id);
      return Object.assign({}, state, {data : deleteData});
    // INSERT  
    case CONTACT_INSERT_REQUEST:
      return Object.assign({}, state, {data : [...state.data, action.data]});
    // UPDATE
    case CONTACT_UPDATE_REQUEST:
      let insertData = state.data.map(contact => {
        if (contact.id === action.data.id) {
          return action.data;
        }

        return contact;
      });
      return Object.assign({}, state, {data : insertData});
    // SORT
    case CONTACT_SORT_REQUEST:
      let sortKey = action["sortKey"];
      let sortOrder = getOrder(state["sortKey"], action["sortKey"], state["sortOrder"]);
      return Object.assign({}, state, {sortKey, sortOrder });
    // FILTER
    case CONTACT_FILTER_REQUEST:
      let filter = Object.assign({}, state.filter, action.filter);
      return Object.assign({}, state, {filter});
    // RESET FILTER
    case CONTACT_RESET_FILTER_REQUEST:
      return Object.assign({}, state, {filter : {}});            
    default:
      return state
    }
}