/* var vs let vs const */
function compareVariable(){
    let num1=10;
    const num2=30; // 처음에 넣은 값 빼고 바꿀 수 없음

    num1=20; // 먼저 들어간 값을 빼고 이 값을 넣음
    alert('num1:' + num1);
    alert('num2:' + num2);
}

/* ID란에 입력된 값을 팝업창에 띄우기 */
function popId(){
    let userId=document.getElementById('txt_id').value;

    if(!userId){
        // = userId.value==''
        alert('아이디를 입력해주세요.');
    } else{
        alert(userId);
    }
}

/* 나만의 함수 만들고, 버튼 클릭하면 호출하기 */
function myFunction(){
    alert('로');
    alert('그');
    alert('인');
}
