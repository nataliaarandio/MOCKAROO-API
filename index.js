const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3006;

// Ruta para obtener datos de Mockaroo
app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api.mockaroo.com/api/generate.json', {
            params: {
                key: '9b592700',
                schema: 'EditProfile', 
                count: 100
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error al obtener datos de Mockaroo:', error.message);
        res.status(500).json({ error: 'Error al obtener datos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});