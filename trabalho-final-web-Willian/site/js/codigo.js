function acessar(){
 $('#aluno').isValid();
    
    }

function enviar(){
    $('#vestibular').isValid();
}
function enviaform(){
    $('#formulario').isValid();
}

function confirmar(){
    var confirmacao = confirm('Deseja realmente sair?');
    if (confirmacao){
        window.location.href="../index.html";
    }
}

$(document).ready(function(){
     var offset = 250;
     var duration = 500;

    $(window).scroll(function(){
       if($(this).scrollTop() > offset){
           $('.to-top').fadeIn(duration);
       }else{
           $('.to-top').fadeOut(duration);
       }
    });
    
    $('.to-top').on('click', function(){
        
        
        console.warn('CLICOU NO BOTAO');
        $('body').animate({
            scrollTop: 0            
        }, duration);
    });
    
    $('#ra').mask('0000000#');
    $('#senha').mask('99999999');
    $('#cep').mask('99.999-999');
    $('#tel').mask('99-9999-9999');
    $('#cel').mask('99-99999-9999');
   $('#aluno').validate({
       rules: {
           ra: {
               required: true,
               minlength: 8               
           },
           senha: {
               required: true,
               minlength: 6            
           }
       },
       messages: {
           ra:{
               required: "Campo obrigatório, somente números!",
               minlength: "Mínimo de 8 caracteres."
               
           },
           senha: {
               required: "Por favor digite a senha",
               minlength: "Mínimo de 6 caracteres"
           }
       }
       
   });
    $('#formulario').validate({
        rules: {
            email1: {
                required: true
            }
        },
        mensagem1: {
            required: true,
            minlength: 5
        },
        messages:{
            email1: {
                required: "Digite seu e-mail corretamente"
            },
            mensagem1: {
                required: "Digite uma mensagem",
                minlength: "Digite no mínimo 5 caracteres"
            }
        }
    });
    $('#vestibular').validate({
        rules: {
            nome1: {
                required: true,
                minlength: 3
            },
            sobrenome: {
                required: true,
                minlength: 3
            },
            tel: {
                required: true
             }, 
            cel: {
              required: true  
            },
            cidade: {
                required: true,
                minlength: 2
            },
            estado: {
                required: true
            },
            cep: {
                required: true
            },
            Rua: {
                required: true
            },
            numero: {
                required: true
            }   
        },
        messages: {
            nome1: {
                required: "Coloque seu primeiro nome !",
                minlength: "Digite mais de três letras"
            },
            sobrenome: {
                required: "Digite seu sobrenome !",
                minlength: "Digite mais de três letras !"
            },
            tel: {
              required: "Digite um telefone !"
            },
            cel: {
                required: "Digite um celular"
            },
            cidade: {
                required: "Digite sua cidade !",
                minlength: "Sua cidade precisa ter mais de 2 letras"
            },
            estado: {
                required: "Digite seu estado !"
            },
            cep: {
                required: "Digite o cep !"
            },
            rua: {
                required: "Digite o nome da rua !"
            },
            numero: {
                required: "Digite o numero da residência !"
            }
        }
        
    });
   
    
});

