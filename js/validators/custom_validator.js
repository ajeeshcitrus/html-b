$("#delivery_details_form").validate({
    rules: {
      
      delivery_mobile   : {
          required  : true,
          digits    : true,
          minlength : "10",
          maxlength : "10"
      },
      delivery_email    : {
          required  : true,
          email     : true
      },
      delivery_address  : "required",
      delivery_city     : "required",
      delivery_state    : "required",
      delivery_pin  : {
          required  : true,
          digits    : true,
          minlength : "6",
      },
      delivery_landmark : "required",
      delivery_message  : "required",
      delivery_name     : "required"
    },
    errorPlacement: function(error, element) {
       $('#'+element.context.id).addClass("invalid");
    },
    success: function(label, element){
        element.className = 'form-control valid';
    },
    submitHandler: function(form) {
  }
});