// process.env.UV_THREADPOOL_SIZE = 2;

const crypto = require('crypto');

const iterations = 1;

function expensiveOperation(instance, startTime) {
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


