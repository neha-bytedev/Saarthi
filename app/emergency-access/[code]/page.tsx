"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HospitalIcon as MedicalSymbol, AlertTriangle, Phone, Clock } from "lucide-react"

export default function EmergencyAccess() {
  const params = useParams()
  const code = params.code as string

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [patientData, setPatientData] = useState<any>(null)

  useEffect(() => {
    // Simulate API call to fetch patient data
    setTimeout(() => {
      // In a real app, this would be an API call using the code parameter
      if (code === "invalid") {
        setError("Invalid access code. Please check and try again.")
      } else {
        setPatientData({
          name: "John Doe",
          dob: "1985-01-15",
          age: 38,
          bloodType: "O+",
          conditions: ["Type 2 Diabetes", "Hypertension"],
          allergies: ["Penicillin", "Shellfish"],
          medications: ["Metformin 500mg twice daily", "Lisinopril 10mg once daily", "Aspirin 81mg once daily"],
          emergencyContacts: [
            {
              name: "Jane Doe",
              relationship: "Spouse",
              phone: "(555) 123-4567",
            },
            {
              name: "Michael Doe",
              relationship: "Son",
              phone: "(555) 987-6543",
            },
          ],
          physician: {
            name: "Dr. Sarah Smith",
            phone: "(555) 456-7890",
          },
        })
      }
      setLoading(false)
    }, 1500)
  }, [code])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <MedicalSymbol className="h-6 w-6 text-red-600 mr-2" />
              Emergency Medical Access
            </CardTitle>
            <CardDescription className="text-center">Loading patient information...</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center py-6">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 bg-primary/20 rounded-full mb-4"></div>
              <div className="h-4 w-48 bg-primary/20 rounded mb-2"></div>
              <div className="h-4 w-32 bg-primary/20 rounded"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center justify-center text-red-600">
              <AlertTriangle className="h-6 w-6 mr-2" />
              Access Error
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert variant="destructive">
              <AlertTitle>Invalid Access</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
            <div className="mt-6 text-center">
              <p className="mb-4">If you need immediate assistance, please call emergency services.</p>
              <Button variant="default" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Emergency Services
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6 border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-red-600 mr-2" />
              <p className="text-red-600 font-medium">
                EMERGENCY ACCESS MODE - This information is intended for emergency medical personnel only
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl">{patientData.name}</CardTitle>
                <CardDescription>
                  DOB: {new Date(patientData.dob).toLocaleDateString()} ({patientData.age} years) • Blood Type:{" "}
                  {patientData.bloodType}
                </CardDescription>
              </div>
              <Button variant="destructive">
                <Phone className="mr-2 h-4 w-4" />
                Emergency Call
              </Button>
            </div>
          </CardHeader>
        </Card>

        <Tabs defaultValue="critical" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="critical">Critical Info</TabsTrigger>
            <TabsTrigger value="conditions">Conditions</TabsTrigger>
            <TabsTrigger value="medications">Medications</TabsTrigger>
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
          </TabsList>

          <TabsContent value="critical" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Critical Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-600 mr-2" />
                    Allergies
                  </h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    {patientData.allergies.map((allergy: string, index: number) => (
                      <li key={index} className="text-red-600 font-medium">
                        {allergy}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Blood Type</h3>
                  <p className="text-xl font-bold pl-4">{patientData.bloodType}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Primary Conditions</h3>
                  <ul className="list-disc list-inside space-y-1 pl-4">
                    {patientData.conditions.map((condition: string, index: number) => (
                      <li key={index}>{condition}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="conditions" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Medical Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {patientData.conditions.map((condition: string, index: number) => (
                    <li key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{condition}</h3>
                      <p className="text-sm text-gray-500">
                        {condition === "Type 2 Diabetes"
                          ? "Diagnosed in 2018. Well-controlled with medication and diet."
                          : "Diagnosed in 2019. Controlled with medication."}
                      </p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="medications" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Current Medications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {patientData.medications.map((medication: string, index: number) => (
                    <li key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{medication.split(" ")[0]}</h3>
                      <p className="text-sm text-gray-500">{medication}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Emergency Contacts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {patientData.emergencyContacts.map((contact: any, index: number) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium">{contact.name}</h3>
                        <p className="text-sm text-gray-500">{contact.relationship}</p>
                        <p className="text-sm font-medium mt-1">{contact.phone}</p>
                      </div>
                      <Button variant="outline" className="ml-auto">
                        Call
                      </Button>
                    </div>
                  ))}

                  <div className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MedicalSymbol className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{patientData.physician.name}</h3>
                      <p className="text-sm text-gray-500">Primary Physician</p>
                      <p className="text-sm font-medium mt-1">{patientData.physician.phone}</p>
                    </div>
                    <Button variant="outline" className="ml-auto">
                      Call
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

