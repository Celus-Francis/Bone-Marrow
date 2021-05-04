$(document).ready(function(){
//Replace doctors card
    $(".docCard").clone().appendTo(".repeat");   
	
//Warning Signs Cards
$(".signs-card").clone().appendTo(".mySign"); 
  
var imageArray = ["images/Group a.png","images/Group b.png","images/Group c.png","images/Group d.png",
"images/Group e.png","images/Group f.png","images/Group g.png","images/Group h.png",
"images/Group i.png","images/Group j.png"]; 
	   
var ar=$(".changeMe");
for(var i=0;i<ar.length;i++){
	$(ar[i]).attr("src",imageArray[i]);
} 

var signsArray = ["Failure to thrive – not gaining weight and height as per the age norms",
"Infections warranting multiple hospitalizations",
"Requirement of intravenous antibiotics to clear infections","2 or more episodes of pneumonia",
"Family history of death of children at young age due to immune deficiency ","Repeated episodes of diarrhea",
"2 or more episodes of sinus infections within a year","2 or more episodes of ear discharge",
"Repeated skin infections","Repeated abscess formation (liver abscess, brain abscess)"]
		
var a=$(".changeSign");
for(var i=0;i<a.length;i++){
	$(a[i]).replaceWith(signsArray[i]);
} 
     
//Replace Questions
	var questionArray = ["What are the conditions that requireBone Marrow Transplant?", 
	"Which are the hematological diseases that may benefit from bone marrow transplants?",
	 "What are the conditions that requireBone Marrow Transplant?", 
	 "Which are the Cancers that may benefit from bone marrow transplants?",
	 "Do bone marrow failure syndromes require BMT?",
	 " What are Primary Immune Deficiency diseases ?",
	 "Which are the immune deficiencies that warrant BMT?",
	 " What makes transplants at Aster CMI unique?"
	];
	for(var i=0;i<3;i++){
	$(".questionCard").clone().appendTo(".sameQuestion");
	}
	   
	var arr=$(".replace");
	for(var i=0;i<questionArray.length;i++){
		$(arr[i]).replaceWith(questionArray[i]);
	} 

//Replace Testimonial cards
$(".testimonial-card").clone().appendTo(".sameCard");   

});
 


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }else{
			var recaptcha = document.getElementById('recaptcha');
			if (recaptcha.checked == true){
				alert("Form Submitted Successfully!"); 
			  } else {
			//reCaptcha not verified
			alert("Please verify you are human!"); 
			event.preventDefault();
			event.stopPropagation();
			  }
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();
 
//Back to Top button

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});