import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Сообщение отправлено!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="Ваше имя"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        type="email"
        name="email"
        placeholder="Ваш email"
        value={formData.email}
        onChange={handleChange}
      />
      <Textarea
        name="message"
        rows="5"
        placeholder="Ваше сообщение"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit">Отправить</Button>
    </Form>
  );
};

export default ContactForm;
