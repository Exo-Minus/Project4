//The Button Business
let button = document.getElementById('btn');
let headingElement = document.getElementById('headingOne')
let bodyElement = document.getElementById('bodyElement')
button.addEventListener('click',function(){
   let randomStuff = ['HI','How are you',"This webpage was made by Cows Farting Cooperations"]
   let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
   headingElement.innerText = randomStuff[Math.floor(Math.random()*randomStuff.length)]
   bodyElement.style.backgroundColor = colors[Math.floor(Math.random()*colors.length) ]
});
