const message = `The one thing u must to know\ni loved u deeply, i've loved u through every part of my life\n\ni miss ur voice, ur laugh, ur presence\ni'd be lying if i said i didn't miss you, because i do\ni think about u every night\n\ntake care of urself, eat well, get enough rest\ni'll be here with u every step u take\nn i'll be waiting for u to come back home\n\nendlessly yours,\ngita.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}