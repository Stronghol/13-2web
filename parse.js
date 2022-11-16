const axios=require("axios");
const cheerio = require('cheerio');
const patch = require('path')
const fs = require('fs').promises;

async function log(text){
console.log(text)
await fs.appendFile('log.txt',text)
}

;(async()=>{
    const link='https://www.xcom-shop.ru/catalog/kompyutery_i_noytbyki/kompyutery/';
    await log()
    const result=await axios.get(link);

    const $=cheerio.load(result.data)

    const putKFailu=patch.resolve('links','url.txt')

    $('a.catalog_item__name.catalog_item__name--tiles').each(
        async(i,element)=>{
          const url =$(element).attr("href")
        console.log(linkText)
        await fs.appendFile(putKFailu,url+'\n')
    });

    
})()