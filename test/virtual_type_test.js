const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const name = "Joe"
const postTitle = "PostTitle"

// -----------------------------------------------------------------------------------

describe("Virtual Types", () => {
  it("Posts count => is computed => by posts array count", async () => {
    const user = new UserModel({ name, posts: [{ title: postTitle }] })
    console.log(user.postCount) // -> 0
    await user.save()

    const foundUser = await UserModel.findById(user.id)
    assert(foundUser.postCount === 1)
  })
})
