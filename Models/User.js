
 export default class User {
    constructor(FirstName,LastName,EmailAddress,PhoneNumber,PostalAddress,ZipCode,PostOffice) {
        this.FirstName = FirstName
        this.LastName = LastName
        this.EmailAddress = EmailAddress
        this.PhoneNumber = PhoneNumber
        this.PostalAddress = PostalAddress
        this.ZipCode = ZipCode
        this.PostOffice = PostOffice
    }

    get DisplayName() {
        return `${this.FirstName} ${this.LastName}`
    }

    set DisplayName(value) {
        const names = value.split(' ')
        this.FirstName = names[0]
        this.LastName = names[1]
    }

    get Id() {
        return Date.now().toString() + Math.floor((Math.random() * 1000) + 1);
    }
}