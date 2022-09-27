export default class ViewBackgr {
    constructor() {        
        
        this.bacgrButton = document.getElementById('button-backgr');                 
        this.bacgrButton.addEventListener('click', this.changeBackgr);       
    }

    changeBackgr(event) { 
        const body = document.getElementById('body');      
        const random = Math.floor(Math.random() * 5) + 1;
        body.setAttribute("style", `background: url(./src/img/${random}.jpg) no-repeat fixed; background-attachment: fixed; background-size: cover;`);
    }        
}

