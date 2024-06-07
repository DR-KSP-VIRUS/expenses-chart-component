import { fetchData } from '@/apis/graphApi';
import { bgGenerator, toTitleCase } from '@/helpers/textConvertor'
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
                        backgroundColor: this.getBgGenerator,
                        // label: 'Daily Expense',
                        data: this.transactions.map(d => d.amount),
                        borderRadius: 5,
                    },
                ],
                borderWidth: 0,
            }
        },

        getBgGenerator() {
            return bgGenerator(this.transactions);
        }
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