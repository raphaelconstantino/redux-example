import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchContacts, deleteContact, sortContacts, filterContacts, resetfilterContacts } from '../actions/contactActionCreator';
import { Link } from 'react-router-dom';
import ContactTable from '../components/contactTable';
import {filterData} from '../utils/filterUtil';
import {compare} from '../utils/sortUtil';

class Contact extends Component {
  
	componentDidMount() {
		const { fetchContacts } = this.props;
		fetchContacts();
	}   
  
  render() {
    const { data, sortKey, sortOrder, filter, deleteContact, sortContacts, filterContacts, resetfilterContacts } = this.props;
    return (
      <div className="container">
          <nav className="navbar"> 
            <Link className="btn btn-primary" to="/insert">Insert</Link>
          </nav>

          <ContactTable 
            data={data} 
            sortKey={sortKey}
            sortOrder={sortOrder}
            filter={filter}
            deleteContact={deleteContact} 
            sortContacts={sortContacts}
            filterContacts={filterContacts} 
            resetfilterContacts={resetfilterContacts} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContacts : () => dispatch(fetchContacts()),
    deleteContact : (id) => dispatch(deleteContact(id)),
    sortContacts : (sortKey) => dispatch(sortContacts(sortKey)),
    filterContacts : (filter) => dispatch(filterContacts(filter)),
    resetfilterContacts : () => dispatch(resetfilterContacts())
  }
}

const mapStateToProps = (state) => {

  const { contacts } = state;
  const { filter, sortKey, sortOrder } = contacts;
  let { data } = contacts;
  
  // Filter Data
  data = filterData(data, filter);
  // Sort
  data.sort(compare(sortKey, sortOrder));

  return {
    data,
    filter,
    sortKey,
    sortOrder
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
