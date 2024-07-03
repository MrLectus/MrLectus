"use client";
import { sendEmail } from "../actions";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";
import { SendButton } from "@/components/send-button";
import { match, P } from "ts-pattern";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [state, formAction] = useFormState(sendEmail, null);
  return (
    <section
      className="p-10 flex flex-col justify-center items-center gap-4"
      id="contacts"
    >
      <h2 className="text-blue-400 text-center text-xl font-bold">Contact</h2>
      <div className="w-full flex flex-col justify-center items-center">
        <Card className="md:w-[700px] p-2 w-full">
          <CardContent className="p-2 w-full">
            <form
              action={formAction}
              className="flex flex-col space-y-3 w-full"
            >
              <Input
                type="text"
                placeholder="Enter your Full Name"
                name="name"
              />
              <Input type="email" placeholder="Enter Your email" name="email" />
              <Textarea placeholder="Type your message here!" name="content" />
              <SendButton className="flex space-x-2" />
            </form>
          </CardContent>
          <CardFooter>
            {match(state)
              .with({ message: "sent" }, () => {
                toast("Your email has been sent successfully");
                return null;
              })
              .with({ error: P.string }, (error) => (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error.error}</AlertDescription>
                </Alert>
              ))
              .otherwise(() => null)}
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
