function Nav(props){
    return (
        <>
            <div>
                <div style={{display: "flex", gap: "20px", justifyContent: "center", paddingTop: "20px"}}>
                    <input placeholder="Seach Products..." />
                    <button type="submit">Search</button>
                </div>
                <div style={{display: "flex", gap: "20px", justifyContent: "center", paddingTop: "20px"}}>
                    <button>{props.filter1}</button>
                    <button>{props.filter2}</button>
                    <button>{props.filter3}</button>
                    <button>{props.filter4}</button>
                </div>
            </div>
        </> 
    );
}

export default Nav;