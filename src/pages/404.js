import { useRouter } from 'next/router'
import { HiBackspace } from 'react-icons/hi'
import CustomBtn from '../components/CustomBtn'

export default function Custom404() {
    const router = useRouter();
    return (
        <div className="flex text-stone-200 bg-neutral-900 justify-center items-center h-screen">
            <div className='space-y-4 text-center'>
                <h1 className="text-9xl font-semibold">404</h1>
                <h1 className="text-3xl">
                    Page not found
                </h1>
                <p className="text-normal italic">The resource requested could not be founded :(</p>
                <div>
                    <CustomBtn w={38} text='Go back home' handleClick={() => router.push('/')}>
                        <HiBackspace size={25}/>
                    </CustomBtn>
                </div>
            </div>
        </div>
    )
  }