// this is the nav bar elements
const nav = document.querySelectorAll('nav');
const prompt = document.getElementById('prompt')
const quetion = document.querySelectorAll('li')
const language = document.getElementById('language')
const qrDisplay = document.getElementById('qrcode')



const changeToSpanish = () => {
    if(language.innerHTML === "Spanish"){
language.innerHTML = "English";
let location = document.getElementById('location');
qrDisplay.innerHTML = "";
location.innerHTML = "";
setTimeout(() => {
prompt.innerHTML = "Gracias por tomarse el tiempo para escribirnos una reseña, trabajamos duro para proporcionar la mejor atención de calidad para nuestros pacientes y deseamos seguir haciéndolo. Por favor, háganos saber cómo lo hicimos!"
quetion[0].innerHTML = "¿Cómo ha sido tu experiencia con nosotros?"
quetion[1].innerHTML = "¿Has visto alguna diferencia notable?"
quetion[2].innerHTML = "Seria muy util nombrar a su ocupacional o físico terapeuta en su reseña!"
qrDisplay.innerHTML = "Elija una clínica arriba para generar un código QR"
}, 300);
    } else {
        language.innerHTML = "Spanish";
        let location = document.getElementById('location');
        qrDisplay.innerHTML = "";
        location.innerHTML = "";
        setTimeout(() => {
        prompt.innerHTML = "Thank you for taking the time to write us a review, We work hard to provide the best quality care for our patients and wish to continue doing so. Please let us know how we did!"
        quetion[0].innerHTML = "How has your experience with us been?"
        quetion[1].innerHTML = "Have you seen any noticable difference?"
        quetion[2].innerHTML = "It would be extremely helpful to name your Physical therapist in your feedback!"
        qrDisplay.innerHTML = "Pick a Clinic above to generate a QR Code"
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
    let east = "https://www.google.com/search?q=Prohealth+and+Fitness+PT+OT+PLLC%2C+1041+3rd+Avenue+%23204%2C+New+York%2C+NY&oq=Prohealth+and+Fitness+PT+OT+PLLC%2C+1041+3rd+Avenue+%23204%2C+New+York%2C+NY&aqs=chrome..69i57.862j0j1&sourceid=chrome&ie=UTF-8";
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
    let w150 = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+pllc+150+west+end+ave+m+new+york%2C+ny+10032&sxsrf=APwXEdfMYUjkc4j4ZB2PDOhnCq01jFIR4w%3A1681925704636&ei=SCZAZNeiJtaaptQP6LWDgA0&ved=0ahUKEwjX5qbBvbb-AhVWjYkEHejaANAQ4dUDCA8&oq=prohealth+and+fitness+pt+ot+pllc+150+west+end+ave+m+new+york%2C+ny+10032&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAKABAQ&sclient=gws-wiz-serp#lrd=0x89c259f087359c13:0xe299b2b9884f1f68,3,,,,";
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
    let w180 = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+PLLC+180+west+end+ave+%231M+New+York%2C+NY+10032&sxsrf=APwXEdfITY3itlazwf1HZDsyKcM3q-9yQw%3A1681925585855&ei=0SVAZN3OM8SaptQPgsGw4AE&ved=0ahUKEwid-9SIvbb-AhVEjYkEHYIgDBwQ4dUDCA8&oq=prohealth+and+fitness+pt+ot+PLLC+180+west+end+ave+%231M+New+York%2C+NY+10032&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQDEoECEEYAFAAWABgAGgAcAF4AIABAIgBAJIBAJgBAKABAQ&sclient=gws-wiz-serp#lrd=0x89c2586053de2a13:0xd9035cbeef4b6b48,1,,,,";
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
    let inw = "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+PLLC+4915+Broadway+New+York%2C+NY+10034&oq=prohealth+and+fitness+pt+ot+PLLC+4915+Broadway+New+York%2C+NY+10034&aqs=chrome..69i57.423j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89c2f3094dda387b:0x4594465714fce2fb,1,,,,";
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
