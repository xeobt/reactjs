function Header(props){
    return (
        <>
            <div style={{paddingLeft: "5vh",paddingRight: "5vh",backgroundColor: "rgb(77, 100, 229)",height: "10vh", display: "flex",justifyContent: "space-between", fontSize: "3vh", alignItems: "center"}}>
                <h1 style={{fontSize: "5vh"}}>{props.title}</h1>
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