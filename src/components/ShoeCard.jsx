
const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {

  handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoeImg) {
      changeBigShoeImg(imgURL.bigShoeImg)
    }
  }

  return (
    <div className={`order-2 rounded-xl cursor-pointer max-sm:flex-1
    ${bigShoeImg === imgURL ? 'border-coral-red' : 'border-transparent'}`}
    >
      <div>
        <img 
          src={imgURL.thumbnail}
          alt="Shoe Collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  )
}

export default ShoeCard