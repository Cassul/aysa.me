(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.11';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
console.log('hey');

window.onload = function () {
  let facebook = document.getElementById('facebook');
  facebook.setAttribute('data-href', document.URL);
  let route = document.URL.slice(7);
  route = encodeURIComponent(route);
  let address = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F' + route + '&amp;src=sdkpreparse';
  facebook.setAttribute('href', address);
};
