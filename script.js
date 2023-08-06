var clock;
var main = document.querySelector(`.main`);
var cont1 = document.createElement(`span`);
var cont2 = document.createElement(`span`);
var cont3 = document.createElement(`span`);
cont1.className = `w-1/4 h-3/4 flex justify-center items-center rounded-3xl bg-white text-6xl font-bold`
cont2.className = `w-1/4 h-3/4 flex justify-center items-center rounded-3xl bg-white text-6xl font-bold`
cont3.className = `w-1/4 h-3/4 flex justify-center items-center rounded-3xl bg-white text-6xl font-bold`
main.append(cont1, cont2, cont3)

window.addEventListener(`load`, ()=>{
  clock = new Date();
  cont1.innerHTML = clock.getHours();
  clock = new Date();
  cont2.innerHTML = clock.getMinutes();
  clock = new Date();
  cont3.innerHTML = clock.getSeconds();
})

setInterval(() => {
  clock = new Date();
  cont1.innerHTML = clock.getHours();
}, 3600000);

setInterval(() => {
  clock = new Date();
  cont2.innerHTML = clock.getMinutes();
}, 60000);

setInterval(() => {
  clock = new Date();
  cont3.innerHTML = clock.getSeconds();
}, 1000);
