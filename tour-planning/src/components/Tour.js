import Card from "./Card";

function Tour({tours , clickHandler}){

    return(
        <div className="container">
            <div>
                <h1 className="top-heading">Plan Tour With Tushar</h1>
            </div>

            <div className="cards">
                {
                tours.map((tour)=> {
                    return <Card key={tour.id} {...tour} clickHandler={clickHandler}></Card>
                })
            }
            
            </div>
        </div>
    )

}
export default Tour;