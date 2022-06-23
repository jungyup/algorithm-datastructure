/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
    // constraints
    // what if array lengths are not same
    // what if all arrays are empty

    // declare variables to store max profit and max profit for each worker
    let maxProfit = 0;
    let workerMaxProfit = 0;

    // loop through each worker to find out their own max profit
    worker.forEach((item) => {
        // loop through difficulty array and if worker is higher
        // than compare to workerMaxProfit to store worker's max profit
        difficulty.forEach((el, index) => {
            if (item >= el) {
                workerMaxProfit = Math.max(workerMaxProfit, profit[index]);
            }
        });

        // add worker's individual max proit to have sum
        // then, reset the worker's individual max profit for next iteration
        maxProfit += workerMaxProfit;
        workerMaxProfit = 0;
    });

    return maxProfit;
};
