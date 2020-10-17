const links = require('./data/links')
const BodyHandler = require('./src/handlers/BodyHandler')
const LinksHandler = require('./src/handlers/LinksHandler')
const ProfileHandler = require('./src/handlers/ProfileHandler')
const SocialHandler = require('./src/handlers/SocialHandler')
const TitleHandler = require('./src/handlers/TitleHandler')

const rewriter = new HTMLRewriter()
  .on('div#links', new LinksHandler(links))
  .on('div#profile, div#profile *', new ProfileHandler())
  .on('div#social', new SocialHandler())
  .on('title', new TitleHandler())
  .on('body', new BodyHandler())

async function handleRequest(request) {
  const { pathname } = new URL(request.url)
  if (pathname === '/links') {
    return new Response(JSON.stringify(links, null, 2), {
      headers: { 'content-type': 'application/json' },
    })
  } else {
    const url = 'https://static-links-page.signalnerve.workers.dev'
    const res = await fetch(url)
    return rewriter.transform(res)
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
