var ButtonClass , like , notlike , IdCounter,cookie ;

const likes= {
  //loop for take action on element with class ButtonClass and add like or not like on element
  init(init_button = 'likes', init_like = 'i like', init_notlike = "i don't like", init_IdCounter = 'counter') {
    ButtonClass=init_button;
    like=init_like;
    notlike=init_notlike;
    IdCounter=init_IdCounter;
    
    cookie = checkACookieExists('likes');
    if (cookie==false)cookie=[];
    // take action for class elements
    var elements = document.getElementsByClassName(ButtonClass);
    if(elements)
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener(
        'click',
        function() {
          likes.change(this); //add action for change cookie
        },
        false
      );
    }
    likes.update()
  },
  //clear cookie likes
  clear(){
    document.cookie = 'likes=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  },
  //get array of cookie likes or false
  get() {
    return checkACookieExists();
  },
  //return parameters, for tests
  getParameters() {
    return ButtonClass + like + notlike + IdCounter;
  },
  //add or remove id in cookie likes
  change(e) {
    cookie = checkACookieExists('likes');
    if (cookie != false) {
      var index = cookie.indexOf(e.dataset.id);
      if (index !== -1) cookie.splice(index, 1);
      else cookie.push(e.dataset.id);
    } else {
      cookie = [e.dataset.id];
    }
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * 360);
    document.cookie = 'likes=' + JSON.stringify(cookie) + ';path=/;expires=' + d.toGMTString();
    return cookie;
  },
  //update in document the counter
  update() {
    //update text
    var elements = document.getElementsByClassName(ButtonClass);
    if(elements)
    for (var i = 0; i < elements.length; i++) {
      if(!elements[i].hasAttribute('nochange'))
      {
        if(cookie.includes(elements[i].dataset.id))elements[i].innerHTML=notlike
        else elements[i].innerHTML=like
      }
    };
    let longr=cookie.length
    if(document.getElementById(IdCounter) && !longr==0)
    return document.getElementById(IdCounter).textContent = longr;
    else return longr
  }
}

//function for get false or array of cookie likes 
function checkACookieExists() {
  if (document.cookie == undefined) return false;
  let field = document.cookie.split('; ').find(row => row.startsWith('likes='));
  if (field == undefined) return false;
  return JSON.parse(field.split('=')[1]);
}



module.exports =likes;
