document.addEventListener('DOMContentLoaded', () => {
    // 뜯기 동작 바인딩
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function () {
            const action = this.getAttribute('data-action');
            this.classList.add('torn');

            setTimeout(() => {
                if (action === 'twitter') {
                    window.open('https://x.com', '_blank');
                } else if (action === 'calendar') {
                    alert('🗓️ 2026년 9월 9일, 애니메이션 영화 《아가미》 개봉일!');
                } else if (action === 'share') {
                    const text = encodeURIComponent('9월 9일 개봉하는 애니메이션 영화 《아가미》 전단지를 뜯어왔습니다! ✂️\n공식 트위터: @인어왕자를찾습니다');
                    window.open(`https://x.com/intent/tweet?text=${text}`, '_blank');
                } else if (action === 'voice') {
                    const audio = document.getElementById('voicePlayer');
                    if (audio) {
                        audio.play().catch(() => alert('voice.mp4 파일 경로를 확인해주세요.'));
                    }
                }
            }
            }, 250);
    });
});

// ------------------------------------
// 개발자 도구 및 코드 보기 방지 스크립트
// ------------------------------------

// 키보드 단축키 차단 (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U 등)
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

// 마우스 우클릭 차단
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});
});