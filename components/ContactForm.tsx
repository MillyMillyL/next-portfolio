"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Your name is required." })
    .max(50, { message: "Maximum of 50 characters allowed." }),
  email: z
    .string()
    .email({ message: "Invalid email address. Please provide a valid email." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(200, { message: "Message must be no more than 200 characters long." }),
});

function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });
  console.log("form", form);

  async function handleFormSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    await fetch(
      "https://script.google.com/macros/s/AKfycbwc2AzgyRhDBEDprvDnWA4uMTC9S73UrKRvk0Sd0fo/dev",
      {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // try {
    //   const res = await fetch(
    //     "https://script.google.com/macros/s/AKfycbxcfdU2yYw4z3_7RnwVsOs-cExwFFAA70uiC7ztQw7sNT8eSoap2vLc9nMveHxrfA6d/exec",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(values),
    //     }
    //   );

    //   if (res.ok) {
    //     console.log("Message sent successfully!");
    //   } else {
    //     console.error("Failed to send message.");
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  }
  return (
    <div
      className="container w-1/2 bg-gradient-to-b from-white to-gray-50"
      id="contact"
    >
      <h1 className=" text-3xl font-bold my-10 text-center">Contact Me</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here..."
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
