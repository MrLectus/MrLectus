"use server";
import z, { ZodError } from "zod"
import nodemailer from "nodemailer"
const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email(),
  content: z.string().min(1, { message: "message cannot be empty" })
})
export const sendEmail = async (_prevState: any, form: FormData) => {
  const data = Object.fromEntries(form.entries());
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASS
      }
    })
    const userInfo = formSchema.parse(data)
    await transporter.sendMail({
      from: process.env.MAIL_EMAIL,
      to: process.env.MAIL_EMAIL,
      subject: `Message from ${userInfo.name} <${userInfo.email}>`,
      text: userInfo.content
    })
    return { message: "sent" }
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        error: error.issues[0].message
      }
    }
    console.log(error)
  }
}
