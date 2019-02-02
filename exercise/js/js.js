/*function play() {
    var choice="X";
    $('#position1').text(choice);
   
  }
  $( '#position1' ).on( "click", play );
 
 
  function play2() {
    $('#position2').text('x');
   
  }
  $( '#position2' ).on( "click", play2 );*/
var counters = { //object that hold the scores for X and O
    X: 0,
    O: 0
}
let y = false; // to prevent the palyer to continue playing the game once they win
let choice = 'X';//  start the game with choice X.
function play(event) { // this function allow the palyer to click on the board game either X or O.
    //(event.target).text(choice);
    $(event.target).off("click");// prevent the palyer to click on the same grid multiple times.
    // setTimeout(function () {
    if (y === false) {// to prevent the palyer to continue playing the game once they win
        if (choice === 'X') {
            console.log("choice is x");
            
            $(event.target).text(choice);// insert the choice into the table.
            $(event.target).css('background-image', 'url(images/im4.png)') //insert image token instead of X or O.
            checkWinner(); // call the checkwinner function after each click on the board.
            choice = 'O';
        } else if(choice ===  "O") { // if the choice is not x then start with O.
            console.log("choice is o");
            $(event.target).text(choice);// insert the choice into the table
            $(event.target).css('background-image', 'url(images/im5.png)')//insert image token instead of X or O.
            checkWinner();// call the checkwinner function after each click on the board.
            choice = 'X'; // if the choice is o then start the next game O.
        }
    }
    // , 200)
}
$('.position').on("click", play);// call the play function.
function checkWinner() {// this is the check winner function.
    //console.log("testing win");
    if ($('#position1').text() === $('#position2').text() && $('#position2').text() === $('#position3').text() && $('#position1').text() !== '') {// check the horizantal line.
        console.log("win");
        counters[choice]++// count the number of scores
        swal("The Winner Is:" + " " + $('#position1').text() + "    " + '😆');// display the massage menu.
        y = true;// put the y true to stop the game once the player wins.
    } else if ($('#position1').text() === $('#position4').text() && $('#position4').text() === $('#position7').text() && $('#position1').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position1').text() + "    " + '😆');
    } else if ($('#position1').text() === $('#position5').text() && $('#position5').text() === $('#position9').text() && $('#position1').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position1').text() + "    " + '😆');
    } else if ($('#position2').text() === $('#position5').text() && $('#position5').text() === $('#position8').text() && $('#position2').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position2').text() + "    " + '😆');
    } else if ($('#position3').text() === $('#position6').text() && $('#position6').text() === $('#position9').text() && $('#position3').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position3').text() + "    " + '😆');
    } else if ($('#position3').text() === $('#position5').text() && $('#position5').text() === $('#position7').text() && $('#position3').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position3').text() + "    " + '😆');
    } else if ($('#position4').text() === $('#position5').text() && $('#position5').text() === $('#position6').text() && $('#position4').text() !== '') {//
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position4').text() + "    " + '😆');
    } else if ($('#position7').text() === $('#position8').text() && $('#position8').text() === $('#position9').text() && $('#position7').text() !== '') {
        console.log("win");
        counters[choice]++
        y = true
        swal("The Winner Is:" + " " + $('#position7').text() + "    " + '😆');
    }
    else {// the case of tie.
        if ($('#position1').text() !== '' && $('#position2').text() !== '' && $('#position3').text() !== '' && $('#position4').text() !== '' && $('#position5').text() !== '' && $('#position6').text() !== '' && $('#position7').text() !== '' && $('#position8').text() !== '' && $('#position9').text() !== '') {
            console.log("no winner");
            //counters[choice]++
            swal("No Winner:" + "   " + '😆');
        }
    }
    $('#message1').text(counters[choice] + " " + choice);// display the the score into the page.
    return;
    // console.log(counters) 
}
function restart() {// clear the board with saved score in previoud round.
    choice = "X";
    console.log('hi')
        $('.position').text('');// clear x from the board 
        $('.position').css('background-image','');// clear image from the board 
        $('.position').off("click");// prevent the palyer to click on the same grid multiple times.
        $('.position').on("click", play);// call the paly function to play the game 
        y=false;// to allow the user to click on the board
    // location.reload();
}
$('#restart').on("click", restart);// call the restart function