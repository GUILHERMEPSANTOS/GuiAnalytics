import { Result, ApiError, ErrorType } from '../common/domain/index.js';

export class AuthenticationService {
    #client_id = process.env.ID;
    #client_secret = process.env.CLIENT_SECRET;
    #redirect_uri = process.env.REDIRECT_URL;

    async GetCodeUrl() {
        var response = await fetch(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${this.#client_id}&redirect_uri=${this.#redirect_uri}`);

        if (!response.ok)
            return Result.Failure(new ApiError({ code: "Dados.Invalidos", description: "Dados Inválidos", type: ErrorType.Failure }));

        return Result.SuccessWithValue(response.url);
    }

    async GetTokenUrl(code) {
        const params = new URLSearchParams();

        params.append('grant_type', 'authorization_code');
        params.append('client_id', this.#client_id);
        params.append('client_secret', this.#client_secret);
        params.append('code', code);
        params.append('redirect_uri', this.#redirect_uri);

        var response = await fetch("https://api.mercadolibre.com/oauth/token", {
            method: "POST", headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: params
        })

        var responseJson = await response.json();
 
        if (!response.ok)
            return Result.Failure(new ApiError({ code: `${responseJson.error}`, description: `${responseJson.error_description}`, type: ErrorType.Failure }));

        return Result.SuccessWithValue(responseJson);
    }
}