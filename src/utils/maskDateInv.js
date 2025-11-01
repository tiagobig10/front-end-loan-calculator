export const maskDateInv = (v) => {
    try {
        v = v.replace(/\D/g, '/');
        v = `${v.split('/')[2]}/${v.split('/')[1]}/${v.split('/')[0]}`;
        return v;
    } catch (error) {
        return v;
    }
};
