import './TitleComponent.css'
function TitleComponent({title , desc , img , fullImage}) {
  return (
    <div className={`titleComponent p-80 ${fullImage ? 'overflowHidden' : ''}`}>
      <div className="titleText">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <img src={img} alt="star icon" className='titleStarIcon'/>
    </div>
  )
}

export default TitleComponent
