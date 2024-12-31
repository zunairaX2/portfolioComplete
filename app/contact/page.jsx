"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  SelectItem,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Select,
} from "@/components/ui/select";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // Import useRouter for routing
import { toast } from "react-toastify"; // Import toast for notifications

const info = [
  {
    icon: <FaLinkedinIn />,
    title: "Linkedin",
    description: "Zunaira Javaid",
  },
  {
    icon: <FaSkype />,
    title: "Skype",
    description: "Zunairajavaid",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+92) 307 0735862",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "zunairajavaid200@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Lahore, Pakistan",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams(); // Get query parameters from the URL

  useEffect(() => {
    // Retrieve the service parameter from the URL
    const service = searchParams.get("service");
    if (service) {
      // console.log("service=======", service);

      setFormData((prevData) => ({ ...prevData, service: service }));
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const result = await emailjs.send(
        "service_i1q3oax",
        "template_3s4rrg2",
        templateParams,
        "yBdDm9ZYIyQMo2clm"
      );
      toast.success("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
      router.push("/");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={sendEmail}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                As a passionate Software Engineer with 5 years of experience, I
                specialize in building scalable web and mobile applications.
                Whether you're looking for a custom solution, consultation, or a
                development partner, I'm here to help bring your ideas to life.
                Let's collaborate on your next project!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* select */}
              <Select
                onValueChange={handleServiceChange}
                value={formData.service} // Set the selected value from formData
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="App Development">
                      App Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design Development">
                      UI/UX Design Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
              />
              {/* btn */}
              <Button
                size="md"
                className="max-w-40"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
