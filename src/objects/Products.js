export default class Products {
    next;
    products;

    constructor(response) {
        this.products = (response.objects) ? response.objects : [];
        this.next = (response.next) ? response.next : "";
    }

    getProductsByCategory(category) {
        return this.products.filter((product) => {
            return product.category === category;
        });
    }
}