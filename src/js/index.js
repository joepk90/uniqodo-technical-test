import getUniqodoData from './services/uniqodo';

import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", async () => {

    const data = await getUniqodoData();

    console.log(data);

});