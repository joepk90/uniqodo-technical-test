import axios from './axios';

function getUniqodoData(value) {

    const axiosParams = {
        params: {
            "promo-name": value,
        }
    }

    return axios.get('', axiosParams);
}

export default getUniqodoData;