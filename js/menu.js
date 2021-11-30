if (document.documentElement.clientWidth < 600) {
$(function() {
    $('#menuSymbol').click(function(){
        event.stopPropagation();
      $('.menuItem').slideToggle();
    });
});
    $(document).click( function(){
    $('.menuItem').hide();
});
}