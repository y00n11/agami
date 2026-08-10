document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            setTimeout(() => {
                // @ 기호를 %40으로 직접 지정하여 인코딩 누락 방지
                const shareText = "인어왕자 보신 분? 여기로 연락달라네요 \n >> %40heisg0ne\n >>26.09.09 개봉 #아가미 #구병모";
                const encodedText = encodeURIComponent(shareText).replace(/%2540/g, '%40');
                
                window.open(`https://x.com/intent/tweet?text=${encodedText}`, '_blank');
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