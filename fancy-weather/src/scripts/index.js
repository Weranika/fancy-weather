import '../css/reset.css';
import '../css/style.css';
import '../css/style_query.css';
import App from "../controllers/App";

const app = new App();

app.start();

/*import '../img/rain4.jpg';*/

// const ip = function searchUserIP() {
//   const url = "https://api.ipify.org/?format=json";
//   fetch(url)
//   .then(res => res.json())
//   .then(res => res.ip);
// }
// searchUserIP();