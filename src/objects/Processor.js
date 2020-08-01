import Products from './Products';

export default class Processor {
    filteredProducts;
    isFinished;

    async beginProcessing(baseUrl, startUrl) {
        this.filteredProducts = [];
        this.isFinished = false;
        this.nextRequest = startUrl;
        while (!this.isFinished) {
            const nextResponse = await this.processNext(baseUrl, this.nextRequest);
            if (!nextResponse || nextResponse === "") {
                this.isFinished = true;
            } else {
                this.nextRequest = nextResponse;
            }
        }
        return this.calculateAverageCubicWeight();
    }

    processNext(baseUrl, nextUrl) {
        return fetch(baseUrl + nextUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const currentResponse = new Products(data);
                const newResults = currentResponse.getProductsByCategory("Air Conditioners");
                this.filteredProducts.push(...newResults);
                return currentResponse.next;
            });
    }

    calculateAverageCubicWeight() {
        const cubicWeights = this.filteredProducts.map((product) => {
            return this.calculateCubicWeightForProduct(product);
        });
        const cubicWeightSum = cubicWeights.reduce((a, b) => a + b, 0);
        const avgCubicWeight = cubicWeightSum / cubicWeights.length;
        return avgCubicWeight;
    }

    calculateCubicWeightForProduct(product) {
        const lengthInMeters = product.size.length / 100.0;
        const heightInMeters = product.size.height / 100.0;
        const widthInMeters = product.size.width / 100.0;
        const cubicMeters = lengthInMeters * heightInMeters * widthInMeters;
        return cubicMeters * 250;
    }
}