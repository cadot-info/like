export class favorites {
  constructor(ButtonClass = 'favorites', like = 'i like', notlike = "i don't like", IdCounter = 'counter') {
    this.ButtonClass = ButtonClass;
    this.like = like;
    this.notlike = notlike;
    this.IdCounter = IdCounter;

  }
  init() {
    const global = this;
    document.cookie = 'favorites=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    // take action for class elements
    var elements = document.getElementsByClassName(this.ButtonClass);
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(
        'click',
        function() {
          global.change(this.getAttribute('data-id'));
        },
        false
      );
    }
  }
  get() {
    return checkACookieExists();
  }
  getParameters() {
    return this.ButtonClass + this.like + this.notlike + this.IdCounter;
  }
  change(id) {
    let cookie = checkACookieExists('favorites');
    if (cookie != false) {
      var index = cookie.indexOf(id);
      if (index !== -1) cookie.splice(index, 1);
      else cookie.push(id);
    } else {
      cookie = [id];
    }
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 360);
    document.cookie = 'favorites=' + JSON.stringify(cookie) + ';path=/;expires=' + d.toGMTString();
    this.update();
    return cookie;
  }
  update() {
    //find counter id and change text
    let nbr = checkACookieExists();
     document.getElementById(this.IdCounter).textContent = nbr.length;
  }
}

function checkACookieExists() {
  if (document.cookie == undefined) return false;
  let field = document.cookie.split('; ').find(row => row.startsWith('favorites='));
  if (field == undefined) return false;
  return JSON.parse(field.split('=')[1]);
}



export default new favorites();
