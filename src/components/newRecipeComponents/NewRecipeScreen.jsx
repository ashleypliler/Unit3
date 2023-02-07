import React from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: ""
  }

  const onSubmit = (values) => {
    console.log(values);
  };


  return (
    <section>
      <div className="formContainer">
        <h1 className="formHeader">Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({values, handleChange, handleSubmit}) => {
          <form className="newRecipeForm" onSubmit={handleSubmit}>
          <div className="nameContainer">
          <input
          placeholder="What's your Recipes Name?!"
          value={values.recipeName}
          onChange={handleChange}
          name="recipeName"></input>
          </div>
            <input className="imageURL" placeholder="Image URL"></input>
            <input className="prepTime" placeholder="Prep Time"></input>
            <input className="cookTime" placeholder="Cook TIme"></input>
            <input className="serves" placeholder="Serves"></input>
            <input className="ingredient" placeholder="Ingredients"></input>
            <input className="quantity" placeholder="Quanitiy"></input>
            <textarea
              className="instructions"
              placeholder="How do you make this?"
            ></textarea>
            <input className="cook" type="radio"></input>
            <input className="bake" type="radio"></input>
            <input className="drink" type="radio"></input>
          </form>

        }}</Formik>
      </div>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
    </section>
  );
};

export default NewRecipeScreen;
