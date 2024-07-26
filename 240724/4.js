// 문제 04. 함수 사용하기
// 함수를 사용해 객체의 일부분을 바꾸고, 값을 반환하세요.
const lion = {
    name : "심바",
    age : 3,
    role : true,
    line : "하쿠나마타타"
}

//나이를 추가하는 함수입니다.
function incrementAge(lion) {
    lion.age += 1;      // age + 1
    return lion.age;    // age값 반환
}

// 함수 실행 이후 사자의 현재 나이를 출력합니다.
console.log(incrementAge(lion));