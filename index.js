/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const MeterToFeet = 3.281
const LiterToGallon = 0.264
const KiloGramToPound = 2.204
const inputEl = document.getElementById("input-el")
const outputLength = document.getElementById("output-length")
const outputVolume = document.getElementById("output-volume")
const outputMass = document.getElementById("output-mass")
const convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", function(){
    let inputElVal = inputEl.value
    const outputFeet = inputElVal * MeterToFeet
    const outputMeter = inputElVal / MeterToFeet
    const outputGallons = inputElVal * LiterToGallon
    const outputLiters = inputElVal / LiterToGallon
    const outputPounds = inputElVal * KiloGramToPound
    const outputKilos = inputElVal / KiloGramToPound

    outputLength.textContent = `${inputElVal} meters = ${outputFeet.toFixed(3)} feet | ${inputElVal} feet = ${outputMeter.toFixed(3)} meters`
    outputVolume.textContent = `${inputElVal} liters = ${outputGallons.toFixed(3)} gallons | ${inputElVal} gallons = ${outputLiters.toFixed(3)} liters`
    outputMass.textContent = `${inputElVal} kilos = ${outputPounds.toFixed(3)} pounds | ${inputElVal} = pounds ${outputKilos.toFixed(3)} kilos`
})


