import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[380px] shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            <AlertCircle className="text-destructive" />
            页面未找到
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            抱歉，我们找不到您要查找的页面。它可能已被删除、重命名或不存在。
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/">返回首页</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
