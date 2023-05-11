class projectId{
    usedids = new Set();
    static instance = null;
    static getInstance(){
        if(!projectId.instance){
            projectId.instance = new projectId();
        }
        return projectId.instance;
    }
    generateId(){
        let id;
        do{
            id = Math.floor(Math.random()*99000000)+100000;
        }while(this.usedids.has(id));
        this.usedids.add(id);
        return id;
    }
}

export default projectId.getInstance();