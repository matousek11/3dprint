class FormModel {
    constructor (materialID, x, y, z, alertBox, header, text) {
        this.materialPrice = [
            2,
            0.5,
            2.4
        ]
        this.materialID = materialID;
        this.x = x;
        this.y = y;
        this.z = z;
        this.alertBox = alertBox;
        this.header = header;
        this.text = text;
    }

    estimatePrice (isOrder) {
        if (this.validateValues()) {
            let modelVolume = this.x * this.y * this.z;
            let modelPrice = modelVolume * this.materialPrice[this.materialID];
            if (isOrder === true) {
                this.displayInfoBox('Odesláno', 'Objednávka byla odeslána.');
            }
            return modelPrice;
        }
        
        return 0;
    }

    validateValues() {
        if (this.materialID < 0 && this.materialID > 2) {
            this.displayInfoBox('Špatné ID materiálu', 'Vyberte jiný materiál.');
            return false;
        }

        if (!Number.isInteger(this.x)) {
            this.displayInfoBox('Zadána špatná hodnota', 'Hodnota délky X musí být číslo.');
            return false;
        }

        if (!Number.isInteger(this.y)) {
            this.displayInfoBox('Zadána špatná hodnota', 'Hodnota délky Y musí být číslo.');
            return false;
        }

        if (!Number.isInteger(this.z)) {
            this.displayInfoBox('Zadána špatná hodnota', 'Hodnota délky Z musí být číslo.');
            return false;
        }

        return true;
    }

    displayInfoBox(header, text) {
        this.alertBox.classList.remove('hide-info-box');
        this.header.innerText = header;
        this.text.innerText = text;
    }
}