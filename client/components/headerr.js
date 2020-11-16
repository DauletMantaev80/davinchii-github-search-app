import React from 'react'
import { Link } from 'react-router-dom'

const Headerr = ({userName, user,repositoryName, date}) => {
    return (

        <div className="flex bg-teal-500 h-15 justify-items-end">

            <div className="flex text-white flex">
                <span>
                          <img className="w-12 h-12 m-4 ml-20 rounded-full" src={user.avatar_url} alt=""/>
                      </span>
                <span className="rounded border border-teal-500 my-1 pt-2 text-white bg-teal-500 font-400 h-5 font-normal text-3xl uppercase">{userName}</span>

                {
                    repositoryName &&  <span className="rounded border border-teal-500 my-1 pt-2 text-white bg-teal-500 font-400 h-5 font-normal text-3xl">/{repositoryName}  - </span>
                }
                {
                    repositoryName && <div className="display-block ml-4 text-xs mt-3">
                        <span>Created Date: {date.created_at}</span><br/>
                        <span>Update Date: {date.updated_at}</span><br/>
                        <span>Pushed Date: {date.pushed_at}</span>
                    </div>
                }

                </div>


            <div className="flex justify-items-end">
                <Link to="/" className="justify-end my-5 ml-12 rounded border border-white p-1 text-white bg-teal-500 font-400 text-center hover:bg-white hover:text-black">Back to Main</Link>
                {
                    repositoryName && <Link to ={`/${userName}`}className="my-5 mx-1 rounded border border-white p-1 text-white bg-teal-500 font-400 text-center hover:bg-white hover:text-black">Back to Repo</Link>
                }

            </div>
            </div>


    )
}

export default Headerr;