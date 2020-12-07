const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"

const POST_TITLE = "PostTitle"
const NEW_POST_TITLE = "NewPost"

describe("Validating records", () => {
  it("Create subdocument", async () => {
    const user = new UserModel({
      name: USER_NAME,
      posts: [{ title: POST_TITLE }],
    })
    await user.save()

    const foundUser = await UserModel.findOne({ name: USER_NAME })
    assert(foundUser.posts[0].title === POST_TITLE)
  })

  it("Add subdocument", async () => {
    const user = new UserModel({ name: USER_NAME, posts: [] })
    await user.save()

    const foundUser = await UserModel.findById(user.id)
    foundUser.posts.push({ title: NEW_POST_TITLE })
    await foundUser.save()

    const reFoundUser = await UserModel.findById(user.id)
    assert(reFoundUser.posts[0].title === NEW_POST_TITLE)
  })

  it("Remove subdocuments", async () => {
    // create user
    const user = new UserModel({ name: USER_NAME, posts: [] })
    await user.save()

    // add posts to user
    const foundUser = await UserModel.findById(user.id)
    foundUser.posts.push({ title: POST_TITLE }, { title: NEW_POST_TITLE })
    await foundUser.save()

    // remove post from user
    const reFoundUser = await UserModel.findById(user.id)
    reFoundUser.posts[0].remove()
    await reFoundUser.save()

    // verify if true
    const finFoundUser = await UserModel.findById(user.id)
    assert(finFoundUser.posts[0].title === NEW_POST_TITLE)
  })
})
