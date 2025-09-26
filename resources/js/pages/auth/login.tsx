import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { Eye, EyeOff, LoaderCircle } from 'lucide-react';
import { useState } from 'react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
    // fungsi show/hide password
    const [show, setShow] = useState(false);
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Log in" />

            <Form {...AuthenticatedSessionController.store.form()} resetOnSuccess={['password']} className="flex flex-col gap-6">
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-4">
                            {/* email input */}
                            <div className="relative">
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="off"
                                    placeholder=" "
                                    className="peer h-12 border-black/30 placeholder-transparent focus-visible:border-muted-foreground focus-visible:ring-0 dark:border-white/30 dark:focus-visible:border-muted-foreground"
                                />
                                <Label
                                    htmlFor="email"
                                    className="absolute -top-2 left-3 cursor-text bg-background px-1 text-xs font-light text-muted-foreground transition ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-black/80 dark:peer-focus:text-white/80"
                                >
                                    Email
                                </Label>
                                <InputError message={errors.email} />
                            </div>

                            {/* password input */}
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    required
                                    tabIndex={2}
                                    autoComplete="off"
                                    placeholder=" "
                                    className="peer h-12 border-black/30 placeholder-transparent focus-visible:border-muted-foreground focus-visible:ring-0 dark:border-white/30 dark:focus-visible:border-muted-foreground"
                                />
                                <Label
                                    htmlFor="password"
                                    className="absolute -top-2 left-3 cursor-text bg-background px-1 text-xs font-light text-muted-foreground transition ease-in-out peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-3 peer-focus:text-xs peer-focus:text-black/80 dark:peer-focus:text-white/80"
                                >
                                    Password
                                </Label>

                                <button
                                    type="button"
                                    onClick={() => setShow((p) => !p)}
                                    className="absolute inset-y-0 right-2 bottom-7 flex items-center px-2 text-black/80 hover:text-muted-foreground focus:outline-none dark:text-white/80 dark:hover:text-muted-foreground"
                                    tabIndex={3}
                                >
                                    {show ? <EyeOff strokeWidth={1} size={18} /> : <Eye strokeWidth={1} size={18} />}
                                </button>

                                <div className="mt-3 flex">
                                    {canResetPassword && (
                                        <TextLink href={request()} className="ml-auto text-sm" tabIndex={5}>
                                            Lupa Password?
                                        </TextLink>
                                    )}
                                </div>

                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-3">
                                <Checkbox id="remember" name="remember" tabIndex={3} />
                                <Label htmlFor="remember">Ingatkan Saya</Label>
                            </div>

                            <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing} data-test="login-button">
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Log in
                            </Button>
                        </div>

                        <div className="text-center text-sm text-muted-foreground">
                            Dengan mengklik Login, Anda menyetujui persyaratan penggunaan.
                        </div>
                    </>
                )}
            </Form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}
