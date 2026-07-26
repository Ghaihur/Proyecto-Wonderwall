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

    let delay = 180 + Math.random() * 90;

    const char = text[index];

    if (char === "." || char === "!" || char === "?") {

        delay = 900;

    }

    else if (char === ",") {

        delay = 500;

    }

    else if (char === "\n") {

        delay = 1100;

    }

    index++;

    setTimeout(typeWriter, delay);

}