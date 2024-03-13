const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["pending", "in progress", "completed"],
      default: "pending",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    deadline: {
      type: Date,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      validate: {
        validator: async function (value) {
          const user = await this.model("User").findById(value);
          return user && (user.role === "HR" || user.role === "senior");
        },
        message: "Only HR and senior roles can create tasks.",
      },
    },
    startDate: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = TaskSchema;
