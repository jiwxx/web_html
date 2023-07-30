let height = 0;
let weight = 0;
let total = 0;
const m = 100;
const x = 0.9;
const userHeight = document.querySelector('#height')
const userWeight = document.querySelector('#weight')
const normal_w = document.querySelector('#btn')
const text = document.querySelector('.answer')
console.log(userHeight,userWeight,normal_w,text)

normal_w.addEventListener('click',function(){
    total = height + weight - m * x;
    console.log (total)
    text.innerHTML=`적정체중은 ${total}kg 이며 ${weight-total}kg 초과되셨습니다.`
})