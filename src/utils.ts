export const date = (dateString: string): Date => {
    const extractDate = dateString
    .split('/')
    .map((value: string): number => {
        return parseInt(value);
    });
    return new Date(extractDate[2], extractDate[1] - 1, extractDate[0]);
};