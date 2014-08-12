$(document).ready(function() {

  function displayContacts(returnedContacts) {
    for(var i = 0; i < returnedContacts.length; i++){
      contact = returnedContacts[i];
      console.log(contact);
      $("#contact-list").html(contact.firstname + contact.lastname);
    };
  };


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
