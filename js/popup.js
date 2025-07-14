const overlay = document.getElementById('overlay');

// 팝업을 제어하는 함수
function togglePopup(popupElement, action) {
  if (action === 'open') {
    popupElement.classList.add('active');
    overlay.classList.add('active');
  } else if (action === 'close') {
    popupElement.classList.remove('active');
    // 중요: 다른 팝업이 열려있는지 확인 후 오버레이를 닫아야 합니다.
    // 현재 열려있는 모든 팝업들을 찾아서 active 클래스가 있는지 확인하고,
    // 하나도 없으면 overlay를 닫도록 로직을 추가해야 더 견고해집니다.
    // 여기서는 간단하게 모든 팝업이 닫힐 때 overlay를 닫도록 합니다.
    const allPopups = document.querySelectorAll('.popup-profile, .popup-project01, .popup-project02, .popup-project03, .popup-project04');
    const anyPopupActive = Array.from(allPopups).some(p => p.classList.contains('active'));
    
    if (!anyPopupActive) {
      overlay.classList.remove('active');
    }
  }
}

// 프로필 팝업
const popupProfile = document.querySelector('.popup-profile');
const openProfileBtn = document.querySelector('.profile-popup');
const closeProfileBtn = document.querySelector('.popup-close-btn');

openProfileBtn.addEventListener('click', () => {
  togglePopup(popupProfile, 'open');
});

closeProfileBtn.addEventListener('click', () => {
  togglePopup(popupProfile, 'close');
});

// 프로젝트 팝업들을 배열로 관리
const projectPopups = [
  { popup: document.querySelector('.popup-project01'), openBtn: document.querySelector('.Project-popup-btn01'), closeBtn: document.querySelector('.close-btn-Project01') },
  { popup: document.querySelector('.popup-project02'), openBtn: document.querySelector('.Project-popup-btn02'), closeBtn: document.querySelector('.close-btn-Project02') },
  { popup: document.querySelector('.popup-project03'), openBtn: document.querySelector('.Project-popup-btn03'), closeBtn: document.querySelector('.close-btn-Project03') },
  { popup: document.querySelector('.popup-project04'), openBtn: document.querySelector('.Project-popup-btn04'), closeBtn: document.querySelector('.close-btn-Project04') },
  { popup: document.querySelector('.popup-project04'), openBtn: document.querySelector('.Project-popup-btn05'), closeBtn: document.querySelector('.close-btn-Project05') }
];

projectPopups.forEach(project => {
  project.openBtn.addEventListener('click', () => {
    togglePopup(project.popup, 'open');
  });
  project.closeBtn.addEventListener('click', () => {
    togglePopup(project.popup, 'close');
  });
});
