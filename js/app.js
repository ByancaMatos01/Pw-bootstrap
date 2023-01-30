$('.poltronas div').click(function (e) { 
    sit = $(this).attr('class');
    if(sit != 'ocupado'){
       
        resp = confirm('Deseja reservar o assento?');
        if(resp==true){
            nome = prompt("Digite o nome:");
            if(nome != null && nome.length >=3){
                p = $(this).children();
                $(p[1]).html(nome);
                $(this).removeClass('vazio');
                $(this).addClass('ocupado');
            }
        }
    }else{
        
        resp = confirm('Deseja cancelar a reserva?');
        if(resp == true){
            $(this).removeClass('ocupado');
            $(this).addClass('vazio');
            p = $(this).children();
            $(p[1]).html("");
        }
        
    }
        
});
$('.poltronasvips div').click(function (e) { 
    sit = $(this).attr('class');
    if(sit != 'ocupado1'){
        
        resp = confirm('Deseja reservar o assento?');
        if(resp==true){
            nome = prompt("Digite o nome:");
            if(nome != null && nome.length >=3){
                p = $(this).children();
                $(p[1]).html(nome);
                $(this).removeClass('vazio1');
                $(this).addClass('ocupado1');
            }
        }
    }else{
       
        resp = confirm('Deseja cancelar a reserva?');
        if(resp == true){
            $(this).removeClass('ocupado1');
            $(this).addClass('vazio1');
            p = $(this).children();
            $(p[1]).html("");
        }
        
    }
        
});

$('.poltronasExecultivas div').click(function (e) { 
    sit = $(this).attr('class');
    if(sit != 'ocupado2'){
        
        resp = confirm('Deseja reservar o assento?');
        if(resp==true){
            nome = prompt("Digite o nome:");
            if(nome != null && nome.length >=3){
                p = $(this).children();
                $(p[1]).html(nome);
                $(this).removeClass('vazio2');
                $(this).addClass('ocupado2');
            }
        }
    }else{
       
        resp = confirm('Deseja cancelar a reserva?');
        if(resp == true){
            $(this).removeClass('ocupado2');
            $(this).addClass('vazio2');
            p = $(this).children();
            $(p[1]).html("");
        }
        
    }
        
});

