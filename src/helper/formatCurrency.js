export const rupiah = (number) => {
    if (!number) return 0.00
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(number);
}