
var math = {
	soma : function (){},
    subtracao : function(){},
    multiplicacao : function (){},
    divisao: function (){}, 
    fatorial: function (){}, 
    combinacao: function() {}, 
    arranjo: function (){}, 
    permutacao: function(){}, 
    numeroPrimo: function(numero){
        var metade =  parseInt(numero / 2);
        
        while(metade > 1) {
            if(numero % metade == 0){
                return false;
            }

            metade--;
        }

        return true;

    }, 
    converteBinario: function(){}
}