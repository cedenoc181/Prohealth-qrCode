// this is the nav bar elements
const nav = document.querySelectorAll("nav");
const prompt = document.getElementById("prompt");
const quetion = document.querySelectorAll("li");
const language = document.getElementById("language-icon");
const qrDisplay = document.getElementById("qrcode");
const googleOverview = document.querySelector(".google-overview-link");
const googleMaps = document.getElementById("map");
const providersList = document.querySelector(".provider-container");
const instructions = document.querySelector(".instructions");
const googleTitle = document.querySelector(".google-title");
const providerTitle = document.querySelector(".provider-title");




const changeLanguage = () => {
  const isSpanish = language.innerHTML === "language_spanish";
  language.innerHTML = isSpanish ? "language_us" : "language_spanish";
    let location = document.getElementById("location");
    location.innerHTML = "";
    qrDisplay.innerHTML = "";
    instructions.innerHTML = "";
    googleTitle.innerHTML = isSpanish ? "What others are saying about our clinic" : "Lo que otros dicen sobre nuestra clínica";
    providerTitle.innerText = isSpanish ? "Our Providers" : "Nuestros proveedores";

    setTimeout(() => {
      if (isSpanish) {
        prompt.innerHTML =
          "Thank you for taking the time to write us a review, We work hard to provide the best quality care for our patients and wish to continue doing so. Please let us know how we did!";
        quetion[0].innerHTML = `<span class="material-symbols-outlined">
      arrow_right
      </span> How would you describe the quality of care you received?`;
        quetion[1].innerHTML = `<span class="material-symbols-outlined">
      arrow_right
      </span>Would you recommend our services to family or friends?`;
        quetion[2].innerHTML =
          "It would be extremely helpful to name your Physical or Occupational therapist in your feedback!";
        location.innerHTML = "Select a clinic above to generate a QR Code";
       } else {
        prompt.innerHTML =
          "Gracias por tomarse el tiempo para escribirnos una reseña, trabajamos duro para proporcionar la mejor atención de calidad para nuestros pacientes y deseamos seguir haciéndolo. Por favor, háganos saber cómo lo hicimos!";
        
          quetion[0].innerHTML = `<span class="material-symbols-outlined">
      arrow_right
      </span> Cómo describiría la calidad de la atención que recibió?`;
        
      quetion[1].innerHTML = `<span class="material-symbols-outlined">
      arrow_right
      </span> Recomendaría nuestros servicios a familiares o amigos?`;
       
      quetion[2].innerHTML =
          "Seria muy util nombrar a su Físico o Ocupacional terapeuta en su reseña!";
        location.innerHTML = "Elija una clínica arriba para generar un código QR";
       }
    }, 300);
  };
  

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const onClick = () => {
  const isSpanish = language.innerHTML === "language_spanish";
  let location = document.getElementById("location");
  qrDisplay.innerHTML = "";
  location.innerHTML = "";
  googleOverview.innerHTML = "";
  googleMaps.innerHTML = "";
  googleTitle.innerText = "";
  providersList.innerHTML = "";
  providerTitle.innerText = "";
  let east =
    "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+1041+3rd+avenue+reviews&oq=prohealth+and+fit&aqs=chrome.0.35i39j35i39i650j69i57j46i175i199i512l2j0i22i30j0i10i22i30j0i22i30l3.16039j0j15&sourceid=chrome&ie=UTF-8";
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    googleTitle.innerText = isSpanish ?  "Lo que otros dicen sobre nuestra clínica Upper Eastside": "What others are saying about our Upper Eastside clinic";
    googleOverview.innerHTML = `
        <a class="google-overview-link" href="https://www.google.com/search?q=prohealth+and+fitness+pt+ot+1041+3rd+avenue+reviews&oq=prohealth+and+fit&aqs=chrome.0.35i39j35i39i650j69i57j46i175i199i512l2j0i22i30j0i10i22i30j0i22i30l3.16039j0j15&sourceid=chrome&ie=UTF-8#lrd=0x89c2593703743a97:0x2ffc04ab2427067d,1,,,," target="_blank">
          <div class="googleOverview col-3">
          <gmpx-place-overview place="ChIJlzp0AzdZwokRfQYnJKsE_C8">
            <gmpx-place-directions-button slot="action">
            </gmpx-place-directions-button>
          </gmpx-place-overview>
        </div>  
      </a>`;

          googleMaps.innerHTML = `<iframe 
        class="g-maps"
        height="250"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5-9bgZEZiMQuc5BNlAzsmS8U9LlormuA
          &q=proHealth+and+Fitness+PT+OT+PLLC, New+York+NY">
      </iframe>`;
      providersList.innerHTML = `
          <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Oscar-Moises-PT-DPT-02.jpg" alt="PT-provider-Upper-Eastside-clinic" />
           <figcaption class="provider-name">Oscar Moises <span class="provider-credentials">PT, DPT</span></figcaption>
          </figure>
          <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Alexandra-Burdo-OT-OTR_L-02.jpg" alt="OT-provider-Upper-Eastside-Clinic" />
            <figcaption class="provider-name">Alexandra Burdo <span class="provider-credentials">MS, OTR/L, </br> Occupational Therapy Supervisor</span></figcaption>
          </figure>`;
        instructions.innerHTML = isSpanish ?  `<span class="info-icon material-symbols-outlined">
        info
        </span>Para dispositivos móviles, genere y luego escanee el código QR. Para la web, haga clic en las reseñas de Google a continuación.`:`<span class="info-icon material-symbols-outlined">
        info
        </span>For mobile, generate then scan QR code. For web, please click on google reviews below.`;
        location.innerText =  isSpanish ? "Escanee aquí para la clínica Upper Eastside" : "Scan here for Upper Eastside clinic";
        providerTitle.innerText = isSpanish ? "Proveedores en la clínica Upper Eastside": "Providers at Upper Eastside clinic";
    qrDisplay = generateQRCode(east); 
  }, 1000);
};

const onClick1 = () => {
  const isSpanish = language.innerHTML === "language_spanish";
  let location = document.getElementById("location");
  qrDisplay.innerHTML = "";
  location.innerHTML = "";
  googleOverview.innerHTML = "";
  googleMaps.innerHTML = "";
  googleTitle.innerText = "";
  providersList.innerHTML = "";
  providerTitle.innerText = "";
  let w150 =
    "https://www.google.com/search?q=Pro-Health+%26+Fitness+Office+&sxsrf=APwXEdc8MkBYsK_m6Jcb-bjfx-IMWUZY0g%3A1687637485401&ei=7U2XZMyCGIGe5NoPoPiFiA4&ved=0ahUKEwiMrc7G29z_AhUBD1kFHSB8AeEQ4dUDCBA&uact=5&oq=Pro-Health+%26+Fitness+Office+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzICCCY6CggAEEcQ1gQQsANKBAhBGABQzwlY_xFgsBpoAXABeACAAUSIAZIDkgEBN5gBAKABAcABAcgBBQ&sclient=gws-wiz-serp";
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    googleTitle.innerText = isSpanish ? "Lo que otros dicen sobre nuestra clínica Westside": "What others are saying about our Westside clinic";
    googleOverview.innerHTML = `
 <a class="google-overview-link" href="https://www.google.com/search?q=Pro-Health+%26+Fitness+Office+&sxsrf=APwXEdc8MkBYsK_m6Jcb-bjfx-IMWUZY0g%3A1687637485401&ei=7U2XZMyCGIGe5NoPoPiFiA4&ved=0ahUKEwiMrc7G29z_AhUBD1kFHSB8AeEQ4dUDCBA&uact=5&oq=Pro-Health+%26+Fitness+Office+&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIECCMQJzICCCY6CggAEEcQ1gQQsANKBAhBGABQzwlY_xFgsBpoAXABeACAAUSIAZIDkgEBN5gBAKABAcABAcgBBQ&sclient=gws-wiz-serp#lrd=0x89c259889ea622e9:0x8b626c61e7ec52f2,1,,,," target="_blank"> 
<div class="googleOverview col-3">
  <gmpx-place-overview place="ChIJ6SKmnohZwokR8lLs52FsYos">
    <gmpx-place-directions-button slot="action">
    </gmpx-place-directions-button>
  </gmpx-place-overview>
</div> 
</a>`;
googleMaps.innerHTML = `<iframe 
        class="g-maps"
        height="250"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5-9bgZEZiMQuc5BNlAzsmS8U9LlormuA
          &q=Pro-Health+Fitness+150+Westend+Avenue, New+York+NY">
      </iframe>`;
      providersList.innerHTML = `
          <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Sabrina-Yakubovich-PT-DPT-CSCS-02-480x480.jpg" alt="PT-provider-Westside-clinic" />
           <figcaption class="provider-name">Sabrina Yakubovich <span class="provider-credentials">PT, DPT, CSCS</span></figcaption>
          </figure>
           <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Joy-Ko-Pic-OTD-OTR_L-02-480x479.jpg" alt="PT-provider-Westside-clinic" />
           <figcaption class="provider-name">Joy Ko<span class="provider-credentials"> OTD, OTR/L</span></figcaption>
          </figure>
          <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Alexandra-Burdo-OT-OTR_L-02.jpg" alt="OT-provider-Upper-Eastside-Clinic" />
            <figcaption class="provider-name">Alexandra Burdo <span class="provider-credentials">MS, OTR/L,</br> Occupational Therapy Supervisor</span></figcaption>
          </figure>`;
        instructions.innerHTML = isSpanish ?  `<span class="info-icon material-symbols-outlined">
        info
        </span>Para dispositivos móviles, genere y luego escanee el código QR. Para la web, haga clic en las reseñas de Google a continuación.`:`<span class="info-icon material-symbols-outlined">
        info
        </span>For mobile, generate then scan QR code. For web, please click on google reviews below.`;
        location.innerText =  isSpanish ? "Escanee aquí para la clínica westside" : "Scan here for Westside clinic";
        providerTitle.innerText = isSpanish ? "Proveedores en la clínica Westside": "Providers at Westside clinic";
    qrDisplay = generateQRCode(w150);
  }, 1000);
};

const onClick2 = () => {
  const isSpanish = language.innerHTML === "language_spanish";
  let location = document.getElementById("location");
  qrDisplay.innerHTML = "";
  location.innerHTML = "";
  googleOverview.innerHTML = "";
  googleMaps.innerHTML = "";
  googleTitle.innerText = "";
  providersList.innerHTML = "";
  providerTitle.innerText = "";
  let w180 =
    "https://www.google.com/search?q=prohealth+and+fitness+pt+ot+westend+180+reviews&sxsrf=APwXEdc5_ahyNMlu_DTEXUL8HpbT1-dzPA%3A1687636955848&ei=20uXZKmYM9yl5NoP6faceA&ved=0ahUKEwjp8YzK2dz_AhXcElkFHWk7Bw8Q4dUDCBA&uact=5&oq=prohealth+and+fitness+pt+ot+westend+180+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQqwI6CwgAEIkFEKIEELADOggIABCiBBCwA0oECEEYAVDpA1jpA2CYDWgBcAB4AIAB-QaIAfkGkgEDNi0xmAEAoAEBwAEByAEE&sclient=gws-wiz-serp";
  // add spinner for annimagion and use Time out function to porperly design thhe annimation
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    googleTitle.innerHTML = isSpanish ? "Lo que otros dicen sobre nuestra clínica Upper Westside": "What others are saying about our Upper Westside clinic";
    googleOverview.innerHTML = 
    ` <a class="google-overview-link" href="https://www.google.com/search?q=prohealth+and+fitness+pt+ot+westend+180+reviews&sxsrf=APwXEdc5_ahyNMlu_DTEXUL8HpbT1-dzPA%3A1687636955848&ei=20uXZKmYM9yl5NoP6faceA&ved=0ahUKEwjp8YzK2dz_AhXcElkFHWk7Bw8Q4dUDCBA&uact=5&oq=prohealth+and+fitness+pt+ot+westend+180+reviews&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQqwI6CwgAEIkFEKIEELADOggIABCiBBCwA0oECEEYAVDpA1jpA2CYDWgBcAB4AIAB-QaIAfkGkgEDNi0xmAEAoAEBwAEByAEE&sclient=gws-wiz-serp#lrd=0x89c2586053de2a13:0xd9035cbeef4b6b48,1,,,," target="_blank">    
        <div class="googleOverview col-3">
                <gmpx-place-overview place="ChIJEyreU2BYwokRSGtL775cA9k">
                     <gmpx-place-directions-button slot="action">
                     </gmpx-place-directions-button>
                </gmpx-place-overview>
             </div>
        </a>`;
          googleMaps.innerHTML = ` <iframe 
        class="g-maps"
        height="250"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC5-9bgZEZiMQuc5BNlAzsmS8U9LlormuA
          &q=Pro-Health+Fitness+180+Westend+Avenue, New+York+NY">
      </iframe>`;

    providersList.innerHTML = `
          <figure class="provider-card">
            <img class="provider-img" src="https://prohealthptot.com/wp-content/uploads/2023/03/Colin-McGowan-Pic-PT-DPT-CertMDT-02-480x480.jpg" alt="PT-provider-Upper-Eastside-clinic" />
           <figcaption class="provider-name">Colin McGowan <span class="provider-credentials">PT, DPT, cert. MDT</span></figcaption>
          </figure>`;
          instructions.innerHTML = isSpanish ?  `<span class="info-icon material-symbols-outlined">
          info
          </span>Para dispositivos móviles, genere y luego escanee el código QR. Para la web, haga clic en las reseñas de Google a continuación.`:`<span class="info-icon material-symbols-outlined">
          info
          </span>For mobile, generate then scan QR code. For web, please click on google reviews below.`;
          location.innerHTML =  isSpanish ? "Escanee aquí para la clínica Upper westside" : "Scan here for Upper Westside clinic";
          providerTitle.innerText = isSpanish ? "Proveedores en la clínica Upper Westside": "Providers at Upper Westside clinic";
    qrDisplay = generateQRCode(w180);
  }, 1000);
};

nav[0].onclick = onClick;
nav[1].onclick = onClick1;
nav[2].onclick = onClick2;
language.onclick = changeLanguage;

hideSpinner();
const generateQRCode = (url) => {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: 300,
    height: 300,
  });
};

