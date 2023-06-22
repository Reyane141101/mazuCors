const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Route pour l'endpoint de votre application web
app.post('/api/predict', async (req, res) => {
  try {
    const inputData = req.body; // Données envoyées par votre application web
    const mlEndpoint = 'http://0e716dec-8f88-44b1-b174-a19500038284.westeurope.azurecontainer.io/score'; // URL de votre endpoint ML

    // Effectuer une requête HTTP vers votre endpoint ML
    const response = await axios.post(mlEndpoint, inputData, {
      headers: {
        'Content-Type': 'application/json',
        'Autorization': 'Bearer vUmrMS6DAX0VlGlcpRxqDQz5CEET77lw'
      },
    });

    // Renvoyer les résultats au client (votre application web)
    res.json("HELLO ZEBOOOOOOOOO");
  } catch (error) {
    console.error('Erreur lors de l\'appel à l\'endpoint ML:', error);
    res.status(500).json({ error: 'Erreur lors de l\'appel à l\'endpoint ML' });
  }
});

app.listen(port, () => {
  console.log(`Function App démarrée sur le port ${port}`);
});
