import Router from "./Router.jsx";
import {useEffect, useState} from "react";
import Loader from "./components/Helper/Loader.jsx";
import Layout from "./components/Helper/Layout.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    });



  return (
    <>
        {loading && (
            <div className={`dyscoverAI-loader ${loading ? 'active' : ''}`}>
                <Loader />
            </div>
        )}
        <div className={`dyscoverAI-visible ${loading === false ? 'active' : ''}`}>

                <Router />

        </div>

    </>
  );
}

export default App;
