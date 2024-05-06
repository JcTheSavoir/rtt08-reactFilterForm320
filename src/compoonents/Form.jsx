const Form = ({languages}) => {

  // const languagesOnly = languages.flatMap(({languagesUsed}) => (languagesUsed))
  //----------------VV------------Ensures only unique values are added to new array to prevent multiple 
  //checkboxes of the same type from being created

  const languagesOnly = [...new Set(languages.flatMap(({languagesUsed}) => (languagesUsed)))]
  console.log(languagesOnly)

  const handleCheckbox = event => {
    console.log(event.target.value)
  }

  return (
    <form className="formContainer">
      {languagesOnly.map(eachLanguages => (
      <div>
        <input type="checkbox" onChange={handleCheckbox} id={eachLanguages} name={eachLanguages} value={eachLanguages} />
        <label for={eachLanguages}>{eachLanguages}</label>
      </div>
      ))}
    </form>
  )
}
export default Form