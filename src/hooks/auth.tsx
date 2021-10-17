import { createGlobalState } from 'react-use';
// import React, { useState, createContext, useCallback } from 'react';
const initialState = { stakeholder: false, client: false };
// export const AuthContext = createContext<
//   [
//     {
//       stakeholder: boolean;
//       client: boolean;
//     },
//     (props: Creds) => void
//   ]
// >([{ stakeholder: false, client: false }, () => {}]);
type Creds = { name: string; password: string };
// export const AuthProvider: React.FC = ({ children }) => {
//   const [state, setState] = useState(initialState);
//   console.log(process.env.REACT_APP_CREDS);
const creds = {
  client: { name: 'dmitry', password: 'pass' },
  stakeholder: { name: 'ivan', password: 'pass' },
};
//   console.log(creds);
//   const auth = useCallback(({ name, password }: Creds) => {
//     if (name === creds.client.name && password === creds.client.password) {
//       setState({ client: true, stakeholder: false });
//     }
//     if (
//       name === creds.stakeholder.name &&
//       password === creds.stakeholder.password
//     ) {
//       setState({ stakeholder: true, client: false });
//     }
//   }, []);
//   return (
//     <AuthContext.Provider value={[state, auth]}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
export const isSimpleAuthEnabled = !!process.env.REACT_APP_SIMPLE_AUTH;
export const useAuthState = createGlobalState(initialState);
export const useAuth = () => {
  const [state, setState] = useAuthState();
  return ({ name, password }: Creds) => {
    if (name === creds.client.name && password === creds.client.password) {
      setState({ client: true, stakeholder: false });
    }
    if (
      isSimpleAuthEnabled ||
      (name === creds.stakeholder.name &&
        password === creds.stakeholder.password)
    ) {
      setState({ stakeholder: true, client: false });
    }
  };
};
export const useLogout = () => {
  const setState = useAuthState()[1];
  return () => setState(initialState);
};
export const useSimpleAuth = () => {
  const setState = useAuthState()[1];
  return (userType: 'stakeholder' | 'client') =>
    setState((state) => ({ ...state, [userType]: true }));
};
