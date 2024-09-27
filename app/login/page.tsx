import AcmeLogo from "~/app/ui/components/acme-logo";
import LoginForm from "~/app/ui/components/login-form";

export default function LoginPage() {
  return (
    <main className='flex justify-center items-center md:h-screen'>
      <div className='relative flex flex-col space-y-2.5 mx-auto md:-mt-32 p-4 w-full max-w-[400px]'>
        <div className='flex items-end bg-blue-500 p-3 rounded-lg w-full h-20 md:h-36'>
          <div className='w-32 md:w-36 text-white'>
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
