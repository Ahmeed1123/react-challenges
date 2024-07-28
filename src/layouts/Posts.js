export default function Posts() {
    const firstTitle = `
                        أكاديمية ترميز
                        `;
    const contentOne = `أكادمية مخصصة لتعليم البرمجة بمختلف لغاتها`;
    return (
        <div className="posts">
            <Card title={firstTitle} content={contentOne} > 
                <h2 className="mb-0">20</h2>
            </Card>
            <Card title="hello world" content="this is hello word article"/>
            <Card title="Post 3" content="this is body of post 3" />
        </div>
    
    );
}

function Card({title, content , children}) {
    return (
        <div className="card">
            {children}
            <h2 className="mt-0">{title}</h2>
             <hr/>
            <p>{content}</p>
        </div>
    );
}