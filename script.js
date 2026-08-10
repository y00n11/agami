document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {
        strip.addEventListener('click', function() {
            // 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            setTimeout(() => {
                // text 하나에 본문, 아이디, 단축URL, 해시태그를 줄바꿈(\n)으로 구분하여 일괄 전달
                const fullContent = 
                    "인어왕자 보신 분? 여기로 연락달라네요\n" +
                    ">> @heisg0ne \n\n" +
                    "https://bit.ly/4whSti2\n\n" +
                    ">>26.09.09 개봉 #아가미 #구병모";
                
                const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(fullContent)}`;
                
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