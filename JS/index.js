// 실제 시간
document.addEventListener('DOMContentLoaded', function () {
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const currentTime = `${hours}:${minutes}`;
        
        document.getElementById('current_time').textContent = currentTime;
    }

    updateTime();
    setInterval(updateTime, 60000);
});

// 전송버튼 엔터
document.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        var submit = document.getElementById('chat-reply-submit');
        submit.style.backgroundColor= '#fae100';

        setTimeout(function() {
            submit.style.backgroundColor = 'rgb(243, 243, 243)';
        }, 100);
    }
});

//text를 작성하면 message__reply에 있는 text로 되어서 채팅 보낼 수 있게 함
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('chat-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();

        const textmsg = document.getElementById('chat-reply--text').value.trim();

        if(textmsg!==""){
            const chat = document.getElementById('chat-container');
        }

    });
});

function validateForm(event) {
    const username = document.forms["login-form"]["username"].value;
    const password = document.forms["login-form"]["password"].value;

    if (username === "" || password === "") {
        alert("이메일과 비밀번호를 입력해주세요.");
        event.preventDefault(); // 폼 제출 중단
        return false;
    }
    // 이메일 비번 맞늖지 확인하면 폼 제출허용.
    return true; // 폼 제출 허용
}
