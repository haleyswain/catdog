$(document).ready(function(){
  $("button#hello").click(function(){
    $("ul#cat").append("<li>MEOW</li>");
  });

  $("button#goodbye").click(function(){
    $("ul#dog").append("<li>WOOF</li>");
  });

  $("button#stop").click(function(){
    $("ul#cow").append("<li>MOOOOOOO</li>");
  });

  $('h2#kitty').before('<li>Do you like to talk to kittens?</li>');
    $("h2#kitty").click(function(){
      $("h2#kitty").after('<img src="img/kitten.jpg" alt="kitten picture" id="kittenpic">');
    });

  $('h2#puppy').after('<li>Do you like to talk to puppies?</li>');
  $('h2#calf').before('<li>Do you like to talk to cute little cows?</li>');

});
