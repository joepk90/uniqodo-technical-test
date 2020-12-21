import Promotions from './classes/promotions';
import Promotion from './classes/promotion';

import "../scss/style.scss";

document.addEventListener("DOMContentLoaded", async () => {

    const promotions = new Promotions();

    const promotionalElements = promotions.getPromotionsElements();

    Array.from(promotionalElements).forEach(promotionalElement => {

        const promotionHTML = new Promotion(promotionalElement)

        promotionHTML.updatePromotionHTML();

    });

});