import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; 

const Heyzine = () => {
    const location = useLocation();
    const [page, setPage] = useState(1);//5

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const pageFromUrl = urlParams.get("page");
        if (pageFromUrl && !isNaN(pageFromUrl)) {  
            setPage(pageFromUrl);
        }
    }, [location.search]);

    return (
        <div style={{ position: "relative", width: "100%", height: "100vh" }}>
            <a
                href="/"
                //target="_blank"
                rel="noreferrer"
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    zIndex: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    padding: "5px 10px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    color: "black",
                }}
            >
                Voltar
            </a>
            <a
                href="/"
                //target="_blank"
                rel="noreferrer"
                style={{
                    position: "absolute",
                    top: "10px",
                    left: "100px",
                    zIndex: 10,
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    padding: "5px 10px",
                    textDecoration: "none",
                    borderRadius: "4px",
                    color: "black",
                }}
            >
                Baixar Livro
            </a>
            <iframe
                allowFullScreen="allowFullScreen"
                scrolling="no"
                className="fp-iframe"
                style={{
                    border: "1px solid lightgray",
                    width: "100%",
                    height: "100vh",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                }}
                src={`https://heyzine.com/flip-book/e91df434fb.html#page/${encodeURIComponent(page)}`} 
            ></iframe>
        </div>
    );
};

export default Heyzine;
