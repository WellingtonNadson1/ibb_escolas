import LoginForm from './login-form'
import Logo from './logo'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md">
        <Logo />
        <LoginForm />
      </div>
    </div>
  )
}

