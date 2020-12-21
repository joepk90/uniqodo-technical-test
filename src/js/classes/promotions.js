const Promotions = class {

    constructor() {
        this.promotionalDomElements = this.getPromotionDomElements();
    }

    getPromotionDomElements() {
        return document.getElementsByClassName('promo');
    }

    /**
     * check for valid promtional element
     */
    getPromotionElement(element) {

        if (element.childElementCount === 0) {
            return element.innerText;
        }

        return element.lastChild.innerText;

    }

    getPromotionsElements() {

        if (!this.promotionalDomElements || this.promotionalDomElements.length === 0) {
            return [];
        }

        return Array.from(this.promotionalDomElements).map(promotionalDomElement => {
            return this.getPromotionElement(promotionalDomElement)
        });
    }

}

export default Promotions;