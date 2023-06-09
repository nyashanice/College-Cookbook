const db = require("../config/connection");
const fs = require("fs");
const mime = require("mime-types");
const { Meal } = require("../models");
const mealSeeds = require("./mealSeeds.json");

// connectDB.once("open", async () => {
//   await Meal.deleteMany({});
//   await Meal.create(mealSeeds);

//   console.log("all done!");
//   process.exit(0);
// });

db.once("open", async () => {
  try {
    // Deletes existing seeds
    await Meal.deleteMany({});
    
    for (const mealData of mealSeeds) {
      const { title, ingredients, steps, tips, creator, category, imagePath } =
        mealData;

      // Reads the image file
      const imageData = fs.readFileSync(imagePath);

      // Determines the MIME type of the image
      const imageMimeType = mime.lookup(imagePath);

      // Creates a new meal with the image data
      const newMeal = new Meal({
        title,
        ingredients,
        steps,
        tips,
        creator,
        category,
        image: {
          data: imageData,
          contentType: imageMimeType,
        },
      });

      // Saves meals to the database
      await newMeal.save();
    }
    console.log("all done!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Disconnect from the database
    process.exit(0);
  }
});
