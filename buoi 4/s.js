function tong(n) {
    if (n <= 0) {
        return 0;
    }
    return (n * (n + 1)) / 2;
}
console.log(tong(5));
console.log(tong(10));
console.log(tong(0)); 
console.log(tong(-3));
