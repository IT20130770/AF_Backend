const mongoose = require("mongoose");
const Admin = require("../models/RG_models/admin");

describe("Admin Model Test", () => {
  beforeAll(async () => {
    process.env.MONGODB_UR,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      };
  });

  it("Register to the system Admin without required field", async () => {
    const RequiredField = new Admin({
      email: "aroshini@gmail.com",
    });
    let err;
    try {
      const savedRequiredField =
        await RequiredField.save();
      error = savedRequiredField;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.sliitid).toBeDefined();
  });
});
