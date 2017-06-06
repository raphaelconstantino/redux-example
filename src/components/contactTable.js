import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SortableHeader from './sortableHeader';
import FilterHeader from './filterHeader';

const ContactTable = ({ data, sortKey, sortOrder, filter, deleteContact, sortContacts, filterContacts, resetfilterContacts }) => (
    <section>
        
        <div className="reset">
            <a href="" onClick={e => {
                e.preventDefault();
                resetfilterContacts()
            }}>
                Reset Filters
            </a>
        </div>

        <div className="table-responsive">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>    
                            <SortableHeader sortContacts={sortContacts} label="Id" sortKey="id" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="id" filterContacts={filterContacts} />
                        </th>
                        <th>    
                            <SortableHeader sortContacts={sortContacts} label="First Name" sortKey="firstName" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="firstName" filterContacts={filterContacts} />
                        </th>    
                        <th>
                            <SortableHeader sortContacts={sortContacts} label="Last Name" sortKey="lastName" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="lastName" filterContacts={filterContacts} />
                        </th>                    
                        <th>
                            <SortableHeader sortContacts={sortContacts} label="Phone Number" sortKey="phone" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="phone" filterContacts={filterContacts} />
                        </th>
                        <th>
                            <SortableHeader sortContacts={sortContacts} label="Address" sortKey="address" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="address" filterContacts={filterContacts} />
                        </th>
                        <th>    
                            <SortableHeader sortContacts={sortContacts} label="Email" sortKey="email" appSortKey={sortKey} appSortOrder={sortOrder} />
                            <FilterHeader filter={filter} filterKey="email" filterContacts={filterContacts} />
                        </th>
                        <th></th>
                    </tr>  
                </thead> 
                <tbody>
                    {data.map((contact) => {
                        return (<tr key={contact.id}>
                                <td><Link to={"edit/" + contact.id}>{contact.id}</Link></td>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.address}</td>
                                <td>{contact.email}</td>
                                <td><a href="" onClick={e => {
                                        e.preventDefault();
                                        deleteContact(contact.id)
                                    }}>Delete</a></td>
                            </tr>
                        ) 
                    })}
                </tbody>   
            </table>
        </div>            
    </section> 
)

ContactTable.propTypes = {
  data : PropTypes.array.isRequired,
  filter : PropTypes.object.isRequired,
  sortKey : PropTypes.string.isRequired,
  sortOrder : PropTypes.string.isRequired,
  deleteContact : PropTypes.func.isRequired,
  sortContacts : PropTypes.func.isRequired,
  filterContacts : PropTypes.func.isRequired,
  resetfilterContacts : PropTypes.func.isRequired
}

export default ContactTable