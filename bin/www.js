const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const puppeteer = require('puppeteer');

const main = async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json({ limit: '10mb' }));

    app.get('/:str', async (req, res, next) => {
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    
      const page = await browser.newPage();
    
      await page.setContent(`
        <html>
          <body style="margin: 0">
            ${req.params.str}
          </body>
        </html>
      `);
      await page.emulateMediaType('screen');
    
      const x = await page.pdf({
        printBackground: true,
        displayHeaderFooter: false,
      });


      res.writeHead(200, {
        'Content-Disposition': `attachment; filename="test.pdf"`,
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