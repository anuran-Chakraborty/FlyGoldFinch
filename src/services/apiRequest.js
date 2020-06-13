import axios from "axios";

export default {
    connector(serverURL) {
        return axios.create({
            baseURL: `${serverURL}`
        });
    }
};
