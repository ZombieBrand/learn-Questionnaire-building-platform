import { cn } from "@/lib/utils";
import { AnimatedGridPattern } from "./ui/animated-grid-pattern";

interface LoginWrapperProps {
  children: React.ReactNode;
}
const LoginWrapper: React.FC<LoginWrapperProps> = ({ children }) => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-100/20 via-indigo-200/20 to-purple-300/20 blur-3xl" />
      </div>

      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "fixed z-0 [mask-image:radial-gradient(1200px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
      <div className="w-full max-w-sm z-10">
        <div className="flex flex-col gap-6">
          <p className="whitespace-pre-wrap text-center text-4xl font-medium tracking-tighter text-black dark:text-white">
            问卷管理系统
          </p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LoginWrapper;
