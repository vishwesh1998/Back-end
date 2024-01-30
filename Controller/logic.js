const p = require('../Model/schema')
const Pr = p.product

exports.getAllMethod = async (req,res)=>{
    const product = await Pr.find()
    res.json(product)
}

exports.getMethod = async (req,res)=>{
    const id = req.params.id
    // console.log(typeof id)
    const product = await Pr.findById(id)
    res.json(product)
   }

exports.postMethod = async (req,res)=>{
    const prod = new Pr(req.body)
    // console.log(req.body)
    await prod.save().then((d)=>res.json(d)).catch((err)=>res.json(err))
}

exports.putMethod = async (req,res)=>{
    const id = req.params.id
    const product = await Pr.findOneAndReplace({_id : id}, req.body, {new : true})
    res.json(product)
}

exports.patchMethod = async (req,res)=>{
    const id = req.params.id
    const product = await Pr.findByIdAndUpdate({_id : id}, req.body, {new : true})
    res.json(product)
}

exports.deleteMethod = async (req, res)=>{
    const id = req.params.id
    const pr = await Pr.findByIdAndDelete({_id : id}, {new : true})
    res.send(pr)
    }
