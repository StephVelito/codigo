import { AuthProvider } from "./context/AuthContext";
import Router from "./routes";

function App() {
  return (
    <div>
        <AuthProvider>
        <Router />
        </AuthProvider>
    </div>
  );
}

export default App;