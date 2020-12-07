const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const name = "Joe"

const postTitle = "PostTitle"
const newPostTitle = "NewPost"

describe("Validating records", () => {
  it("Create subdocument", async () => {
    const user = new UserModel({ name, posts: [{ title: postTitle }] })
    await user.save()

    const foundUser = await UserModel.findOne({ name })
    assert(foundUser.posts[0].title === postTitle)
  })

  it("Add subdocument", async () => {
    const user = new UserModel({ name, posts: [] })
    await user.save()

    const foundUser = await UserModel.findById(user.id)
    foundUser.posts.push({ title: newPostTitle })
    await foundUser.save()

    const reFoundUser = await UserModel.findById(user.id)
    assert(reFoundUser.posts[0].title === newPostTitle)
  })

  it("Remove subdocuments", async () => {
    // create user
    const user = new UserModel({ name, posts: [] })
    await user.save()

    // add posts to user
    const foundUser = await UserModel.findById(user.id)
    foundUser.posts.push({ title: postTitle }, { title: newPostTitle })
    await foundUser.save()

    // remove post from user
    const reFoundUser = await UserModel.findById(user.id)
    reFoundUser.posts[0].remove()
    await reFoundUser.save()

    // verify if true
    const finFoundUser = await UserModel.findById(user.id)
    assert(finFoundUser.posts[0].title === newPostTitle)
  })
})
