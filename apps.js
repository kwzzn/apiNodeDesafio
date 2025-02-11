const express = require('express');
const app = express();
const usuarioRoutes = require('./routes/routes');
const imageRoutes = require('./routes/routes');
app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/usuarios', imageRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
