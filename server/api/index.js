import express from 'express';
import cors from 'cors'
import { AuthenticationService } from '../service/authentication-meli.js';

const app = express()
const port = 3000

app.use(cors({ origin: "*" }));

app.get('/mercado-livre/auth', async (_, res) => {
    var authenticationService = new AuthenticationService();
    var result = await authenticationService.GetAuthUrl();

    if (result.IsFailure) {
        res.status(400).json(result.error);
    }

    res.status(301).redirect(result.Value);
});


app.listen(port, () => console.log('Server ready on port 3000.'));

module.export = app;