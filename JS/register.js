function validateFormregister(event) {
    const username = document.forms["register-form"]["username"].value;
    const birthday = document.forms["register-form"]["birthday"].value;
    
    const gender = document.forms["register-form"]["gender"].values;
    // 수정해야함 인포랑 같이..

    const info = document.forms["register-form"]["info"].vlaues;

    if (username === "" || birthday === "" || gender == "" || info == "") {
        alert("이름과 생년월일을 입력해주세요.");
        event.preventDefault(); // 폼 제출 중단
        return false;
    }
    // 이메일 비번 맞늖지 확인하면 폼 제출허용.
    return true; // 폼 제출 허용
}
