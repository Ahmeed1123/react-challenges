export default function Sidebar() {
    const StyleSidebar = {
        "border": "3px solid #1d6d66",
        "padding": "20px 0 ",
        "borderRadius": "10px",
        "justifyContent": "center",
        "alignItems": "center",
        "gap": "20px",
        "minWidth": "190px",
        "maxWidth": "300px",
    };
    const StyleColection = {
        "borderRadius": "10px",
        "display": "inline-block",
        "gap": "20px",
        "margin": "0 5px",
        "minWidth": "80px",
        "maxWidth": "80px",

    };
    const btnsContent = [
        {
            id: 1,
            children: `
                <p>الأكثر قراءة</p>
                <img style={{ maxWidth:"100%" }} src={process.env.PUBLIC_URL + "/zhra2.webp"} alt=""  />
            `,
        },
        {
            id: 2,
            children: `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stars" viewBox="0 0 16 16">
                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                </svg>
                <span>جديدة</span>
            `,
        },
        {
            id: 3,
            children: `
                <p>مقالات مميزة</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            `,
        },

    ];
     const myBtnsList = btnsContent.map(({id , children}) => {
        return (
            <div style={StyleColection}>
                <Btn key={id} >
                    <div dangerouslySetInnerHTML={{ __html: children }} />
                </Btn>
            </div>
        )
    })
    return (
        <aside style={StyleSidebar}>
            {myBtnsList}
             

        </aside>
    );
}
function Btn({ children}) {
    const BtnClass = "btn btn-click";
    if(!children) {
        return null;
    }
    return (
        <div>
            {!children ? (<div></div>) : (   
                <a href={"#"} className={BtnClass}>
                    {children}
                </a>
        ) }
         
        </div>
    );
}