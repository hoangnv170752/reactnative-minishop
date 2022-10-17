import axios from "axios";
import Config from 'react-native-config';
export const request = ({url, method, data}) => {
    return axios({
        method: method || 'get',
        url: 'http://localhost:5000/api/users',
        data,
    });
}

request({url, data})