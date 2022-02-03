const Task = require('../schemas/Task')
const client = require('../redis');
module.exports = async (req, res) => {
    try {
        const cached = await client.get('tasks');
        if(cached){
            return res.status(200).json({ data: JSON.parse(cached) })
        }
        const data = await Task.find({})
        await client.set('tasks', JSON.stringify(data))
        client.expire('tasks', 60)
        return res.status(200).send({ data })


    } catch (error) {
        console.error(error)
        return res.status(500).json({ error })
    }
}