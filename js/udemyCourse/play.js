const name = 'Lee'
let age = 28;
const hasHobbies = true;


age = 30;
// name = 'geunchan' = error

//const = 불변 상수 (변하면 안 되는 변수들에는 const 사용하자)
//let = 변할 수 있는 변수

// 익명 함수를 이름 상수에 지정해 기명 함수 만들기 가능
// function 키워드를 parameter 와 {} 사이에 => 를 쓰는것으로 대체 가능
const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' ,and the user has hobbies: '+
        userHasHobby
    );
}
// 문장 하나만 실행하는 함수는 중괄호, return 생략가능
const add = (a,b) => a+b;

// 인수가 하나라면 인수에 괄호 제거 가능 (a) = a
const addOne = a => a +1

const addRandom = () => 1+2;

console.log(add(1,2));
console.log(addOne(2));
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));

