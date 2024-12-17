import { LabelledInput } from "@/app/components/LabelledInput";

export default function signin(){
    return <div className="w-screen h-screen flex justify-center items-center">
        <div className="max-w-72">
        <span className="text-4xl font-semibold">signin page</span>
        <div className="flex flex-col gap-2 w-full">
            <LabelledInput title="username" placeholder="username"/>
            <LabelledInput title="password" placeholder="password"/>
            <button className="text-xl rounded-xl bg-red-400 px-4 py-3 w-54">Sign up</button>
        </div>
    </div>
    </div>
}