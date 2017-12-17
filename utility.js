module.exports = {
  flash(resp) {
    console.log(resp);
    document.getElementsByClassName('messageContainer__status')[0].innerHTML = resp.status;
    document.getElementsByClassName('messageContainer__text')[0].innerHTML = resp.text;
  }
}