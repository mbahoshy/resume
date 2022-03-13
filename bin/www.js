const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const puppeteer = require('puppeteer');

const sleep = () => new Promise((resolve, reject) => setTimeout(resolve, 1000))
// font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif

const main = async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json({ limit: '10mb' }));

    app.get('/:str', async (req, res, next) => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const { filename } = req.query;
    
      const page = await browser.newPage();

      const html = `
        <html>
          <head>
            <link href="https://fonts.googleapis.com/css2?family=Corinthia&family=Montserrat&family=Roboto&family=Ubuntu&family=Arizonia&family=Helvetica&display=swap" rel="stylesheet">
          </head>
          <body style="
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          "
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;">
            ${req.params.str}
          </body>
        </html>
      `
    
      await page.setContent(html);
      // await page.goto('data:text/html;charset=UTF-8,' + html, { waitUntil: 'networkidle2' });
      await page.emulateMediaType('screen');

      await sleep();
    
      const x = await page.pdf({
        printBackground: true,
        displayHeaderFooter: false,
      });


      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="${filename || 'test'}.pdf"`,
        'Content-Type': 'pdf',
      })

      res.end(x);
    })
    

    app.enable('trust proxy');
    app.set('port', 2000);

    const server = app.listen(app.get('port'), () => {
      console.dir('Express server listening')
    });

  } catch (err) {
    process.exit(0);
  }


}


main();