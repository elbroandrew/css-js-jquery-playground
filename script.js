$(document).ready(function(){
  $('.accordion-item__trigger').click(function(){
    $(this).parent('.accordion-item').toggleClass('accordion-item--active'); //только надо добавить в хтмл класс этот и в css.
  });
});