import React, { useState } from 'react';
import { Grid, GridItem } from '@consta/uikit/Grid';
import { TextField } from '@consta/uikit/TextField';
export const LoginPage: React.FC = () => {
  const [name, setName] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  return (
    <Grid xAlign="center">
      <GridItem>
        <TextField
          onChange={({ value }) => setName(value)}
          value={name}
          view="default"
          type="text"
          name="name"
        />
        <TextField
          value={password}
          onChange={({ value }) => setPassword(value)}
          view="default"
          type="password"
          name="password"
        />
      </GridItem>
    </Grid>
  );
};
