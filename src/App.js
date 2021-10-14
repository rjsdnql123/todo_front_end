import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import './App.css';
import ASD from './Aeact-swiper';

import { Carousel } from '@trendyol-js/react-carousel';
import ExampleComponent from './exam/Exam';

function App() {

  const [title, setTitle] = useState('')
  const [description, setDiscription] = useState('')

  const [projectList, setProjectList] = useState([])
  const [akak, setAkak] = useState(false)

  const sendData = () => {

    fetch('http://localhost:3001/project', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        created: '2018-01-03 13:01:10',
        author_id: '1'
      })
    }).then((res) => {
      console.log(res)
      setAkak(!akak)
    })
  }

  useEffect(() => {
    fetch('http://localhost:3001/project', {
      method: 'GET',
    }).then((res) => {
      return res.json();
    }).then((res) => {
      setProjectList(res)

    })
  }, [akak])

  return (
    <div className="App">
      <label>title<input onChange={(e) => setTitle(e.target.value)}></input></label>
      <label>description<input onChange={(e) => setDiscription(e.target.value)}></input></label>
      <button onClick={sendData}>보내기</button>
      {/* <div>{example.map((x) => {
        return <div>{x}</div>
      })}</div> */}
      <div>
        <Carousel>
          {example.map((x, i) => {
            return (
              <div key={i} className='project'>
                <div>{x}</div>
              </div>
            )
          })}

        </Carousel>
        <ExampleComponent />
        {/* 
        <ASD /> */}
      </div>
    </div>
  );
}

export default App;

const example = ['건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요', '건의해요']