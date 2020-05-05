const express = require('express')
const User = require('../models/user')
const router = new express.Router()
const auth = require("../middleware/auth")

// GET route for show profile of User
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

// GET route for show One User with Id params
router.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send()
    }
})

// POST route for Login
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token})
        res.send(user, token)

    } catch (e) {
        res.status(400).send()
    }
})

// POST route for Logout
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

// POST route for destroy all token & logout
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((tokens) => {
            return tokens.token !== req.tokens
        })
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()

    }
})

// POST route for create One User
router.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
})

// PATCH route for updating One User
router.patch('/users/me', auth, async (req, res) => {
    const updates = Object.keys(req.body)

    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every( (update) => allowedUpdates.includes(update))

    if(!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates !'})
    }

    try {

        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)

    } catch (e) {
        res.status(400).send(e)
    }
})

// DELETE route for delete One User
router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove()
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router