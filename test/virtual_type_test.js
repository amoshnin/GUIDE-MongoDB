const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"
const POST_TITLE = "PostTitle"

// -----------------------------------------------------------------------------------

describe("Virtual Types", () => {
  it("Posts count => is computed => by posts array count", async () => {
    const user = new UserModel({
      name: USER_NAME,
      posts: [{ title: POST_TITLE }],
    })
    console.log(user.postCount) // -> 0
    await user.save()

    const foundUser = await UserModel.findById(user.id)
    assert(foundUser.postCount === 1)
  })
})
