class FileModel {
    constructor(fileInputID, fileWasSelected, fileInputTextID) {
        this.file = document.getElementById(fileInputID);
        this.fileWasSelected = fileWasSelected;
        this.fileInputText = document.getElementById(fileInputTextID);
    }

    validateModel = (displayInfoBox) => {
        if (this.fileInputText.classList.contains('hide-info-box')) {
            displayInfoBox('Soubor', 'Je nutné před odesláním nahrát soubor.');
            return false;
        }
        return true;
    }

    hideFileText() {
        if (!this.fileInputText.classList.contains('hide-info-box')) {
            this.fileInputText.classList.add('hide-info-box');
        }
    }
}