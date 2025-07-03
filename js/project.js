const checkboxes = document.querySelectorAll('input[name="filter"]');
const projects = document.querySelectorAll('.project-box');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    if (cb.checked) {
      // 체크된 박스가 있으면 나머지 체크박스는 해제
      checkboxes.forEach(other => {
        if (other !== cb) other.checked = false;
      });

      const val = cb.value;

      if (val === 'all') {
        projects.forEach(p => p.style.display = '');
      } else {
        projects.forEach(p => {
          if (p.dataset.filter.includes(val)) {
            p.style.display = '';
          } else {
            p.style.display = 'none';
          }
        });
      }
    } else {
      // 체크박스 해제하면 전체 보여주고 '전체' 체크 유지
      projects.forEach(p => p.style.display = '');
      checkboxes.forEach(c => {
        if (c.value === 'all') c.checked = true;
      });
    }
  });
});
