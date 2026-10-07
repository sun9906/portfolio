// "메뉴 보기" 버튼을 누르면 Menu 섹션으로 부드럽게 이동
const menuBtn = document.getElementById('menuBtn');
const menuSection = document.getElementById('menu');

menuBtn.addEventListener('click', function () {
  menuSection.scrollIntoView({ behavior: 'smooth' });
});
