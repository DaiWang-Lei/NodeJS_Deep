const nunjucks = require('nunjucks')

function createEnv(path, opts) {
    var autoescape = opts.autoescape === undefined ? true : opts.autoescape,
        noCache = opts.noCache || false,
        wtach = opts.wtach || false,
        throwOnUndefined = opts.throwOnUndefined || false,
        env = new nunjucks.Environment(
            new nunjucks.FileSystemLoader('views', {
                noCache: noCache,
                watch: wtach,
            }), {
            autoescape: autoescape,
            throwOnUndefined: throwOnUndefined
        })

        if(opts.filters){
            for(var f in opts.filters){
                env.addFilter(f,opts.filters[f])
            }
        }
        return env;
}

var env = createEnv('views',{
    watch:true,
    filters:{
        hex:function(n){
            return '0x'+n.toString(16)
        }
    }
})

    
    var s = env.render('hello.html',{name:'<script>alert("代罔！")</script>代罔'})
console.log(s);