class UserDetailModel {
    constructor(name, surname, email, address) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;   
    }

    validateModel(displayInfoBox) {
        if(this.name === '') {
            displayInfoBox('Jméno', 'Box jméno nesmí zůstat prázdný.');
            return false;
        }
        if(this.surname === '') {
            displayInfoBox('Příjmení', 'Box příjmení nesmí zůstat prázdný.');
            return false;
        }
        if(this.email === '') {
            displayInfoBox('Email', 'Box email nesmí zůstat prázdný.');
            return false;
        }
        if(this.address === '') {
            displayInfoBox('Adresa', 'Box adresa nesmí zůstat prázdný.');
            return false;
        }

        return true;
    }
}