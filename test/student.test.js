const mongoose = require("mongoose");
const Student = require("../models/AA_models/student");

describe("Student Model Test", () => {
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

  it("Register to the system Student without required field", async () => {
    const RequiredField = new Student({
        student_id: "ST0012",
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
    expect(err.errors.faculty).toBeDefined();
  });
});
