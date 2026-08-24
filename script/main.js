$(document).ready(function() {
    // 마우스를 header 전체 영역에 올려놓을 때 메가드롭다운 열림
    $('.header').on('mouseenter', function() {
        $('.mega-dropdown').stop().slideDown(200);
    });

    // 마우스가 header 전체 영역을 벗어날 때 닫힘
    $('.header').on('mouseleave', function() {
        $('.mega-dropdown').stop().slideUp(150);
    });
});