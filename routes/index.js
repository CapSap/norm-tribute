const express = require('express')
const router = express.Router()
const needle = require('needle')

// Env vars
const BEARER_TOKEN = process.env.BEARER_TOKEN
const API_BASE_URL = process.env.API_BASE_URL
const API_BASE_NAME = process.env.API_BASE_NAME
const API_BASE_VALUE = process.env.API_BASE_VALUE



const endpointUrl = 'https://api.twitter.com/2/tweets'
const tweetID = "1415496438981697542"

router.get('/', async (req, res) => {

    const params = "/search/recent?query=conversation_id:"+tweetID+"&tweet.fields=in_reply_to_user_id,author_id,created_at,conversation_id"
    var options = {
        "headers": {
            'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAO8SUgEAAAAAQdS2xK09inpisUBnJI95F4ikPdM%3DjtPIBlvBxQtEF8OFjwUODjjVlbr8vsnlnGJtJ0QKCaqwu8jUGk'
        } 
    }

    try {

        const apiRes = await needle('get', endpointUrl + params,null,options )
        const data = apiRes.body
        
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(console.error())
    }
  }) 

module.exports = router