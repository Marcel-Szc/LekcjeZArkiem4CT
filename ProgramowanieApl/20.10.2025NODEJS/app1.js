//importowanie i exportowanie modułów
const os = require('os');

console.log(`
    OS version: ${os.version()},
    OS type: ${os.type()},
    OS uptime: ${os.uptime()},
    OS platform: ${os.platform()},
    OS release: ${os.release()},
    OS hostname: ${os.hostname()},
    OS totalmem: ${os.totalmem()},

`);