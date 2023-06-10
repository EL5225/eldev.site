export const CheckTheme = () => {
    const element = document.documentElement;
    const theme = localStorage.getItem("theme")

    if (theme === "dark") {
        element.classList.add("dark")
     
        
    } else {
        element.classList.remove("dark")
      
    }
}