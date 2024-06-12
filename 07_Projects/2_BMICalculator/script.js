const form = document.querySelector('form')
// const weight = parseInt(document.querySelector('#height').value), agr idhar likh dia, script run hhoke, empty value store hojayega, isslie hamra use case idhar submit k baad h, isslie function me use karre hum. 

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let msg;
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid Heigh ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid Weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2) //i.e 2 decimal values tak hi dikhana
        //ab showing krna h, iss bmi ka
        if (bmi >= 24.9) {
            msg = "Overweight";
        } else if (bmi >= 18.6 && bmi < 24.9) {
            msg = "Normal Weight"
        } else {
            msg = "Underweight"
        }
        results.innerHTML = `<span>${bmi} <br/> You are ${msg}</span>`;
    }
})