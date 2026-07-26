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

            if(rect.bottom > window.innerHeight * 0.80){

                window.scrollBy({

                    top:100,

                    behavior:"smooth"

                });

            }

        }

    }

    let delay =
        55 + Math.random() * 25;

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