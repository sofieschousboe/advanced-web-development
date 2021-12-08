// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
// import {
// 	getFirestore,
// 	collection,
// 	onSnapshot,
// 	doc,
//   getDoc
// } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js";


// // Firebase configuration:
// const firebaseConfig = {
//     apiKey: "AIzaSyA8wckfyKtLp5uYV4EcI9tIW6Ftqmk5gEQ",
//     authDomain: "advanced-web-dev-e092b.firebaseapp.com",
//     projectId: "advanced-web-dev-e092b",
//     storageBucket: "advanced-web-dev-e092b.appspot.com",
//     messagingSenderId: "741349315446",
//     appId: "1:741349315446:web:af57707c33ddf874c7a057"
//   };

// // Initialize Firebase
// initializeApp(firebaseConfig);



// // reference to database
// const _db = getFirestore();
// // reference to menus collection in database
// const _menusRef = collection(_db, "menus");
// // global variable: menus array
// let _menus = [];


// // onSnapshot: listen for realtime updates
// onSnapshot(_menusRef, snapshot => {
// 	_menus = snapshot.docs.map(doc => {
// 		const menu = doc.data();
// 		menu.id = doc.id;   //Går ind og finder ID'et for hvert objekt
// 		return menu;
// 	});
// 	console.log(_menus);
// 	// appendMenus(_menus);
// });


// navigate to a new html
// function navigateTo() {
// 	location.href = "pages/detailview.html";
// }




// append menus to the DOM
// function appendMenus(menus) {
// 	let htmlTemplate = "";
// 	for (const menu of menus) {
// 		htmlTemplate += /*html*/ `
// 			<article>
// 				<h1>${menu.name}</h1>
// 				<img src="${menu.img1}">
// 				<p>${menu.description}</p>
// 				<p>${menu.price} kr/kuvert</p>
// 				<p>${menu.ingredients}</p>
// 			</article>`
// 	}
// 	document.querySelector("#menus").innerHTML = htmlTemplate;
// }


//other menus

// reference to database
// const _dbOther = getFirestore();
// // reference to otherMenus collection in database
// const _otherMenusRef = collection(_dbOther, "otherMenus");
// // global variable: menus array
// let _otherMenus = [];

// // onSnapshot: listen for realtime updates
// onSnapshot(_otherMenusRef, (snapshot) => {
//   _otherMenus = snapshot.docs.map((doc) => {
//     const otherMenu = doc.data();
//     otherMenu.id = doc.id; //Går ind og finder ID'et for hvert objekt
//     return otherMenu;
//   });
//   console.log(_otherMenus);
// //   appendOtherMenus(_otherMenus);
// });

// append otherMenus to the DOM
// function appendOtherMenus(otherMenus) {
//   let htmlTemplate = "";
//   for (const otherMenu of otherMenus) {
//     htmlTemplate += /*html*/ `
// 			<article>
// 				<h1>${otherMenu.name}</h1>
// 				<img src="${otherMenu.img1}">
// 				<h2>${otherMenu.overskrift}</h2>
// 				<p>${otherMenu.description}</p>
// 				<p>${otherMenu.one[0]}</p>
// 				<p>${otherMenu.one[1]}</p>
// 			</article>`
//   }
//   document.querySelector("#otherMenus").innerHTML = htmlTemplate;
// }

// ========== SELECT ==========
// function selectMenu(id) {
// 	_selectedMenuId = id; // when I click on a user, I would like to save that user's ID in the _selectedUserId variable

// 	const menu = _menus.find(menu => menu.id == _selectedMenuId); //Gennemløber alle users i arrayet og finder frem til det objekt hvis ID matcher

// 	// references to the input fields
// 	document.querySelector("#name-update").value = user.name;
// 	document.querySelector("#mail-update").value = user.mail;

// 	//scroll to update form
// 	document.querySelector("#form-update").scrollIntoView({behavior: "smooth"});
// }

// =========== attach events =========== //
// document.querySelector("#btn-update").onclick = () => updateUser();

//for at gøre funktionen tilgængelig i global scope, da vi jo her arbejder med moduler
// window.selectUser = (id) => selectUser(id);



import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
	getFirestore,
	collection,
	onSnapshot,
	doc
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
// global variable: menus array
let _menus = [];


// onSnapshot: listen for realtime updates
onSnapshot(_menusRef, snapshot => {
	_menus = snapshot.docs.map(doc => {
		const menu = doc.data();
		menu.id = doc.id;   //Går ind og finder ID'et for hvert objekt
		return menu;
	});
	console.log(_menus);
	// appendMenus(_menus);
});

// append menus to the DOM
function appendMenus(menus) {
	let htmlTemplate = "";
	for (const menu of menus) {
		htmlTemplate += /*html*/ `
			<article>
				<h1>${menu.name}</h1>
				<img src="${menu.img1}">
				<p>${menu.description}</p>
				<p>${menu.price} kr/kuvert</p>
				<p>${menu.ingredients}</p>
			</article>`
	}
	document.querySelector("#menus").innerHTML = htmlTemplate;
}


//OTHER MENUS

// reference to database
const _dbOther = getFirestore();
// reference to otherMenus collection in database
const _otherMenusRef = collection(_dbOther, "otherMenus");
// global variable: menus array
let _otherMenus = [];

// onSnapshot: listen for realtime updates
onSnapshot(_otherMenusRef, (snapshot) => {
  _otherMenus = snapshot.docs.map((doc) => {
    const otherMenu = doc.data();
    otherMenu.id = doc.id; //Går ind og finder ID'et for hvert objekt
    return otherMenu;
  });
  console.log(_otherMenus);
  appendOtherMenus(_otherMenus);
});

// append otherMenus to the DOM
function appendOtherMenus(otherMenus) {
  let htmlTemplate = "";
  for (const otherMenu of otherMenus) {
    htmlTemplate += /*html*/ `
			<article>
				<h1>${otherMenu.name}</h1>
				<img src="${otherMenu.img1}">
				<h2>${otherMenu.overskrift}</h2>
				<p>${otherMenu.description}</p>
				<p>${otherMenu.one[0]}</p>
				<p>${otherMenu.one[1]}</p>
			</article>`
  }
  document.querySelector("#otherMenus").innerHTML = htmlTemplate;
}

// ========== SELECT ==========
// function selectMenu(id) {
// 	_selectedMenuId = id; // when I click on a user, I would like to save that user's ID in the _selectedUserId variable

// 	const menu = _menus.find(menu => menu.id == _selectedMenuId); //Gennemløber alle users i arrayet og finder frem til det objekt hvis ID matcher

// 	// references to the input fields
// 	document.querySelector("#name-update").value = user.name;
// 	document.querySelector("#mail-update").value = user.mail;

// 	//scroll to update form
// 	document.querySelector("#form-update").scrollIntoView({behavior: "smooth"});
// }

// =========== attach events =========== //
// document.querySelector("#btn-update").onclick = () => updateUser();

//for at gøre funktionen tilgængelig i global scope, da vi jo her arbejder med moduler
// window.selectUser = (id) => selectUser(id);

async function initDetailView() {
  const params = new URL(location).searchParams; 
  const menu = params.get("menus");
  const docRef = doc(_menusRef, menu);
  const docSnap = await getDoc(docRef); 
  const menuData = docSnap.data(); 
  console.log(menuData);  
  
  appendMenus(menuData);
}

initDetailView();


//Vis et detailview af bestemt menu afhængig af ID når der klikkes på en menu
function showDetailView(id) {
    const menuObject = _menus.find(menu => menu.id == id);
 	console.log(menuObject);

  document.querySelector("#menus").innerHTML = /*html*/ `
    <article>
	<h1>${menuObject.name}</h1>
	<img src="${menuObject.img1}">
	<p>${menu.description}</p>
	<p>${menu.price} kr/kuvert</p>
	<p>${menu.ingredients}</p>
    </article>
  `;

  //  navigateTo();
}

// =========== attach events =========== //
document.querySelector("menu_forside_link").onclick = () => showDetailView(brunch);

//Vis et detailview af bestemt menu afhængig af ID når der klikkes på en menu
function showDetailView2(id) {
    const otherMenuObject = _otherMenus.find(otherMenu => otherMenu.id == id);
 	console.log(otherMenuObject);

  document.querySelector("#otherMenus").innerHTML = /*html*/ `
    <article>
	<h1>${otherMenuObject.name}</h1>
	<img src="${otherMenuObject.img1}">
	<p>${otherMenuObject.description}</p>
	<p>${otherMenuObject.price} kr/kuvert</p>
	<p>${otherMenuObject.ingredients}</p>
    </article>
  `;
  //  navigateTo();
}
// =========== attach events =========== //
document.querySelector("kmenu_forside_link").onclick = () => showDetailView(id);

				
				
				