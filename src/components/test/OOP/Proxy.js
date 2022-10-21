export default class Proxy {
    constructor(args){
      super(args)
       const {proxyName, proxyDesc, proxyType} = args;
       this.name = proxyName
       this.desc = proxyDesc
       this.type = proxyType
    }
    main(){
        console.log("SW Registered!")
    }
}