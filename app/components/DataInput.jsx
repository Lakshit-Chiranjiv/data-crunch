
const DataInput = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl">Input Data File (CSV)</h1>
        <input type="file" id="file" accept=".csv" className="bg-blue-400 p-4 rounded"/>
        <br />
        <button className="bg-green-400 rounded px-4 py-2">Crunch🚀</button>
    </div>
  )
}

export default DataInput