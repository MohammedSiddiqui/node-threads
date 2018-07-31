// process.env.UV_THREADPOOL_SIZE = 2;
// process.env.UV_THREADPOOL_SIZE = 5;

const crypto = require('crypto');

const iterations = 1;

function expensiveOperation(instance, startTime) {
    // PBKDF2 is a hash generating function
    crypto.pbkdf2('password', 'someSalt', 100000, 512, 'sha512', () => {
        console.log(`${instance}: `, Date.now() - startTime);
    });
}

function multipleExpensiveOperations(iter) {
    let startTime = Date.now();
    for (let i = 0; i < iter; i++) {
        expensiveOperation(i + 1, startTime);
    }
}

function init() {
    multipleExpensiveOperations(iterations);
}

init();

// function expensiveSyncOperation(instance, startTime) {
//     crypto.pbkdf2Sync('password', 'someSalt', 100000, 512, 'sha512');
//     console.log(`${instance}: `, Date.now() - startTime);
// }


