// this is the nav bar elements
const nav = document.querySelectorAll('nav');
const prompt = document.getElementById('prompt')
const quetion = document.querySelectorAll('li')
const language = document.getElementById('language')
const qrDisplay = document.getElementById('qrcode')



const changeToSpanish = () => {
    if(language.innerHTML === "Spanish"){
language.innerHTML = "English";
setTimeout(() => {
prompt.innerHTML = "Gracias por tomarse el tiempo para escribirnos una reseña, Trabajamos duro para proporcionar la mejor atención de calidad para nuestros pacientes y deseamos seguir haciéndolo. Por favor, háganos saber cómo lo hicimos!"
quetion[0].innerHTML = "¿Cómo ha sido tu experiencia con nosotros?"
quetion[1].innerHTML = "¿Has visto alguna diferencia notable?"
quetion[2].innerHTML = "Seria muy util nombrar a su fisioterapeuta en sus revisar!"
qrDisplay.innerHTML = "Elija una clínica arriba para generar un código QR"
}, 300);
    } else {
        language.innerHTML = "Spanish";
        setTimeout(() => {
        prompt.innerHTML = "Thank you for taking the time to write us a review, We work hard to provide the best quality care for our patients and wish to continue doing so. Please let us know how we did!"
        quetion[0].innerHTML = "How has your experience with us been?"
        quetion[1].innerHTML = "Have you seen any noticable difference?"
        quetion[2].innerHTML = "It would be extremely helpful to name your Physical therapist in your feedback!"
        qrDisplay.innerHTML = "Pick a Clinic above to generate a QR Code"
        }, 300);
    }
}


// const changeToEnglish = () => {
//     language.innerHTML = "Spanish";
//     setTimeout(() => {
//     prompt.innerHTML = "Thank you for taking the time to write us a review, We work hard to provide the best quality care for our patients and wish to continue doing so. Please let us know how we did!"
//     quetion[0].innerHTML = "How has your experience with us been?"
//     quetion[1].innerHTML = "Have you seen any noticable difference?"
//     quetion[2].innerHTML = "It would be extremely helpful to name your Physical therapist in your feedback!"
//     qrDisplay.innerHTML = "Pick a Clinic above to generate a QR Code"
//     }, 300);
//     }





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
    let east = "https://www.google.com/search?q=prohealth+pt+ot&oq=pro&aqs=chrome.2.69i60j69i57j69i59l2j69i65j69i60j69i65j69i60.3356j0j7&sourceid=chrome&ie=UTF-8";
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
    let w150 = "https://www.google.com/search?q=pro+health+and+fitness+west+150&ei=5Ms0ZOHZJ82t5NoPwLyawAU&ved=0ahUKEwjh26bh6aD-AhXNFlkFHUCeBlgQ4dUDCBA&uact=5&oq=pro+health+and+fitness+west+150&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCAAQogQyBQgAEKIEMgUIABCiBDoKCAAQRxDWBBCwA0oECEEYAFDmA1jqCGCMCmgBcAF4AIABWYgBngGSAQEymAEAoAEByAEIwAEB&sclient=gws-wiz-serp";
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
    let w180 = "https://www.google.com/search?q=pro+health+and+fitness+west+180&source=hp&ei=1ss0ZPuDFIzj5NoP-piX8AQ&iflsig=AOEireoAAAAAZDTZ5g5UhnCwXCRdWJNqqH9T5aaxLsCn&ved=0ahUKEwj7xrza6aD-AhWMMVkFHXrMBU4Q4dUDCAs&uact=5&oq=pro+health+and+fitness+west+180&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgATIFCCEQoAE6CwgAEIAEELEDEIMBOggIABCABBCxAzoOCC4QgAQQsQMQxwEQ0QM6CwguEIAEELEDEIMBOggILhCABBCxAzoLCC4QigUQsQMQgwE6CwguEIAEEMcBENEDOggILhCABBDUAjoFCAAQgAQ6EQguEIAEELEDEIMBEMcBENEDOhEILhCDARDHARCxAxDRAxCABDoLCC4QgAQQsQMQ1AI6BAgAEAM6CwgAEIoFELEDEIMBOgoIABCABBCxAxAKOgsILhCABBDHARCvAToHCAAQgAQQCjoTCC4QgAQQsQMQgwEQxwEQ0QMQCjoNCC4QgAQQxwEQrwEQCjoTCC4QDRCABBCxAxCDARDHARDRAzoHCAAQDRCABDoJCAAQDRCABBAKOg0ILhANEIAEEMcBEK8BOg0ILhANEK8BEMcBEIAEOgsILhCvARDHARCABDoGCAAQFhAeOggIABAWEB4QCjoICAAQFhAeEA86AggmOggIABCKBRCGAzoFCCEQqwI6CAghEBYQHhAdUABY_1RgjF9oAHAAeACAAbUBiAHvFJIBBDI2LjWYAQCgAQE&sclient=gws-wiz";
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
    let inw = "https://www.google.com/search?q=prohealth+pt+ot+inwood&biw=1440&bih=789&sxsrf=APwXEdflHAPGRHIEUIXhUbFFKkwjPWgSYQ%3A1681181536413&ei=YMs0ZNvmGPal5NoP-vuU-AE&ved=0ahUKEwjblp-i6aD-AhX2ElkFHfo9BR8Q4dUDCBA&uact=5&oq=prohealth+pt+ot+inwood&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzoHCCMQsAMQJzoKCAAQRxDWBBCwAzoGCAAQFhAeOgIIJjoICAAQigUQhgNKBAhBGABQsgNYig9glxBoAXABeACAAbECiAHUCpIBBzEuMC40LjGYAQCgAQHIAQrAAQE&sclient=gws-wiz-serp";
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
