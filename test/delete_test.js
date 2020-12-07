const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"

// -----------------------------------------------------------------------------------
describe("Delete a user", () => {
  let joe

  const validatorHelp = async (useId) => {
    const user = useId
      ? await UserModel.findById(joe.id)
      : await UserModel.findOne({ name: USER_NAME })

    assert(user === null)
  }

  beforeEach(async () => {
    joe = new UserModel({ name: USER_NAME })
    await joe.save()
  })

  // --- MODEL INSTANCES ----------------------------------------------------------------
  it("Instance => (delete)", async () => {
    await joe.delete() // delete specific reference
    await validatorHelp()
  })

  // --- MODEL CLASSES ----------------------------------------------------------------
  it("Class => (deleteOne)", async () => {
    await UserModel.deleteOne({ name: USER_NAME }) // delete one document
    await validatorHelp()
  })

  it("Class => (findByIdAndDelete)", async () => {
    await UserModel.findByIdAndDelete(joe.id) // delete one doc by id
    await validatorHelp(true)
  })

  it("Class => (deleteMany)", async () => {
    await UserModel.deleteMany({ name: USER_NAME }) // delete many documents
    await validatorHelp()
  })
})
