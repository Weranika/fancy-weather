export default class ViewBackgr {
    constructor() {        
        
        this.bacgrButton = document.getElementById('button-backgr');                 
        this.bacgrButton.addEventListener('click', this.changeBackgr);       
    }

    changeBackgr(event) { 
        const body = document.getElementById('body');      
        const random = Math.floor(Math.random() * 5) + 1;
        body.setAttribute("style", `background: linear-gradient(rgba(8, 26, 25, 0.3) 0%,
            rgba(17, 17, 17, 0.4) 100%) center center / cover fixed, url(./src/img/${random}.jpg)
            no-repeat fixed; background-attachment: fixed; background-size: cover;`);
    }
}

