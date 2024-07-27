export default function Posts() {

return (
    <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
 
);
}

function Card() {
    return (
        <div className="card">
            <h2>This is post Title</h2>
             <hr/>
            <p>This is post body</p>
        </div>
    );
}