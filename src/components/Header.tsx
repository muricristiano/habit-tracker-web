import { Plus, X } from 'phosphor-react'
import logoImage from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { NewHabitForm } from './NewHabitForm'

export function Header() {
    return (
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
        <img src={logoImage} alt='Habits'/>

        <Dialog.Root>
          <Dialog.Trigger 
              type='button'
              className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-2 hover:border-violet-400 transition-colors duration-700 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-4 focus:ring-offset-zinc-900'
          >
            <Plus size={20} className='text-violet-500'/>
              New Habit
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className='w-screen h-screen bg-black/75 fixed inset-0'/>
            <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Dialog.Close className='absolute right-6 top-6 text-zinc-400 rounded-sm hover:text-zinc-200 focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1 focus:ring-offset-zinc-900'>
                <X size={24} aria-label='Fechar'/>
              </Dialog.Close>
              <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                New habit
              </Dialog.Title>

              <NewHabitForm />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    )
}