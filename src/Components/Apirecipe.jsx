import ReactMarkdown from 'react-markdown'
function Apirecipe(props) {
  return (
    <div className='recipediv'>
      <section className="suggested-recipe-container">
        <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
      </section>
    </div>
  );
}

export default Apirecipe;