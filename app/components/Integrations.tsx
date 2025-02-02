"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const integrations = [
  { name: "Salesforce", logo: "/placeholder.svg?height=50&width=50" },
  { name: "SAP", logo: "/placeholder.svg?height=50&width=50" },
  { name: "Oracle", logo: "/placeholder.svg?height=50&width=50" },
  { name: "Microsoft Dynamics", logo: "/placeholder.svg?height=50&width=50" },
  { name: "Shopify", logo: "/placeholder.svg?height=50&width=50" },
  { name: "HubSpot", logo: "/placeholder.svg?height=50&width=50" },
]

const Integrations = () => {
  return (
    <section id="integrations" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Powerful Integrations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-red-600">
                <CardHeader className="flex flex-col items-center">
                  <img src={integration.logo || "/placeholder.svg"} alt={integration.name} className="w-16 h-16 mb-4" />
                  <CardTitle>{integration.name}</CardTitle>
                  <CardDescription>Seamless integration with {integration.name}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Integrations

