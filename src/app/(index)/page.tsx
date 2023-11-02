import KanbanBoard from './(components)/KanbanList'

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200 pt-20">
      <div className="container mx-auto">
        <KanbanBoard></KanbanBoard>
      </div>
    </main>
  )
}
