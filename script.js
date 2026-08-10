document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            this.classList.add('torn');

            setTimeout(() => {
                const tweetText = encodeURIComponent(
                    "인어왕자 보신 분? 여기로 연락달라네요\n" +
                    ">> @heisg0ne \n\n" +
                    ">>26.09.09 개봉 #아가미 #구병모"
                );
                
                // 주소 끝에 ?v=1 을 붙여 트위터 크롤러 캐시를 강제로 무효화합니다.
                const shareUrl = encodeURIComponent("https://bit.ly/4whSti2?v=1");

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