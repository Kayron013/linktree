module.exports = class LinksHandler {
  constructor(links) {
    this.links = links
  }

  element(element) {
    for (let link of this.links) {
      const a = `<a href=${link.url}>${link.name}</a>`
      element.append(a, { html: true })
    }
  }
}
