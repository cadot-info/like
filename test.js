/**
 * @jest-environment jsdom
 */
 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "example.html"), "utf8");
 
 const likes = require("./index.js");
 
 
 
 beforeAll(() => {
   document.body.innerHTML = html;
 });
 
 test("var by default", () => {
   //test parameters
   likes.init(
    "classlike", 
    "yes",
    "no",
    "compteur" 
  );
   //expect(likes.getParameters()).toBe("classlikeyesnocompteur");
   likes.init();
   expect(likes.getParameters()).toBe("likesi likei don't likecounter");
   
   //test fucntion get if cookies not exist
   expect(likes.get()).toBe(false);
   expect(document.getElementById('counter').innerHTML).toBe("vide");

   // creat cookie for test get
   expect(document.getElementById('choix1').innerHTML).toBe('i like');
   document.getElementById('choix1').click();
   expect(document.getElementById('choix1').innerHTML).toBe("i don't like");
   console.log(document.body.innerHTML);
   expect(document.getElementById('counter').textContent).toBe("1");

   document.getElementById('choix2').click();
   expect(likes.get()).toStrictEqual(["1", "2"]);
   expect(document.getElementById('counter').textContent).toBe("2");
   
   //test remove
   expect(document.getElementById('choix1').innerHTML).toBe("i don't like");
   document.getElementById('choix1').click();
   expect(document.getElementById('choix1').innerHTML).toBe("i like");
   expect(likes.get()).toStrictEqual([ "2"]);
   expect(document.getElementById('counter').textContent).toBe("1");
   expect(likes.get()).toStrictEqual(["2"]);

   //test no change
   document.getElementById('choix4').click();
   expect(document.getElementById('choix4').innerHTML).toBe("choix 4");
   expect(document.getElementById('counter').textContent).toBe("2");
   expect(likes.get()).toStrictEqual(["2", "4"]);

 });
 