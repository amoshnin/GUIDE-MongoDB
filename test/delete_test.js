const assert = require("assert")
const UserModel = require("../src/models/UserModel")

const name = "Joe"
describe("Delete a user", () => {
  let joe

  const checkIfDeleted = async (useId) => {
    const user = useId
      ? await UserModel.findById(joe.id)
      : await UserModel.findOne({ name: name })

    assert(user === null)
  }

  beforeEach(async () => {
    joe = new UserModel({ name: name })
    await joe.save()
  })

  // --- MODEL INSTANCES ------------------------
  it("Instance - => remove", async () => {
    await joe.delete()
    await checkIfDeleted()
  })

  // --- MODEL CLASSES ------------------------
  it("Class - => findAndRemove", async () => {
    await UserModel.deleteOne({ name: name }) // delete one document
    await checkIfDeleted()
  })

  it("Class - => findByIdAndRemove", async () => {
    await UserModel.findByIdAndDelete(joe.id) // delete one doc by id
    await checkIfDeleted(true)
  })

  it("Class - => remove", async () => {
    // Remove a bunch of records with some given criteria
    await UserModel.deleteMany({ name: name }) // delete many documents
    await checkIfDeleted()
  })
})
