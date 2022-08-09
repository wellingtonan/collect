//var Porcentual_de_Coleta = [400000,183000,91515,61015] // 23h
//var Porcentual_de_Coleta = [360000,151450,75770,50490] // 22h
//var Porcentual_de_Coleta = [273000,113789,56910,37920] // 15h
//var Porcentual_de_Coleta = [255000,99900,50800, 34100] // 14h
//var Porcentual_de_Coleta = [225000,84600,42800, 28240] // 12h
//var Porcentual_de_Coleta = [200000,79000,39400, 26240] // 11h
//var Porcentual_de_Coleta = [135000,54000,27000,18000] // 8h
//var Porcentual_de_Coleta = [170000,68000,34000, 22660] // 10h
//var Porcentual_de_Coleta = [85000,34000,17000, 11330] // 5h
//var Porcentual_de_Coleta = [17500,7000,3490, 2330] // 2h
//var Porcentual_de_Coleta = [10000,4000,2000, 1330] // 1:30h
var Porcentual_de_Coleta = [4200,1700,870,580] // 1:00h
//var Porcentual_de_Coleta = [3000,1000,500, 430] // 5h



var Lanceiro = 0;
var Espadachim = 1;

var UNIT_INEX = 0;
var Final = 1;
var iniciar = 2;
var Capacidade_Armazem = 3;
var ENTRADA = 4;

var Unidades_Coletando = [
    [Lanceiro, "a.units-entry-all[data-unit='spear']",true,25,"input.unitsInput[name='spear']"],
    [Espadachim, "a.units-entry-all[data-unit='sword']",true,15,"input.unitsInput[name='sword']"],
];


função mecanismo_inteligencia(el){
    tentar{
        return parseInt(el[0].innerText.replace("(","").replace()",""))
    } pegar (e) {
        retornar 0;
    }
}

var tabela = $(document).find(".candidate-squad-widget.vis").get()[0];

function calculadora(cap_index){

    var unidades = []
    var apertar = []
    for (var u em Unidades_Coletando){
        unidades.push(0)
        aperte.push(0)
    }


    for(var i = 0; i< Unidades_Coletando.length; i++){
        if(Unidades_Coletando[i][iniciar]){
            unidades[i] = mecanismo_inteligencia($(tabela).find(Unidades_Coletando[i][Final]).get())
        }
    }
    varcentual_recursos = Porcentual_de_Coleta[cap_index]

    for(i = 0; i< unidades.comprimento; i++){
        if (unidades[i] != 0) {
            if(unidades[i] * Unidades_Coletando[i][Capacidade_Armazem] > elementos_recursos){
                aperte[i] = Math.floor(coleta_recursos/Unidades_Coletando[i][Capacidade_Armazem])
                parar;
            } senão {
                aperte[i] = unidades[i];
                deixar_recursos -= Math.floor(unidades[i] * Unidades_Coletando[i][Capacidade_Armazem]);
            }
        }
    }

    retorno aperte;

}

função preencher(aberto) {
    for(var i = 0; i<aperte.length; i++){
        var el = $(tabela).find(Unidades_Coletando[i][INPUT])
        el.trigger('foco');
        el.trigger('keydown');
        el.val(aperte[i])
        el.trigger('keyup');
        el.trigger('alterar');
    }
}
var botao = $(document).find(".btn.btn-default.free_send_button").get();

const sleep = (milissegundos) => {
  return new Promise(resolve => setTimeout(resolve, milissegundos))
}


function pular_aldeia(){
    if ($(document).find("#village_switch_right").get()["0"]){
        jQuery.event.trigger({ type: 'keydown', which: 68 });
    }senão{
        localização.recarregar();
    }
}


sleep(10).then(() => {
  fill(calculadora(3));
    $(botao[3]).click();
}).then(sleep(3000).then(() => {
  fill(calculadora(2));
    $(botao[2]).click();
}).then(sleep(6000).then(() => {
  fill(calculadora(1));
    $(botao[1]).click();
}).then(sleep(9000).then(() => {
  fill(calculadora(0));
    $(botao[0]).click();
}).então())))


setTimeout(pular_aldeia, 12000);
