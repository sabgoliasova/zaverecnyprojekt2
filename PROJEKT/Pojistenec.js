class Pojistenec {
    constructor(name, surname, phoneNumber, date) {
        this.name = name;
        this.surname = surname;
        this.phoneNumber = phoneNumber;
        this.date = date;
}

get age() {
let birth = `'${this.date}'`
let today = new Date();
let dateOfBirth = new Date(birth);
console.log(today, dateOfBirth);
let fullYears = today.getFullYear() - dateOfBirth.getFullYear();
let month = today.getMonth() - dateOfBirth.getMonth();
if (month < 0 || (month === 0 && today.getDate() < dateOfBirth.getDate())) {
fullYears--;
}
return fullYears;
}
}