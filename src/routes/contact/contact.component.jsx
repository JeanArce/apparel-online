import { Routes, Route } from "react-router-dom";
import ContactForm from "../../components/contact-form/contact-form.component";
import Success from "../../components/success/success.component";

const Contact = () => {
  return (
    <Routes>
      <Route
        index
        element={
          <ContactForm></ContactForm>
        }
      ></Route>
      <Route
        path="/success"
        element={
          <Success>
            <p>Contact form submitted</p>
          </Success>
        }
      ></Route>
    </Routes>
  );
};

export default Contact;
