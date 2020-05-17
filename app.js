
var BudgetController = (

    function () {
        var p = 80;
        var add = function(q) {
            return p + q;
        }

        return
        {
            pub =  function(d) {
                console.log(add(d));
            }
        }
    }


)();