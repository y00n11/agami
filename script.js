document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            setTimeout(() => {
                // 트윗 본문 문구
                const tweetText = encodeURIComponent(
                    "인어왕자 보신 분? 여기로 연락달라네요\n" +
                    ">> @heisg0ne \n\n" +
                    ">>26.09.09 개봉 #아가미 #구병모"
                );
                
                // 단축 링크 (캐시 버스터 포함)
                const shareUrl = encodeURIComponent("https://bit.ly/4whSti2?v=1");

                // 트위터 공유창 호출
                window.open(`https://x.com/intent/tweet?text=${tweetText}&url=${shareUrl}`, '_blank');
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