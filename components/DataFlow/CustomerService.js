"use client";
import axios from 'axios';

export const ProductService = {
    getProductsData() {
        return axios.get('https://data-flow.exportgenius.com/eg_data.data_availability1')
            .then(response => response.data)
            .catch(error => {
                console.error('Error fetching data from API:', error);
                return [];
            });
    },

    getProductsMini() {
        return this.getProductsData().then(data => data.slice(0, 10));
    },

    getProductsSmall() {
        return this.getProductsData().then(data => data.slice(0, 10));
    },

    getProducts() {
        return this.getProductsData();
    }
};
