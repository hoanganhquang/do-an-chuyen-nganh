import "./SignInForm.scss";

function SignInForm(props) {
  return (
    <div className="signInForm form">
      <h1>Đăng nhập</h1>

      <div className="form-control">
        <p className="input-title">Tài khoản</p>
        <input
          type="text"
          name=""
          className="input"
          placeholder="example@email.com"
        />
      </div>

      <div className="form-control">
        <p className="input-title">Mật khẩu</p>
        <input type="password" name="" className="input" />
      </div>

      <div className="form-footer">
        <button className="primaryBtn">Đăng nhập</button>

        <div className="remember">
          <input id="check" type="checkbox" />
          <label htmlFor="check">Nhớ tài khoản</label>
        </div>
      </div>

      <p className="form-link" onClick={props.onForgotTab}>
        Quên mật khẩu?
      </p>
    </div>
  );
}

export default SignInForm;
