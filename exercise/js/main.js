/**
 * Javascript/jQuery Exercises: Selecting Things In The DOM!
* Answer the following questions. This practice set gets progressively harder.
* Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and 
* move on to the next question.
 */


//SECTION 1: 

/*
 * Question 1:
 * When, button 1 is clicked, select all paragraphs on the page with jQuery, and changed the font color to blue.
 * We've started you off, ONLY replace everything instance of "replaceMe" with correct code.
 */


     function changeParagraphsColor() {
	   $("p").css("color", "blue");//change all paragraphs in the pages to blue color
     }

  // when user click on button 1 go to changeParagraphsColor function to change the font color
     $("#button1").on('click', changeParagraphsColor);

/**
 * Question 2:
 * When button 1 is clicked, select all <h2> elements on this page, and change the text to say your name.
 * Uncomment the code below and solve the problem
 
*/

     function changeHeaderText(){
		 // set 'say your name' in all h2 content 
		$("h2").text("say your name");
	  }
	 // when user click on button 1 go to changeHeaderText function to change the text content of header2
	 $("#button1").on('click', changeHeaderText);

/**
 * Question 3:
 * When button 1 is clicked, select the ordered list item that has the class "falseFact".
 * Using jQuery change the content to read "True Fact".
 * Uncomment the code below and solve the problem
 */


	function setItemsContent(){
		// select the list item that has falseFact class then change or set 'true fact' in the content of items
		$(".falseFact").html("True Fact");
	 }
  // when user click on button 1 go to setItemsContent  
	$("#button1").on('click', setItemsContent);




//Section 2:



/**
 * Question 4:
 * When button 2 is clicked, change the background color of the whole page to "pink"
 */
       function changeBackground(){
		   
           $('body').css('background-color','pink');//select body to change the whole page
	   }
	   
       $("#button2").on('click',changeBackground);// when user click on button 2 go to  changeBackground
    
/**
 * Question 5:
 * When button 2 is clicked, change the color of all h2's to "green"
 */
        function ChangeHeader2Color(){
        	$('h2').css('color','green');//select all h2 elemants and change the content font to green color
		 }
        $("#button2").on('click',ChangeHeader2Color);// when user click on button 2 go to  ChangeHeader2Color



/**
 * Question 6:
 * When button 2 is clicked, change the html content of all "blockquotes" to be "<span>no quote</span>"
 */
        function changeBlockquoteContent(){
			  $("blockquote").html("<span> no quote </span>");// select any blockquote elemants and replace the content with <span>no quote</span>
		}
         
              $("#button2").on("click",changeBlockquoteContent);// when user click on button 2 go to  changeBlockquoteContent   

//SECTION 3: This section is more difficult. Try your hand at the next 3 questions.

/**
 * Question 7:
 * When button 3 is clicked, change the text in the header's h1 tag to read "jQuery Ninja"
	 */

         function changeHeader1Text(){
             //select h1 and change the content 
			$("h1").text("jQuery Ninja");//I used element name to change text cause there is one h1 elemant in my html file
          }
         $("#button3").on("click",changeHeader1Text);//when user click on butoon 3 change header one text
/**
 * Question 8:
 * Have the following code execute when button 3 is clicked.
 * $(".city").attr("src", "http://lorempixel.com/g/500/400/food");
 */
		
         function changeImg(){
			
			$(".city").attr("src", "http://lorempixel.com/g/500/400/food");//select class img then change src
		}
		
		$("#button3").on("click",changeImg);//button 3 click


/**
 * Question 9:
 * When button 3 is clicked, select all paragraphs on the page and change the color to blue and font to Georgia.
 */
         function changeAllParagraphsColor(){
			 //select all parg and change the background color and font family
              $("p").css({"background-color" :"blue","font-family":"Georgia"});
		   }
		 //click on button 3 
         $("#button3").on("click",changeAllParagraphsColor);
/**
 * Question 10:
 * Try to do Question 9 but with only one jQuery call. $("selector").css({attribute: "value", attribute: "value"})
 */
	 // when user click on button3 the background colr and font size will be change
	 
	    $("#button3").on('click', function(){
		   $(".actions").css({"background-color" :"white","font-size":"12px"});
        });




