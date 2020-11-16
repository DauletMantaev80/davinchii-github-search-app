import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
<div className="flex flex-no-wrap">
        <h1 className="text-gray-700 font-bold my-3" >List of repositories

        </h1>
        <svg className="m-2"  version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="19px" height="19x" viewBox="0 0 300.000000 293.000000"
             preserveAspectRatio="xMidYMid meet">
            <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
            </metadata>
            <g transform="translate(0.00000,120.000000) scale(0.1,-0.100000)"
               fill="#000000" stroke="none">
                <path d="M1234 2914 c-252 -42 -552 -190 -746 -368 -229 -211 -386 -481 -460
-791 -29 -120 -36 -438 -14 -577 73 -442 355 -842 751 -1065 180 -101 311
-137 347 -95 27 30 30 59 23 201 l-7 138 -123 -5 c-99 -4 -132 -1 -176 13
-112 37 -155 78 -218 209 -40 83 -68 117 -176 210 l-40 35 28 10 c37 14 112 3
97 -14 -6 -8 -6 -15 2 -23 16 -16 45 -15 51 1 3 9 10 7 23 -6 11 -10 13 -17 6
-17 -7 0 -12 -9 -12 -20 0 -24 30 -41 52 -29 10 6 20 4 27 -5 9 -11 7 -15 -10
-19 -25 -7 -23 -44 4 -61 14 -9 21 -7 31 6 12 16 14 15 34 -11 21 -28 21 -29
2 -34 -26 -7 -25 -29 1 -53 16 -14 24 -16 37 -7 9 6 16 18 14 28 -3 15 -1 15
21 -2 14 -10 21 -19 16 -21 -16 -6 -10 -31 10 -42 29 -15 52 -12 58 8 7 28 60
18 59 -11 -1 -19 5 -22 34 -22 30 0 35 3 34 22 0 19 9 25 60 40 l60 18 16 55
c20 65 43 111 64 129 25 21 19 37 -16 39 -64 5 -185 34 -260 64 -209 80 -333
243 -373 489 -35 218 -6 375 98 523 43 61 43 61 29 101 -17 50 -11 242 10 300
14 37 18 40 57 43 65 5 212 -52 322 -125 l39 -25 82 16 c189 39 406 39 594 1
l81 -17 89 51 c113 65 184 92 259 98 l61 5 18 -70 c14 -56 17 -93 13 -174 -3
-57 -8 -114 -12 -128 -5 -19 1 -35 25 -65 128 -161 155 -424 69 -682 -72 -217
-290 -371 -566 -399 -35 -4 -63 -11 -63 -16 0 -6 11 -23 24 -39 14 -16 35 -55
47 -86 21 -54 23 -76 27 -333 4 -313 4 -310 79 -310 47 0 177 49 273 103 385
216 641 553 751 988 30 122 38 445 15 591 -72 438 -348 831 -740 1056 -158 91
-350 159 -511 181 -105 15 -402 12 -501 -5z"/>
            </g>
        </svg>
</div>

      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}  className="rounded border border-teal-500 py-2 px-4 w-3/12 active:border-green-700" placeholder="enter name repository"
      />
      <Link to={`/${user}`} className="flex flex-col items-center justify-center border-5 bg-teal-300 hover:bg-teal-500 text-gray-700 font-bold py-2 px-4 rounded my-3 w-48" >View</Link>
    </div>
  )
}

export default Main
