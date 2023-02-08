import React, { useState } from "react";
import { Formik } from "formik";
import axios from 'axios';

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    console.log(values);
    
    axios.post(`https://recipes.devmountain.com/recipes`, values).then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log(`There was an error ${error}`)
    })
  };


  return (
    <section>
      <div className="formContainer">
        <h1 className="formHeader">Tell us about your Recipe!</h1>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ values, handleChange, handleSubmit }) => {
            <form className="newRecipeForm" onSubmit={handleSubmit}>
              <div className="inputContainer">
                <input
                  placeholder="What's your Recipes Name?!"
                  value={values.recipeName}
                  onChange={handleChange}
                  name="recipeName"
                ></input>
                <input
                  placeholder="Image URL"
                  value={values.imageURL}
                  onChange={handleChange}
                  name="imageURL"
                ></input>
              </div>
              <div className="radioButtons">
                <span>
                  <input
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Cook</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Bake</h5>
                </span>
                <span>
                  <input
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <h5>Drink</h5>
                </span>
              </div>
              <div className="inputContainer">
                <input
                  placeholder="Prep Time"
                  value={values.prepTime}
                  onChange={handleChange}
                  name="prepTime"
                ></input>
                <input
                  placeholder="Cook Time"
                  value={values.cookTime}
                  onChange={handleChange}
                  name="cookTime"
                ></input>
                <input
                  placeholder="Serves"
                  value={values.serves}
                  onChange={handleChange}
                  name="serves"
                ></input>
              </div>
              <div>
                <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>
              <input
                placeholder="Quanitiy"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
              ></input>
              <button
                className="orangeBtn"
                type="button"
                onClick={addIngredient}
              ></button>
              <textarea
                placeholder="Type your instructions"
                rows={5}
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              ></textarea>
            </form>;
          }}
        </Formik>
      </div>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
    </section>
  );
};

export default NewRecipeScreen;
