$(document).ready(function() {
  $('#croatian').hover(function(){
    $('#title').text('Ljepota Kreativnosti');
    $('#videoInstructionsLink').text('Video upute');
    $('#copyrightLink').text('          Prava pristupa & zahvale');
    $('#copyrightLink').attr('href','copyright/croatian.html')
  });
  $('#english').hover(function(){
    $('#title').text('Beauty of Creativity');
    $('#videoInstructionsLink').text('Video instructions');
    $('#copyrightLink').text('Copyright & special thanks');
    $('#copyrightLink').attr('href','copyright/english.html')
  });
  $('#german').hover(function(){
    $('#title').text('Die schönheit der kreativität');
    $('#videoInstructionsLink').text('Videoanweisungen');
    $('#copyrightLink').text('Urheberrecht & besonderen dank');
    $('#copyrightLink').attr('href','copyright/german.html')
  });
  $('#french').hover(function(){
    $('#title').text('La Beaute de la creativite');
    $('#videoInstructionsLink').text('Vidéo instructions')
    $('#copyrightLink').text('droits d\'auteur & remerciement spécial');
    $('#copyrightLink').attr('href','copyright/french.html')
  });
});
