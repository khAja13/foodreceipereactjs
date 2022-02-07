function Fetching(recipe){
    return(
        <div className="box">
            {/* {console.log(recipe["recipe"]["recipe"])} */}
            <a href={recipe["recipe"]["recipe"]["shareAs"]} target="_blank" rel="noreferrer"><img src={recipe["recipe"]["recipe"]["image"]} alt="" /></a>
            <p>{recipe["recipe"]["recipe"]["label"]}</p>
        </div>
    );
}
export default Fetching;