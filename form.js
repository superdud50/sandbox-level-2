function myProcessForm(event) {
    event.preventDefault();
    const form = event.target;
    const passwordInput = form[0];
    const firstnameInput = form[1];
    const lastnameInput = form[2]
    const firstname = firstnameInput.value

    output(`Your password is ${firstname}.<br>`);


}