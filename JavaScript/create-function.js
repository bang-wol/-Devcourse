
// 화살표 함수
const foo=()=>{
    console.log('foo');
}

// 즉시 실행 함수
(function foo(){
    console.log('foo');
})()

// 재귀 함수
function foo(arg){
    if(arg === 3) return;
    console.log(arg);
    foo(arg + 1);
}
