
'use client';
import { useRouter } from 'next/navigation';


function BeforeLogin() {
  const router = useRouter()
  return (
    <div>
        <button className="btn btn-outline btn-primary mr-3" onClick={() => router.push('/Login')}>Login</button>
        <button className="btn btn-primary" onClick={() => router.push('/Signup')}>Signup</button>
    </div>
  )
}

export default BeforeLogin