const express = require('express')
const router = express.Router()
const needle = require('needle')

// Env vars
const BEARER_TOKEN = process.env.BEARER_TOKEN
const API_BASE_URL = process.env.API_BASE_URL
const API_BASE_NAME = process.env.API_BASE_NAME
const API_BASE_VALUE = process.env.API_BASE_VALUE
const API_ENV = process.env.API_ENV


const path = "/2/tweets/search/recent?query=rip%20norm%20macdonald%20-is:retweet&tweet.fields=author_id"

router.get('/', async (req, res) => {

    const options = {
        "headers": {
            'Authorization': `Bearer ${BEARER_TOKEN}`
        } 
    }

    try {

        const apiRes = await needle('get', API_BASE_URL+path,null,options )
        const data = apiRes.body
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(console.error())
    }
  }) 

module.exports = router



