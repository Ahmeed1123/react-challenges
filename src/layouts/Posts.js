export default function Posts() {
  const cards = [
    {
      id: 1,
      title: "أكاديمية ترميز",
      content: "أكادمية مخصصة لتعليم البرمجة بمختلف لغاتها",
      children: <h2 className="mb-0">20</h2>,
    },
    {
      id: 2,
      title: "hello world",
      content: "this is hello word article",
      children: null,
    },
    {
      id: 3,
      title: "Post 3",
      content: "this is body of post 3",
      children: null,
    },
  ];

  const myCardsList = cards.map(({ id, title, content, children }) => {
    if (!children) {
      return <Card key={id} title={title} content={content} />;
    }
    return (
      <Card key={id} title={title} content={content}>
        {children } 
      </Card>
    );
  });

  return (
    <div className="posts">
      {/* <Card title={firstTitle} content={contentOne} > 
                <h2 className="mb-0">20</h2>
            </Card>
            <Card title="hello world" content="this is hello word article"/>
            <Card title="Post 3" content="this is body of post 3" /> */}
      {myCardsList}
    </div>
  );
}

function Card({ title, content, children }) {
  return (
    <div className="card">
      {children}
      <h2 className="mt-0">{title}</h2>
      <hr />
      <p>{content}</p>
    </div>
  );
}
