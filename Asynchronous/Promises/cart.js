function createOrder(cart) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order created for", cart);
            resolve(cart);
        }, 1000);
    });
}

function proceedToPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment successful for order: ${order}`);
            resolve(order);
        }, 2000);
    });
}

function showSummary(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Summary for order: ${order}`);
            resolve(order);
        }, 1000);
    });
}

function updateWallet(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Wallet updated after order: ${order}`);
            resolve();
        }, 500);
    });
}

// Execution
createOrder("Electronics")
    .then(proceedToPayment)
    .then(showSummary)
    .then(updateWallet)
    .catch((err) => console.error("Error:", err));
