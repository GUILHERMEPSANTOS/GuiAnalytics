import { Result, ApiError, ErrorType } from '../../../common/domain/index.js';

class ListTrendsUseCase {
    async execute(access_token) {
        var response = await fetch("https://api.mercadolibre.com/trends/MLB", {
            headers: {
                "Authorization": `${access_token}`,
            },
        });

        var responseJson = await response.json();

        if (!response.ok)
            return Result.Failure(new ApiError({ code: `${responseJson.error}`, description: `${responseJson.error_description}`, type: ErrorType.Failure }));

        return Result.SuccessWithValue(responseJson);
    }
}

export { ListTrendsUseCase }