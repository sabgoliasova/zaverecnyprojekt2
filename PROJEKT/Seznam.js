class Seznam {
    constructor() {
        const zaznamyZeStorage = localStorage.getItem("pojistenci");
        this.pojistenci = zaznamyZeStorage ? JSON.parse(zaznamyZeStorage) : [];
        for(let i = 0; i < this.pojistenci.length; i++) {
            this.pojistenci[i] = Object.assign(new Pojistenec, this.pojistenci[i]);
}

this.nameInput = document.getElementById("name");
this.surnameInput = document.getElementById("surname");
this.phoneInput = document.getElementById("phoneNumber");
this.dateInput = document.getElementById("date")
this.confirmButton = document.getElementById("confirm");
this.vypisElement = document.getElementById("list");
this.setEvents();
}

setEvents() {
this.confirmButton.onclick = () => { 
const pojistenec = new Pojistenec((this.nameInput.value).charAt(0).toUpperCase() + (this.nameInput.value).slice(1), (this.surnameInput.value).charAt(0).toUpperCase()+ (this.surnameInput.value).slice(1), this.phoneInput.value, this.dateInput.value);
if(this.nameInput.value!==''&&this.surnameInput.value!==''&&(this.phoneInput.value).toString()!==''&&(this.dateInput.value).toString()!=='') {
this.pojistenci.push(pojistenec);
localStorage.setItem("pojistenci", JSON.stringify(this.pojistenci));
this.vypisPojistenci();
this.refresh();
} else {
alert("Nejsou vyplněné všechny údaje!")
 }
};
}
    
refresh(){
this.nameInput.value = "";
this.surnameInput.value = "";
this.phoneInput.value = "";
this.dateInput.value = "";
}

vypisPojistence() {
this.seradPojistenci();
const tableBody = document.getElementById('tableData');
this.vypisElement = "";
for (const pojistenec of this.pojistenci) {
console.log(pojistenec.age);
this.vypisElement+=`<tr><td>${pojistenec.surname}</td><td>${pojistenec.name}</td><td>${pojistenec.phoneNumber}</td><td>${pojistenec.age}</td></tr>`;
}
tableBody.innerHTML=this.vypisElement;
}
seradPojistenci() {
    this.pojistenci.sort((a, b) => {
    if (a.surname < b.surname) return -1;
    if (a.surname > b.surname) return 1;
    return 0;
    });
    }
}


