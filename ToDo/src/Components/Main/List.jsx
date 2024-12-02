export default function List({todo, key, changeStatus}){
    return (
        <>
        <div className="list" key={key}>
            <img src="/vektor.png" className="del" style={{width: "3px", height: "12px", cursor: "pointer"}} alt=""/> 
            <img src={todo.img} onClick={()=>{changeStatus(todo.id)}} style={{width: "24px", height: "24px", cursor: "pointer"}} alt=""/>
            <li key={key} style={{
                  textDecoration:
                    todo.status === "done" ? "line-through" : "none",
                  color:
                  todo.status === "done" ? "#959595" : "black",
                }}>{todo.title}</li>
        </div>
        
        </>

    )
}