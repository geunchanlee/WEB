const person = {
    name: 'Chan',
    age: 29,

    // 객체는 변수뿐 아니라 함수를 포함할 수 있다
    // 화살표 방법을 사용하면 노드 전역을 참조하기 때문에 객체를 참조하지 않아 this.name이 작동하지 않는다.
    // 화살표가 아닌 기존의 function() {} 으로 써도 되고 아니면 콜론을 생략하고 function 키워드도 빼고 사용할 수 있다.
    greet() {
        console.log('Hi, I am ' + this.name)
    }
};

const hobbies = ['Sports', 'Cooking'];

//for of
// for (let hobby of hobbies) {
//     console.log(hobby);
//
// }

// ... (spread 연산자 = 전개 연산자)
// 연산자 다음에 오는 배열이나 객체의 요소, 프로퍼티를 전부 끄집어낸다음 전개 연산자 주변에 있는 대상에 집어넣기 여기서는 hobbies 에서 []로 전개
// ...이 Rest 연산자로도 작동한다 (전개 연산자의 반대)
const copiedArray = [...hobbies]
const copiedPerson = {...person};
console.log(copiedPerson);

console.log(copiedArray);