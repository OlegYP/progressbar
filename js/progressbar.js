let currentbar = 50;

var bDict = {
  buttonP1: 1,
  buttonP3: 3,
  buttonP7: 7,
  buttonM1: -1,
  buttonM3: -3,
  buttonM7: -7,
 };

function checkButton(number) {

    // if (number == 100)
    // {
    //     console.log('currentbar = 100')
    // }
    // if (number > 97)
    // {
    //     console.log('currentbar > 97')
    // }
    // if (number > 93)
    // {
    //     console.log('currentbar > 93')
    // }
    // if (number == 0)
    // {
    //     console.log('currentbar = 0')
    // }
    // if (number < 3)
    // {
    //     console.log('currentbar < 3')
    // }
    // if (number < 7 )
    // {
    //     console.log('currentbar < 7')
    // }


    $("#buttonP1").prop("disabled",currentbar == 100);
    $("#buttonP3").prop("disabled",currentbar > 97);
    $("#buttonP7").prop("disabled",currentbar > 93);
    $("#buttonM1").prop("disabled",currentbar == 0 );
    $("#buttonM3").prop("disabled",currentbar < 3 );
    $("#buttonM7").prop("disabled",currentbar < 7 );
    }

function buttonClick(event){
        // event.preventDefault();
    var digit = bDict[event.target.id];
    currentbar = currentbar + digit;
    console.log(currentbar);
    if (currentbar > 100)
        currentbar = 100 ;
    if (currentbar < 0 )
        currentbar = 0;
     // $("#my-progress-bar").style.Prop('width: ', currentbar+'%');
     $("#my-progress-bar").width(currentbar + '%');
     $("#my-progress-bar").text(currentbar+' %');
     checkButton(currentbar);
    /* console.log(bDict[event.target.id])*/
};


function init() {
	$("button").click(buttonClick);
}

$(document).ready(init);