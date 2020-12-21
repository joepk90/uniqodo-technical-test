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

    /**
   * check for valid promtional element
   */
    getPromotionalElement() {

        let element = this.promoElement;
        if (this.promoElementHasChildElements() === true) {
            element = this.promoElement.lastChild;
        }

        return element;

    }

    getPromotionCode() {

        const promoElement = this.getPromotionalElement();

        return promoElement.innerText;

    }

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

        if (!promoCode || !promoCode.data || !promoCode.data.code) return;

        this.updatePromotionElement(promoCode.data.code)

    }

}

export default Promotion;