import Promotions from './classes/promotions';
import Promotion from './classes/promotion';

import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", async () => {

    const promotions = new Promotions();

    const promotionalElements = promotions.getPromotionsElements();

    if (!promotionalElements || promotionalElements.length === 0) {
        return;
    }

    const promotionalElementsPromises = [];
    promotionalElements.forEach(promotionalElement => {

        const promotionHTML = new Promotion(promotionalElement);

        const promotionalCodePromise = new Promise((resolve, reject) => {

            try {
                promotionHTML.updatePromotionHTML();
                resolve();
            } catch (err) {
                reject(err);
            }

        });

        promotionalElementsPromises.push(promotionalCodePromise);

    });

    Promise.all(promotionalElementsPromises);

});
