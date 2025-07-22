const HeaderComponent = () =>{
    return (
        <div className="header flex justify-between bg-gray-200">
            <h1 className="p-5 m-2 text-2xl font-bold">Namaste React</h1>
            <ul className="flex p-5">
                <li className="m-2">Home</li>
                <li className="m-2">About</li> 
                <li className="m-2">Contact</li>
                <li className="m-2">Cart</li>
            </ul>
        </div>
    )
}

export default HeaderComponent;