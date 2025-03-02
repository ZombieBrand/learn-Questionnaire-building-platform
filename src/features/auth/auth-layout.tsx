import { cn } from '@/lib/utils'
import { AnimatedGridPattern } from '@/components/ui/animated-grid-pattern'

interface AuthLayoutProps {
  children: React.ReactNode
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 md:p-10'>
      <div className='bg-grid-slate-100 absolute inset-0 -z-10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]' />
      <div className='absolute inset-0 -z-10 flex items-center justify-center'>
        <div className='h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-200/20 to-purple-300/20 blur-3xl' />
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          'fixed z-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]',
          'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
        )}
      />
      <div className='z-10 w-full max-w-sm'>
        <div className='flex flex-col gap-6'>
          <p className='whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white'>
            问卷管理系统
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
