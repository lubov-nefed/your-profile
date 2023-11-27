function validateForm (e) {
  e.preventDefault();
  const formInputs = document.querySelectorAll('.create-account-form__input');
  const checkbox = document.querySelector('.create-account-form__input--checkbox');
  const formValues = Array.from(formInputs).map(el => el.value);

  const formData = {
    nickname: formValues[0],
    email: formValues[1],
    password: formValues[2],
    confirm: checkbox.checked
  }

  const formDataKeys = Object.keys(formData);
  formDataKeys.forEach(key => {
    const errorText = document.querySelector(`.create-account-form__err-text[data-for="${key}"]`);
    if (!formData[key]) {
      errorText.style.display ="block";
    } else if (errorText.style.display === "block") {
      errorText.style.display = "none";
    }
  });
  
  const areInputsCompleted = formValues.reduce((accum, value) => {
    if (value) accum++;
    return accum;
   }, 0) === 3;

  if (checkbox.checked && areInputsCompleted) {
    console.log('submit()');
  }
}

export { validateForm };