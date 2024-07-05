import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
function Login() {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((err) => console.log("error ", err.message));
  };
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((err) => console.log("error", err?.message));
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User sign-out successfully");
        setUser(null);
      })
      .catch((err) => console.log("error ", err?.message));
  };
  return (
    <div>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handleGoogleSingIn}>Google login</button>
          <button onClick={handleGithubSignIn}>Github login</button>
        </>
      )}

      {user && (
        <div>
          <h3>User: {user?.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
}

export default Login;
