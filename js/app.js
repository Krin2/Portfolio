'use stric'

$(document).ready( () => {
  // vista como circulo grande el efecto del color esta dado por el blend del css
  $('body').on({'mousemove': function(e){
    // toma las coordenadas del cursor
    let clientX = e.originalEvent.clientX;
    let clientY = e.originalEvent.clientY;
    console.log(e)
    
    // Asigna al div 'cursor' la posicion del mouse. El -40 es para centrar el cursor en el centro del circulo
    $('#cursor').css({
      'left': (clientX - 20) +'px',
      'top': (clientY - 20) +'px'
    })
  }})

  // $('.a').on({
  //   'mouseover': function () {
  //     $('#cursor').addClass('big')
  //   },
  //   'mouseout': function() {
  //     $('#cursor').removeClass('big')
  //   }
  // })

})