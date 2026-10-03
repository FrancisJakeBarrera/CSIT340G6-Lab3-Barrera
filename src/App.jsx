const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        name={props.course.parts[0].name}
        exercises={props.course.parts[0].exercises}
      />
      <Part
        name={props.course.parts[1].name}
        exercises={props.course.parts[1].exercises}
      />
      <Part
        name={props.course.parts[2].name}
        exercises={props.course.parts[2].exercises}
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises{' '}
      {props.course.parts[0].exercises +
        props.course.parts[1].exercises +
        props.course.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      <b>{props.name} - {props.course} - {props.section}</b>
    </footer>
  )
}

const App = () => {
  const course = {
    name: 'CSIT340 - Industry Elective 1',
    parts: [
      {
        name: 'CSIT335 - Testing and Quality Assurance',
        exercises: 3
      },
      {
        name: 'IT317 - Project Management for IT',
        exercises: 3
      },
      {
        name: 'CSIT327 - Information Management 2',
        exercises: 3
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />

      <Footer
        name="Francis Jake L. Barrera"
        course="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App