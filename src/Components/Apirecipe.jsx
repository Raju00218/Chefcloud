import ReactMarkdown from 'react-markdown'
function Apirecipe(props) {
  return (
    <div className="center-wrapper">
      <div className='recipediv'>
        <section className="suggested-recipe-container">
          <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
        </section>
      </div>
    </div>
  );
}

export default Apirecipe;