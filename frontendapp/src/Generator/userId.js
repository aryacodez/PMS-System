class userId{
    usedids = new Set();
    static instance = null;
    static getInstance(){
        if(!userId.instance){
            userId.instance = new userId();
        }
        return userId.instance;
    }
    generateId(){
        let id;
        do{
            id = Math.floor(Math.random()*90000)+10000;
        }while(this.usedids.has(id));
        this.usedids.add(id);
        return id;
    }
}

export default userId.getInstance();