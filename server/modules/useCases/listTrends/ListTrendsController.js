class ListTrendsController {
    #listCategoriesUseCase;

    constructor(listCategoriesUseCase) {
        this.#listCategoriesUseCase = listCategoriesUseCase;
    }

    async handle(req, res) {
        var access_token = req.headers['authorization'];
        
        var result = await this.#listCategoriesUseCase.execute(access_token);

        if (result.IsFailure) {
            res.status(400).json(result.error);
        }

        res.status(200).json(result.Value);
    }
}

export { ListTrendsController }