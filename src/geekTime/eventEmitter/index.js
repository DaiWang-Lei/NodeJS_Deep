const nodeEvent = require('./lib')

nodeEvent.addListener('newPrice', (res) => {
    if (res.price < 80) {
        console.log('芜湖，买它', res);
    }
})