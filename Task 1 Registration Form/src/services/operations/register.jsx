import { apiConnector } from "../apiconnector";
import { endpoints } from "../apis";
const { Register_Api } = endpoints;

export async function register(name, email, password, navigate) {
  console.log("Inside register function");
  try {
    console.log("Inside register ");
    const response = await apiConnector("POST", Register_Api, {
      name,
      email,
      password,
    });

    if (!response.data.success) {
      // throw new Error(response.data.message);
      navigate("/error");
      console.log("Error in register function");
    }
    navigate("/success");
  } catch (error) {
    console.log(error);
  }
}

export function register2(name, email, password, navigate) {
  console.log("Inside register function");
  return async () => {
    try {
      console.log("Inside register function");
      const response = await apiConnector("POST", Register_Api, {
        name,
        email,
        password,
      });

      console.log("Register Successful ", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      navigate("/success");
    } catch (error) {
      console.log(error);
    }
  };
}
