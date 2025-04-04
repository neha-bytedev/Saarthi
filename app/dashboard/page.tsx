"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { HospitalIcon as MedicalSymbol, User, FileText, QrCode, Key, Bell, LogOut, Settings } from "lucide-react"
import QRCode from "./qr-code"
import AccessCode from "./access-code"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    accessCode: "7291-4356",
    qrCodeUrl: "https://example.com/qr/johndoe",
    lastUpdated: "2023-11-15",
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MedicalSymbol className="h-6 w-6 text-red-600" />
            <span className="font-bold text-xl">MedAccess</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Link href="/login">
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <aside className="md:w-64">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <h2 className="font-semibold text-lg">{userInfo.name}</h2>
                  <p className="text-sm text-gray-500">{userInfo.email}</p>
                </div>
                <nav className="space-y-1">
                  <Button
                    variant={activeTab === "overview" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("overview")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Overview
                  </Button>
                  <Button
                    variant={activeTab === "medical" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("medical")}
                  >
                    <MedicalSymbol className="mr-2 h-4 w-4" />
                    Medical Info
                  </Button>
                  <Button
                    variant={activeTab === "access" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setActiveTab("access")}
                  >
                    <QrCode className="mr-2 h-4 w-4" />
                    Access Methods
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="overview" className="mt-0">
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>Welcome back, {userInfo.name.split(" ")[0]}</CardTitle>
                    <CardDescription>
                      Your medical information was last updated on {userInfo.lastUpdated}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                        <QrCode className="h-10 w-10 text-primary mr-4" />
                        <div>
                          <h3 className="font-medium">Your QR Code</h3>
                          <p className="text-sm text-gray-500">Scan for instant access</p>
                        </div>
                      </div>
                      <div className="bg-primary/10 rounded-lg p-4 flex items-center">
                        <Key className="h-10 w-10 text-primary mr-4" />
                        <div>
                          <h3 className="font-medium">Access Code</h3>
                          <p className="text-sm text-gray-500">{userInfo.accessCode}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
                        <FileText className="h-6 w-6 mb-2" />
                        <span>Update Medical Info</span>
                      </Button>
                      <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
                        <QrCode className="h-6 w-6 mb-2" />
                        <span>View QR Code</span>
                      </Button>
                      <Button variant="outline" className="h-auto py-4 flex flex-col items-center">
                        <Key className="h-6 w-6 mb-2" />
                        <span>View Access Code</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="medical" className="mt-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Information</CardTitle>
                    <CardDescription>Review and update your medical information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Full Name</p>
                              <p>John Doe</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Date of Birth</p>
                              <p>January 15, 1985</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Blood Type</p>
                              <p>O+</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Gender</p>
                              <p>Male</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Medical Conditions</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p>Type 2 Diabetes, Hypertension</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Allergies</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p>Penicillin, Shellfish</p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Current Medications</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <ul className="list-disc list-inside space-y-1">
                            <li>Metformin 500mg twice daily</li>
                            <li>Lisinopril 10mg once daily</li>
                            <li>Aspirin 81mg once daily</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium mb-2">Emergency Contacts</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="space-y-4">
                            <div>
                              <p className="font-medium">Jane Doe (Spouse)</p>
                              <p className="text-sm">Phone: (555) 123-4567</p>
                              <p className="text-sm">Email: jane.doe@example.com</p>
                            </div>
                            <div>
                              <p className="font-medium">Michael Doe (Son)</p>
                              <p className="text-sm">Phone: (555) 987-6543</p>
                              <p className="text-sm">Email: michael.doe@example.com</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button>Edit Medical Information</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="access" className="mt-0">
                <div className="grid md:grid-cols-2 gap-6">
                  <QRCode userId={userInfo.qrCodeUrl} />
                  <AccessCode accessCode={userInfo.accessCode} />
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  )
}

