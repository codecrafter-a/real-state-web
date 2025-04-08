import { useTranslation } from "react-i18next";
export const useInvoiceServices = (clientName) => {
    const {t} = useTranslation();
    const getInvoiceService = () => {   
      const data = [
            {
                id: 1,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: t('client_1'),
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 2,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: t('client_2'),
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 3,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: t('client_1'),
                subject: 'service_payment',
                amount: '₪ 3348',
            },
            {
                id: 4,
                accountNumber: '224567',
                date: '06.06.24',
                clientNames: t('client_2'),
                subject: 'service_payment',
                amount: '₪ 3348',
            },
        ];

        const searchQuery = clientName?.toString().trim().toLowerCase();
        if (searchQuery) {
            return data.filter((invoice) =>
                invoice.clientNames.toLowerCase().includes(searchQuery)
            );
        }



        return data;
        
    };
    return { getInvoiceService };
};