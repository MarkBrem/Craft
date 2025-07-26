import { useState } from "react";
import { Form, Wraper, InputStyle, FormTitle, FormButton } from "./FormStyled";

export const RegistrationForm = ({ onNameSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onNameSubmit(name);
    }
  };

  return (
    <Wraper>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Реєстрація</FormTitle>
        <InputStyle
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ваше ім’я"
          required
        />
        <InputStyle
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Ваша пошту"
          required
        />
        <InputStyle
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Ваш пароль"
          required
        />
        <FormButton type="submit">Підтвердити</FormButton>
      </Form>
    </Wraper>
  );
};