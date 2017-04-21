var output = document.getElementById("output-target");

var sections = document.getElementsByClassName("article-section");
console.log("article-section", sections);


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

function whenClicked(section) {
	console.log(section);
	var element = section.target.innerHTML;
	output.innerHTML = "You clicked on the " + element + " section";
}

for (var i = 0; i < sections.length; i++) {
	sections[i].addEventListener("click", whenClicked);
}


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".
var title = document.getElementById("page-title");
title.addEventListener("mouseover", function(){
	output.innerHTML = "You moved your mouse over the header. Javascript is watching...";
});

// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".
title.addEventListener("mouseout", function(){
	output.innerHTML = "You left me!!";
});

// When you type characters into the input field, the output element should mirror the text in the input field.
var inputField = document.getElementById("keypress-input");
inputField.addEventListener("keyup", function(event){
	console.log(event);
	output.innerHTML = event.target.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.
var guineaElement = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", function(){
	guineaElement.classList.toggle("blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.
document.getElementById("make-large").addEventListener("click", function(){
	guineaElement.classList.toggle("hulkify");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.
document.getElementById("add-border").addEventListener("click", function(){
	guineaElement.classList.toggle("captured");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.
document.getElementById("add-rounding").addEventListener("click", function(){
	guineaElement.classList.toggle("roundCaptured");
});

// The first section's text should be bold.


// The last section's text should be bold and italicized.


// Make the buttons stop appearing next to each other as inline elements. Change them into block elements.
















