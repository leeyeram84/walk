// 문제 04. 아이스 전용 커피 데이터를 만들어주세요.
// 배열 메서드인 `filter` 를 사용하여 완성해주세요.
// `icedOnly` 속성이 `true` 인 커피 배열을 만듭니다.
// 반환값이 있는 `filter` 를 통해 `icedOnly` 변수에 담아서 출력해주세요.

let starbucks = [
    {
        name: '카페 라떼',
        icedOnly: false,
    },
    {
        name: '콜드 브루',
        icedOnly: true,
    },
    {
        name: '돌체 라떼',
        icedOnly: false,
    },
    {
        name: '돌체 콜드 브루',
        icedOnly: true,
    },
];

//const icedOnly = starbucks.filter( (ice) => ice.icedOnly ) // ice.icedOnly는 불리언형으로 true값만 반환하기때문에 비교 연산자 필요x
const icedOnly = starbucks.filter(function(ice) {
    return ice.icedOnly;
})

console.log(icedOnly);