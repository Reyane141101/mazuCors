module.exports = async function (context, req) {
    context.log('Function triggered.');
  
    try {
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
  
      // Effectuer une requête HTTP vers votre endpoint ML
      const response = await fetch(mlEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer vUmrMS6DAX0VlGlcpRxqDQz5CEET77lw',
        },
        body: JSON.stringify(inputData),
      });
  
      // Analyser la réponse du endpoint ML
      const data = await response.json();
  
      // Renvoyer les résultats
      context.res = {
        status: 200,
        body: data,
      };
    } catch (error) {
      context.log.error('Erreur lors de l\'appel à l\'endpoint ML:', error);
  
      // Renvoyer une erreur en cas d'échec
      context.res = {
        status: 500,
        body: { error: 'Erreur lors de l\'appel à l\'endpoint ML' },
      };
    }
  };
  