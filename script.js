document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            setTimeout(() => {
                // 1. 본문 텍스트 (링크 제외, @heisg0ne 및 개봉일/해시태그 포함)
                const tweetText = encodeURIComponent("인어왕자 보신 분? 여기로 연락달라네요\n>> @heisg0ne 님에게 제보\n\n>>26.09.09 개봉 #아가미 #구병모");
                
                // 2. 첨부할 홍보 웹사이트 링크
                const shareUrl = encodeURIComponent("https://bit.ly/4whSti2");

                // 3. text와 url을 파라미터로 명확히 분리하여 호출
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