export const isOnSameMonth = (date: Date) => {
    const now = new Date(Date.now());
    return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
}
