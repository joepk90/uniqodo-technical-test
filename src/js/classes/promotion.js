import getUniqodoData from '../services/uniqodo';

const Promotion = class {

    constructor(promoElement) {
        this.promoElement = promoElement;
    }

    promoElementHasChildElements() {

        if (this.promoElement.childElementCount === 0) {
            return false;
        }

        return true;
    }

    getPromotionalElement() {

        let element = this.promoElement;
        if (this.promoElementHasChildElements() === true) {
            element = this.promoElement.lastChild;
        }

        return element;

    }

    /**
     * check for valid promtional element
     */
    getPromotionCode() {

        const promoElement = this.getPromotionalElement();

        return promoElement.innerText;

    }

    /**
     * TO DO remove duplication here, 
     * @param {*} text 
     */
    updatePromotionElement(text) {

        const promoElement = this.getPromotionalElement();

        promoElement.innerText = text;

    }

    async getPromotionalCode() {

        const promoCode = this.getPromotionCode();

        if (!promoCode) {
            return;
        }

        let uniqodoResponse;
        try {
            uniqodoResponse = await getUniqodoData(promoCode);
        }
        catch (err) {
            console.log(err.message);
        }

        return uniqodoResponse;

    }

    async updatePromotionHTML() {

        const promoCode = await this.getPromotionalCode();

        if (!promoCode) return;

        this.updatePromotionElement(promoCode.data.code)

    }

}

export default Promotion;