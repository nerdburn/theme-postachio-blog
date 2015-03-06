$(document).ready(function(){
  
  $('.post-content a').each(function(){
    console.log('found one');
    $(this).attr('target', '_blank');
  });
  
});