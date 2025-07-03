const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

function openContent(content) {
  content.classList.add('active');
  const style = window.getComputedStyle(content);

  // scrollHeight는 padding 제외한 높이라, padding 더해줘야 함
  content.style.maxHeight = content.scrollHeight + 40 + 'px';
}

function closeContent(content) {
  content.classList.remove('active');
  content.style.maxHeight = null;
}

headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.contains('active');

    contents.forEach(el => closeContent(el));

    if (!isOpen) openContent(content);
  });
});

// 첫번째 콘텐츠 초기 열기
if (contents.length > 0) {
  openContent(contents[0]);
}
