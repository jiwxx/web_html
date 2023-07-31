// const two = 2;
// let zero = 0;
// let total = 0;
// const number1 = document.querySelector('#number1')
// const number2 = document.querySelector('#number2')
// const btn = document.querySelector('#btn')
// const answer = document.querySelector('.answer')
// console.log (number1,number2,btn,answer)

// btn.addEventListener('click',function(){
//     total = two * zero
//     console.log(total)
//     number2 = zero;
//     answer.innerHTML=`${total}`
// })
const dan2 = document.querySelector('#dan2') //2고정 인풋
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')
const test = document.querySelector('#test')
console.log (dan2, calc, result)
console.log (typeof(dan2.value), typeof(calc.value))
console.log (`2*2=${'2'*'2'}, 2+2=${'2'+'2'}`)
//연산자 좌우 피연산자가 문자데이터일 경우
//더하기연산자 (+) 라면 문자+문자= 문자로 연결결과로 보여준다.
//나머지 연산자(-,*,/,%) >> 문자를 암시적형 변환으로 자동으로
//숫자 데이터로 변경해서 문자*문자=숫자 결과로 보여준다.
test.addEventListener('click',function(){
    let first = Number(dan2.value)
    let last = Number(calc.value)
    console.log(first,last,first*last)
    result.value = first * last
})
