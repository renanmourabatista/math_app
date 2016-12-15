
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

    fatorial: function (x){
    	var fat = 1;
        while(x >= 1){
          fat = fat * x;
          x--;
        }
        return fat;
    }, 
    combinacao: function() {},
    arranjo: function (){},
    permutacao: function(num){
		var result = num;
		
		for (var i = num; i > 1;i--) {
			result = result * (i - 1);			
		}	
		
		return result;
	}
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
