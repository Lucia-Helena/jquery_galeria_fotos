$(document).ready(function () {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
      e.preventDefault(); 
      const  newImageAddress = $('#endereco-img-nova').val();
      const newItem = $('<li></li>');
      $(`<img src= "${newImageAddress}"/>`).appendTo(newItem);
      $(`
      
            <div class="overlay-img-link">
            <a href="${newImageAddress}" title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real
        </a>
            </div>`
      ).appendTo(newItem);
      $(newItem).appendTo('ul');                                                                                                                                                  
    
    })

})