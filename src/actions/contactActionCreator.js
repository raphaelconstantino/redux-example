export const CONTACT_LIST_REQUEST = 'CONTACT_LIST_REQUEST';
export const CONTACT_DELETE_REQUEST = 'CONTACT_DELETE_REQUEST';
export const CONTACT_INSERT_REQUEST = 'CONTACT_INSERT_REQUEST';
export const CONTACT_UPDATE_REQUEST = 'CONTACT_UPDATE_REQUEST';
export const CONTACT_SORT_REQUEST = 'CONTACT_SORT_REQUEST';
export const CONTACT_FILTER_REQUEST = 'CONTACT_FILTER_REQUEST';
export const CONTACT_RESET_FILTER_REQUEST = 'CONTACT_RESET_FILTER_REQUEST';

export const fetchContacts = () => ({
    type: CONTACT_LIST_REQUEST
});

export const deleteContact = (id) => ({
    type : CONTACT_DELETE_REQUEST,
    id
});

export const insertContact = (data) => ({
    type : CONTACT_INSERT_REQUEST,
    data
}); 

export const updateContact = (data) => ({
    type : CONTACT_UPDATE_REQUEST,
    data
}); 

export const sortContacts = (sortKey) => ({
    type : CONTACT_SORT_REQUEST,
    sortKey
});

export const filterContacts = (filter) => ({
    type : CONTACT_FILTER_REQUEST,
    filter
})

export const resetfilterContacts = () => ({
    type : CONTACT_RESET_FILTER_REQUEST
})