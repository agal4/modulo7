//Constants
const IBAN = ["ES6600190020961234567890", "ES66 0019 0020 9612 3456 7890"];
const LIC_PLATE = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA"];
const HTML = '<html><br><body><br><img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/><br><h1>ejemplo</h1><br><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/><br></body><br></html>';
const CRED_CARD_NUMS = ["5299 6400 0000 0000", "5299-6400-0000-0000", "4552996400000000"];
//Main function
var main = () => {
  console.log("1. Validar un IBAN");
  IBAN.forEach((iban) => {
    validateIban(iban);
  });
  console.log("2. Validar matrícula coche");
  LIC_PLATE.forEach((licPlate) => {
    validateLicensePlate(licPlate);
  });
  console.log("3. Extraer imágenes de un fichero HTML");
  getImages(HTML);
  console.log("4. Validar sintaxis tarjeta crédito");
  CRED_CARD_NUMS.forEach((number) => {
    validateCreditCardNum(number);
  })
};

var validateIban = (iban) => {
  var countryCode, controlDigit;
  const pattern = /^([a-zA-Z]{2})(\d{2})\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}\s?\d{4}$/;
  if (pattern.test(iban)) {
    console.log("IBAN " + iban + " tiene un formato válido");
    var result = iban.match(pattern);
    console.log(
      "Código país: " + result[1] + ", dígito de control: " + result[2]
    );
  } else {
    console.log("IBAN " + iban + " NO tiene un formato válido");
  }
};

var validateLicensePlate = (licPlate) => {
  var digits, letters;
  const pattern = /^(\d{4})[\s-]?([a-zA-Z]{3})$/;
  console.log("Validar matrícula:" + licPlate + ": " + pattern.test(licPlate));
  if (pattern.test(licPlate)) {
    var result = licPlate.match(pattern);
    console.log("Parte numérica: " + result[1] + ", letras: " + result[2]);
  }
};

var getImages = (html) => {
    var imageURL;
    const pattern = /<img\s+[^>]*?src="([^"]+)/gm;
    const patternWithoutFlags = /<img\s+[^>]*?src="([^"]+)/;
    if (pattern.test(html)) {
      var result = html.match(pattern);
      result.forEach(element => {
        imageURL = element.match(patternWithoutFlags);
        console.log("Url " + Number(result.indexOf(element)+1) + ": " + imageURL[1]);
      });      
    }
};

var validateCreditCardNum = (creditCardNumber) => {
  var result,firstTwoDigits;
  const pattern = /^(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?(\d{4})[\s-]?$/;
  if (pattern.test(creditCardNumber)) {
    result = creditCardNumber.match(pattern);
    firstTwoDigits = result[1].substring(0,2);
    //Check that the first two digits are 50, 51, 52, 53, 54 or 55
    if (Number(firstTwoDigits) >= 50 && Number(firstTwoDigits) <= 55){
        console.log("Número de tarjeta " + creditCardNumber + " tiene un formato válido");
        for (var i=1; i<result.length; i++){
          console.log(result[i]);
        }
    } else {
      console.log("Número de tarjeta " + creditCardNumber + " NO tiene un formato válido");
    }
  } else {
    console.log("Número de tarjeta " + creditCardNumber + " NO tiene un formato válido");
  }
};

//Main function call
main();
