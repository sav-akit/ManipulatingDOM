let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  const myMain = document.getElementById('main-title');
  myMain.innerHTML = "Welcome to myDOM"
  

  // Part 2
  document.querySelector('body').style.backgroundColor = '#a4e0da';
  
  
  // Part 3

  const favList = document.getElementById('favorite-things');
  favList.removeChild(favList.lastElementChild);
  //console.log(favList)

  // Part 4
  const specialClass = document.querySelectorAll("special-title");
  specialClass.forEach(element => {
    element.style.fontSize = "2rem";
  });
  // Part 5

  const myElement = document.getElementById("past-races");
  for (const child of myElement.children) {
    if(child.textContent === "Chicago"){
      myElement.removeChild(child);
    }
  }

  // Part 6

  const listEl = document.createElement('li');
  const textEl = document.createTextNode("Virginia");
  listEl.appendChild(textEl);
  //console.log(listEl);
  myElement.appendChild(listEl);

  // Part 7
  const newDiv = document.createElement('div');
  newDiv.className = "blog-post purple";
  const myHeader = document.createElement('h1');
  const textHeader = document.createTextNode("Virginia");
  myHeader.appendChild(textHeader);
  const myPara = document.createElement('p');
  const textPara = document.createTextNode("My car racing to Virginia..");
  myPara.appendChild(textPara);
   newDiv.appendChild(myHeader);
   newDiv.appendChild(myPara);
   
  // const domAdv = document.getElementById("dom-adventures");
  // const parent = domAdv.parentNode;
  // parent.appendChild(newDiv);

  const main = document.querySelector(".main")
  main.appendChild(newDiv);
  // Part 8

  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  document.getElementById("quote-title").addEventListener("click",randomQuote);

   // Part 9
  
  const el = document.getElementsByClassName("blog-post");
  console.log(el.length);
  
  for(let i = 0; i < el.length; i++) {
    el[i].addEventListener("mouseout",function(){
           el[i].classList.toggle("purple");
         });
    el[i].addEventListener("mouseenter",function(){
          el[i].classList.toggle("red");
         })
  }

});
