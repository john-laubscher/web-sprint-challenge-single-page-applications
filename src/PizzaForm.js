import React from "react";

function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, values, checked, type } = evt.target;
  };

  return (
    <form id="pizza-form" className="formContainer" onSubmit={onSubmit}>
      <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.terms}</div>
        <div>{errors.password}</div>
      </div>
      <section className="picContainer">
        <h2>Build Your Own Pizza</h2>
        <label>
          Order name
          <input
            id="name-input"
            value={values.name}
            oncChange={onChange}
            name="name"
            type="text"
          />
        </label>
      </section>
      <section>
        <h3>Build your Own Pizza</h3>
        <label>
          Choice of Size (required)
          <select
            id="size-dropdown"
            onChange={onChange}
            value={values.sauce}
            name="sauce"
          >
            <option value="">- Select an option -</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="huge">huge</option>
          </select>
        </label>
        <h3>Choice of Toppings </h3>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Extra Cheese
          <input
            type="checkbox"
            name="extraCheese"
            checked={values.extraCheese}
            onChange={onChange}
          />
        </label>
        <label>
          Veggies
          <input
            type="checkbox"
            name="veggies"
            checked={values.veggies}
            onChange={onChange}
          />
        </label>
      </section>
    </form>
  );
}

export default Form;
