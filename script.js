
let area = document.querySelector("#area");
let deleteCity = document.querySelector("#deleteCity");

let acces = document.querySelector("#acces");
let cityName = document.querySelector(".your_city")



// deleteCity.hidden = true;


function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

// Пример использования:
setCookie('user', 'John', {secure: true, 'max-age': 3600});

acces.onclick = () => {
    let areaString = area.value.toString();

    setCookie('city', areaString, {secure: true, 'max-age': 3600});
    console.log(document.cookie);
    // area.hidden = true
};
deleteCity.onclick = () => {
    deleteCookie('city');
};
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}



function cookieCity() {
    if getCookie('city'){
        area.hidden = true;
        cityName.innerHTML = "Ваш город - "+ getCookie('city');
    }
    else{
        cityName.innerHTML = "";
        area.hidden = false;
    }
}

cookieCity();
