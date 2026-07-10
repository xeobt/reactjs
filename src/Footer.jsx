function Footer(props){
    return (
        <>
            <div style={{border: "1px solid white", borderRadius: "50px", height: "75px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "rgba(22, 23, 29, 0.5)", backdropFilter: "blur(50px)"}}>
                <p>{props.text}</p>
            </div>
        </> 
    );
}

export default Footer;