const Header =(props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Content =(props)=>{
  const Part1=(props)=>{
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  const Part2=(props)=>{
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  const Part3=(props)=>{
    return(
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  return(
    <div>
    <Part1 name={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part2 name={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part3 name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total=(props)=>{
  return(
    <div>
      <p>Number of exercises {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises} </p>
    </div>
  )
}


const App = () => {
  
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App