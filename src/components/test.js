/**
 * @jest-environment jsdom
 */
 const fs = require("fs");
 const path = require("path");
 const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
 
 import { favorites } from './favorites';
 
 
 const fav = new favorites();
 const favP = new favorites("favoris", "oui", "non", "compteur");
 
 beforeAll(() => {
   document.body.innerHTML = html;
 });
 
 test("var by default", () => {
 
   //test parameters
   expect(fav.getParameters()).toBe("favoritesi likei don't likecounter");
   expect(favP.getParameters()).toBe("favorisouinoncompteur");
 
   //test fucntion get if cookies not exist
   expect(fav.get()).toBe(false);
   // creat cookie for test get
   document.cookie = "favorites=" + JSON.stringify([4, 3]);
   expect(fav.get()).toStrictEqual([4, 3]);
   // test add and favorite
   expect(fav.change(1)).toStrictEqual([4, 3, 1]);
   // test get favorite
   expect(fav.get()).toStrictEqual([4, 3, 1]);
   //test on document
   expect(document.getElementById('counter').textContent).toBe("3")
   //test remove favorite
   expect(fav.change(1)).toStrictEqual([4, 3]);
      //test on document
   expect(document.getElementById('counter').textContent).toBe("2")
 
 });
 