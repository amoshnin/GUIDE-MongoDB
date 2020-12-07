const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"

// -----------------------------------------------------------------------------------

describe("Reading users put from database", () => {
  let joe
  beforeEach(async () => {
    joe = new UserModel({ name: USER_NAME })
    await joe.save()
  })

  // --- MODEL CLASSES ----------------------------------------------------------------
  it("Finds all users with name => (find)", async () => {
    const users = await UserModel.find({ name: USER_NAME }) // return array (of all users with given 'name')
    assert(users[0].id === joe.id)
    // console.log(users.map((i) => i.id))
  })

  it("Finds 1 user with id => (findOne)", async () => {
    const user = await UserModel.findOne({ _id: joe.id }) // return 1 user with given '_id'
    assert(user.name === USER_NAME)
    // console.log(user)
  })

  it("Finds 1 user with id => (findById)", async () => {
    const user = await UserModel.findById(joe.id) // return 1 user with given '_id'
    assert(user.name === USER_NAME)
    // console.log(user)
  })
})
