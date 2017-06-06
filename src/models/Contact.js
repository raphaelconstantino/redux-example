export default class Contact {
    constructor ({id, firstName = "", lastName = "", phone= "", address = "", email = ""}) {
        this.id = id ? id : Contact.autoIncrement();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
        this.email = email;
    }

    static autoIncrement() {
        
        if ( !this.latestId ) 
        {
            return this.latestId = 1;
        }            
        
        return ++this.latestId;
    }

}