import axios from "axios";
export const request = ({url, method, data}) => {
    return axios({
        method: method || 'get',
        url: 'http://localhost:5000/api/users',
        data,
    });
}

