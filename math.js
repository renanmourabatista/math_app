
var math = {

		soma : function (a, b){
			return a + b
		},

		subtracao : function(a, b){
			return a - b
		},

		multiplicacao : function (a, b){
			return a * b
		},

		divisao: function (a, b){
			return a / b
		},

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
