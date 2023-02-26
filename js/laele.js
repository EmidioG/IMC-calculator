$('body').css({
    display: ''
})
$('.peso').keyup(function () {
    peso = $('.peso').val()
    peslen = peso.length

    if (peso.length <= 6) {
        $('.peso').mask('00,0000')
    } else if (peso.length == 7) {
        $('.peso').mask('000,000')
    }
})

$('.altura').mask('0.00', { reverse: true });

$('.submit').click(function () {

    $('.submit').val()

    if (peslen >= 1) {
        if (peslen >= 2) {
            if (peslen >= 4) {
                if (peslen >= 5) {
                    if (peslen >= 6) {
                        if (peslen == 7) {
                            mano = $('.peso').mask('000.000', { reverse: true }).val()
                        } else {
                            mano = $('.peso').mask('00.000', { reverse: true }).val()
                        }
                    } else {
                        mano = $('.peso').mask('00.00', { reverse: true }).val()
                    }
                } else {
                    mano = $('.peso').mask('00.0', { reverse: true }).val()
                }
            } else {
                mano = $('.peso').mask('00', { reverse: true }).val()
            }
        } else {
            mano = $('.peso').mask('0', { reverse: true }).val()
        }
    }

    if (peslen == 7) {

    } else if (peslen == 6) {

    }
    plmds = $('.altura').val()

    cara = imcbro(mano, plmds)

    $('.form').append(`<div> <p> ${cara} </p> </div>`)

    if (peslen <= 6) {
        $('.peso').mask('00,0000')
    } else if (peslen == 7) {
        $('.peso').mask('000,000')
    }


})
function imcbro(peso, altura) {

    var laele = peso / altura ** 2
    laele = (laele).toFixed(2)

    if (peslen >= 1) {
        if (peslen >= 2) {
            if (peslen >= 4) {
                if (peslen >= 5) {
                    if (peslen >= 6) {
                        if (peslen == 7) {
                            peso = $('.peso').mask('000,000').val()
                        } else {
                            peso = $('.peso').mask('00,000').val()
                        }
                    } else {
                        peso = $('.peso').mask('00,00').val()
                    }
                } else {
                    peso = $('.peso').mask('00,0').val()
                }
            } else {
                peso = $('.peso').mask('00').val()
            }
        } else {
            peso = $('.peso').mask('0').val()
        }
    }

    if (laele < 18.5) {
        hum = (`seu peso está abaixo do normal severamente\nimc de: ${laele} para o peso ${peso} Kg`)
    } else if (laele >= 18.5 && laele < 25) {
        hum = (`peso normal meu chapa\nimc de: ${laele} para o peso ${peso} Kg`)
    } else if (laele >= 25 && laele < 30) {
        hum = (`sobrepeso vixxx\ncuidado aí, imc de: ${laele} para o peso ${peso} Kg`)
    } else if (laele >= 30) {
        hum = (`obesidade já boy \nmelhore!, imc de: ${laele} para o peso ${peso} Kg`)
    }
    return hum;
}


$('.clear').click(function () {
    $('div p').css({
        'display': 'none'
    })
    $('#formi').val("");
})
$('.restore').click(function () {
    $('div p').css({
        'display': ''
    })
})

$('.oldspice').click(function () {
    $('form').css({
        'display': 'none'
    })

    $('body').append('<h1 class="fim" style="display: contents!important; font-size: 1em;"> ei boy tu acabou com tudo nmrl... <br> melhore🌹</h1>')
})

$('form').css({
    'max-width': '15em'
});
