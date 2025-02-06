import React from "react"
import CommonRoutes from "./Routes/CommonRoutes"
import FreelancerRoutes from "./Routes/FreelancersRoutes/FreelancerRoutes"
import ClientsRoutes from "./Routes/ClientsRoutes/ClientsRoutes"
import { BrowserRouter } from "react-router-dom"







function App() {
  return (
    <div>
      <BrowserRouter>
     <CommonRoutes/>
     <FreelancerRoutes/>
     <ClientsRoutes/>
     </BrowserRouter>
    </div>
  )
}

export default App