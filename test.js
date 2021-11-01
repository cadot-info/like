/**
 * @jest-environment jsdom
 */
 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "example.html"), "utf8");
 
 const likes = require("cadot-info-like");
 
 
 
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
   expect(likes.getParameters()).toBe("classlikeyesnocompteur");
   likes.init();
   expect(likes.getParameters()).toBe("likesi likei don't likecounter");
   
   //test fucntion get if cookies not exist
   expect(likes.get()).toBe(false);
   // creat cookie for test get
   document.cookie = "likes=" + JSON.stringify([4, 3]);
   expect(likes.get()).toStrictEqual([4, 3]);
   // test add and likesorite
   expect(likes.change(1)).toStrictEqual([4, 3, 1]);
   // test get likesorite
   expect(likes.get()).toStrictEqual([4, 3, 1]);
   //test on document
   expect(likes.update()).toBe(3);
   expect(document.getElementById('counter').textContent).toBe("3");
   //test remove likesorite
   expect(likes.change(1)).toStrictEqual([4, 3]);
   expect(likes.update()).toBe(2);
      //test on document
   expect(document.getElementById('counter').textContent).toBe("2")
 
 });
 