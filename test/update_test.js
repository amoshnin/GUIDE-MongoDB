const assert = require("assert")
const UserModel = require("../src/models/UserModel")
// -----------------------------------------------------------------------------------

const name = "Joe"
const name2 = "Alex"
const initCount = 0

// -----------------------------------------------------------------------------------
describe("Updating records", () => {
  let joe
  beforeEach(async () => {
    joe = new UserModel({ name: name, postCount: initCount })
    await joe.save()
  })

  const validatorHelp = async (operation) => {
    await operation
    const joeInData = await UserModel.findOne({ name: name })
    const alexInData = await UserModel.find({ name: name2 })

    assert(!joeInData && alexInData)
  }

  // --- MODEL INSTANCES ----------------------------------------------------------------
  it("Instance => (set & save)", async () => {
    // console.log(joe) // name: "Joe"
    joe.set("name", name2)
    // console.log(joe) // name: "Alex"

    const savedValue = await joe.save()
    validatorHelp(savedValue) // saved to database
  })

  it("Instance => (updateOne)", async () => {
    let updatedValue = await joe.updateOne({ name: name2 })
    validatorHelp(updatedValue)
  })

  // --- MODEL CLASSES ----------------------------------------------------------------
  it("Class => (updateMany)", async () => {
    const updatedValue = await UserModel.updateMany(
      { name: name },
      { name: name2 }
    )
    validatorHelp(updatedValue)
  })

  it("Class => (findOneAndUpdate)", async () => {
    const updatedValue = await UserModel.findOneAndUpdate(
      { name: name },
      { name: name2 }
    )
    validatorHelp(updatedValue)
  })

  it("Class => (findByIdAndUpdate)", async () => {
    const updatedValue = await UserModel.findByIdAndUpdate(joe.id, {
      name: name2,
    })
    validatorHelp(updatedValue)
  })

  xit("Class - increment post count by (+1) => ()", async () => {
    await UserModel.updateMany({ name: name }, { $inc: { postCount: 1 } })
    const user = await UserModel.findOne({ name: name })
    assert(user.postCount === 1)
  })
})
