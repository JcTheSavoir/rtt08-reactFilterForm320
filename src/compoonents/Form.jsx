const Form = ({languages}) => {

  // const languagesOnly = languages.flatMap(({languagesUsed}) => (languagesUsed))
  //----------------VV------------Ensures only unique values are added to new array to prevent multiple 
  //checkboxes of the same type from being created

  const languagesOnly = [...new Set(languages.flatMap(({languagesUsed}) => (languagesUsed)))]
  console.log(languagesOnly)

  return (
  <div>
    <form className="formContainer">
      <div>
        <input type="checkbox" id="HTML" name="HTML" value="HTML" />
        <label for="HTML">HTML</label>
      </div>
      <div>
        <input type="checkbox" id="CSS" name="CSS" value="CSS" />
        <label for="CSS">CSS</label>
      </div>
      <div>
        <input type="checkbox" id="JavaScript" name="JavaScript" value="JavaScript" />
        <label for="JavaScript">JavaScript</label>
      </div>
      <div>
        <input type="checkbox" id="Node.js" name="Node.js" value="Node.js" />
        <label for="Node.js">Node.js</label>
      </div>
      <div>
        <input type="checkbox" id="Express" name="Express" value="Express" />
        <label for="Express">Express</label>
      </div>
      <div>
        <input type="checkbox" id="jsx" name="jsx" value="jsx" />
        <label for="jsx">jsx</label>
      </div>
      <div>
        <input type="checkbox" id="MongoDB" name="MongoDB" value="MongoDB" />
        <label for="MongoDB">MongoDB</label>
      </div>
    </form>
    <form>

    </form>
  </div>
  )
}
export default Form