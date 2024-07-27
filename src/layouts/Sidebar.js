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
        "minWidth": "80px",
        "maxWidth": "80px",

    };
    return (
        <aside style={StyleSidebar}>
                <div style={StyleColection}>
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                </div>
                <div style={StyleColection}>
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                    <Btn />
                </div>
                <Btn />
        </aside>
    );
}
function Btn() {
    const BtnClass = "btn btn-click";
    return (
        <a href={"#"} className={BtnClass}>Tag Button</a>
    );
}