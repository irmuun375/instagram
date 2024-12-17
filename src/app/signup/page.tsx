"use client"
import * as React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


function Page() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleUsernameValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };
    const handleEmailValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };
    const handlePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const validateForm = () => {
        const newErrors = {
            username: username ? "" : "This field is required",
            email: email ? "" : "This field is required",
            password: password ? "" : "This field is required",
        };
        setErrors(newErrors);
        return Object.values(newErrors).every((error) => error === "");
    };

    const handleSubmit = () => {
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };

    return <div className="flex justify-center items-center h-screen">
        <Card>
            <CardHeader>
                <CardTitle>Instagram</CardTitle>
                <CardDescription>Sign up to see photos and videos from your friends.</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <Input
                        placeholder="username"
                        value={username}
                        onChange={handleUsernameValue}
                        className={`${errors.username ? "border-red-500" : ""} mb-2`}
                    />
                    {errors.username && <div className="text-red-500 text-sm">{errors.username}</div>}
                </div>
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
}
export default Page