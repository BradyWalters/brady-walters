import { Button } from "@mui/material";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
    const [activeTheme, setActiveTheme] = useState('dark')
    const inactiveTheme = activeTheme === "light" ? "dark" : "light"

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
    }, [activeTheme]);

    return (
        <Button onClick={() => setActiveTheme(inactiveTheme)}>Dark Mode Toggle</Button>
    )
}