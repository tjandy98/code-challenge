// Assumptions: Input n contains positive integers only

var sum_to_n_a = function(n) {

    // simple for loop
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

var sum_to_n_b = function(n) {

    // summation formula
    return (n * (n + 1)) / 2
};

var sum_to_n_c = function(n) {
    if (n <= 0){
        return 0;
    }
    // recursion
    if (n === 1){
        return 1;
    }
    return n + sum_to_n_c(n-1);
};


console.log(sum_to_n_a(5) === 15);
console.log(sum_to_n_b(5) === 15);
console.log(sum_to_n_c(5) === 15);
