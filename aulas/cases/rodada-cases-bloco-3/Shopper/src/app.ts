import express from 'express';
import { AddressInfo } from 'net';

const app = express()
app.use(express.json());

const server = app.listen(process.env.DB_PORT || 3000, () => {
    if (server) {
        const adress = server.address() as AddressInfo
        console.log(`Server running in http://localhost:${adress.port}`)
    } else {
        console.error(`Failure upon starting server.`);
    }
})

export default app;