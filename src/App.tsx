import { Route, Routes } from "react-router-dom";
import "./App.css";
import Create from "./pages/create";
import Home from "./pages/home";
import Join from "./pages/join";
import QrCodeScan from "./pages/join/qrcode";
import Text from "./pages/join/text";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="create/:id" element={<Create />} />
                <Route path="/join" element={<Join />} />
                <Route path="/join/qrcode" element={<QrCodeScan />} />
                <Route path="/join/text" element={<Text />} />
            </Routes>
        </div>
    );
}

export default App;
