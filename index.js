const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/predict', async (req, res) => {
  try {
    // Données d'exemple statiques
    const inputData = {
      "Inputs": {
        "input1": [
          {
            "Vegetable": "potato",
            "Season": "winter",
            "Month": "jan",
            "Temp": 17,
            "Deasaster Happen in last 3month": "no",
            "Vegetable condition": "fresh"
          },
          {
            "Vegetable": "tomato",
            "Season": "winter",
            "Month": "jan",
            "Temp": 17,
            "Deasaster Happen in last 3month": "no",
            "Vegetable condition": "fresh"
          },
          {
            "Vegetable": "peas",
            "Season": "winter",
            "Month": "jan",
            "Temp": 17,
            "Deasaster Happen in last 3month": "no",
            "Vegetable condition": "fresh"
          }
        ]
      },
      "GlobalParameters": {}
    };

    const mlEndpoint = 'http://0e716dec-8f88-44b1-b174-a19500038284.westeurope.azurecontainer.io/score';
    const mlHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer vUmrMS6DAX0VlGlcpRxqDQz5CEET77lw'
    };

    const mlResponse = await axios.post(mlEndpoint, inputData, {
      headers: mlHeaders
    });

    res.json(mlResponse.data);
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'endpoint ML:', error);
    res.status(500).json({ error: 'Erreur lors de l\'appel à l\'endpoint ML' });
  }
});

app.listen(port, () => {
  console.log(`Function App démarrée sur le port ${port}`);
});
