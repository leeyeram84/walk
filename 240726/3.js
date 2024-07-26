// 문제 03. 반복문 만들기
// 문자열(str)과 숫자(n)을 매개변수로 받아 str을 n번 콘솔에 출력하는 함수인 repeatWord 함수를 완성해보세요.

function repeatWord( str , n ) {
    for( let i = 1 ; i <= n ; i++)
    {
        console.log( str );
    }
}

repeatWord( "hello" , 5 );