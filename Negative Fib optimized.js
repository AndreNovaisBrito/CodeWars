function fib(n) {
    let a = BigDecimal(0);
    let b = BigDecimal(1);
    if(n === 0) return a;
    if (n === 1 || n === -1) return b;
    if (n < 0) return (BigDecimal(-1)) ** (BigDecimal(n) % BigDecimal(2) + BigDecimal(1)) * fib (-n);

    const sqrt5 = BigDecimal(Math.sqrt(5));
    const phi = (sqrt5 + BigDecimal(1))/ BigDecimal(2);
    const res = (phi ** BigDecimal(n) - (BigDecimal(1) - phi) ** BigDecimal(n)) / sqrt5;
    return res >> 0
}