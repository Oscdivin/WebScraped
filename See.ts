
import cors from "cors"
import express, { Application } from "express"
import puppeteer from "puppeteer";

const URL = "https://row.gymshark.com/collections/outlet"

const port:number =3452

const app:Application = express();

// const url = "https://row.gymshark.com/collections/outlet";

app.use(cors())
app.use(express.json())

const webScriptData =async () => {
 const webBrowser = await puppeteer.launch({ headless: false});

    try {
 const webBrowserTab = await webBrowser.newPage();
 await webBrowserTab.goto(URL,{waitUntil: "load"})       
 const scroller =async () => {
    await webBrowserTab.evaluate(()=>{
    window.scrollBy(0,window.innerHeight)
    })
 };
 for(let i:number = 0; i < 15; i++){
    await scroller();
    await webBrowserTab.waitForTimeout(3000)
 }
    } catch (error:any) {
        console.log(`error executing script 😂😂😂: ${error}`);
    }finally{
        await webBrowser.close()
        console.log(`executed`);
    }
}
webScriptData()

// const scrapae =async () => {
//     const browser = await puppeteer.launch({headless: false})
//     try {
//         const tab = await browser.newPage();
//         await tab.goto(URL, {waitUntil: "load"})

//         const Scrapae =async () => {
//         };
//         for(let i:number = 0; i < 15; i++){
//             await Scrapae();
            
//         }
        

//     } catch (error:any) {
//         console.log(`error: ${error}`);
//     }finally{
//         await browser.close()
//         console.log(`executed`);

//     }
// };
// scrapae();

app.listen(port, ()=>{
    console.log()
    console.log("server is run...🚀❤️🚀❤️😁")
})