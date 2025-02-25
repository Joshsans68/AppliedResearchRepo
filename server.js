const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

const players = [
    { name: "DeGea", position: "goalkeeper", image: "degea.png" },
    { name: "Alisson", position: "goalkeeper", image: "alisson.png" },
    { name: "Ederson", position: "goalkeeper", image: "ederson.png" },
    { name: "Van-Dijk", position: "defender", image: "van dijk.png" },
    { name: "Ruben-Diaz", position: "defender", image: "ruben.png" },
    { name: "Marquinhos", position: "defender", image: "marqui.png" },
    { name: "Antonio Rüdiger", position: "defender", image: "rudiger.png" }
];

app.get('/players', (req, res) => {
    res.json(players);
});

app.get('/news', async (req, res) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                category: 'sports',
                q: 'soccer',
                apiKey: 'YOUR_NEWSAPI_KEY'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
