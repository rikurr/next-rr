import { NextPage } from 'next'
import useSWR from 'swr'

type Task = {
  id: number
  name: string
}

type Source = {
  tasks: Task[]
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data, error } = useSWR<Source>('https://myapi.dev/tasks', fetcher)

  if (error) return <>error</>
  if (!data) return <>...loading</>

  return (
    <div>
      <h1>hello</h1>
      {data.tasks.map((item) => (
        <div key={item.id}>
          <h2 role="title">{item.name}</h2>
        </div>
      ))}
    </div>
  )
}

export default Home
