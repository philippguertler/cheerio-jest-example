const cheerio = require('cheerio')

function parsePage(html) {
  const $ = cheerio.load(html);
  const title = $("title").text();

  return {
    title
  }
}

module.exports = {
  parsePage
}