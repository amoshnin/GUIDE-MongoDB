const assert = require("assert")
const UserModel = require("../src/models/UserModel")

// -----------------------------------------------------------------------------------

describe("Validating records", () => {
  it("Validate => requires a name", () => {
    const user = new UserModel({ name: undefined })
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name

    assert(message === "Name is required")
  })

  it("Validate => requires a name.length > 2", () => {
    const user = new UserModel({ name: "A" })
    const validationResult = user.validateSync()
    const { message } = validationResult.errors.name

    assert(message === "Name must be longer than 2 characters")
  })

  it("Validate => Disallows invalid records from being saved", async () => {
    const user = new UserModel({ name: "Al" })

    try {
      await user.save()
    } catch (error) {
      const { message } = error.errors.name
      assert(message === "Name must be longer than 2 characters")
    }
  })
})
