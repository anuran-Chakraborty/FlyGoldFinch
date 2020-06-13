import api from "./apiRequest";

export default {
    async currencyRequest(from_currency,to_currency) {
        return await api.connector("https://free.currconv.com").get(`/api/v7/convert?q=${from_currency}_${to_currency}&compact=ultra&apiKey=dd8e835c3d0a875afe5e`);
    }
};
