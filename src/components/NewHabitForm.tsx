import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = [
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday', 
    'Saturday'
]

export function NewHabitForm() {
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    async function createNewHabit(event: FormEvent) {
        event.preventDefault()
        
        if (!title || weekDays.length === 0){
            return 
        }

        await api.post('habits', {
            title,
            weekDays
        })

        setTitle('')
        setWeekDays([])

        alert('Habit created successfully.')
        
    }

    function handleToggleWeekDay(weekDay: number){
        if (weekDays.includes(weekDay)){
            const weekDaysWithoutRemovedOne = weekDays.filter(day => day != weekDay)
            setWeekDays(weekDaysWithoutRemovedOne)
        } else {
            const weekDaysWithAddedOne = [...weekDays, weekDay]
            setWeekDays(weekDaysWithAddedOne)
        } 
    }

    return (
        <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                What is your commitment?
            </label>

            <input
                type="text"
                id="title"
                placeholder="Example: Exercise, Read, Meditate, etc."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
                autoFocus
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                What is the recurrence?
            </label>

            <div className="flex flex-col gap-2 mt-3">
                {availableWeekDays.map((weekDay, index) => {
                    return(
                        <Checkbox.Root
                            key={weekDay}
                            className='flex items-center gap-3 group'
                            checked={weekDays.includes(index)}
                            onCheckedChange={() => handleToggleWeekDay(index)}
                        >
                            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500">
                                <Checkbox.Indicator>
                                    <Check size={20} className='text-white'/>
                                </Checkbox.Indicator>
                            </div>
                                
                            <span className='text-white leading-tight'>
                                {weekDay}
                            </span>
                        </Checkbox.Root>
                    )
                })}
            </div>

            <button type='submit' className="mt-6 p-3 rounded-lg flex gap-3 items-center justify-center font-semibold bg-green-500 hover:bg-green-400" >
                <Check size={20} weight='bold'/>
                Confirmar
            </button>
        </form>
    )
}