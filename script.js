document.addEventListener('DOMContentLoaded', () => {
    const strips = document.querySelectorAll('.strip-item');
    strips.forEach(strip => {

        //3번까지 엥간하면 수정 ㄴㄴ... 수정할수록 카드이미지나 링크나 공유가 누락됨..
        strip.addEventListener('click', function() {
            // 1. 번호표 뜯어지는 애니메이션 실행
            this.classList.add('torn');

            // 2. 트윗 본문 및 링크 준비
            const tweetText = encodeURIComponent(
                "인어왕자 보신 분? 여기로 제보해주세요\n" +
                // "마지막 목격 장소도 참고 ㄱㄱ \n"
                ">> @heisg0ne \n\n" +
                ">>26.09.09 개봉 #아가미 #구병모"
            );
            const shareUrl = encodeURIComponent("https://bit.ly/4whSti2?v=1");

            // 3. 팝업 차단을 피하기 위해 setTimeout 없이 클릭 직후 즉시 이동
            window.open(`https://x.com/intent/tweet?text=${tweetText}&url=${shareUrl}`, '_blank');
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