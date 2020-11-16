import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Route, useParams } from 'react-router-dom'
import RepoList from './repoList'
import ReadMe from './readMe'
import Headerr from "./headerr";
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
    const [readme, setReadme] = useState('')
    const [repoName, setRepoName] = useState('')
    const [user, setUser] = useState([])
    const [date, setDate] = useState([])
  useEffect(() => {
      if(repositoryName) {
          axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {headers: {Accept:'application/vnd.github.VERSION.raw'}
      }).then(({ data }) => setReadme(data))}
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
  axios(`https://api.github.com/users/${userName}`).then(({data}) => setRepoName(data))
  axios(`https://api.github.com/users/${userName}`).then(({data}) => setUser(data))
      if(repositoryName) {
          axios(`https://api.github.com/repos/${userName}/${repositoryName}`, {headers: {Accept: 'application/vnd.github.VERSION.raw'}}).then(({data}) => setDate(data))
      }
  }, [userName])
    console.log('test')

  return (
    <div>
        <Headerr date={date} reponame={repoName} userName={userName} user={user} repositoryName={repositoryName} />
      <Route exact path="/:userName" component={() => <RepoList repositoryName={repositoryName} date={date} repoList={repoList} repoName={repoName} userName={userName}/>} />
      <Route exact path="/:userName/:repositoryName" component={() => <ReadMe readme={readme} date={date}  />} />
    </div>
  )
}

Home.propTypes = {}

export default Home
