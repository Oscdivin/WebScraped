import cors from "cors"
import express, {Application} from "express"
import path from "path"
import fs from "fs"
import puppeteer from "puppeteer"


const app: Application =express()

const URL: string = "https://www.farfetch.com/ng/shopping/men/items.aspx";


app.use(cors())
app.use(express.json())

const farfetch = async () =>{
  let savedData: Array<{}> = [];
  const browser = await puppeteer.launch({
    headless: false,
  });
  try {
    const page = await browser.newPage();
    await page.goto("https://www.farfetch.com/ng/shopping/men/items.aspx", { waitUntil: "load" })

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
        url: props.querySelector("h1 a")?.getAttribute("href"),
        Image: props.querySelector("img")?.getAttribute("src"),
        title: props.querySelector("Grifone leather loafers")?.getAttribute("p"),
     
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