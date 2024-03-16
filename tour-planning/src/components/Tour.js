import Card from "./Card";

function Tour({tours , clickHandler}){

    return(
        <div>
            <div>
                <h1>Plan Tour With Tushar</h1>
            </div>
            <div>
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