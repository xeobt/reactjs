function Header(props){
    return (
        <>
            <div style={{border: "1px solid white", borderRadius: "50px", backgroundColor: "rgba(22, 23, 29, 0.5)", backdropFilter: "blur(50px)"}}>
                <h1>{props.title}</h1>
                <h4>
                    <a style={{textDecoration: "none"}} href="#">{props.nav1} | </a>
                    <a style={{textDecoration: "none"}} href="#">{props.nav2} | </a>
                    <a style={{textDecoration: "none"}} href="#">{props.nav3} | </a>
                    <a style={{textDecoration: "none"}} href="#">{props.nav4} </a>
                </h4>
            </div>
        </> 
    );
}

export default Header;