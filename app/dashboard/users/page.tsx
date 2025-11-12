import Link from 'next/link'

const Users = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul>
        <li><Link href="/dashboard/users/1">Helge</Link></li>
        <li><Link href="/dashboard/users/2">Users 2</Link></li>
        <li><Link href="/dashboard/users/3">Users 3</Link></li>
        <li><Link href="/dashboard/users/4">Users 4</Link></li>
        <li><Link href="/dashboard/users/5">Users 5</Link></li>
      </ul>

    </div>
  )
}

export default Users
