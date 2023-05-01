const Count = require('../models/count');

exports.saveTotalProject = (async(req,res)=>{
    try{
        const count = await Count.findOne({user: req.user._id})
        if(!count){
            const countcreate = await Count.create({
                user: req.user._id,
                totalProject:1
            })
            return res.status(200).json({
                success:true,
                countcreate
            })
        }
        count.totalProject+=1
        await count.save()
        return res.status(200).json({
            success:true,
            count
        })
    }catch(err){
        console.log(err)
    }
})
exports.saveTotalClients = (async(req,res)=>{
    try{
        const clientCount = await Count.findOne({user:req.user._id})
        if(!clientCount){
            const createclientcount = await Count.create({
                user:req.user._id,
                totalClients:1
            })
            return res.status(200).json({
                success: true,
                createclientcount
            })
        }
        clientCount.totalClients+=1
        await clientCount.save();
        return res.status(200).json({
            success:true,
            clientCount
        })
    }catch(err){
        console.log(err)
    }
})



exports.deleteProjects = (async(req,res)=>{
    try{
        const counter = await Count.findOne({user:req.user._id})
        if(counter.length===0){
            return res.status(401).json({
                success:false,
                msg:"No value"
            })
        }
        counter.totalProject-=1;
        await counter.save();
        return res.status(200).json({
            success:true,
            counter
        })
    }catch(err){
        console.log(err)
    }
})
exports.deleteClients = (async(req,res)=>{
    try{
        const counter = await Count.findOne({user:req.user._id})
        if(counter.length===0){
            return res.status(401).json({
                success:false,
                msg:"No value"
            })
        }
        counter.totalClients-=1;
        await counter.save();
        return res.status(200).json({
            success:true,
            counter
        })
    }catch(err){
        console.log(err)
    }
})



exports.getTotal = (async(req,res)=>{
    try{
        const get = await Count.find({user: req.user._id})
        if(get.length===0){
            return res.status(401).json({
                success:false,
                msg:"0"
            })
        }
        return res.status(200).json({
            success:true,
            get
        })
    }catch(err){
        console.log(err)
    }
})
