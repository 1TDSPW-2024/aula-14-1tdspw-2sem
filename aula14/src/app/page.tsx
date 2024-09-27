
export default function Home() {
  return (
    <div className="prose lg:prose-x1">
      <h1>Página Principal</h1>
      <div>
        <select className="px4 py-3 rounded-full">
          <option>---</option>
          <option>Opção 1</option>
          <option>Opção 2</option>
          <option>Opção 3</option>
          <input type="checkbox" className="rounded-pink" />
        </select>
      </div>
    </div>
  )
}
