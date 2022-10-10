let instance

class Apikey{
    constructor(){
        if(instance){
            throw new Error("you can only create one instance")
        }
        instance = this
    }

    getApikey() {
        return "JPAlOiEfVcD4aBHyQq2rohe1GDGCi7QlTxdCpuEp"
    }


}

const singletonApikey = Object.freeze(new Apikey())
export default singletonApikey