import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../components/Textinput";
import Button from "../components/Button";
import { UserSignUp } from "../api";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducers/userSlice";

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const SignUp = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields");
      return false;
    }
    return true;
  };

  const handelSignUp = async () => {
    setLoading(true);
    setButtonDisabled(true);
    if (validateInputs()) {
      await UserSignUp({ name, email, password })
        .then((res) => {
          console.log(res)
          dispatch(loginSuccess(res.data));
          alert("Account Created Success");
          setLoading(false);
          setButtonDisabled(false);
        })
        .catch((err) => {
          alert(err.response.data.message);
          setLoading(false);
          setButtonDisabled(false);
        });
    }
  };
  return (
    <Container>
      <div>
        <Title>Create New Account 👋</Title>
        <Span>Please enter details to create a new account</Span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <TextInput
          label="Full name"
          placeholder="Enter your full name"
          value={name}
          handelChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
          value={email}
          handelChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
          value={password}
          handelChange={(e) => setPassword(e.target.value)}
        />
        <Button
          text="SignUp"
          onClick={handelSignUp}
          isLoading={loading}
          isDisabled={buttonDisabled}
        />
      </div>
    </Container>
  );
};

export default SignUp;
// import React, { useState } from "react";
// import styled from "styled-components";
// import { UserSignUp } from "../api";
// import { useDispatch } from "react-redux";
// import { loginSuccess } from "../redux/reducers/userSlice";


// export default function Signup() {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(false);
//   const [buttonDisabled, setButtonDisabled] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const validateInputs = () => {
//     if (!name || !email || !password) {
//       alert("Please fill in all fields");
//       return false;
//     }
//     return true;
//   };

//   const handelSignUp = async () => {
//     setLoading(true);
//     setButtonDisabled(true);
//     if (validateInputs()) {
//       await UserSignUp({ name, email, password })
//         .then((res) => {
//           dispatch(loginSuccess(res.data));
//           alert("Account Created Success");
//           setLoading(false);
//           setButtonDisabled(false);
//         })
//         .catch((err) => {
//           alert(err.response.data.message);
//           setLoading(false);
//           setButtonDisabled(false);
//         });
//     }
//   };
//   return (
//     <Container>
//       <div className="formcontainer">
//         <form action="" className="inner-form">
//           <label htmlFor="username" className="formlabel">
//             Name:
//           </label>
//           <input
//             placeholder="Enter FirstName"
//             name="uname"
//             type="text"
//             className="username"
//             value={name}
//             handelChange={(e) => setName(e.target.value)}
//           />
          
//           <label htmlFor="email" className="formlabel">
//             Email:
//           </label>
//           <input
//             placeholder="Enter Email Address"
//             name="email"
//             type="email"
//             className="email"
//             value={email}
//             handelChange={(e) => setEmail(e.target.value)}
//           />
//           <label htmlFor="password" className="formlabel">
//             Password:
//           </label>
//           <input
//             placeholder="Enter Password "
//             name="pass"
//             type="password"
//             className="password"
//             value={password}
//             handelChange={(e) => setPassword(e.target.value)}
//           />
//           <button 
//           onClick={handelSignUp}
//           isLoading={loading}
//           isDisabled={buttonDisabled} >Sign Up</button>
//         </form>
//       </div>
//     </Container>
//   );
// }
// const Container = styled.div`
//   body {
//     overflow: hidden;
//     color: white;
//   }
//   .formcontainer {
//     /* background-color:red; */
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: 80vh;
//     position: relative;
//     color: white;
//   }
//   .inner-form {
//     background-color: rgba(0, 0, 0, 0.5);
//     display: flex;
//     border-radius: 5px;
//     flex-direction: column;
//     padding: 2rem;
//   }
//   .formlabel {
//     /* color:black; */
//     padding: 0.2em;
//     font-family: monospace;
//     font-size: 1rem;
//   }
//   input {
//     border: 0px;
//     padding: 5px;
//     border-bottom: 2px solid white;
//     background-color: transparent;
//     margin-bottom: 5px;
//     width: 25vw;
//   }
//   input [type="text"] {
//     color: beige;
//   }
//   a {
//     padding: 1em;
//     padding-left: 0px;
//     font-size: small;
//     color: beige;
//     text-decoration: none;
//     font-family: "Courier New", Courier, monospace;
//   }
//   button {
//     padding: 0.5rem;
//     background-color: #ff5100;
//     border: 0px;
//     color: white;
//     border-radius: 5px;
//     font-weight: 700;
//   }
// `;
