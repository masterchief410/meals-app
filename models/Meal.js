import Category from "./Category";

class Meal {
    constructor(
        id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageURL,
        duration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegeterian,
        isLatoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageURL = imageURL;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegeterian = isVegeterian;
        this.isLatoseFree = isLatoseFree;
    }
}

export default Meal;
