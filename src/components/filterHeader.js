import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterHeader extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.filter !== this.props.filter) {
            this.setInputValue(nextProps.filter[nextProps.filterKey] || "");
        }
    }

    onChage (filterKey, filterContacts) {
        let obj = {};
        obj[filterKey] = this.getInputValue();
        filterContacts(obj);
    }

    getInputValue() {
        return this.refs.iptVal.value
    }

    setInputValue(val) {
        this.refs.iptVal.value = val
    }    

    render () {
        const {filterKey, filterContacts} = this.props;
        return (
            <input type="text" onChange={e => this.onChage(filterKey, filterContacts)} ref="iptVal" className="form-control"/>
        )
    }
}

FilterHeader.propTypes = {
  filter : PropTypes.object.isRequired,
  filterKey: PropTypes.string.isRequired,
  filterContacts : PropTypes.func.isRequired
}

export default FilterHeader;