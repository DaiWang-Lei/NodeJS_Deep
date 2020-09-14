const os = require('os')
console.log(os.arch());
// console.log(os.cpus());
console.log(`内存中可用的字节数：${os.freemem()}`);
console.log(`当前用户主目录的路径：${os.homedir()}`);
console.log(`主机名：${os.hostname()}`);
console.log(`操作系统对负载平均值的计算：${os.loadavg()}`);
// console.log(`系统中可用的网络接口的详细信息：${os.networkInterfaces()}`);
console.log(`Node.js编译的平台：${os.platform()}`);
console.log(`标识操作系统版本号的字符串：${os.release()}`);
console.log(`分配到的临时文件夹的目录：${os.totalmem()}`);
console.log(`标识操作系统：${os.type()}`);
console.log(`计算机自上次重新启动以来一直运行的秒数：${os.uptime()}`);
console.log(`当前用户信息:${JSON.stringify(os.userInfo())}`);