const seedData = require('./seed-data')
const express = require('express')

const app = express()

// app.get('/developers', (req, res) => {
//     res.status(200).send(seedData)
// })

app.get('/developers', (req, res) => {
    const salary = req.query.salary
    console.log('req.query ---->', salary)
    const developer = seedData.find(dev => dev.salary === parseInt(salary))
    if (developer) {
        res.status(200).send(developer)
    }
    else {
        res.status(404).send("Developer not found")
    }
})

    
app.get('/developers/:id', (req, res) => {
    const id = req.params.id
    console.log('req.query ---->', req.query)
    const developer = seedData.find(dev => dev.id === parseInt(id))
    if (developer) {
        res.status(200).send(developer)
    }
    else {
        res.status(404).send("Developer not found")
    }
})


app.listen(3005, () => {
    console.log('Listening on http://localhost:3005');
});
