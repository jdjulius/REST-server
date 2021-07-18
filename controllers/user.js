const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const {q, nombre, apikey } = req.query;

    res.json({
        msb: 'get API - GET',
        q,
        nombre,
        apikey
    })
}

const userPost = (req, res) => {

    const { nombre, edad} = req.body;

    res.json({
        msb: 'post API  - POST',
        nombre,
        edad
    })
}

const userPut = (req, res) => {

    const idd = req.params.id;

    res.json({
        msb: 'put API - PUT',
        idd
    })
}

const userDelete = (req, res) => {
    res.json({
        msb: 'delete API  - DELETE'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}