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
  let route = document.URL.slice(6);
  let address = 'app_id=&amp;container_width=44&amp;href=http%3A%2F%2F' + route + '%2F&amp;layout=button_count&amp;locale=ru_RU&amp;mobile_iframe=true&amp;sdk=joey&amp;size=small';
  facebook.setAttribute('fb-iframe-plugin-query', address);
};
