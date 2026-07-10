function Layout(props)
{
    return (
        <>
        <div style={{border: "1px solid white", borderRadius: "50px", boxShadow: "gray 10px 10px 20px", }}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
        </>
    );
}

export default Layout;
