export default function MyComponent({value, hndelChage , title}) {
    return (
        <>     
            <label>{title}</label>
            <input 
                type="text" 
                value={value} 
                onChange={(event) => {
                    hndelChage(event.target.value);
                }} 
            />


        </>
    );
}