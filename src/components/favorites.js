export class favorites {
  constructor(ButtonClass = 'favorites', like = 'i like', notlike = "i don't like", IdCounter = 'counter') {
    this.ButtonClass = ButtonClass;
    this.like = like;
    this.notlike = notlike;
    this.IdCounter = IdCounter;

  }
  //loop for take action on element with class ButtonClass and add like or not like on element
  init() {
    const global = this;
    let cookie = checkACookieExists('favorites');
    // take action for class elements
    var elements = document.getElementsByClassName(this.ButtonClass);
    for (var i = 0; i < elements.length; i++) {
      //text by cookie
      if(cookie.includes(elements[i].getAttribute('data-id')))elements[i].textContent=this.notlike
      else elements[i].textContent=this.like

      elements[i].addEventListener(
        'click',
        function() {
          global.change(this.getAttribute('data-id')); //add action for change cookie
        },
        false
      );
    }
  }
  //clear cookie favorites
  clear(){
    document.cookie = 'favorites=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  }
  //get arry of cookie favorites or false
  get() {
    return checkACookieExists();
  }
  //return parameters, for tests
  getParameters() {
    return this.ButtonClass + this.notlike + this.notlike + this.IdCounter;
  }
  //add or remove id in cookie favorites
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
    var elements = document.getElementsByClassName(this.ButtonClass);
    for (var i = 0; i < elements.length; i++) {
      if(elements[i].getAttribute('data-id')==id)
      {
        if(cookie.includes(id))elements[i].textContent=this.notlike
        else elements[i].textContent=this.like
      }
    };
    this.update();
    return cookie;
  }
  //update in document the counter
  update() {
     document.getElementById(this.IdCounter).textContent = checkACookieExists().length;
  }
}

//function for get false or array of cookie favorites
function checkACookieExists() {
  if (document.cookie == undefined) return false;
  let field = document.cookie.split('; ').find(row => row.startsWith('favorites='));
  if (field == undefined) return false;
  return JSON.parse(field.split('=')[1]);
}



export default new favorites();
