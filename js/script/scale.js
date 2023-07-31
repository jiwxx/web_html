// let height = 0;
// let weight = 0;
let total = 0;
const userHeight = document.querySelector('#height')
const userWeight = document.querySelector('#weight')
const normal_w = document.querySelector('#btn')
const text = document.querySelector('.answer')
console.log(userHeight,userWeight,normal_w,text)
//결과 버튼 클릭시
//1. 사용자가 입력한 키와 몸무게 정보 받아오기
normal_w.addEventListener('click',function(){
    // total = height + weight - m * x;
    // console.log (total)
    // text.innerHTML=`적정체중은 ${total}kg 이며 ${weight-total}kg 초과되셨습니다.`
    let height = Number(userHeight.value) //string -> number
    let weight = Number(userWeight.value)
    total = (height - 100) * 0.9;
    console.log (height,weight,total)
    text.innerHTML = `적정체중은 ${total}kg 이며 ${weight-total}kg 초과되었습니다.`
})