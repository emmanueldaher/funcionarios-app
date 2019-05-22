class Currency {
    private formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2
    });

    format(value: number) {
        return this.formatter.format(value);
    }
}

export default new Currency();
