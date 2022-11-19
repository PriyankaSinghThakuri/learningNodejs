const os = require("os");

// ---for architecture of os
console.log(os.arch());

// --space in GB
console.log(os.freemem() / (1024 * 1024 * 1024));

// --Total space in GB
console.log(os.totalmem() / (1024 * 1024 * 1024));

// --name of system
console.log(os.hostname());

// --platform
console.log(os.platform());

// --user info
console.log(os.userInfo());
