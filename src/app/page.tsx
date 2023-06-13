import Image from 'next/image'
import TodoList2 from '@/components/TodoList'
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'

export default function Home() {
  return (
    
    //********** Main Screen Gradient ****************
    <main className='bg-gradient-to-tr from-primary to-secondary h-screen flex items-center justify-center'>
    
    {/* ********** FORM Div *********** */}
      <div className='w-full max-w-md px-8 py-4 bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-xl   rounded-lg '>
        {/* ToDo List */}
    
        {/* @ts-ignore */}
       <TodoList/>
       <AddTodo/>

        {/* Line at Bottom */}
        <div className='bg-black/75 mx-auto w-1/2 h-1.5 rounded-md mt-5 '>

        </div>
      </div>
    </main>
  )
}
