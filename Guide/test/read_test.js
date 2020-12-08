const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

describe("Reading users put from database", () => {
  let joe, maria, alex, zak

  beforeEach(async () => {
    joe = new UserModel({ name: "Joe" })
    alex = new UserModel({ name: "Alex" })
    maria = new UserModel({ name: "Maria" })
    zak = new UserModel({ name: "Zak" })

    await joe.save()
    await alex.save()
    await maria.save()
    await zak.save()
  })

  // --- INTRO ----------------------------------------------------------------
  it("Finds all users with name => (find)", async () => {
    const users = await UserModel.find({ name: "Joe" }) // return array (of all users with given 'name')
    assert(users[0].id === joe.id)
    // console.log(users.map((i) => i.id))
  })

  it("Finds 1 user with id => (findOne)", async () => {
    const user = await UserModel.findOne({ _id: joe.id }) // return 1 user with given '_id'
    assert(user.name === "Joe")
    // console.log(user)
  })

  it("Finds 1 user with id => (findById)", async () => {
    const user = await UserModel.findById(joe.id) // return 1 user with given '_id'
    assert(user.name === "Joe")
    // console.log(user)
  })

  // --- PAGINATION ----------------------------------------------------------------
  it.only("Pagination => (skip & limit) of result set", async () => {
    const users = await UserModel.find({}).sort({ name: 1 }).skip(1).limit(2)
    console.log(users) // 2 of 4 users returned

    assert(users[0].name === "Joe")
    assert(users[1].name === "Maria")

    assert(users.length === 2)
  })
})
