$("#contact-form").validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        }
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