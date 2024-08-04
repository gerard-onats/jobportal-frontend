import { useEffect, useRef, useState } from "react";

const useDropdown = () => {
    const dropdownRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = (event) => {
            const isInside = dropdownRef.current.contains(event.target);
            if(!isInside && visible) {
                setVisible(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return {visible, setVisible, dropdownRef}
}

export default useDropdown;