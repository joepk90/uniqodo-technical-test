const Promotions = class {

    constructor() {
        this.promotionalDomElements = this.getPromotionDomElements();
    }

    getPromotionDomElements() {
        return document.getElementsByClassName('promo');
    }

    getPromotionsElements() {

        if (!this.promotionalDomElements || this.promotionalDomElements.length === 0) {
            return [];
        }

        return Array.from(this.promotionalDomElements);
    }

}

export default Promotions;