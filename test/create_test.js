const assert = require("assert")
const Model = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

const name = "Joe"

// -----------------------------------------------------------------------------------
describe("Creating record", () => {
  // --- MODEL CLASSES ------------------------------------------------------------------
  it("Save user => (save)", async () => {
    const joe = new Model({ name: name })
    await joe.save()
    assert(!joe.isNew)
  })
})
