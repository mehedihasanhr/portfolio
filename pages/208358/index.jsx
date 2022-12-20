import { Input } from '../../components/Form';
import { Button } from '../../components/Button';

const Login = () => {
    return (
        <div className="w-screen h-screen grid place-content-center">
            <div className="border border-dashed p-10 rounded-xl flex flex-col items-center border-gray-800">
                <div className="relative">
                    <div className="absolute bg-green-500 w-full h-full blur-[100px]" />
                    <h4 className="text-gray-500 font-normal mb-6 relative">Login</h4>
                </div>
                <form action="" className="flex flex-col space-y-3">
                    <Input type="text" label="Username" placeholder="Username" />
                    <Input type="password" label="Password" placeholder="Password" />
                    <div className="pt-3">
                        <Button
                            type="submit"
                            className="w-full border border-dashed border-gray-700 text-green-500/70"
                            bgEffect="bg-green-500"
                        >
                            Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
