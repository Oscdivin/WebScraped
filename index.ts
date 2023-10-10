import cors from "cors"
import express, {Application, Request, Response} from "express"
import path from "path"
import fs from "fs"
import puppeteer from "puppeteer"


const app: Application =express()
// const URL: string = "https://www.google.com/";
// const URL: string = "https://dribbble.com/";
// const URL: string = "https://punchng.com/topics/news/";
// const URL: string = "https://www.jumia.com.ng/womens-bags/";
const URL: string = "https://www.farfetch.com/ng/shopping/men/items.aspx";
// const URL: string = "https://www.jumia.com.ng/catalog/?q=laptop+bags";
// const URL: string = "https://www.newea.org/about-us/";
// const URL: string = "https://sunnewsonline.com/category/national/";

app.use(cors())
app.use(express.json())

// const mainScript = async () =>{
//   const browser = await puppeteer.launch({headless:false });
//     try {
//        const page = await browser.newPage()
//        await page.goto(URL,{waitUntil: "load"})
//        await page.waitForTimeout(10)

//        const scrollDow = async () =>{
//         await page.evaluate(()=>{
//             window.scrollBy(0,window.innerHeight);
//         })
//        }
//        for(let i:number = 0; i < 6; i++){
//            scrollDow()
//            await page.waitForTimeout(100);
//        }
//        await page.screenshot({
//         path: path.join(
//           __dirname,
//           "images",
//           `./dribbbleFull${Math.floor(Math.random() * 10) + Date.now()}.png`
//         )
//         // "./dribbleFull.png",
//       })
//       fullPage: true
//     } catch (error) {
//         console.log(error);
//     } finally{
//         console.log();
//         await browser.close()
        
//         console.log("I`m done scraping: 😁😁😁😁😁😁😁😁🔏");
//     }
// }
// mainScript(); 



desc:".post-expcerpt"
Image: ".post-image.st"
url: "h1 a"
date: "div span.post-date"

// const paparScript = async () =>{
//   let savedData: Array<{}> = [];
//   const browser = await puppeteer.launch({
//     headless: false,
//   });
//   try {
//     const page = await browser.newPage();
//     await page.goto("https://www.newea.org/about-us/", { waitUntil: "load" })
//     // await page.goto("https://punchng.com/topics/news/", { waitUntil: "load" })

//     await page.waitForTimeout(2000);

//     const scroll = async () =>{
//       await page.evaluate(()=>{
//         window.scrollBy(0, window.innerHeight)
//       });
//     };

//     for (let i: number =0; i <=20; i++){
//       scroll();
//       await page.waitForTimeout(2000)
//     }

//     const data = await page.evaluate(()=>{
//       const data = Array.from(document.querySelectorAll("article"));

//       return data.map((props)=>({
//         title: props.querySelector("h1")?.textContent,
//         url: props.querySelector("h1 a")?.getAttribute("href"),
//         desc: props.querySelector(".post-excerpt")?.textContent,
//         img: props.querySelector(".post-image.st")?.getAttribute("src"),
//         date: props.querySelector("div span.post-date")?.textContent,
//       }));
//     });
//     fs.writeFile(
//       path.join(__dirname,"scrapedData",`./data.json`),
//       JSON.stringify(data),
//       () =>{
//      console.log();
//      console.log("done scrsping");  
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   } finally{
//     await browser.close();
//     console.log("done");
    
//   }
// }
// paparScript();
// const paparScriptii = async () =>{
//   const browser = await puppeteer.launch({
//     headless: false,
//   })
//   try {
//     const page = await browser.newPage();
//     await page.goto("https://sunnewsonline.com/category/national/",{
//       waitUntil: "load",
//     });
//     await page.waitForTimeout(2000)
//     const sceoll = async () =>{
//       await page.evaluate(()=>{
//         window.scrollBy(0, window.innerHeight)
//       });
//     };

//   for (let i: number =0; i <= 20; i++){
//     scroll();
//     await page.waitForTimeout(3000)
//   }
//   const data = await page.evaluate(()=>{
//     const data = Array.from(document.querySelectorAll("a"))

//    return data.map((props)=>({
//     title:props.querySelector("h3")?.textContent,
//     img:props
//     .querySelector("img.archive-grid-single-img.st")
//     ?.getAttribute("src"),
//     date: props.querySelector("span:nth-child(1")?.textContent,
//    }));
//   });

//   fs.writeFile(
//     path.join(__dirname, "scrapedData", `./data.json`),
//     JSON.stringify(data),
//     () =>{
//       console.log();
//       console.log("done scraping");
       
//     }
//   )
//   } catch (error) {
//     console.log(error);
//   } finally{
//     await browser.close();
//     console.log("done");
//   }
// }
// paparScriptii()




// async function ourBrowser(
//   article:string
//     //   title: string,
//   //   image: string,
//   //   rating: string,
//   //   url: string
// ){
//  const browser = await puppeteer.launch({ headless: false});
//  try {
//     const page = await browser.newPage();
//     await page.goto(URL)

//     const scrollDown = async () =>{
//       await page.evaluate(()=>{
//         window.scrollBy(0, window.innerHeight)
//       })
//     };
//     for(let i: number = 0; i <=14; i++){
//   await scrollDown()
//   await page.waitForTimeout(1000)
//     }

//     const data = await page.evaluate((URL)=>{
//       const helper = (data: string)=>{
//         return parseFloat(data)
//       };
//       const data = Array.from(document.querySelectorAll(article));
//       return data.map((props) => ({
//         div: props.querySelector("div")?.textContent,
//         img: props.querySelector("img")?.getAttribute("srcset"),
//         rating: helper(
//           props.querySelector("p")?.getAttribute("data-dimension27")!
//         ),
//         url: URL + props.querySelector("a")?.getAttribute("href"),
//       }));

//     }, URL);
//   console.log(data);
//     console.log("Article:", article);
//  } catch (error) {
//   console.log(error);
  
//  }finally{
//   console.log("done");
//   await browser.close()
//  }
// }
// ourBrowser(
//   "article"
//   // "h3";
//   // "img",
//   //  "a",
//   //  "a"
// );
// app.get("/", (req:Request, res:Response)=>{
//   try {
//     return res.status(200).json({
//       message:"set07 web scraping class"
//     })
//   } catch (error) {
//     return res.status(404).json({
//       message: "Error"
//     })
//   }
// })

const farfetch = async () =>{
  let savedData: Array<{}> = [];
  const browser = await puppeteer.launch({
    headless: false,
  });
  try {
    const page = await browser.newPage();
    await page.goto("https://www.farfetch.com/ng/shopping/men/items.aspx", { waitUntil: "load" })
    // await page.goto("https://punchng.com/topics/news/", { waitUntil: "load" })

    await page.waitForTimeout(2000);

    const scroll = async () =>{
      await page.evaluate(()=>{
        window.scrollBy(0, window.innerHeight)
      });
    };

    for (let i: number =0; i <=10; i++){
      scroll();
      await page.waitForTimeout(2000)
    }

    const data = await page.evaluate(()=>{
      const data = Array.from(document.querySelectorAll("div"));

      return data.map((props)=>({
        p: props.querySelector("p")?.textContent,
        a: props.querySelector("a")?.getAttribute("href"),
        // url: props.querySelector("h1 a")?.getAttribute("href"),
        desc: props.querySelector(".post-excerpt")?.textContent,
        title: props.querySelector("Grifone leather loafers")?.getAttribute(""),
        date: props.querySelector("div span.post-date")?.textContent,
      }));
    });
    fs.writeFile(
      path.join(__dirname,"scrapedData",`./data.json`),
      JSON.stringify(data),
      () =>{
     console.log();
     console.log("done scrsping");  
      }
    );
  } catch (error) {
    console.log(error);
  } finally{
    await browser.close();
    console.log("done");
    
  }
}
farfetch();


app.listen(3000, () =>{
  console.log();
  console.log("server connected .......6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣6️⃣");
})