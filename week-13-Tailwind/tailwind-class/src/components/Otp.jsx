import { useRef, useState } from "react"
import Button from "./Button"

export const Otp = () => {
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const [submit, setSubmit] = useState(false);

    
    return <div className="flex flex-col gap-4">
         <div className="flex">
            <SubOtpBox reference={ref1} onDone={()=>{
                ref2.current.focus();
            }}  goBack={()=>{
                ref1.current.focus();
            }}/>
            <SubOtpBox reference={ref2} onDone={()=>{
                ref3.current.focus();
            }}  goBack={()=>{
                ref1.current.focus();
            }}/>
            <SubOtpBox reference={ref3} onDone={()=>{
                ref4.current.focus();
            }}  goBack={()=>{
                ref2.current.focus();
            }}/>
            <SubOtpBox reference={ref4} onDone={()=>{
                ref5.current.focus();
            }}  goBack={()=>{
                ref3.current.focus();
            }}/>
            <SubOtpBox reference={ref5} onDone={()=>{
                ref6.current.focus();
            }}  goBack={()=>{
                ref4.current.focus();
            }}/>
            <SubOtpBox reference={ref6} onDone={()=>{
                ref6.current.focus();
                setSubmit(true);
            }}  goBack={()=>{
                ref5.current.focus();
                setSubmit(false)
            }}/>
</div>

{submit ? <Button value={"Submit"}/> : <div className="button px-8 py-3 bg-red-400 text-white text-2xl text-semibold text-center rounded-2xl">Submit</div>}
</div>
}

function SubOtpBox({reference, onDone, goBack}){
    const [inputVal, setInputVal] = useState("");

    return <div>
        <input value={inputVal} ref={reference} onKeyUp={(e)=>{
            if(e.key == "Backspace"){
                goBack()
            }
            return
        }} onChange={(e)=>{
            if(e.target.value >= "a" && e.target.value <="z" || e.target.value >= "0" && e.target.value <="9" ){
                setInputVal(e.target.value)
                console.log(inputVal)
                onDone()
            }
            else{
                setInputVal("")
            }
        }} type="text" className="mx-2 w-[40px] h-[50px] rounded-2xl bg-blue-400 outline-none px-3 text-white text-2xl" />
    </div>
}