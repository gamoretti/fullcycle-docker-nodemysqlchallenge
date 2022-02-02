const express = require('express')
const random = require('node-random-name');
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let people = require('./people')
    people.createPeople()
    people.insert(random())

    people.findAll(data => {

        let html = '<h1>Full Cycle</h1>\n\n'
        html += '<ul>'
        data.forEach(person => {
            console.log(person)
            html += `<li>Name: ${person.name}</li>`
        });
        if (data.length == 0) {
            html += `<li>Empty table, add user here 'localhost:3000/add/name' </li>`
        }
        html + - '</ul>'



        res.send(html)
    })

})

app.get('/add/:name', (req, res) => {
    let name = req.params.name
    console.log('name  :>> ', name);
    require('./people').insert(name);
    res.send(`<h1>Sucess</h1>
    <p>${name} was insert!</p>`)
})

app.get('/delete', (req, res) => {
    require('./people').delete();

    res.send(`<h1>Sucess</h1>
    <p>Delete!</p>`)
})

app.listen(port, () => { console.log('Start server on port' + port) })
