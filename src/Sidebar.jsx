function Sidebar(props){
    return (
        <>
            <div style={{border: "1px solid white", borderRadius: "50px", backgroundColor: "rgba(22, 23, 29, 0.5)", backdropFilter: "blur(50px)"}}>
                <h1>{props.title}</h1>
                <h4>
                    <p><a style={{textDecoration: "none"}} href="#">| {props.item1} |</a></p>
                    <hr></hr>
                    <p><a style={{textDecoration: "none"}} href="#">| {props.item2} |</a></p>
                    <hr></hr>
                    <p><a style={{textDecoration: "none"}} href="#">| {props.item3} |</a></p>
                </h4>
            </div>
        </> 
    );
}

export default Sidebar;