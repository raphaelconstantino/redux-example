export const ASC = "ASC";
export const DESC = "DESC";

export const compare = (sortKey, sortOrder) => {
  return (a, b) => {
    if (a[sortKey] < b[sortKey])
      return sortOrder === ASC ? -1 : 1;
    if (a[sortKey] > b[sortKey])
      return sortOrder === ASC ? 1 : -1;
    return 0;
  } 
}

export const getOrder = (currentSortKey, newSortKey, currentOrder) => {
  
  if (currentSortKey !== newSortKey || currentOrder === "" || currentOrder === DESC)
  {
    return ASC;
  }

  return DESC;
}