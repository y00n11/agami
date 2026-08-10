document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            setTimeout(() => {
                // 본문 텍스트 (줄바꿈 포함)
                const tweetText = encodeURIComponent("인어왕자 보신 분? 여기로 연락달라네요 \n >>26.09.09 개봉 #아가미 #구병모");
                // 아이디는 via 파라미터로 따로 전달 (@ 제외하고 아이디만 입력)
                const viaAccount = "heisg0ne";

                // PC/모바일 모두 완벽 호환되는 X Intent URL
                const tweetUrl = `https://x.com/intent/tweet?text=${tweetText}&via=${viaAccount}`;
                
                window.open(tweetUrl, '_blank');
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