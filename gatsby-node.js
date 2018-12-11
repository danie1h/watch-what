/**
 * Extract movie data from tmdb and store in nodes
 * Store and link backdrop image for gastby image optimization
 */
const axios = require('axios')
const gatsbySourceFileSystem = require('gatsby-source-filesystem')

const TMDB_API_KEY = process.env.TMDB_API_KEY
const getFilmData = () =>
  axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=en-US&page=1&region=US`
  )

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const response = await getFilmData()

  response.data.results.map(film => {
    const filmData = {
      filmIdJoin: film.id,
      filmId: film.id,
      title: film.title,
      backdrop: `https://image.tmdb.org/t/p/w1280${film.backdrop_path}`,
      overview: film.overview,
    }

    const nodeContent = JSON.stringify(filmData)

    const nodeMeta = {
      id: createNodeId(`my-data-${filmData.filmId}`),
      parent: null,
      children: [],
      internal: {
        type: `FilmNode`,
        mediaType: `text/html`,
        content: nodeContent,
        contentDigest: createContentDigest(filmData),
      },
    }

    const node = Object.assign({}, filmData, nodeMeta)
    createNode(node)
  })
}

exports.onCreateNode = async ({
  node,
  actions,
  store,
  cache,
  createNodeId,
}) => {
  if (node.internal.type !== 'FilmNode') {
    return
  }
  const { createNode } = actions

  const fileNode = await gatsbySourceFileSystem.createRemoteFileNode({
    url: node.backdrop,
    store,
    cache,
    createNode,
    createNodeId,
  })

  if (fileNode) {
    node.image___NODE = fileNode.id
  }
}
