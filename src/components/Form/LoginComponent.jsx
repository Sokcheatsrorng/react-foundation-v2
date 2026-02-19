import { useUserLoginMutation } from "../../redux/services/auth/login"
import {  getDecryptedAccessToken, storeAccessToken } from "../../utils/tokenUtil";


export default function LoginComponent() {


    const [loginUser,{data:userResponse}] = useUserLoginMutation();

    function handleLoginUser() {
        loginUser(
            {
                "email": "srorngsokcheat53@gmail.com",
                "password": "Cheat1107$$"
            }
        )

        storeAccessToken(userResponse?.accessToken || "")
        const encryptedToken =  localStorage.getItem("@secure.s.secure-storage")
        console.log(
        "The way of process token: ", encryptedToken
        )
        // console.log(decryptedAccessToken(encryptedToken, "secure-storage"))
        console.log("the result of decrypted value: ", getDecryptedAccessToken().toString())

    }
    // console.log("user data", userResponse?.accessToken || "")
    // storeAccessToken(userResponse?.accessToken || "")

    // // descrypted

    // const encryptedToken = secureLocalStorage.getItem("@secure.s.secure-storage")

    // const descryptedToken = decryptedAccessToken(encryptedToken); 

    // console.log("=====> decryptedToken: ", descryptedToken);

    // const realAcessToken = getDecryptedAccessToken();

    // console.log("=======> realAcesstoken:", realAcessToken);


    return (
        <div>
            <button className="border p-4" onClick={() => handleLoginUser() }>
                Login
            </button>
        </div>
    )
}
