import style from './LoginPage.module.scss';
import React, { useContext, useState } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { TextField } from '@consta/uikit/TextField';
import { Card } from '../components/Card';
import { Header } from '@consta/uikit/Header';
import { Button } from '../components/Button';
// import { AuthContext, useAuth } from '../hooks/auth';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useAuth, useAuthState } from '../hooks/auth';
export const LoginPage: React.FC = () => {
  const location = useLocation();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
  const doAuth = useAuth();
  const [auth] = useAuthState();
  // const [
  //   { client: isAuthClient, stakeholder: isAuthStakeholder },
  //   doAuth,
  // ] = useContext(AuthContext);
  useEffect(() => {
    if (auth.client && !(location.pathname as string).startsWith('/client')) {
      history.push('/client');
    }
    if (
      auth.stakeholder &&
      !(location.pathname as string).startsWith('/stakeholder')
    ) {
      history.push('/stakeholder');
    }
  }, [auth]);
  return (
    <Grid yAlign="center" xAlign="center" rowGap="m" className={style.root}>
      <GridItem>
        <Card>
          <Header leftSide="Пожалуйста, авторизуйтесь" />
          <div className={style.form}>
            <TextField
              onChange={({ value }) => setName(value || '')}
              value={name}
              view="default"
              type="text"
              name="name"
              label="Имя пользователя"
            />
            <TextField
              value={password}
              onChange={({ value }) => setPassword(value || '')}
              view="default"
              type="password"
              name="password"
              label="Пароль"
            />
            <Button label="Войти" onClick={() => doAuth({ name, password })} />
          </div>
        </Card>
      </GridItem>
    </Grid>
  );
};
