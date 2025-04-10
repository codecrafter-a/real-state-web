import { useTranslation } from "react-i18next";
export const useInvoiceServices = (clientName, fromDate, untilDate) => {
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
        let filteredData = data;
        if (fromDate && untilDate) {
            const parseDate = (dateStr) => {
              const [day, month, year] = dateStr.split(".");
              return new Date(`20${year}`, month - 1, day);
            };
      
            const from = new Date(fromDate);
            const until = new Date(untilDate);
      
            filteredData = filteredData.filter((invoice) => {
              const invoiceDate = parseDate(invoice.date);
              return invoiceDate >= from && invoiceDate <= until;
            });
          }
        return data && filteredData;
};
    return { getInvoiceService };
};