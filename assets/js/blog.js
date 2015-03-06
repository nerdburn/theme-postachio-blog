$(document).ready(function(){
  
  var window_site_data = window.SITEDATA;
  var base_url = (window_site_data.debug ? 'http://postachio.local:5000/' : 'http://postach.io/');

  // make all links go to new windows
  $('.post-content a').each(function(){
    console.log('found one');
    $(this).attr('target', '_blank');
    console.log($(this));
  });
  
});