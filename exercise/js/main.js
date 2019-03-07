
/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function question1() {
	$("p").css("color", "blue");
}

$("#button1").on('click', question1);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

	 function question2(){
	$("h2").text("Nora");
	}

	 $("#button1").on('click', question2);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

	 function question3(){
	 	$("ol l.falseFact").html("not"+ $("ol l.falseFact"));
	 }

	 $("#button1").on('click', question3);


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */


function question4(){
	$("body").css('background-color','pink')
//	$("body").html("not"+ $("ol l.falseFact"));
}

$("#button2").on('click', question4);



/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
function question5(){
	$("h2").css('color','green')
}
$("#button2").on('click', question5);



/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
function question6(){
	$("blockquote").html("<span>no quote</span>")
}
$("#button2").on('click', question6);



//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */
function question7(){
	$("h1").text("jQuery Ninja");
}
$("#button3").on('click', question7);



/**
 * Question 8:
 * Have the following code execute when button 3 is clicked.
 * 
 */

function question8(){
	$(".city").attr("src", "http://lorempixel.com/g/500/400/food");
}
$("#button3").on('click', question8);


/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

function question9(){
	$("p").css("color", "blue");
	$("p").css("font-style", "Georgia");

}
$("#button3").on('click', question9);

/**
 * Question 10:
 * Try to do Question 9 but with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"})
 */


function question10(){
	$("p").css({color: "blue", fontStyle: "Georgia"})
}
$("#button3").on('click', question10);


