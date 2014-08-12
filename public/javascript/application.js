;(function($, window, document){
  
  function displayContacts(returnedContacts) {
    for(var i = 0; i < returnedContacts.length; i++){
      contact = returnedContacts[i];
      console.log(contact);
      $("#contact-list").html(contact.firstname + contact.lastname);
    };
  };

  // Send a JSON object to Sinartra

  var sendForm = function(event){
        event.preventDefault();
        newContact = {
          firstname: $("#firstname").val(),
          lastname: $("#lastname").val(),
          email: $("#email").val()
        };  
        console.log(newContact, JSON.stringify(newContact))
      };




  $(document).ready(function() {

    $("#submit").on("click", sendForm);


    var contacts = $.ajax({
      type: "GET",
      url: "/contacts.json",
      success: function(data){
        console.log(JSON.parse(data));
        contacts = JSON.parse(data);
        displayContacts(contacts);
      }
    });

  });

})(jQuery, document, window);
