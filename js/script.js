$(function () {
  $("form[name='signup']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true,
      },
      password: "required",
    },
    messages: {
      firstname: "First Name cannot be empty",
      lastname: "Last Name cannot be empty",
      email: "Looks like this is not an email",
      password: "Password cannot be empty",
    },
    submitHandler: function (form) {
      form.submit();
    },
  });
});
