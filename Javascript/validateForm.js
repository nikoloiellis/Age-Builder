/*The function validate form takes in the year value from the form 
parses it into an intiger then creates several if statements 
if you are 18 or older then you can enter if not you will see an alert dialogue telling you 
you are too young to enter*/
function validateForm() {
  var year = document.forms['myForm']['year'].value;
  var parseYear = parseInt(year);
  if (parseYear > 2001 && parseYear != null) {
    return alert('You are too young to enter!');
  } else if (parseYear <= 2001 && parseYear != null) {
    window.location.href = '/index.html';
    return false;
  } else if (year == '') {
    return alert('please enter your age!');
  }
}
