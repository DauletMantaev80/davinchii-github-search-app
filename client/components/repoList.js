import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const RepoList = ({ repoList, userName }) => {
    const [search, setSearch] = useState('')
    const searchRepo = repoList.filter(repo => repo.name.includes(search))
    return (
        <div >
            <div className="flex justify-center w-48 ml-20 mt-2">
            <input placeholder="Search . . ." type="text" value={search} className="ml-20 border-b-2 border-gray-500 outline-none text-2xl"
                   onChange={(e) => setSearch(e.target.value)}
            /></div>
            <div className="flex flex-wrap justify-center mt-5">
      {searchRepo.map((repo) => {
        return <div className="flex" key={repo.id}>
            <Link to={`/${userName}/${repo.name}`}
                  className="flex flex-wrap items-center overflow-hidden my-1 mx-1 h-20 align-middle rounded border border-teal-400 w-48 justify-center text-gray-700 bg-teal-300 font-400 text-center hover:bg-teal-500 hover:text-gray-100 uppercase  " >
            {repo.name}

            <p className="text-sm lowercase mt-2 text-gray-700 text-opacity-50 ">{repo.description}</p>
        </Link>

        </div>
      })}
    </div>
        </div>
  )
}
export default RepoList
