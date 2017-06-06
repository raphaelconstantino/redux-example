export const filterData = (data, filter) =>
{
    return data.filter(contact => {
        for (let key in filter)
        {
            let contactVal = contact[key].toString().toLowerCase();
            let filterVal = filter[key].toString().toLowerCase();
            if (filter[key] !== "" && filter[key] !== undefined && contactVal.indexOf(filterVal) === -1)
            {
                return false;
            }
        }

        return true;
    });
}