const nameElID = 'name';
const surnameElID = 'surname';
const emailElID = 'email';
const addressElID = 'address';
const materialElID = 'materials';
const xSizeElID = 'x';
const ySizeElID = 'y';
const zSizeElID = 'z';
const fileElID = 'model-file';
const fileInfoElID = 'file-info-text';
const priceElID = 'price';
const infoBoxID = 'info-box';
const infoBoxHeaderID = 'info-box-header';
const infoBoxTextID = 'info-box-text';

const initCalculator = () => {
    document.getElementById('calculate-price-button').addEventListener('click', () => calculate(false));
    document.getElementById('info-box-close-button').addEventListener('click', hideAlertBox);
    
    if (document.getElementById('order-button') !== null && document.getElementById(fileElID) !== null) {
        document.getElementById(fileElID).addEventListener('change', onFileUpload);
        document.getElementById('order-button').addEventListener('click', order);
    }
}

const calculate = (isOrder = false) => {
    let name, surname, email, address, isSelectedFile;
    if (isOrder) {
        let name = document.getElementById(nameElID).value;
        let surname = document.getElementById(surnameElID).value;
        let email = document.getElementById(emailElID).value;
        let address = document.getElementById(addressElID).value;
        let isSelectedFile = !document.getElementById(fileInfoElID).classList.contains('hide-info-box');
    }
    let materialID = document.getElementById(materialElID).value;
    let x = document.getElementById(xSizeElID).value;
    x = parseInt(x);
    let y = document.getElementById(ySizeElID).value;
    y = parseInt(y);
    let z = document.getElementById(zSizeElID).value;
    z = parseInt(z);
    let priceEl = document.getElementById(priceElID);
    let infoBox = document.getElementById(infoBoxID);
    let infoBoxHeader = document.getElementById(infoBoxHeaderID);
    let infoBoxText = document.getElementById(infoBoxTextID);

    formModel = new FormModel(
        new UserDetailModel(
            name,
            email,
            address,
            surname
        ),
        materialID,
        x,
        y,
        z,
        infoBox,
        infoBoxHeader,
        infoBoxText,
        new FileModel(
            fileElID,
            isSelectedFile,
            fileInfoElID
        )
    );

    priceEstimation = formModel.estimatePrice(isOrder);
    priceEl.innerHTML = Math.round(priceEstimation) + 'Kč';

    // reset
    if (!infoBox.classList.contains('hide-info-box') && isOrder) {
        let inputElements = document.querySelectorAll('input');
        inputElements.forEach(element => {
            element.value = '';
        });
        priceEl.innerHTML = '0Kč';
    }
}

const hideAlertBox = () => {
    document.getElementById(infoBoxID).classList.add('hide-info-box');
}

const order = () => {
    calculate(true);
}

const onFileUpload = () => {
    let file = document.getElementById(fileInfoElID);
    let isSelectedFile = !file.classList.contains('hide-info-box');
    if (!isSelectedFile) {
        file.classList.remove('hide-info-box');
    }
}

if (!!window.addEventListener) {
    window.addEventListener("DOMContentLoaded", initCalculator);
} else {
    // MSIE
    window.attachEvent("onload", initCalculator);
}