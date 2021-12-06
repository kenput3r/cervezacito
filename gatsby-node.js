const fetch = require(`node-fetch`)
const btoa = require(`btoa`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
require("dotenv").config({
  path: `.env`,
})

exports.onCreateNode = async({
  actions: { createNode },
  getCache,
  createNodeId,
  node,
}) => {
  if (node.internal.type === `BeerMenuItem`) {
    const originalFileNode = await createRemoteFileNode({
      url: node.original_label_image_hd,
      getCache,
      createNode,
      createNodeId,
      parentNodeId: node.id
    })
    if (originalFileNode) {
      node.originalRemoteImage = originalFileNode.id
      node.originalRemoteImage___NODE = originalFileNode.id
    }
    if (node.custom_label_image) {
      const customFileNode = await createRemoteFileNode({
        url: node.custom_label_image,
        getCache,
        createNode,
        createNodeId,
        parentNodeId: node.id
      })
      if (customFileNode) {
        node.customRemoteImage = customFileNode.id
        node.customRemoteImage___NODE = customFileNode.id
      }
    }
  }
}

exports.sourceNodes = async({
  actions: { createNode },
  createContentDigest,
}) => {
  const key = process.env.UNTAPPD_KEY
  const encodedString = btoa(`info@cervezacito.com:${key}`)
  const menuId = 103377
  const endpoint = `https://business.untappd.com/api/v1/menus/${menuId}?full=true`
  console.log(encodedString)
  const response = await fetch(endpoint, {
    "type": "GET",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": `Basic ${encodedString}`
    }
  })
  const json = await response.json()
  const onTap = json.menu.sections[0].items
  createNode({
    id: `on-tap-menu`,
    menuName: json.menu.name,
    parent: null,
    children: [],
    internal: {
      type: `BeerMenu`,
      contentDigest: createContentDigest(json)
    }
  })
  onTap.forEach(item => {
    if(!item.custom_abv) {
      item.custom_abv = ''
    }
    if(!item.custom_name) {
      item.custom_name = ''
    }
    item.id = `ot_${item.id}`
    createNode({
      parent: `on-tap-menu`,
      children: [],
      internal: {
        type: `BeerMenuItem`,
        contentDigest: createContentDigest(item)
      },
      ...item
    })
  })
}