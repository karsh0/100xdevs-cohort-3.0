
interface ILabel{
    title: string,
    placeholder: string,
    onChange: (e: any)=> void
}

export const LabelledInput = ({title, placeholder, onChange}: ILabel) =>{
    return <div className="flex flex-col gap-1 items-start">
        <label className="text-md text-slate-400">{title}</label>
        <input className="text-xl px-3 py-2 text-gray-600 rounded-md" type="text" placeholder={placeholder} onChange={onChange} />
    </div>
}