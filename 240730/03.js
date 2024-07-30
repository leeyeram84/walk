// 문제 03. 멘토링 상태를 확인할 수 있는 isMentoring 속성을 추가한 newTutors 를 만들어주세요.
// 배열 메서드인 `map` 을 사용하여 완성해주세요.
// 'isMentoring` 속성이 추가된 새로운 객체 배열을 만듭니다.(값은 `true`로 설정해주세요.)
// 반환값이 있는 `map` 을 통해 `newTutors` 변수에 담아서 출력해주세요.

let tutors = [
    {
        name: '최원장',
        time: '9to6',
    },
    {
        name: '윤창식',
        time: '9to6',
    },
    {
        name: '박가현',
        time: '9to6',
    },
    {
        name: '김병연',
        time: '9to6',
    },
];

  // 여기에 코드를 작성하세요.
  // 멘토링 상태를 확인할 수 있는 불리언 타입의 isMentoring 속성을 추가합니다.
const newTutors = tutors.map(function(tutor){
    // let newTutor = tutor              // 원시값 => 새롭게 복사가 됨 / 객체값 => 주소값을 복사(참조) => 같은 값을 바라봄
    let newTutor = {                    // 새로 객체를 만들어 필요한 값을 추가
        name : tutor.name ,
        time : tutor.time ,
        isMentoring : true
    }            
    //tutor1.isMentoring = true;         // isMentoring : ture 추가   //원본 데이터도 수정됨
    return newTutor;                     //return 하여 값을 넘겨줌
})
//console.log(tutors);
console.log(newTutors);

//