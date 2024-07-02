const os = require('os');

//Info aboy the current user
const user = os.userInfo();
console.log(user);

//method return the system uptime in seconds
console.log(`This System Uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);