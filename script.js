document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', async function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            const shareData = {
                title: '중요한 사람을 찾습니다 - 《아가미》',
                text: "인어왕자 보신 분? 여기로 연락달라네요\n>> @heisg0ne \n\n>>26.09.09 개봉 #아가미 #구병모",
                url: 'https://bit.ly/4whSti2?v=1'
            };

            setTimeout(async () => {
                // 1. 모바일 브라우저 표준 공유 기능 지원 여부 확인 (카톡, 문자 등 열림)
                if (navigator.share) {
                    try {
                        await navigator.share(shareData);
                    } catch (err) {
                        // 사용자가 공유 창을 그냥 닫았을 때 예외 처리
                        console.log('공유 취소:', err);
                    }
                } else {
                    // 2. Web Share API를 지원하지 않는 PC/구형 브라우저인 경우 트위터로 우회
                    const tweetText = encodeURIComponent(shareData.text);
                    const shareUrl = encodeURIComponent(shareData.url);
                    window.open(`https://x.com/intent/tweet?text=${tweetText}&url=${shareUrl}`, '_blank');
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