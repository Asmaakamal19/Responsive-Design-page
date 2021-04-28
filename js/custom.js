$(function(){
    $('.info-list li').click(function (){
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
// make icon bar clickable 
// make icon bar clickable 
    $(".parent").on("click", function () {
        
        $(".navbar ul").slideToggle();
    });    
});