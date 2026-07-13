function Footer(props){
    return (
        <>
        <div style={{paddingTop: "5vh"}}>
            <div style={{border: "0.2vh solid white",paddingBottom: "5vh", borderRadius: "50vh", height: "fitContent", backgroundColor: "rgba(22, 23, 29, 0.5)"}}>
                <h1>{props.title}</h1>
                <p>Email: {props.email}</p>
                <p>Phone: {props.phone}</p>
                <p>2026 {props.title}. All Rights Reserved.</p>
            </div>
        </div>
        </> 
    );
}

export default Footer;