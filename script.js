// this is the nav bar elements
const nav = document.querySelectorAll('nav');
const prompt = document.getElementById('prompt')
const quetion = document.querySelectorAll('li')
const language = document.getElementById('language')
const qrDisplay = document.getElementById('qrcode')



const changeToSpanish = () => {
    if(language.innerHTML === "Change to Spanish"){
language.innerHTML = "Change to English";
let location = document.getElementById('location');
qrDisplay.innerHTML = "";
location.innerHTML = "";
setTimeout(() => {
prompt.innerHTML = "Gracias por tomarse el tiempo para escribirnos una reseña, trabajamos duro para proporcionar la mejor atención de calidad para nuestros pacientes y deseamos seguir haciéndolo. Por favor, háganos saber cómo lo hicimos!"
quetion[0].innerHTML = "-Cómo ha sido tu experiencia con nosotros?"
quetion[1].innerHTML = "-Has visto alguna diferencia notable?"
quetion[2].innerHTML = "-Seria muy util nombrar a su Físico o Ocupacional terapeuta en su reseña!"
location.innerHTML = "Elija una clínica arriba para generar un código QR"
}, 300);
    } else if (language.innerHTML !== "Change to Spanish") {
        language.innerHTML = "Change to Spanish";
        let location = document.getElementById('location');
        qrDisplay.innerHTML = "";
        location.innerHTML = "";
        setTimeout(() => {
        prompt.innerHTML = "Thank you for taking the time to write us a review, We work hard to provide the best quality care for our patients and wish to continue doing so. Please let us know how we did!"
        quetion[0].innerHTML = "-How has your experience with us been?"
        quetion[1].innerHTML = "-Have you seen any noticable difference?"
        quetion[2].innerHTML = "-It would be extremely helpful to name your Physical or Occupational therapist in your feedback!"
        location.innerHTML = "Select a clinic above to generate a QR Code"
        }, 300);
    }
}


const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
}
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
}

const onClick = () => {
    let location = document.getElementById('location');
    qrDisplay.innerHTML = "";
    location.innerHTML = "";
    let east = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+1041+3rd+avenue+reviews&oq=prohealth+and+fit&aqs=chrome.0.35i39j35i39i650j69i57j46i175i199i512l2j0i22i30j0i10i22i30j0i22i30l3.16039j0j15&sourceid=chrome&ie=UTF-8";
    showSpinner();
    setTimeout(() => {
        hideSpinner();
        location.innerHTML = "Pro Health and Fitness Eastside clinic"
        qrDisplay = generateQRCode(east);
    }, 1000);
  // location.innerHTML = "Pro Health and Fitness Eastside clinic"
    // qrDisplay = generateQRCode(east);
 }

 const onClick1 = () => {
    let location = document.getElementById('location');
    qrDisplay.innerHTML = "";
        location.innerHTML = "";
    let w150 = "https://www.google.com/search?q=Pro-Health+%26+Fitness+Office+&sxsrf=APwXEdc8MkBYsK_m6Jcb-bjfx-IMWUZY0g%3A1687637485401&ei=7U2XZMyCGIGe5NoPoPiFiA4&ved=0ahUKEwiMrc7G29z_AhUBD1kFHSB8AeEQ4dUDCBA&uact=5&oq=Pro-Health+%26+Fitness+Office+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzICCCY6CggAEEcQ1gQQsANKBAhBGABQzwlY_xFgsBpoAXABeACAAUSIAZIDkgEBN5gBAKABAcABAcgBBQ&sclient=gws-wiz-serp";
    showSpinner();
    setTimeout(() => {
        hideSpinner();
        location.innerHTML = "Pro Health and Fitness Westside 150 clinic"
        qrDisplay = generateQRCode(w150);
    }, 1000);
 }


const onClick2 = () => {
        let location = document.getElementById('location');
    qrDisplay.innerHTML = "";
        location.innerHTML = "";
    let w180 = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+westend+180+reviews&sxsrf=APwXEdc5_ahyNMlu_DTEXUL8HpbT1-dzPA%3A1687636955848&ei=20uXZKmYM9yl5NoP6faceA&ved=0ahUKEwjp8YzK2dz_AhXcElkFHWk7Bw8Q4dUDCBA&uact=5&oq=prohealth+and+fitness+pt+ot+westend+180+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQqwI6CwgAEIkFEKIEELADOggIABCiBBCwA0oECEEYAVDpA1jpA2CYDWgBcAB4AIAB-QaIAfkGkgEDNi0xmAEAoAEBwAEByAEE&sclient=gws-wiz-serp";
    // add spinner for annimagion and use Time out function to porperly design thhe annimation 
    showSpinner();
    setTimeout(() => {
        hideSpinner();
        location.innerHTML = "Pro Health and Fitness Westside 180 clinic"
        qrDisplay = generateQRCode(w180);
    }, 1000);
 }


const onClick3 = () => {
        let location = document.getElementById('location');
    qrDisplay.innerHTML = "";
        location.innerHTML = "";
    let inw = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+inwood+reviews&sxsrf=APwXEdd0AgBUSl14kxP8zQq13i_Co6YqdA%3A1687636961050&ei=4UuXZNXfAuibptQP196XWA&ved=0ahUKEwiV1MrM2dz_AhXojYkEHVfvBQsQ4dUDCBA&uact=5&oq=prohealth+and+fitness+pt+ot+inwood+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzoKCAAQRxDWBBCwAzoGCAAQBxAeOggIABCKBRCGAzoICAAQiQUQogQ6BQgAEKIEOgcIIxCwAhAnSgQIQRgAUMIcWKkwYMUxaAJwAXgAgAFtiAG3BJIBAzYuMZgBAKABAcABAcgBBA&sclient=gws-wiz-serp";
    showSpinner();
    setTimeout(() => {
        hideSpinner();
        location.innerHTML = "Pro Health and Fitness Inwood clinic"
        qrDisplay = generateQRCode(inw);
    }, 1000);
 }


nav[0].onclick = onClick;
nav[1].onclick = onClick1;
nav[2].onclick = onClick2;
nav[3].onclick = onClick3;
language.onclick = changeToSpanish;
// language.onclick = changeToEnglish;



hideSpinner();
 const generateQRCode = (url) => {
    const qrcode = new QRCode('qrcode', {
        text: url, 
        width: 300, 
        height: 300
    })
}
