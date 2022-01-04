// import React from "react";
// import ReactDOM from "react-dom";
// // import { useNavigate } from "react-router-dom";

// class Email extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleEmailChange = (evt) => {
//     this.setState({ email: evt.target.value });
//   };

//   //   handlePasswordChange = (evt) => {
//   //     this.setState({ password: evt.target.value });
//   //   };

//   handleSubmit = () => {
//     const { email } = this.state;
//     alert(`Welcome ${email}`);
//   };

//   render() {
//     const { email } = this.state;
//     const enabled = email.length > 0;
//     // let navigate = useNavigate();

//     // async function handleSubmit(event) {
//     //   event.preventDefault();
//     //   await submitForm(event.target);
//     //   navigate("/Signup", { replace: true });
//     // }
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           className="input1 px-3 py-3 w-100"
//           value={this.state.email}
//           onChange={this.handleEmailChange}
//         />

//         {/* <input
//           type="password"
//           placeholder="Password"
//           value={this.state.password}
//           onChange={this.handlePasswordChange}
//         /> */}
//         <button
//           disabled={!enabled}
//           className="btn-r px-4 py-3 signup-btn text-white position-absolute btn-p"
//         >
//           Login
//         </button>
//       </form>
//     );
//   }
// }
// export default Email;

// // ReactDOM.render(<Email />, document.body);
