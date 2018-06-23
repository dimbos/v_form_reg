/* реализация на Jquery
$(document).ready(function (){
    $('.form').on('click', '.tab', function(){
        //удаляем классы active
        //$('.form .tab').removeClass('active');
        $('.form').find('.active').removeClass('active');

        //достаем индекс вкладки
        //console.log($(this).index());
        //добавляем класс active
        $(this).addClass('active');

        $('.tab-form').eq($(this).index()).addClass('active');
    })
});

*/