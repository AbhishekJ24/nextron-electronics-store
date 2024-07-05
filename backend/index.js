import express from "express"
import mongoose from "mongoose"
import cors from "cors"

const app = express()
app.use(cors());

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Welcome to Nextron Electronics Backend\nHead over to /users endpoint to retrieve user details")
})

app.get('/users', (req, res) => {
    res.json([
        {
            "username": "scarlett_johansson",
            "password": "blackwidow27",
            "gender": "female",
            "address": "123 Marvel Ave, Los Angeles"
        },
        {
            "username": "jennifer_lawrence",
            "password": "mystique2023",
            "gender": "female",
            "address": "456 X-Men Blvd, Hollywood"
        },
        {
            "username": "margot_robbie",
            "password": "harleyquinn87",
            "gender": "female",
            "address": "789 Gotham St, Malibu"
        },
        {
            "username": "emma_stone",
            "password": "oscarwinner",
            "gender": "female",
            "address": "101 Academy Rd, Beverly Hills"
        },
        {
            "username": "leonardo_dicaprio",
            "password": "inception10",
            "gender": "male",
            "address": "222 Dream Ave, Hollywood"
        },
        {
            "username": "brad_pitt",
            "password": "fightclub99",
            "gender": "male",
            "address": "333 Angelina Ln, Santa Monica"
        },
        {
            "username": "gal_gadot",
            "password": "wonderwoman84",
            "gender": "female",
            "address": "444 Themyscira Dr, Pacific Palisades"
        },
        {
            "username": "robert_downey_jr",
            "password": "ironman08",
            "gender": "male",
            "address": "555 Stark Tower, Malibu"
        },
        {
            "username": "meryl_streep",
            "password": "queenofcinema",
            "gender": "female",
            "address": "666 Oscar Ln, Beverly Hills"
        },
        {
            "username": "angelina_jolie",
            "password": "tombraider01",
            "gender": "female",
            "address": "777 Raider Rd, Westwood"
        }
    ]
    )
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
