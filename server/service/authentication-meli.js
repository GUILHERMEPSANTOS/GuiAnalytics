import { Result, ApiError, ErrorType } from '../common/domain/index.js';

export class AuthenticationService {
    #client_id = process.env.ID;
    #redirect_uri = process.env.REDIRECT_URL;

    async GetToken() {
        var response = await fetch(`https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=${this.#client_id}&redirect_uri=${this.#redirect_uri}`);

        if (!response.ok) return Result.Failure(new ApiError({ code: "Dados.Invalidos", description: "Dados Inválidos", type: ErrorType.Failure }));

        return Result.SuccessWithValue(response.url);
    }
}