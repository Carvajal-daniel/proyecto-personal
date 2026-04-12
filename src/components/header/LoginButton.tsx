import {SignInButton } from "@clerk/nextjs"
import Button from "../ui/Button"



const LoginButton = () => {
  return (
 <div className="relative inline-flex items-center">

<SignInButton mode="modal" fallbackRedirectUrl="/">  
  <Button>Login</Button>
</SignInButton>
 


</div>
  )
}

export default LoginButton