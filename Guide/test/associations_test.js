const assert = require("assert")
const UserModel = require("../src/models/UserModel")
const ArticleModel = require("../src/models/ArticleModel")
const CommentModel = require("../src/models/CommentModel")
const { SchemasConfig } = require("../src/models/config")

// -----------------------------------------------------------------------------------

// CONSTANTS //
const USER_NAME = "Joe"
const ARTICLE_TITLE = "JS is Great"
const ARTICLE_CONTENT = "Yep it really is extremly powerful"
const COMMENT_CONTENT = "Congrats on great post!"

// -----------------------------------------------------------------------------------

describe("Associations Test", () => {
  let user, article, comment

  beforeEach(async () => {
    user = new UserModel({ name: USER_NAME })
    article = new ArticleModel({
      title: ARTICLE_TITLE,
      content: ARTICLE_CONTENT,
    })
    comment = new CommentModel({ content: COMMENT_CONTENT })

    user.articles.push(article)
    article.comments.push(comment)
    comment.user = user

    await user.save()
    await article.save()
    await comment.save()
  })

  it("Relation btw (User & Article)", async () => {
    const resultUser = await UserModel.findOne({ name: USER_NAME }).populate(
      `${SchemasConfig.Article}s`.toLowerCase()
    )

    // console.log(resultUser)
    assert(resultUser.articles[0].title === ARTICLE_TITLE)
  })

  it("Returns full relation graph", async () => {
    const resultUser = await UserModel.findOne({ name: USER_NAME }).populate({
      path: `${SchemasConfig.Article}s`.toLowerCase(),
      populate: {
        path: `${SchemasConfig.Comment}s`.toLowerCase(),
        model: SchemasConfig.Comment,
        populate: {
          path: SchemasConfig.User.toLowerCase(),
          model: SchemasConfig.User,
        },
      },
    })

    console.log(resultUser.articles[0])
    assert(resultUser.name === USER_NAME)
    assert(resultUser.articles[0].title === ARTICLE_TITLE)
    assert(resultUser.articles[0].comments[0].content === COMMENT_CONTENT)
    assert(resultUser.articles[0].comments[0].user.name === USER_NAME)
  })
})
