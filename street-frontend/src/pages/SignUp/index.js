import { useCallback, useRef } from 'react';

import { FiLogIn, FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';

import { Input, Button } from '../../shared/components';

import getValidationErrors from '../../shared/utils/getValidationErrors';

import { Container, Content, Background } from './styles';

import { api } from '../../shared/services';

export const SignUp = () => {
  const formRef = useRef(null);
  const handleSubmit = useCallback(async data => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório!'),
        email: Yup.string()
          .email('Digite um email válido')
          .required('Email é obrigatório'),
        password: Yup.string().min(6, 'Digite no mínimo 6 caracteres!'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current.setErrors(errors);
    }

    //const response = await api.post('/auth', data);
    //console.log(response);
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Skatista" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>

          <Input
            name="name"
            icon={FiUser}
            type="name"
            placeholder="Digite seu nome"
          />

          <Input
            name="email"
            icon={FiMail}
            type="email"
            placeholder="Digite seu email"
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Digite sua senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link to="/">
          <FiArrowLeft size={20} />
          Já tenho uma conta, fazer login
        </Link>
      </Content>
    </Container>
  );
};
