class FormModel {
    constructor(userDetailModel, materialID, x, y, z, alertBox, header, text, fileModel) {
        this.materialPrice = [
            0.002,
            0.004,
            0.003
        ]
        this.userDetailModel = userDetailModel;
        this.materialID = materialID;
        this.x = x;
        this.y = y;
        this.z = z;
        this.alertBox = alertBox;
        this.header = header;
        this.text = text;
        this.fileModel = fileModel;
    }

    estimatePrice = (isOrder) => {
        if (this.validateModel(isOrder)) {
            let modelVolume = this.x * this.y * this.z;
            let modelPrice = modelVolume * this.materialPrice[this.materialID];
            if (isOrder === true) {
                this.fileModel.hideFileText();
                this.displayInfoBox('Odesláno', 'Objednávka byla odeslána. Proveďte platbu přes email, který jsme Vám zaslali.');
            }
            return modelPrice;
        }
        
        return 0;
    }

    validateModel(isOrder) {
        if (isOrder) {
            if (!this.fileModel.validateModel(this.displayInfoBox)) {
                return false;
            }
    
            if (!this.userDetailModel.validateModel(this.displayInfoBox)) {
                return false
            }
        }

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

    displayInfoBox = (header, text) => {
        this.alertBox.classList.remove('hide-info-box');
        this.header.innerText = header;
        this.text.innerText = text;
    }
}