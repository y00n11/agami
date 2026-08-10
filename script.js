document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            this.classList.add('torn');

            setTimeout(() => {
                if (action === 'twitter') {
                    window.open('https://x.com', '_blank');
                } else if (action === 'calendar') {
                    alert('2026년 9월 9일, 애니메이션 영화 《아가미》 개봉일!');
                } else if (action === 'share') {
                    const text = encodeURIComponent('인어왕자 보신 분? 여기로 연락달라네요 \n >> @heisg0ne');
                    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
                } else if (action === 'voice') {
                    const audio = document.getElementById('voicePlayer');
                    if (audio) {
                        audio.play().catch(() => alert('voice.mp4 파일 경로를 확인해주세요.'));
                    }
                }
            }, 250);
        });
    });

    // 보안 및 개발자 도구 방지
    document.addEventListener('keydown', (e) => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
            (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
        ) {
            e.preventDefault();
            e.stopPropagation();
        }
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
});