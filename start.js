function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  document.forms
    sessionStorage.setItem("name", name);
  
    location.href = "quiz.html";
  }