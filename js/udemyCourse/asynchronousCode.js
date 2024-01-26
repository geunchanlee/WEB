// 비동기식 코드= 즉시 실행되거나 완료되지 않는 코드
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

//실행 2초뒤 Timer is Done이 뜨고 1.5 초뒤 Done! 이 뜬다.
setTimeout(() => {
    console.log('Timer is done!')
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log('Hello!');


