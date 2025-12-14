import ReactMarkdown from 'react-markdown'
function Apirecipe(props) {
  return (
    <div className="center-wrapper">
      <div className='recipediv'>
      <div>
          <section className="suggested-recipe-container">
            <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
          </section>
      </div>
      </div>
    </div>
  );
}

export default Apirecipe;