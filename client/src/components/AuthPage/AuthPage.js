import "./AuthPage.scss";
import SignInForm from "./SignInForm/SignInForm";
import SignUpForm from "./SignUpForm/SignUpForm";

function AuthPage() {
  return (
    <main>
      <section className="authPage">
        <div className="container">
          <div className="authPage-main">
            <SignInForm />
            <SignUpForm />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
