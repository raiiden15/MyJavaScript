const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector("body")

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target) //event aa kaha se raha h, target se pata chalta h.
    switch (event.target.id) { 
      case "grey":
        body.style.backgroundColor = event.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = event.target.id;
        break;
      case "blue":
        body.style.backgroundColor = event.target.id;
        break;
      case "white":
        body.style.backgroundColor = event.target.id;
        break;
      case "purple":
        body.style.backgroundColor = event.target.id;
        break;
      default:
        break;
    };
  })
});
