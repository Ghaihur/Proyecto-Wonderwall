const enterButton = document.getElementById("enterButton");

const welcomeScreen = document.querySelector(".welcome-screen");
const letterScreen = document.querySelector(".letter-screen");

const letter = document.querySelector(".letter");
const letterText = document.getElementById("letterText");

const text = `Hola.

Te quería escribir porque no quiero perder esto que tenemos.

Antes que nada, perdón por cómo me comporté anoche.

No fue lo correcto.

La verdad es que sí tenía pensado salir, pero no te lo dije porque pensé que te ibas a molestar o enojar.

Y entendí que haberte ocultado que iba a salir fue peor que simplemente decirte.

Tenía que haberte dicho desde un principio.

Me caíste genial desde que empezamos a hablar y por eso no me gusta que tengas esa imagen de mí.

Desde el primer momento que te vi sentí algo que no había sentido hace muchísimo tiempo, por eso decidí intentar tener algo lindo contigo.

Al pasar las semanas y seguir conociéndote, me di cuenta de que tenemos gustos diferentes, pero así como tenemos diferencias, también tenemos muchas cosas en común, y eso hizo que me guste mucho compartir contigo esas cosas en común.

No quiero que por lo que pasó anoche dejemos esto lindo que estamos construyendo de a poquito.

No espero que esto arregle todo.

Solo quería que sepas que reconozco que fue muy tonto lo que hice y la manera en la que me comporté.

Ojalá me puedas dar la oportunidad de seguir conociéndote.`;

let index = 0;

enterButton.addEventListener("click", () => {

    // Desaparece el botón
    enterButton.classList.add("button-hide");

    setTimeout(() => {

        // Oculta la pantalla del botón
        welcomeScreen.classList.add("hidden");

        // Muestra la pantalla de la carta
        letterScreen.classList.remove("hidden");

        // La hoja sube desde abajo
        letter.classList.add("paper-rise");

        // Espera a que termine la animación
        setTimeout(() => {

            // Muestra solamente el cursor durante 2 segundos
            letterText.innerHTML = '<span class="cursor"></span>';

            setTimeout(() => {

                typeWriter();

            }, 2000);

        }, 2800);

    }, 400);

});

function typeWriter() {

    if (index >= text.length) {

        letterText.innerHTML =
            text +
            '<span class="cursor"></span>';

        return;

    }

    const current = text.substring(0, index + 1);

    letterText.innerHTML =
        current +
        '<span class="cursor"></span>';

    let delay = 230 + Math.random() * 90;

    const char = text[index];

    if (char === "." || char === "!" || char === "?") {

        delay = 900;

    } else if (char === ",") {

        delay = 500;

    } else if (char === "\n") {

        delay = 1100;

    }

    index++;

    setTimeout(typeWriter, delay);

}