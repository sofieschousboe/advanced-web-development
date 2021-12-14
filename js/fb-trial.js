// Maria, Simone og Sofie
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";

// Firebase configuration:
const firebaseConfig = {
  apiKey: "AIzaSyA8wckfyKtLp5uYV4EcI9tIW6Ftqmk5gEQ",
  authDomain: "advanced-web-dev-e092b.firebaseapp.com",
  projectId: "advanced-web-dev-e092b",
  storageBucket: "advanced-web-dev-e092b.appspot.com",
  messagingSenderId: "741349315446",
  appId: "1:741349315446:web:af57707c33ddf874c7a057",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// reference to database
const _db = getFirestore();
// reference to menus collection in database
const _menusRef = collection(_db, "menus");
const _otherMenusRef = collection(_db, "otherMenus");
// global variabel: menus array
let _menus = [];
let _otherMenus = [];

// onSnapshot: listen for realtime updates for menus array
onSnapshot(_menusRef, (snapshot) => {
  _menus = snapshot.docs.map((doc) => {
    const menu = doc.data();
    menu.id = doc.id; //Gaar ind og finder ID'et for hvert objekt
    return menu;
  });
  console.log(_menus);
});

// onSnapshot: listen for realtime updates for otherMenus array
onSnapshot(_otherMenusRef, (snapshot) => {
  _otherMenus = snapshot.docs.map((doc) => {
    const otherMenu = doc.data();
    otherMenu.id = doc.id; //Gaar ind og finder ID'et for hvert objekt
    return otherMenu;
  });
  console.log(_otherMenus);
});

// Maria, Simone og Sofie
//Detailview for menus
async function initDetailView() {
  const params = new URL(location).searchParams;
  const menu = params.get("menu");
  const docRef = doc(_menusRef, menu);
  const docSnap = await getDoc(docRef);
  const menuData = docSnap.data();
  console.log(menuData);

  // Maria, Simone og Sofie
  //Append menuData til DOM'en
  document.querySelector("#menus").innerHTML = /*html*/ `
    <article class="menu">
        <div class="bg_menu" style="background-color:#c6cea5;">
            <h1>${menuData.name}</h1>
            <div class="imgTekstFlex">
                <img src="${menuData.img1}" class="menuIMG" alt="Billede af menu">
                <div class="tekstInfoFlex">
                    <p class="descript">${menuData.description}</p>
                    <h2 class="menu_os">Menuen</h2>

                    <div class="bg_tekst" style="background-color:#ffffff;">
                        <p class="price">${menuData.price},- pr. kuvert</p>
                        <p class="ingre">${menuData.ingredients}</p>
                    </div>
                </div>
            </div>
            <div class="obs">
                <h3>OBS:</h3>
                <p>For at foretage en bestilling skal man have oprettet en bruger og være logget ind!
                <br><a href="login.html" rel="link" class="loginHer">Log ind her</a></p>
            </div>
        </div>
        <h2 class="bestil">BESTIL</h2>
        <div class="tilvalgHensyn">
        <div class="tilvalg">
            <h4>Tilvalg</h4>
            <button class="accordion">Kager og desserter</button>
            <div class="panel">
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Glutenfri brownie</p>
                        <p>35,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Gulerodskage</p>
                        <p>35,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Raw kage med blåbær</p>
                        <p>40,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Raw kage med matcha</p>
                        <p>40,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Frugtfad</p>
                        <p>35,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
            </div>
    


            <button class="accordion">Dressinger</button>
            <div class="panel">
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Peberfrugtcreme</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Auberginecreme</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Avocadocreme</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Almindelig hummus</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Hokkaidohummus</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Rødbedehummus</p>
                        <p>5,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
            </div>
            <button class="accordion">Salater</button>
            <div class="panel">
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Feta og oliven</p>
                        <p>20,-/kuvert</p>
                </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Butterbeans med pesto, squash, tomat og persille</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Mungbønner med peberfrugt, bladselleri, gulerod og græskarkerner</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Mungbønner med peberfrugt, bladselleri, gulerod og græskarkerner</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Råmarineret hvidkål med mango, porrer og sesam</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Quinoa med hokkaido, grønkål og sure kirsebær</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Råmarineret rødkål med fennikel, æble, valnødder</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Havrekerner med basilikum, bagte gule beder, edamame, rød spidskål og granatæblekerner</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Råkost med gulerod, knoldselleri, broccoli, æble og morbær</p>
                        <p>10,-/kuvert</p>
                    </div>
                    <div class="selectNumberBox">
                        <button onclick="subtractAmount()"><</button>
                        <input type="number" onchange="" placeholder="0" min="0">
                        <button onclick="addAmount()">></button>
                    </div>
                </div>
            </div>

            <button class="accordion">Retter</button>
            <div class="panel">
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Sesampaneret kylling
                            (ca. 120g)</p>
                            <p>20,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Ostefad med kiks og frugt</p>
                            <p>50,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Pestobagt laks med oliven og tomat
                            <p>80,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med broccoli, gulerod, porre, spinat og mandler</p></p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Tærte med røget laks, broccoli og porrer</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med røget skinke, vesterhavsost og blomkål</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Majsdeller med æg, edamamebønner og spinat</p>
                            <p>25,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Quinoadeller med kikærter, gulerødder, persille og sesam (vegansk)</p>
                            <p>25,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                           <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Delikatessefad med salami, røget skinke, vesterhavsost, brieost, oliven og blåbærmarmelade</p>
                            <p>50,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med hokkaido, grønkål, græskarkerner og vesterhavsost</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Frugtfad</p>
                            <p>35,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Frisk surdejsbrød</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                           <button onclick="subtractAmount()"><</button>
                            <input type="number" onchange="" placeholder="0" min="0">
                            <button onclick="addAmount()">></button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- TILFØJ TILVALGSDROPDOWNTING-->
            <div class="hensynFlex">
                <h4>SÆRLIGE HENSYN</h4>
                <div class="hensyn">
                    <p>Har du en vegetar, veganer eller allergiker i dit selskab? Skriv da dette i kommentarfeltet og vi vil levere et alternativ til den/de pågældende person(er).</p>
                    <form>
                        <textarea placeholder="Kommentar..." class="kommentar"></textarea>
                    </form>
                </div>
                <div class="order">
                    <div class="itemsFlex">
                        <div>
                            <h3>${menuData.name}</h3>
                        </div>
                        <div class="kuvertTotalFlex">
                            <div class="kuvertFlex">
                                <p>Min. 10 kuverter</p>
                                <div class="selectNumberBox">
                                    <button class="down"><</button>
                                    <input class="amount" type="number" value="10" min="10">
                                    <button class="up">></button>
                                </div>
                            </div>
                
                            <div class="totalFlex">
                                <p>Subtotal</p>
                                <p class="amountToPay">${menuData.subtotal},-</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tilfojsmat">
                    <button type="submit" class="tilfoj"><a href="../pages/kurv.html" rel="link">Tilføj til kurv</a></button>
                
                    <p class="detmedsmat">Bestil venligst maden senest 3 hverdage i forvejen.
                    <br>Menuen skal bestilles til min. 10 kuverter.
                    <br>Vores mad er anrettet på fade og i skåle, som er til venligt udlån og som skal tilbageleveres rengjort efter endt festivitas.
                    <br><br>Efter bestillingen er gennemført, vil du modtage en bekræftelse på mail. Bestillingen er først gældende når du har modtaget denne mail (forvent mailbekræftelse indenfor 1-2 dage).</p>
                </div>
            </div>
        </div>
    </article>`;

    accord();

    // Sofie
    // add() skal tage værdien fra inputfeltet og tilføje 1
    document.querySelector(".up").addEventListener("click", function addAmount() {
        document.querySelector(".amount").value = parseInt(document.querySelector(".amount").value) + 1;
    });

    // Sofie
    // subtractAmount() skal tage værdien fra inputfeltet og trække 1 fra
    document.querySelector(".down").addEventListener("click", function subtractAmount() {
        document.querySelector(".amount").value = parseInt(document.querySelector(".amount").value) -1;

        if (document.querySelector(".amount").value <= parseInt(10)) {
            document.querySelector(".amount").value = 10;
        }
    });

}


//subtotal() skal tage antallet fra inputfeltet og gange med fx 10

initDetailView();

// Maria, Simone og Sofie
//Detailview for otherMenus
async function initOtherDetailView() {
  const params = new URL(location).searchParams;
  const otherMenu = params.get("otherMenus");
  const docOtherRef = doc(_otherMenusRef, otherMenu);
  const docOtherSnap = await getDoc(docOtherRef);
  const otherMenuData = docOtherSnap.data();
  console.log(otherMenuData);

  document.querySelector("#otherMenus").innerHTML = /*html*/ `
        <article class="otherMenu">
        <div class="bg_menu" style="background-color:#c6cea5;">
            <h1>${otherMenuData.name}</h1>
            <div class="other_info_flex">
            <img class="otherMenuIMG" src="${otherMenuData.img1}">
            <div class="other_bg_tekst" style="background-color:#ffffff;">
            <h2 class="otherOverskriftMenu">${otherMenuData.overskrift}</h2>
            <p>${otherMenuData.description}</p>
            </div>
            </div>
            <div class="obs">
                <h3>OBS:</h3>
                <p>For at foretage en bestilling skal man have oprettet en bruger og være logget ind!
                <br><a href="login.html" rel="link" class="loginHer">Log ind her</a>
                </p>
            </div>
            </div>
            <h2 class="bestil">BESTIL</h2>
        <div class="tilvalgHensyn">
        <div class="otherTilvalg">
            <button class="accordion">Kager og desserter</button>
            <div class="panel">
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Glutenfri brownie</p>
                        <p>35,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Gulerodskage</p>
                        <p>35,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Raw kage med blåbær</p>
                        <p>40,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Raw kage med matcha</p>
                        <p>40,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
            </div>

            
            <button class="accordion">Juice og Smoothies</button>
            <div class="panel">
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Gurkemejeshot med gurkemeje,
ingefær, citron, appelsin og gulerod
</p>
                        <p>20,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Ingefærshot med ingefær, citron og 
æble	
</p>
                        <p>20,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Sellerishot med selleri, ingefær, citron 
og æble	</p>
                        <p>20,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Slowjuice med appelsin, æble, agurk, 
gurkemeje og grape
</p>
                        <p>45,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Slowjuice med appelsin, æble, gulerod, 
citron og ingefær	
</p>
                        <p>45,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Slowjuice med rødbede, æble, citron 
og ingefær
</p>
                        <p>45,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Slowjuice med spinat, æble, mynte, 
agurk og citron
</p>
                        <p>45,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Slowjuice med spinat, salat, bladselleri, 
æble, citron og ingefær
</p>
                        <p>45,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                    <p>Smoothie med blåbær, banan, 
mandelmælk og kardemomme
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Smoothie med brombær, jordbær, 
banan, havremælk, havregryn, vanilje
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Smoothie med grønkål, spinat,
avocado, banan, æble, lime, ingefær
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Smoothie med jordbær, appelsin, 
banan, yoghurt, vanilje
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Smoothie med mango, havtorn,
banan, appelsin og gulerod
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
                <div class="hvidBox">
                    <div class="tekstFlex">
                        <p>Smoothie med spinat, avocado,
appelsin, mango og mandelmælk
</p>
                        <p>55,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                </div>
            </div>
    


            <button class="accordion">Majspandekager</button>
                <div class="panel">
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Majspandekage med cremet lakse-
æblesalat, avocado, syltede rødløg, 
karsepesto, salat	
</p>
                            <p>88,-/kuvert</p>
                        </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Majspandekage med hummus, bagte 
rødbeder, pickled grønt, avocado, 
artiskoktapenade, salat	
</p>
                            <p>88,-/kuvert</p>
                        </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Majspandekage med kylling, urte-
mayo, tomat, syltede rødløg, artiskok-
tapenade og grøn salat	</p>
                            <p>88,-/kuvert</p>
                        </div>
                    <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Majspandekage med BBQ selleri, 
vegansk urte-mayo, syltet grønt, friske 
tomater, salat og pesto</p>
                            <p>88,-/kuvert</p>
                        </div>
                        <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                </div>
    


            <button class="accordion">Sandwich</button>
            <div class="panel">
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Cremet lakse-æblesalat, avocado,
syltede rødløg, karsepesto, salat	</p>
                            <p>60,-/kuvert</p>
                    </div>
                    <div class="selectFoodBTN">
                    <input type="number" onchange="" placeholder="0">
                    <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Hummus, bagte rødbeder, pickled
grønt, avocado, artiskoktapenade,
salat</p>
                            <p>60,-/kuvert</p>
                        </div>
                        <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                    <p>Kylling, urtemayo, tomat, syltede 
rødløg, artiskoktapenade og grøn 
salat</p>
                            <p>60,-/kuvert</p>
                        </div>
                        <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                </div>
    


            <button class="accordion">Salater</button>
            <div class="panel">
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Lille blandet salat med 1 dressing,
400 gram</p>
                            <p>65,-/kuvert</p>
                        </div>
                        <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Stor blandet salat med 2 dressing, 
650 gram</p>
                            <p>90,-/kuvert</p>
                        </div>
                        <div class="selectFoodBTN">
                        <input type="number" onchange="" placeholder="0">
                        <button class="tilfojFood" onclick="add()">TILFØJ TIL KURV</button>
                    </div>
                    </div>
                </div>
            
        </article>`;
    accord();
}

initOtherDetailView();


//ACCORDIONS
function accord() {
  var accordion = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
