import { Link } from '@tanstack/react-router'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='hover:scale-[1.01]" bg-white/80 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl'>
        <CardHeader>
          <CardTitle>登录您的账户</CardTitle>
          <CardDescription>
            <p className='text-sm text-muted-foreground'>
              没有账户？
              <Link
                to='/sign-up'
                className='underline underline-offset-4 hover:text-primary'
              >
                前往注册
              </Link>
            </p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UserAuthForm />
        </CardContent>
      </Card>
    </AuthLayout>
  )
}
