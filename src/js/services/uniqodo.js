import axios from './axios';

function getUniqodoData(value) {

    if (!value) {
        return;
    }

    const axiosParams = {
        params: {
            "promo-name": value,
        }
    }

    return axios.get('', axiosParams);
}

export default getUniqodoData;