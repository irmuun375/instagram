"use client"
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const Page = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {
            email: email ? "" : "This field is required",
            password: password ? "" : "This field is required",
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = (event: React.FormEvent) => {
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Instagram</CardTitle>
                </CardHeader>
                <CardContent>
                <div>
                    <Input
                        placeholder="email"
                        value={email}
                        onChange={handleEmailValue}
                        className={`${errors.email ? "border-red-500" : ""} mb-2`}
                    />
                    {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
                </div>
                <div>
                    <Input
                        placeholder="password"
                        value={password}
                        onChange={handlePasswordValue}
                        className={`${errors.password ? "border-red-500" : ""} mb-2`}
                    />
                    {errors.password && <div className="text-red-500 text-sm">{errors.password}</div>}
                </div>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" onClick={handleSubmit}>Sign-up</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

export default Page