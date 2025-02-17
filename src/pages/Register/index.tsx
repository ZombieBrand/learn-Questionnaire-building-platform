import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoginWrapper from "@/components/login-wrapper";

const formSchema = z.object({
  account: z
    .string()
    .min(3, {
      message: "账号至少需要3个字符",
    })
    .max(20, {
      message: "账号最多只能20个字符",
    }),
  password: z.string().min(6, {
    message: "密码至少需要6个字符",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const Register: React.FC = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      account: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <>
      <LoginWrapper>
        <Card className="backdrop-blur-sm bg-white/80 shadow-lg transition-all hover:shadow-xl hover:scale-[1.01]">
          <CardHeader>
            <CardTitle>账号注册</CardTitle>
            <CardDescription>请输入登录账号和密码</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="account"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>账号</FormLabel>
                      <FormControl>
                        <Input placeholder="示例:admin" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>密码</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  注 册
                </Button>
                <div className="mt-4 text-center text-sm">
                  <Link to="/login" className="underline underline-offset-4">
                    返回登录
                  </Link>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </LoginWrapper>
    </>
  );
};

export default Register;
