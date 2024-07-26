// 문제 04. 함수 응용하기
// getStudents 함수를 완성하여 members 객체에서 role이 tutor인 객체들의 name을 콘솔에 찍어보세요.
const members = [
    {
        name: "최원장",
        role: "tutor",
    },
    {
        name: "윤창식",
        role: "tutor",
    },
    {
        name: "김병연",
        role: "tutor",
    },
    {
        name: "박가현",
        role: "tutor",
    },
    {
        name: "김멍멍",
        role: "student",
    },
    {
        name: "이야옹",
        role: "student",
    },
];

function getStudents(person) {
    for( let i = 0 ; i < members.length ; i++ ){
        // switch (person[i].role) {
        //     case "tutor" : 
        //         console.log(person[i].name);
        //         break;
        //     default : 
        //         break;
        // }
        if( person[i].role === "tutor")
        {
            console.log(person[i].name);
        }
    }
}

getStudents( members );
