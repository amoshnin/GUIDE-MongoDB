const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------

describe("Validating records", () => {
  it("Validate => requires a user name", () => {
    const user = new UserModel({ name: undefined })
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name
    console.log(message)

    assert(message === "Name is required")
  })
})
