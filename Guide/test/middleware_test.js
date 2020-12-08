const assert = require("assert")
const UserModel = require("../src/models/UserModel")
const ArticleModel = require("../src/models/ArticleModel")

// -----------------------------------------------------------------------------------

// CONSTANTS //
const USER_NAME = "Joe"
const ARTICLE_TITLE = "JS is Great"
const ARTICLE_CONTENT = "Yep it really is extremly powerful"

// -----------------------------------------------------------------------------------

describe("Middleware Test", () => {
  let user, article

  beforeEach(async () => {
    user = new UserModel({ name: USER_NAME })
    article = new ArticleModel({
      title: ARTICLE_TITLE,
      content: ARTICLE_CONTENT,
    })

    user.articles.push(article)

    await user.save()
    await article.save()
  })

  it("User associated articles clean-up, when removed User", async () => {
    await user.remove()
    const count = await ArticleModel.countDocuments()
    assert(count === 0)
  })
})
