const assert = require("assert")
const UserModel = require("../src/models/UserModel")

const name = "Joe"
const name2 = "Alex"

// Joe -> Alex
describe("Updating records", () => {
  let joe
  beforeEach(async () => {
    joe = new UserModel({ name: name })
    await joe.save()
  })

  const assertNameCheck = async (operation) => {
    await operation
    const joeInData = await UserModel.findOne({ name: name })
    const alexInData = await UserModel.find({ name: name2 })

    assert(!joeInData && alexInData)
  }

  // --- MODEL INSTANCES ------------------------
  it("Instance - => set & save", async () => {
    // console.log(joe) // name: "Joe"
    joe.set("name", name2)
    // console.log(joe) // name: "Alex"

    const savedValue = await joe.save()
    assertNameCheck(savedValue) // saved to database
  })

  it("Instance - => updateOne", async () => {
    let updatedValue = await joe.updateOne({ name: name2 })
    assertNameCheck(updatedValue)
  })

  // --- MODEL CLASSES ------------------------
  it("Class - => updateMany", async () => {
    const updatedValue = await UserModel.updateMany(
      { name: name },
      { name: name2 }
    )
    assertNameCheck(updatedValue)
  })

  it("Class - => findOneAndUpdate", async () => {
    const updatedValue = await UserModel.findOneAndUpdate(
      { name: name },
      { name: name2 }
    )
    assertNameCheck(updatedValue)
  })

  it("Class - => findByIdAndUpdate", async () => {
    const updatedValue = await UserModel.findByIdAndUpdate(joe.id, {
      name: name2,
    })
    assertNameCheck(updatedValue)
  })
})
