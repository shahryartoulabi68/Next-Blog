
import { Suspense } from 'react';
import UserTable from './_/components/UserTable';
import Spinner from '@/ui/Spinner';

async function UsersPage() {

  return (
    <div>
      <h1 className='font-bold text-secondary-700 mb-8'>لیست کاربران</h1>
      <Suspense fallback={<Spinner />}>
        <UserTable />
      </Suspense>
    </div>
  )
}

export default UsersPage
