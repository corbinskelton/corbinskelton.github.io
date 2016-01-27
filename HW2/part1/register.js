$("#register-form").validate({
    rules: {
        firstName: "required",
        lastName: "required",
        email: {
            required: true,
            email: true
        },
        phone: "required"
    },
    messages: {
        name: {
            required: "Enter your name"
        },
        email: {
            required: "Enter an email",
            email: "Must enter an email address (example1@email.com)"
        }
    }
});