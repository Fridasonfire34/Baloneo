import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Servir archivos estáticos de la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Ruta principal
app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Iniciar el servidor
app.listen(port, '0.0.0.0', () => {  // Cambiado a '0.0.0.0'
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
