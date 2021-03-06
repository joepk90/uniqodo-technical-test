import axios from 'axios';

axios.defaults.baseURL = 'https://your.uniqodo.com/code.php';

axios.interceptors.response.use(null, error => {

    // TODO why am I receiving a 500 status, not a 404? 
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;

    // unexpected errors (erros that shouldn't occur: network down, server down, database down, bug)
    // - Log them
    // - display a generic and freindly error message

    if (!expectedError) {
        // logger.log(error);
        // toast.error('unexpected error occured');
    }

    return Promise.reject(error);

});


export default {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
}