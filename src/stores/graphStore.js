import { fetchData } from '@/apis/graphApi';
import { defineStore } from 'pinia';

export const useGraphStore = defineStore('graphStore', {
    state: () => ({
        transactions: [],
        loading: false,
    }),
    getters: {
        getBalance() {
            return this.transactions.reduce((acc, transaction) => {
                return acc += transaction.amount;
            }, 0);
        },
        async getTransactions() {
            try {
                this.loading = true;
                const res = await fetchData()
                this.transactions = res;
                this.loading = false;
            } catch (error) {
                this.loading = false;
                console.log(error);
            }
        }
    },

});