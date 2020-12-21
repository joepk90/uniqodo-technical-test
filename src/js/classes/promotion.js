import getUniqodoData from '../services/uniqodo';

const Promotion = class {

    constructor(promoElement) {
        this.promoElement = promoElement;
    }

    /**
     * check for valid promtional element
     */
    getPromotionCode() {

        if (this.promoElement.childElementCount === 0) {
            return this.promoElement.innerText;
        }

        return this.promoElement.lastChild.innerText;

    }

    updatePromotionElement(text) {

        if (this.promoElement.childElementCount === 0) {
            return this.promoElement.innerText = text;
        }

        return this.promoElement.lastChild.innerText = text;

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