const enterButton = document.getElementById("enterButton");
const finishButton = document.getElementById("finishButton");

const welcomeScreen = document.querySelector(".welcome-screen");
const letterScreen = document.querySelector(".letter-screen");
const responseScreen = document.querySelector(".response-screen");

const letter = document.querySelector(".letter");
const letterText = document.getElementById("letterText");

// ==========================
// Música
// ==========================

const bgMusic = document.getElementById("bgMusic");



// Ocultar controles al iniciar


// Volumen inicial
bgMusic.volume = 0;
volumeSlider.value = 3;

let index = 0;

let autoScroll = true;
let scrollTimeout;

// ==========================
// Scroll manual
// ==========================

window.addEventListener("wheel", () => {

    autoScroll = false;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        autoScroll = true;

    }, 4000);

});

window.addEventListener("touchmove", () => {

    autoScroll = false;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {

        autoScroll = true;

    }, 4000);

});

// ==========================
// Botón Entrar
// ==========================

enterButton.addEventListener("click", async () => {

    // Mostrar controles
   

    // Reiniciar volumen
    bgMusic.volume = 0;
    volumeSlider.value = 30;

    try{

        await bgMusic.play();

    }catch(error){

        console.log(error);

    }

// Fade In suave hasta 5%

let volumen = 0;

const volumenFinal = 0.05;

const fade = setInterval(() => {

    volumen += 0.0015;

    if (volumen >= volumenFinal){

        volumen = volumenFinal;

        clearInterval(fade);

    }

    bgMusic.volume = volumen;

},120);

    enterButton.classList.add("button-hide");

    setTimeout(() => {

        welcomeScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        window.scrollTo({

            top:0,

            behavior:"instant"

        });

        letter.classList.add("paper-rise");

        setTimeout(() => {

            letterText.innerHTML =
                '<span class="cursor"></span>';

            setTimeout(() => {

                typeWriter();

            },2000);

        },2800);

    },400);

});

// ==========================
// Máquina de escribir
// ==========================

function typeWriter(){

    if(index >= text.length){

        letterText.innerHTML =
            text +
            '<span class="cursor"></span>';

        setTimeout(() => {

            finishButton.classList.remove("hidden");

            finishButton.classList.add("fade-in");

            finishButton.style.pointerEvents = "all";

            setTimeout(() => {

                finishButton.scrollIntoView({

                    behavior:"smooth",

                    block:"center"

                });

            },300);

        },2000);

        return;

    }

    const current =
        text.substring(0,index+1);

    letterText.innerHTML =
        current +
        '<span class="cursor"></span>';

    if(autoScroll){

        const cursor =
            document.querySelector(".cursor");

        if(cursor){

            const rect =
                cursor.getBoundingClientRect();

            if(rect.bottom > window.innerHeight*0.80){

                window.scrollBy({

                    top:100,

                    behavior:"smooth"

                });

            }

        }

    }

    let delay =
        55 + Math.random()*25;

    const char =
        text[index];

    if(char==="." || char==="!" || char==="?"){

        delay = 450;

    }

    else if(char === ","){

        delay = 220;

    }

    else if(char === "\n"){

        delay = 600;

    }

    index++;

    setTimeout(typeWriter,delay);

}

// ==========================
// Botón "Terminé de leer"
// ==========================

finishButton.addEventListener("click", () => {

    finishButton.classList.add("button-hide");

    letter.classList.remove("paper-rise");
    letter.classList.add("letter-hide");

    setTimeout(() => {

        letterScreen.classList.add("hidden");

        responseScreen.classList.remove("hidden");
        responseScreen.classList.add("fade-in");

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    },1800);

});

// ==========================
// Botón "Aquí"
// ==========================

const hereButton = document.getElementById("hereButton");

hereButton.addEventListener("click", () => {

    const phone = "595982819415";

    const message = encodeURIComponent(
        "Holaa, ya estoy lista para hablar ❤️"
    );

    window.open(
        `https://wa.me/${phone}?text=${message}`,
        "_blank"
    );

});

// ==========================
// Controles de música
// ==========================

// Cambiar volumen


// Pausar / Reanudar

playPauseButton.addEventListener("click", async () => {

    if(bgMusic.paused){

        try{

            await bgMusic.play();

            playPauseButton.textContent = "⏸️";

        }catch(error){

            console.log(error);

        }

    }else{

        bgMusic.pause();

        playPauseButton.textContent = "▶️";

    }

});

// Mantener el icono sincronizado

bgMusic.addEventListener("play", () => {

    playPauseButton.textContent = "⏸️";

});

bgMusic.addEventListener("pause", () => {

    playPauseButton.textContent = "▶️";

});