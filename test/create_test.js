const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const USER_NAME = "Joe"

// -----------------------------------------------------------------------------------
describe("Creating record", () => {
  // --- MODEL CLASSES ------------------------------------------------------------------
  it("Save user => (save)", async () => {
    const joe = new UserModel({ name: USER_NAME })
    await joe.save()
    assert(!joe.isNew)
  })
})
