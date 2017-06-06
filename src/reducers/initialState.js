import Contact from '../models/Contact';

let demoObj = new Contact({
    firstName : "Raphael",
    lastName : "Constantino",
    phone : "5534998016567",
    address : "Av. Leopoldino de Oliveira, 2371. Uberaba MG Brazil",
    email : "raphaelc23@gmail.com"
});

let demoObj2 = new Contact({
    firstName : "Rod",
    lastName : "Koala",
    phone : "0134998016567",
    address : "Street 01, 2371. Raleigh NC USA",
    email : "rod@koala.com"
});

let demoObj3 = new Contact({
    firstName : "Peter",
    lastName : "Opal",
    phone : "3234998016567",
    address : "4604 Rocky Road, Berlin Germany",
    email : "peter@opal.com"
});

let initState = {
    data: [demoObj, demoObj2, demoObj3],
    sortOrder : "",
    sortKey : "",
    filter : {}
}

export default initState;
