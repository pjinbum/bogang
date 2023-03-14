let pro = prompt('당신의 선택은 ?')

let 가위 = 1 || 4 || 7  
let 바위 = 2 || 5 || 8
let 보 = 3 || 6 || 9 || 10

let ranran = Math.floor(Math.random()*(10.0)+1)

console.log(ranran)

console.log(pro)

console.log(가위)

// if(pro == 가위 && 바위 && 보){
//    alert('이겼습니다')
// } else {
//    alert ('졌습니다')
// }

let str = '우리나라 대한민국 좋은나라'

//substring -> '민국 좋은
 let str1= str.substring(7,12)
  console.log(str1)
//substr -> '나라 대한'
 let str2= str.substr(2,5)
  console.log(str2)
// slice -> '대한민국 좋'
let str3=str.slice(4,11)
console.log(str3)

// splice(1,2,3)
//3은 3을 추가한다라는 뜻이다


function openPopup(){
    open('http://www.naver.com' , '_blank' , 'width=200,height=200');
}


let befort = document.querySelector('.before')

console.log(befort)

befort.addEventListener('mouseover' , function(){
    befort.src = "./이미지/꿀밤.jpg"
})