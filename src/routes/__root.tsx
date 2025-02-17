import { createRootRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { useEffect } from "react";

const AuthGuard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 这里可以根据实际需求修改登录状态的判断逻辑
    const isAuthenticated = localStorage.getItem("token");
    const currentPath = window.location.pathname;
    
    // 如果用户未登录且不在登录或注册页面，则重定向到登录页面
    if (!isAuthenticated && 
        !['/login', '/register'].includes(currentPath)) {
      navigate({ to: '/login' });
    }
  }, [navigate]);

  return <Outlet />;
};

export const Route = createRootRoute({
  component: () => (
    <>
      <AuthGuard />
      <TanStackRouterDevtools />
    </>
  ),
});
