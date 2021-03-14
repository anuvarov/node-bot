const { bot } = require('../core/bot')
const { Composer, Markup } = require('telegraf')
const composer = new Composer()

const message = {
    "hafta": " Xurmatli foydalanuvchi botimizga xush kelibsiz! \n Dars jadvalini bilish uchun quyidagi tugmalardan birini bosing.",
    "du": ` 1. Xitoy tili \n2. Xitoy iqtisodiyot \n3. Makro va mikro iqtisodiyot`,
    "se": ` 1. \n2. Xitoy tili \n3. Ingliz tili`,
    "ch": `1. Xitoy iqtisodiyoti \n2. Xitoy tili \n3.Makro va mikro iqtisodiyot`,
    "pa": `1. Xitoy tili \n2. Xitoy tili \n3. O'zbekiston iqtisodiyoti`,
    "ju": `1. \n2. Axborot soati \n3. Ekonometrika asoslari`,
    "sh": `1. Iqtisodiyotda matematik usullar va modellashtirish \n2. Ingliz tili \n3. O'zbekiston iqtisodiyoti`
}
const keyboards = {
    "dars": Markup.inlineKeyboard([Markup.callbackButton("Dushanba", "du"),
        Markup.callbackButton("Seshanba", "se"),
        Markup.callbackButton("Chorshanba", "ch"),
        Markup.callbackButton("Payshanba", "pa"),
        Markup.callbackButton("Juma", "ju"),
        Markup.callbackButton("Shanba", "sh")], {
            columns: 3
        })
}

composer.start(ctx => {
    ctx.replyWithHTML(message['hafta'], {
        reply_markup: keyboards['dars']
    }).then()
})

composer.action('du', ctx => {
    ctx.editMessageText(message['du'], {
        parse_mode: "HTML"
    }).then()
})

composer.action('se', ctx => {
    ctx.editMessageText(message['se'], {
        parse_mode: "HTML"
    }).then()
})

composer.action('ch', ctx => {
    ctx.editMessageText(message['ch'], {
        parse_mode: "HTML"
    }).then()
})

composer.action('pa', ctx => {
    ctx.editMessageText(message['pa'], {
        parse_mode: "HTML"
    }).then()
})

composer.action('ju', ctx => {
    ctx.editMessageText(message['ju'], {
        parse_mode: "HTML"
    }).then()
})

composer.action('sh', ctx => {
    ctx.editMessageText(message['sh'], {
        parse_mode: "HTML"
    }).then()
})


bot.use(composer.middleware())