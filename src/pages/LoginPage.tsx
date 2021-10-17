import style from './LoginPage.module.scss';
import './LoginPage.scss';
import React, { useState } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { TextField } from '@consta/uikit/TextField';
import { Card } from '../components/Card';
import { Header } from '@consta/uikit/Header';
import { Button } from '../components/Button';
import logo from './logo.png';
import cn from 'classnames';

import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {
  isSimpleAuthEnabled,
  useAuth,
  useAuthState,
  useSimpleAuth,
} from '../hooks/auth';
export const LoginPage: React.FC = () => {
  const location = useLocation();
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const history = useHistory();
  const doAuth = useAuth();
  const simpleAuth = useSimpleAuth();
  const [auth] = useAuthState();
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
    <Grid
      yAlign="center"
      xAlign="center"
      rowGap="m"
      className={cn(style.root, 'LoginPage')}
    >
      <GridItem>
        <Card className={style.card}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={logo} width={200} style={{ marginRight: 15 }} />
          </div>

          <div className={style.form}>
            {isSimpleAuthEnabled ? (
              <>
                <Button
                  view="primary"
                  label="ВОЙТИ КАК ПОТРЕБИТЕЛЬ"
                  onClick={() => simpleAuth('client')}
                />
                <Button
                  view="secondary"
                  label="ВОЙТИ КАК АДМИНИСТРАТОР"
                  onClick={() => simpleAuth('stakeholder')}
                />
              </>
            ) : (
              <>
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
                <Button
                  label="Войти"
                  onClick={() => doAuth({ name, password })}
                />
              </>
            )}
          </div>
        </Card>
      </GridItem>
    </Grid>
  );
};
