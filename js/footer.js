document.querySelectorAll('.hover-target').forEach(el => {
    const copyText = el.getAttribute('data-copy');
    if (!copyText) return;

    el.addEventListener('click', () => {
      navigator.clipboard.writeText(copyText).then(() => {
        el.setAttribute('data-tooltip', '복사 완료!');
        setTimeout(() => {
          el.setAttribute('data-tooltip', '클릭 시 복사');
        }, 1500);
      }).catch(err => {
        alert('복사 실패 😢');
        console.error(err);
      });
    });
  });