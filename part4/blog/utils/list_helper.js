const blog = require('../models/blog')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, b) => sum + b.likes, 0)
}

const favoriteBlogs = (blogs) => {
  if (blogs.length === 0) {
    return undefined
  }

  return blogs.sort((a, b) => b.likes - a.likes)[0]
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlogs,
}
