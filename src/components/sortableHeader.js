import React from 'react'
import PropTypes from 'prop-types';
import {ASC} from '../utils/sortUtil';
import sort from '../imgs/sort.png';
import sortAsc from '../imgs/sort-asc.png';
import sortDesc from '../imgs/sort-desc.png';

const arrow = (sortKey, appSortKey, appSortOrder) => {
  if (sortKey === appSortKey)
  {
    if (appSortOrder === ASC)
    {
      return (<img alt="" src={sortAsc} />);
    }

    return (<img alt="" src={sortDesc} />);

  }

  return (<img alt="" src={sort} />)
};

const SortableHeader = ({sortContacts, label, sortKey, appSortKey, appSortOrder }) => (
    <span>
      <a href="" onClick={e => {
        e.preventDefault();
        sortContacts(sortKey)
      }}>
        {label}
        {arrow(sortKey, appSortKey, appSortOrder)}
      </a>
    </span>
)

SortableHeader.propTypes = {
  label: PropTypes.string.isRequired,
  sortKey : PropTypes.string.isRequired,
  appSortKey :PropTypes.string, 
  appSortOrder : PropTypes.string,
  sortContacts : PropTypes.func.isRequired
}

export default SortableHeader;