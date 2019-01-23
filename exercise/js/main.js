/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


//SECTION 1: REPLACE THE SECTIONS THAT SAY REPLACE ME WITH THE CORRECT CODE.

/**
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */

function changeToBlue() {
	$("p").css("color", "blue");
}

$("#button1").on('click', changeToBlue);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 */

	function changeHeaderText(){
	$("h2").text("Hala");
	}

	$("#button1").on('click', changeHeaderText);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */

	function changeContent(){
	$(".falseFact").html("True Fact");
   }

	$("#button1").on('click', changeContent);


//SECTION 2: Now you are on your own. Write the necessary code to accomplish the following.

/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
function changeBackground() {
	$("body").css("background-color", "pink");
}

$("#button2").on('click', changeBackground);



/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
function changeColor() {
	$("h2").css("color", "green");
}

$("#button2").on('click', changeColor);




/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
function changeBlockquote() {
	$("blockquote").html("<span>no quote</span>");
}

$("#button2").on('click', changeBlockquote);



//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
 */

function changeHeader(){
	$('h1').text('jQuery Ninja')
}
$("#button3").on('click', changeHeader);

/**
 * Question 8:
 * Have the following code execute when button 3 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */
function changeImage() {
 $("img").attr("src", "http://lorempixel.com/g/500/400/food/");

}
$("#button3").on('click', changeImage);

/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */

 function changeParagraphs() {
 	$("p").css("color", "blue");
	$("p").css("font-family", "Georgia");
   
    }
   $("#button3").on('click', changeParagraphs);
   

/**
 * Question 10:
 * Try to do Question 9 but with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"})
 */

function changeP() {
	$("p").css({
		"color": "blue",
	    "font-family": "Georgia"
});
}
   $("#button3").on('click', changeP);
   

