import express from 'express';
import cors from 'cors'
import { AuthenticationService } from '../service/authentication-meli.js';

import { router } from '../routes/index.js';

const app = express()
const port = 3000

app.use(router);
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


var authenticationService = new AuthenticationService();

app.get('/', async (_, res) => {
    var result = await authenticationService.GetCodeUrl();

    if (result.IsFailure) {
        res.status(400).json(result.error);
    }

    res.status(301).redirect(result.Value);
});

app.post("/mercado-livre/token", async (req, res) => {
    var result = await authenticationService.GetTokenUrl(req.body.code);

    if (result.IsFailure) {
        res.status(400).json(result.error);
    }

    res.status(200).json(result.Value);
})


app.listen(port, () => console.log('Server ready on port 3000.'));