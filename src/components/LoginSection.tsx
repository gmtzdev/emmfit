import { ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LoginSection = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email.trim() || !password) {
            toast({
                title: "Complete your login details",
                description: "Enter your email and password to continue.",
                variant: "destructive",
            });
            return;
        }

        toast({
            title: "Login ready",
            description: "Connect this form to your authentication provider to enable access.",
        });
    };

    return (
        <section id="login" className="py-24 section-padding bg-secondary">
            <div className="max-w-[520px] mx-auto">
                <div className="text-center">
                    <p className="font-body text-accent text-xs uppercase tracking-[0.3em]">Client portal</p>
                    <h2 className="font-display text-secondary-foreground text-5xl md:text-7xl uppercase tracking-tight mt-3">
                        Sign In
                    </h2>
                    <p className="font-body text-muted-foreground mt-4">
                        Access your appointments and personal details.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-background border border-border p-6 md:p-8 mt-10">
                    <div className="space-y-5">
                        <div>
                            <label htmlFor="login-email" className="font-body text-secondary-foreground text-xs uppercase tracking-widest">
                                Email
                            </label>
                            <div className="relative mt-2">
                                <Mail size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    id="login-email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@example.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    className="w-full border border-border bg-secondary py-3 pl-11 pr-4 font-body text-sm text-secondary-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="login-password" className="font-body text-secondary-foreground text-xs uppercase tracking-widest">
                                Password
                            </label>
                            <div className="relative mt-2">
                                <LockKeyhole size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                <input
                                    id="login-password"
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                    className="w-full border border-border bg-secondary py-3 pl-11 pr-4 font-body text-sm text-secondary-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 mt-5">
                        <label className="flex items-center gap-2 font-body text-muted-foreground text-xs cursor-pointer">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(event) => setRememberMe(event.target.checked)}
                                className="accent-accent"
                            />
                            Remember me
                        </label>
                        <a href="#login" className="font-body text-accent text-xs hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="mt-7 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-body font-semibold text-sm uppercase tracking-widest py-4 hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                        Sign In <ArrowRight size={16} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LoginSection;
