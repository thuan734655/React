import { useState, useEffect } from "react";

const App = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("../public/menu.json"); 
        if (!response.ok) throw new Error("Failed to fetch menus");
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.error("Error loading menus:", error);
      }
    };

    fetchMenus();
  }, []);

  return (
    <div>
      {menus.map((menu, index) => (
        <div key={index}>
          <a href={`/${menu.toLowerCase()}`}>{menu}</a>
        </div>
      ))}
    </div>
  );
};

export default App;
