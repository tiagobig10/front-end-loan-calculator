export const maskValue = (v) => {
    try {
        const d = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            maximumFractionDigits: 2,
            minimumFractionDigits: 2
        }).format(v / 100);

        return d;
    } catch (e) {
        return 0;
    }
};
