
var BudgetController = ( function () {
        var p = 80;
        var add = function(q) {
            return p + q;
        }

        return
        {
            publicAdd = function(d) {
                console.log(add(d));
            }
        }
    }


)();