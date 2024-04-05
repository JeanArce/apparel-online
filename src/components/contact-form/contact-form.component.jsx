import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './contact-form.styles.scss';
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
    fullName: "",
    subject: "",
    email: "",
    body: "",
};

const ContactForm = () => {

    const navigate = useNavigate();

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { fullName, subject, email, body } = formFields;

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = () => {
      console.log('Contact form data ', formFields);
      navigate('/contact/success');
    };

    return (
      <div className="contact-form-container">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            required
            onChange={handleChange}
            name="fullName"
            value={fullName}
            minLength={3}
          />

          <FormInput
            label="Subject"
            type="text"
            required
            onChange={handleChange}
            name="subject"
            value={subject}
            minLength={3}
          />

          <FormInput
            label="Email"
            type="text"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />

          <FormInput
            label="Body"
            type="textarea"
            required
            onChange={handleChange}
            name="body"
            value={body}
            minLength={3}
          />

          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
};

export default ContactForm;