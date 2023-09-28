import React, { useEffect, useState } from 'react';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  const [user, setUser] = useState(null);
  const [customState, setCustomState] = useState(null);
  const [email, setEmail] = useState(null);


  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
      const fetchEmail = async () => { // 非同期関数を定義
        const userInfo = await Auth.currentAuthenticatedUser();
        setEmail(userInfo.attributes.email);
      };
      switch (event) {
        case "signIn":
          setUser(data);
          fetchEmail();  // そして、ここでその非同期関数を呼び出します

          break;
        case "signOut":
          setUser(null);
          setEmail(null);
          break;
        case "customOAuthState":
          setCustomState(data);
      }
    });

    Auth.currentAuthenticatedUser()
    .then(currentUser => {
      setUser(currentUser);
      setEmail(currentUser.attributes.email);  // ここでもメールアドレスを取得して設定します
    })
    .catch(() => console.log("Not signed in"));
    return unsubscribe;
  }, []);

    return (
    <div className="App">
      <button onClick={() => Auth.federatedSignIn()}>Open Hosted UI</button>
      <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Open Google</button>
      <button onClick={() => Auth.signOut()}>Sign Out</button>
      <div>{user && user.getUsername()}</div>
      <div>Email: {email}</div> {/* ここでメールアドレスを表示します */}

    </div>
  );
}
export default App;
