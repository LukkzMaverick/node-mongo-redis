const Task = require('../schemas/Task')

module.exports = async (req, res) => {
    try {
        const {id} = req.params
        if(!id){
            return res.status(400).json({error: "Invalid Parameter"})
        }
        const data = await Task.findById(id)
        return res.status(200).json({data})
    } catch (error) {
        return res.status(500).json({error})
    }
}