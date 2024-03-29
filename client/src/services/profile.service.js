import axios from "axios";

const API_URL = 'https://invsys-1.onrender.com/api/profile/';

class ProfileService {

    getall() {
        return axios.get(API_URL + "getall");
    }

    get(username) {
        return axios.get(API_URL + username);
    }

    update(username, data) {
        console.log(data);
        return axios.put(API_URL + "update/" + username, { data });
    }

    findByName(first_name) {
        return axios.get(API_URL + "getall?first_name=" + first_name);
    }

}

export default new ProfileService();