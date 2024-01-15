import express from 'express'
import cors from 'cors'
import mongoose, { Schema } from 'mongoose'
const app = express()
const port = 7000

app.use(express.json())
app.use(cors())

const Cardschema = new Schema({
    name: String,
    desc: String,
    price: Number,
    img: String,
    date: String,
    category: String,
});

const CardModel = mongoose.model('card', Cardschema);

app.get('/', async (req, res) => {
    try {
        const card = await CardModel.find({})
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }

})
app.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const card = await CardModel.findById(id)
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
})

app.post('/', async (req, res) => {
    try {
        const { name, desc, price,img, date, category } = req.body
        const card = new CardModel({name, desc, price,img, date, category })
        await card.save()
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
})

app.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, desc, price,img, date, category } = req.body
        const card = await CardModel.findByIdAndUpdate(id,{name, desc, price,img, date, category })
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
})

app.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const card = await CardModel.findByIdAndDelete(id)
        res.send(card)
    } catch (error) {
        res.send(error.message)
    }
})

mongoose.connect('mongodb+srv://aydan:aydan@cluster0.ccton5y.mongodb.net/')
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'));

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })