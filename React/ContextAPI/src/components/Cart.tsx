import { useEffect, useState } from "react";

export function Cart() {
    const [isOpen, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!isOpen)
    }

    useEffect(() => {
        console.info("Rendering Cart")
    })

    return (
        <>
            <div className="text-center">
                <button
                className="text-white bg-blue-700 hover:bg-blue-600 focus:ring-blue-300
                font-medium rounded-lg text-sm focus:outline"
                type="button"
                data-drawer-target="drawer-example"
                data-drawer-show="drawer-example"
                aria-controls="drawer-example">
                    
                </button>
            </div>
        </>
    )
}