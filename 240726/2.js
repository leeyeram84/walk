// 문제 02. 조건문 만들기
// 나이가 19 이상이면 “안녕하세요”, 아니라면 “나가세요”를 반환하는 함수인 checkAge 함수를 완성해보세요.

function checkAge(age) {
    if ( age >= 19)
    {
        console.log("안녕하세요.");
    }
    else
    {
        console.log("나가세요.");
    }
}

checkAge(19);
checkAge(18);