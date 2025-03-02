import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { SignUpForm } from './components/sign-up-form'

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-lg font-semibold tracking-tight'>创建一个帐户</h1>
          <p className='text-sm text-muted-foreground'>
            已经有帐户了？
            <Link
              to='/login'
              className='underline underline-offset-4 hover:text-primary'
            >
              前往登陆
            </Link>
          </p>
        </div>
        <SignUpForm />
      </Card>
    </AuthLayout>
  )
}
