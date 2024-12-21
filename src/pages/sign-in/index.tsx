// import { useState } from "react";
// import Layout from "../../../layout/website";
// import Section from "../../../layout/global/Section";
// import Container from "../../../layout/global/Container";

// import { Label, Input, Button } from "../../../components";
// import axiosInstance from "../../../lib/axios";
// import { Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/data/schema/loginSchema";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });
  const navigate = useNavigate();

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    if (values.email.trim() == "" || values.password.trim() == "") {
      return alert("Please enter email and password");
    }
    navigate("/");
    // try {
    //   const response = await axiosInstance.post(
    //     "/login",
    //     // "http://localhost:8000/login",
    //     formData
    //   );
    //   alert(response.data.message);
    //   console.log(response);

    //   // get the name of the user
    //   const user = response.data.user;
    //   // Store user info in localStorage or state management
    //   localStorage.setItem("user", JSON.stringify(response.data.user));

    //   // Call onLogin to update App state
    //   //   onLogin(user);

    //   router.replace("/"); // Redirect to dashboard or home page
    // } catch (error) {
    //   console.log(error);

    //   alert(error.response?.data?.detail || "Login failed");
    // }
  };

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const a = form.getValues();

  console.log(a);
  console.log(form.formState.errors);

  return (
    <div className="max-w-md w-full bg-white p-6 pt-5 dark:border-slate-800 dark:bg-slate-950">
      <div className="mb-2">
        <h3 className="text-center mb-10 text-3xl font-bold text-slate-700 dark:text-white">
          Sign in to Grunt
        </h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5 mb-10">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="emial-address">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      id="emial-address"
                      {...field}
                    />
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
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="********" id="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <Button className="w-full bg-primary text-white hover:bg-primary/80">
              Sign in
            </Button>
          </div>
        </form>
      </Form>

      <hr className="mt-10 mb-5" />
      <div className="mb-4 mt-5">
        <h6 className="text-center text-sm font-bold text-[#7C7C7C]">
          New to Grunt?{" "}
          <Link to="/sign-up" className="text-primary">
            Create an account
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default LoginPage;
