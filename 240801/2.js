// 문제 2. 튜터님 이름이 담긴 배열을 가나다순(사전순)으로 정렬해주세요
// 튜터님 이름이 담긴 배열을 sort()를 사용해 가나다순으로 정렬해주세요!

let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// sort() 메서드를 활용하여 다음과 같은 결과가 나오도록 코드를 작성해 주세요.
// 결과: ['김병연', '김르탄', '내배캠', '박가현', '윤창식', '최원장']

// 튜터님 이름이 담긴 배열을 가나다순으로 정렬하는 코드를 작성해주세요.
//tutorNames.sort();
const result = tutorNames.sort(function (name1, name2) {
    return name1.localeCompare(name2);
});

console.log(tutorNames);
