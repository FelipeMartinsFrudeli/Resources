
import { Routes, Route } from "react-router-dom";

import { HomePage } from "@/pages/Home";
import { LoginPage } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Secret } from "./pages/Secret";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/secret"
                element={
                    <ProtectedRoute>
                        <Secret />
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

export default App;