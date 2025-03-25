export const useInvoiceServices = () => {
    const getInvoiceService = () => {
        return [
            {
                id: 1,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: 'client_1',
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 2,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: 'client_2',
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 3,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: 'client_1',
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 4,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: 'client_2',
                subject: 'service_payment',
                amount: '₪ 3348',
            },
        ]
    }
    return { getInvoiceService };
}