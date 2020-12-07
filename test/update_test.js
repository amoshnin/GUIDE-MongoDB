const assert = require("assert")
const UserModel = require("../src/models/UserModel")
// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"
const NEW_USER_NAME = "Alex"
const INIT_COUNT = 0

// -----------------------------------------------------------------------------------
describe("Updating records", () => {
  let joe
  beforeEach(async () => {
    joe = new UserModel({ name: USER_NAME, postCount: INIT_COUNT })
    await joe.save()
  })

  const validatorHelp = async (operation) => {
    await operation
    const joeInData = await UserModel.findOne({ name: USER_NAME })
    const alexInData = await UserModel.find({ name: NEW_USER_NAME })

    assert(!joeInData && alexInData)
  }

  // --- MODEL INSTANCES ----------------------------------------------------------------
  it("Instance => (set & save)", async () => {
    // console.log(joe) // name: "Joe"
    joe.set("name", NEW_USER_NAME)
    // console.log(joe) // name: "Alex"

    const savedValue = await joe.save()
    validatorHelp(savedValue) // saved to database
  })

  it("Instance => (updateOne)", async () => {
    let updatedValue = await joe.updateOne({ name: NEW_USER_NAME })
    validatorHelp(updatedValue)
  })

  // --- MODEL CLASSES ----------------------------------------------------------------
  it("Class => (updateMany)", async () => {
    const updatedValue = await UserModel.updateMany(
      { name: USER_NAME },
      { name: NEW_USER_NAME }
    )
    validatorHelp(updatedValue)
  })

  it("Class => (findOneAndUpdate)", async () => {
    const updatedValue = await UserModel.findOneAndUpdate(
      { name: USER_NAME },
      { name: NEW_USER_NAME }
    )
    validatorHelp(updatedValue)
  })

  it("Class => (findByIdAndUpdate)", async () => {
    const updatedValue = await UserModel.findByIdAndUpdate(joe.id, {
      name: NEW_USER_NAME,
    })
    validatorHelp(updatedValue)
  })

  it("Class - increment post count by (+1) => ()", async () => {
    await UserModel.updateMany({ name: USER_NAME }, { $inc: { likes: 1 } })
    const user = await UserModel.findOne({ name: USER_NAME })
    assert(user.likes === 1)
  })
})
