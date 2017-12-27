module.exports = {
  // Flash the success or error message
  flash(resp) {
    let $messageContainer = document.getElementsByClassName('messageContainer')[0]
    $messageContainer.classList.add("fadeOut");
    document.getElementsByClassName('messageContainer__status')[0].innerHTML = resp.status;
    document.getElementsByClassName('messageContainer__text')[0].innerHTML = resp.text;
    setTimeout(function(){
      $messageContainer.classList.remove('fadeOut');
    }, 2000);
  }
}