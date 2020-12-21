import axios from './axios';

function getUniqodoData() {

    const axiosParams = {
        params: {
            "promo-name": "PROMOTION_2",
        }
    }

    return axios.get('', axiosParams);
}

export default getUniqodoData;