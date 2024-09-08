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
