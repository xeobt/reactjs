function Hero(props){
    return (
        <>
            <div style={{border: "1px solid white", borderRadius: "50px", backgroundColor: "rgba(22, 23, 29, 0.5)", backdropFilter: "blur(50px)"}}>
                <h1>{props.headline}</h1>
                <h4>{props.description}</h4>
            </div>
        </> 
    );
}

export default Hero;