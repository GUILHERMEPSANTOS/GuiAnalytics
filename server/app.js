import { AuthenticationService } from "./service/authentication-meli.js";

var authentication = new AuthenticationService();

(async () => {
    const result = await authentication.GetToken();

    if (result.IsSuccess) {
        console.log("IsSuccess", result.Value);
    }
    console.log("IsFailure", result)
})();