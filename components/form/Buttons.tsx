'use client'
import { RotateCcw } from 'lucide-react'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

type SubmitButtonProps = {
  className?: string
  text?: string
}

export const SubmitButton = ({
  className = '',
  text = 'Потврди',
}: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} className={className} size='lg'>
      {pending ? (
        <>
          <RotateCcw className='mr-2 h-4 w-4 animate-spin' /> Сачекајте...
        </>
      ) : (
        text
      )}
    </Button>
  )
}
