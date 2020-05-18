

var BudgetController =
    (
        function () {
        }


    )();

var UIController = (function () {

    // IIn case HTML button class need to be change then only 3 line neede to change not CTRL+ Replace

    var htmlClass =
    {
        input_type : '.add__type',
        input_descr:'.add__description',
        input_amount : '.add__value' ,
        input_btnclick : '.add__btn'
    }
    return {

        getInput: function () {
            return{

                
             crORdr : document.querySelector(htmlClass.input_type).value ,
            details : document.querySelector(htmlClass.input_descr).value ,
             amount : document.querySelector(htmlClass.input_amount).value 
        
            
            };
        },

        getDomStrings : function()
        {
            return htmlClass;
        }
    };

})();

var MainController = (function (bdgtCntrl, UICtrl) {

    var DomStrings = UICtrl.getDomStrings() ;
     
    var addRecords = function () {
        // 1>get the filled input data 

        var inputReceived = UICtrl.getInput();

        console.log(inputReceived);
        //2>add the item to budget controller 

        //3> add item to the UI 

        //4> Calculate the Budgt 

        //5> Display the Budget 

        console.log('add records to DB has been prassed ');
    }

    document.querySelector(DomStrings.input_btnclick).addEventListener('click', addRecords);

    document.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            console.log('Enter key has been prassed ');
        }
        else
            console.log('Other key has been prassed ');

    })
})(BudgetController, UIController);













