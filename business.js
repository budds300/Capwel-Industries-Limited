$(document).ready(function(){
    $("#form1").submit(function(event){
     var firstName = $("input#fname").val();
     var lastName = $("input#lname").val();
     var email = $("input#email").val();
     var phoneNumber = $("input#number").val();
     var message = $("input#message").val();
     if (firstName === "" && email === "" && message === ""){
        alert("please insert your credentials")
     }
     else
     if ( firstName && lastName )
     alert(firstName + ", of " + email + ", we have receive your massage, you will be contacted shortly. Thanks for reaching out")
     else
     if (firstName === "") {
         alert("Please Insert your name")
     } else
     if (email === "") {
         alert("Enter your Email")
     } else
     if (message === "") {
         alert("Please insert your message!")
     }
  })
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll <300) {
        $('.fixed-top').css('background', 'transparent')
    } else {
        $('.fixed-top').css('background', 'rgba(57, 58, 60)')
    }
})
// Closes navbar on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});
  })