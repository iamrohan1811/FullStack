import { useState } from 'react'
const Header=()=>{
  return(
    <div>
      <h1>give Feedback</h1>
    </div>
  )
}
const Display=(props)=>{
  return(
    <div>{props.text} {props.counter}</div>
  )
}
const StatisticLine=(props)=>{
  if(props.text=='positive'){
    return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>  
    )
  }
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}
const Statistics=(props)=>{
  if(props.bad + props.neutral +props.good == 0){
    return(
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  return(
    // <div>
    //   <h1>statistics</h1>
    //   <StatisticLine text={'good'} value={props.good}/>
    //   <StatisticLine text={'neutral'} value={props.neutral}/>
    //   <StatisticLine text={'bad'} value={props.bad}/>
    //   <StatisticLine text={'all'} value={props.bad + props.neutral +props.good}/>
    //   <StatisticLine text={'average'} value={(props.bad*-1 + props.good)/(props.bad + props.neutral +props.good)}/>
    //   <StatisticLine text={'positive'} value={100*(props.good)/(props.bad + props.neutral +props.good)}/>
    // </div>
    <div>
      <h1>statistics</h1>
    <table>
      <tbody>
      <StatisticLine text={'good'} value={props.good}/>
      <StatisticLine text={'neutral'} value={props.neutral}/>
      <StatisticLine text={'bad'} value={props.bad}/>
      <StatisticLine text={'all'} value={props.bad + props.neutral +props.good}/>
      <StatisticLine text={'average'} value={(props.bad*-1 + props.good)/(props.bad + props.neutral +props.good)}/>
      <StatisticLine text={'positive'} value={100*(props.good)/(props.bad + props.neutral +props.good)}/>
      </tbody>
    </table>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  return (
    <div>
      <Header/>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>

      <Statistics good={good} neutral={neutral} bad={bad}/>  

    </div>
  )
}

export default App