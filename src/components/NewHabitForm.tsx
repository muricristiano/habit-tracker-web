import { Check } from "phosphor-react";

export function NewHabitForm() {
    return (
        <form className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                What is your commitment?
            </label>

            <input
                type="text"
                id="title"
                placeholder="Example: Exercise, Read, Meditate, etc."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência?
            </label>

            <button type='submit' className="mt-6 p-3 rounded-lg flex gap-3 items-center justify-center font-semibold bg-green-800 hover:bg-green-700">
                <Check size={20} weight='bold'/>
                Confirmar
            </button>
        </form>
    )
}