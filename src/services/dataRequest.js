import api from "./apiRequest";

export default {
    async dataRequest() {
        return await api
            .connector("https://randomapi.com")
            .get("/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole");
    },
};
