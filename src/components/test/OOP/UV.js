import Proxy from './Proxy'

export class UV extends Proxy {
    constructor(serviceWorker){
        super(serviceWorker)
        this.serviceWorker = serviceWorker;
    }
    visitWebpage(pageUrl,abCloak){
        
    }
    exit(){

    }
    main() {
        console.log("SW Registered with UV!")
    }
}
