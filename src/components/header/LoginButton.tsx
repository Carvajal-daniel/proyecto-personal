import Button from "../ui/Button"
import Gradient from "./Gradient"

const LoginButton = () => {
  return (
 <div className="relative inline-flex items-center">
  <Gradient />
  <Button className="bg-gray-900 tracking-wider text-[12.5px] shadow-md shadow-gray-800 ">Entrar</Button>
</div>
  )
}

export default LoginButton