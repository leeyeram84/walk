// 문제 01. 변수 shoppingList 의 요소를 수정해주세요.
// 배열의 마지막 요소인 '목살' 을 제거한 후, '삼겹살' 을 추가해주세요.
let shoppingList = ['우유', '계란', '아이스크림', '목살'];

//let shoppingList1 = shoppingList.splice( 3, 1 , '삼겹살');  // .splice( 배열순서 , 수정할 길이 , 수정값 )

shoppingList.pop();   // 제일 최근(맨 마지막)에 들어온 요소를 제거 후 반환
shoppingList.push('삼겹살')

console.log(shoppingList);
// 출력 : [ '우유', '계란', '아이스크림', '삼겹살' ]