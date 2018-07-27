// process.env.UV_THREADPOOL_SIZE = 4;

const crypto = require('crypto');

let startTime = null;

function expensiveOperation(instance, startTime) {
    crypto.pbkdf2('password', 'someSalt', 100000, 512, 'sha512', () => {
        console.log(`${instance}: `, Date.now() - startTime);
    });
}

function expensiveSyncOperation(instance, startTime) {
    crypto.pbkdf2Sync('password', 'someSalt', 100000, 512, 'sha512');
    console.log(`${instance}: `, Date.now() - startTime);
}

function multipleExpensiveOperations(num) {
    startTime = Date.now();
    for (let i = 0; i < num; i++) {
        expensiveOperation(i + 1, startTime);
    }
}

multipleExpensiveOperations(2);


