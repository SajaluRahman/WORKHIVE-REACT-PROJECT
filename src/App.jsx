import React from "react"
import CommonRoutes from "./Routes/CommonRoutes"
import FreelancerRoutes from "./Routes/FreelancersRoutes/FreelancerRoutes"
import ClientsRoutes from "./Routes/ClientsRoutes/ClientsRoutes"







function App() {
  return (
    <div>
     <CommonRoutes/>
     <FreelancerRoutes/>
     <ClientsRoutes/>
    </div>
  )
}

export default App