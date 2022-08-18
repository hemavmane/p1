let colors = ['red','green','black','rgba(0,122,255)',"#f15025"]
const but = document.getElementById("clickme");
const color = document.querySelector(".color");


but.addEventListener("click", function () {

  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  // console.log(colors[randomNumber],"1");
  color.textContent = colors[randomNumber];
  // console.log(colors[randomNumber],"2");
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
