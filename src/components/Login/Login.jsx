import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
function Login() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSingIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log("error ", err.message));
  };
  return (
    <div>
      <button onClick={handleGoogleSingIn}>Google login</button>
    </div>
  );
}

export default Login;
