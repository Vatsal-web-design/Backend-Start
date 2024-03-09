require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const Appledata = {
    "name": "New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD) - Silver (Latest Model)",
    "product_information": {
        "Product Dimensions": "12.76 x 2.87 x 9.09 inches",
        "Item Weight": "2 Pounds",
        "Manufacturer": "Apple",
        "ASIN": "B08N5NMHM3",
        "Item model number": "MGN93B/A",
        "Batteries": "1 Lithium Ion batteries required. (included)",
        "Customer Reviews": {
            "ratings_count": 1006,
            "stars": 4.7
        },
        "Date First Available": "September 27, 2022",
        "Standing screen display size": "13.3 Inches",
        "Ram Memory Installed Size": "8 GB",
        "Hard Drive Size": "256 GB",
        "Total Usb Ports": "2",
        "Resolution": "2560 x 1600 pixels"
    },
    "brand": "Visit the Apple Store",
    "brand_url": "https://www.amazon.com/stores/Apple/page/77D9E1F7-0337-4282-9DB6-B6B8FB2DC98D?ref_=ast_bln",
    "full_description": "MBA 13.3 SLV/8C CPU/7C GPU/8GB/256GB-GBR",
    "availability_status": "Currently unavailable.                    We don't know when or if this item will be back in stock.",
    "images": [
        "https://m.media-amazon.com/images/I/31ilq3hPhEL.jpg",
        "https://m.media-amazon.com/images/I/21Tj-9egp7L.jpg",
        "https://m.media-amazon.com/images/I/21A6B-nOF6L.jpg"
    ],
    "product_category": "Electronics › Computers & Accessories › Computers & Tablets › Laptops › Traditional Laptops",
    "average_rating": 4.7,
    "total_reviews": 1006,
    "total_answered_questions": null,
    "model": "MGN93B/A",
    "aplus_present": false
}

app.get('/apple',(req,res)=>{
    res.json(Appledata)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Vatsal')
})
app.get('/login', (req, res) => {
    res.send('<h1>Please Login at webdev</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})