const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const name = "Joe"

// -----------------------------------------------------------------------------------
describe("Delete a user", () => {
  let joe

  const validatorHelp = async (useId) => {
    const user = useId
      ? await UserModel.findById(joe.id)
      : await UserModel.findOne({ name: name })

    assert(user === null)
  }

  beforeEach(async () => {
    joe = new UserModel({ name: name })
    await joe.save()
  })

  // --- MODEL INSTANCES ----------------------------------------------------------------
  it("Instance => (delete)", async () => {
    await joe.delete() // delete specific reference
    await validatorHelp()
  })

  // --- MODEL CLASSES ----------------------------------------------------------------
  it("Class => (deleteOne)", async () => {
    await UserModel.deleteOne({ name: name }) // delete one document
    await validatorHelp()
  })

  it("Class => (findByIdAndDelete)", async () => {
    await UserModel.findByIdAndDelete(joe.id) // delete one doc by id
    await validatorHelp(true)
  })

  it("Class => (deleteMany)", async () => {
    await UserModel.deleteMany({ name: name }) // delete many documents
    await validatorHelp()
  })
})
