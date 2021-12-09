import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
	getFirestore,
	collection,
	onSnapshot,
	doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";


// Firebase configuration:
const firebaseConfig = {
    apiKey: "AIzaSyA8wckfyKtLp5uYV4EcI9tIW6Ftqmk5gEQ",
    authDomain: "advanced-web-dev-e092b.firebaseapp.com",
    projectId: "advanced-web-dev-e092b",
    storageBucket: "advanced-web-dev-e092b.appspot.com",
    messagingSenderId: "741349315446",
    appId: "1:741349315446:web:af57707c33ddf874c7a057"
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
onSnapshot(_menusRef, snapshot => {
	_menus = snapshot.docs.map(doc => {
		const menu = doc.data();
		menu.id = doc.id;   //Gaar ind og finder ID'et for hvert objekt
		return menu;
	});
	console.log(_menus);
});

// onSnapshot: listen for realtime updates for otherMenus array
onSnapshot(_otherMenusRef, snapshot => {
	_otherMenus = snapshot.docs.map(doc => {
		const otherMenu = doc.data();
        otherMenu.id = doc.id;   //Gaar ind og finder ID'et for hvert objekt
		return otherMenu;
	});
    console.log(_otherMenus);
});

//Detailview for menus
async function initDetailView() {
    const params = new URL(location).searchParams; 
    const menu = params.get("menu");
    const docRef = doc(_menusRef, menu);
    const docSnap = await getDoc(docRef);
    const menuData = docSnap.data(); 
    console.log(menuData);

    //Append menuData til DOM'en
    document.querySelector("#menus").innerHTML = /*html*/ `
    <article class="menu">
        <div class="bg_menu" style="background-color:#c6cea5;">
            <h1>${menuData.name}</h1>
            <img src="${menuData.img1}" class="menuIMG">
            <p class="descript">${menuData.description}</p>
            <h2 class="menu_os">Menuen</h2>

            <div class="bg_tekst" style="background-color:#ffffff;">
                <p class="price">${menuData.price},- pr. kuvert</p>
                <p class="ingre">${menuData.ingredients}</p>
            </div>
            <div class="obs">
                <h3>OBS:</h3>
                <p>For at foretage en bestilling skal man have oprettet en bruger og være logget ind!
                <br><a href="login.html" rel="link" class="loginHer">Log ind her</a></p>
            </div>
        </div>
        
        <div class="tilvalg">
            <h2 class="bestil">BESTIL</h2>
            <h4>Tilvalg</h4>
            <button class="accordion">Kager og desserter</button>
            <div class="panel">
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Glutenfri brownie</p>
                            <p>35,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Gulerodskage</p>
                            <p>35,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Raw kage med blåbær</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Raw kage med matcha</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Frugtfad</p>
                            <p>35,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
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
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Auberginecreme</p>
                            <p>5,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Avocadocreme</p>
                            <p>5,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Almindelig hummus</p>
                            <p>5,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Hokkaidohummus</p>
                            <p>5,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex"></div>
                            <p>Rødbedehummus</p>
                            <p>5,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
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
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Butterbeans med pesto, squash, tomat og persille</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Mungbønner med peberfrugt, bladselleri, gulerod og græskarkerner</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Mungbønner med peberfrugt, bladselleri, gulerod og græskarkerner</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Råmarineret hvidkål med mango, porrer og sesam</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Quinoa med hokkaido, grønkål og sure kirsebær</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Råmarineret rødkål med fennikel, æble, valnødder</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Havrekerner med basilikum, bagte gule beder, edamame, rød spidskål og granatæblekerner</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Råkost med gulerod, knoldselleri, broccoli, æble og morbær</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
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
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Ostefad med kiks og frugt</p>
                            <p>50,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Pestobagt laks med oliven og tomat
                            <p>80,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med broccoli, gulerod, porre, spinat og mandler</p></p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Tærte med røget laks, broccoli og porrer</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med røget skinke, vesterhavsost og blomkål</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Majsdeller med æg, edamamebønner og spinat</p>
                            <p>25,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Quinoadeller med kikærter, gulerødder, persille og sesam (vegansk)</p>
                            <p>25,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                           <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                            <p>Delikatessefad med salami, røget skinke, vesterhavsost, brieost, oliven og blåbærmarmelade</p>
                            <p>50,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                    <div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Tærte med hokkaido, grønkål, græskarkerner og vesterhavsost</p>
                            <p>40,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Frugtfad</p>
                            <p>35,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                            <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
<div class="hvidBox">
                        <div class="tekstFlex">
                        <p>Frisk surdejsbrød</p>
                            <p>10,-/kuvert</p>
                        </div>
                        <div class="selectNumberBox">
                           <button onclick="subtract()"><</button>
                            <input type="number" onchange="" placeholder="0">
                            <button onclick="add()">></button>
                        </div>
                    </div>
                </div>


        </div>
        <!-- TILFØJ TILVALGSDROPDOWNTING-->
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
                <div>
                    <p>Min. 10 kuverter</p>
                    <div class="selectNumberBox">
                        <button onclick="subtract()"><</button>
                        <input type="number" onchange="" placeholder="10">
                        <button onclick="add()">></button>
                    </div>
                </div>
            </div>
            <div class="totalFlex">
                <p>Subtotal</p>
                <p class="amountToPay">${menuData.subtotal},-</p>
            </div>
            <button type="submit" class="tilfoj">Tilføj til kurv</button>
        </div>
        <p class="detmedsmat">Bestil venligst maden senest 3 hverdage i forvejen.
        <br>Menuen skal bestilles til min. 10 kuverter.
        <br>Vores mad er anrettet på fade og i skåle, som er til venligt udlån og som skal tilbageleveres rengjort efter endt festivitas.
        <br><br>Efter bestillingen er gennemført, vil du modtage en bekræftelse på mail. Bestillingen er først gældende når du har modtaget denne mail (forvent mailbekræftelse indenfor 1-2 dage).</p>
    </article>`;

    accord(); 

}

// subtract() skal tage værdien fra inputfeltet og trække en fra
// add() skal tage værdien fra inputfeltet og tilføje en

//subtotal() skal tage antallet fra inputfeltet og gange med fx 10

initDetailView();

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
            <h1>${otherMenuData.name}</h1>
            <img src="${otherMenuData.img1}">
            <h2 class="overskriftMenu">${otherMenuData.overskrift}</h2>
            <p>${otherMenuData.description}</p>
            <p>${otherMenuData.one}</p>
            <div class="obs">
                <h3>OBS:</h3>
                <p>For at foretage en bestilling skal man have oprettet en bruger og være logget ind!
                <br><a href="login.html" rel="link" class="loginHer">Log ind her</a>
                </p>
            </div>
        </article>`;
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

