import React, { useState, useEffect } from "react";
import logo from "./pictures/Ribs.jpg";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
import FormSchema from "./formSchema";
import Form from "./PizzaForm";

const initialFormValues = {
  ////check to make sure initial values are correct
  name: "",
  size: "",
  sauce: "",
  sausage: false,
  pepperoni: false,
  extraCheese: false,
  veggies: false,
  specialInstructions: "",
};

const initialFormErrors = {
  name: "",
  size: "",
  sauce: "",
  specialInstructions: "",
};

const initialOrders = [];
const initialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState(initialOrders);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = (newOrder) => {
    axios
      .post("https://reqres.in/api/users", newOrder)
      .then((res) => {
        setOrders([res.data, ...orders]);
      })
      .catch((err) => {
        console.timeLog(err);
      })
      .finally(() => {
        setFormValues(initialFormValues);
        console.log(setFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name,
      size: formValues.size,
      sausage: formValues.sausage,
      pepperoni: formValues.pepperoni,
      extraCheese: formValues.extraCheese,
      veggies: formValues.veggies,
      specialInstructions: formValues.specialInstructions,
    };
    postNewOrder(newOrder);
  };

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  console.log(logo);
  return (
    <>
      <Route exact path="/">
        <header>
          <h1>Lambda Eats</h1>
          <Link to="/">Home</Link>
        </header>
        <section className="picContainer">
          <h2>Broadway Pizza</h2>
          <Link to="/pizza">
            <button>Ready to Order?</button>
          </Link>
        </section>
        <section>
          <h3>Food delivery in a town near you!</h3>
          <div className="foodDeliveryContainer">
            <div className="deliveryOption">
              <img
                src="https://images.unsplash.com/photo-1527578054032-8d8f044e013d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGtvcmVhbiUyMGJicXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Delivery Option 1"
              ></img>
              <h4>DWJ Korean BBQ</h4>
              <p>$$- Korean BBQ-Korean Food</p>
              <div className="deliveryDetails">
                <p className="waitTime"> 40-50 Min</p>
                <p className="deliveryFee"> $5.99 Delivery Fee</p>
              </div>
            </div>

            <div className="deliveryOption">
              <img
                src="/static/media/Ribs.7726e4d9.jpg"
                alt="Delivery Option 2"
              ></img>
              <h4>Central BBQ</h4>
              <p>$- TN style BBQ</p>
              <div className="deliveryDetails">
                <p className="waitTime"> 30-35 Min</p>
                <p className="deliveryFee"> $3.99 Delivery Fee</p>
              </div>
            </div>

            <div className="deliveryOption">
              <img
                src="https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Delivery Option 3"
              ></img>
              <h4>La Guadalupana</h4>
              <p>$- Mexican Food</p>
              <div className="deliveryDetails">
                <p className="waitTime"> 40 Min</p>
                <p className="deliveryFee"> $2.99 Delivery Fee</p>
              </div>
            </div>
          </div>
        </section>
        <formSchema formValues={formValues} />
      </Route>
      {/* <Route exact path="/pizza">
        <Form
          values={formValues}
          submit={formSubmit}
          change={inputChange} ///it's commented out with yup
          disabled={disabled}
          errors={formErrors}
        />
      </Route> */}
      <Route exact path="/pizza">
        <Form
          values={formValues}
          submit={formSubmit}
          change={inputChange}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    </>
  );
};
export default App;
