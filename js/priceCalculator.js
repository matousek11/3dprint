const materialElID = 'materials';
const xSizeElID = 'x';
const ySizeElID = 'y';
const zSizeElID = 'z';
const priceElID = 'price';
const infoBoxID = 'info-box';
const infoBoxHeaderID = 'info-box-header';
const infoBoxTextID = 'info-box-text';

const initCalculator = () => {
    document.getElementById('calculate-price-button').addEventListener('click', calculate);
    document.getElementById('info-box-close-button').addEventListener('click', hideAlertBox);
}

const calculate = () => {
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

    formModel = new FormModel(materialID, x, y, z, infoBox, infoBoxHeader, infoBoxText);

    priceEstimation = formModel.estimatePrice();
    priceEl.innerHTML = priceEstimation + 'Kč';
}

const hideAlertBox = () => {
    document.getElementById(infoBoxID).classList.add('hide-info-box');
}

if (!!window.addEventListener) {
    window.addEventListener("DOMContentLoaded", initCalculator);
} else {
    // MSIE
    window.attachEvent("onload", initCalculator);
}