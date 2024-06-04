import { fetchData } from '@/apis/graphApi';
import { toTitleCase } from '@/helpers/textConvertor'
import { defineStore } from 'pinia';

export const useGraphStore = defineStore('graphStore', {
    state: () => ({
        transactions: [],
    }),
    getters: {
        getBalance() {
            return this.transactions.reduce((acc, transaction) => {
                return acc += transaction.amount;
            }, 0);
        },
        getChartData() {
            return {
                labels: this.transactions.map(d => toTitleCase(d.day)),
                datasets: [
                    {
                        backgroundColor: [
                            '#1963a3',
                            '#a34019',
                            '#1ea319',
                            '#19a391',
                            '#9719a3',
                        ],
                        // label: 'Daily Expense',
                        data: this.transactions.map(d => d.amount)
                    }
                ]
            }
        },
    },
    actions: {
        async loadTransactions() {
            try {
                const res = await fetchData();
                this.transactions = await res;
            } catch (error) {
                console.log(error);
            }
        }
    },
});