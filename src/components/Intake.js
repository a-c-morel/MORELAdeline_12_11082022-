export default function Intake({img, children}) {
    return (
        <div className="intake">
            <img src={img} alt="" />
            {children}
        </div>
    )
}