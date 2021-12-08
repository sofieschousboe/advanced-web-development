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
// global variabel: menus array
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


async function initDetailView() {
    const params = new URL(location).searchParams; 
    const menu = params.get("menus");
    const docRef = doc(_menusRef, menu);
    const docSnap = await getDoc(docRef); 
    const menuData = docSnap.data(); 
    console.log(menuData);  
    //gør noget med menuData
    
    const menuObject = menuData.find(menu => `${menu.id}` == menu);
    console.log(menuObject);
}

initDetailView();



// NOTER:
// find(_menus => `${menu.id}` == brunch);