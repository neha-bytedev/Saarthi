"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Onboarding() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("personal")
  const [isLoading, setIsLoading] = useState(false)

  const handleNext = () => {
    if (activeTab === "personal") setActiveTab("medical")
    else if (activeTab === "medical") setActiveTab("emergency")
    else if (activeTab === "emergency") {
      setIsLoading(true)
      // Simulate saving data
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (activeTab === "medical") setActiveTab("personal")
    else if (activeTab === "emergency") setActiveTab("medical")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Set Up Your Medical Profile</CardTitle>
            <CardDescription>
              This information will be available to emergency responders in critical situations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="medical">Medical History</TabsTrigger>
                <TabsTrigger value="emergency">Emergency Contacts</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Street address" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code</Label>
                    <Input id="zip" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>
              </TabsContent>

              <TabsContent value="medical" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="conditions">Medical Conditions</Label>
                  <Textarea
                    id="conditions"
                    placeholder="List any chronic conditions (e.g., diabetes, asthma, heart disease)"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea
                    id="allergies"
                    placeholder="List any allergies (e.g., medications, foods, environmental)"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea
                    id="medications"
                    placeholder="List medications, dosages, and frequency"
                    className="min-h-[100px]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Select>
                      <SelectTrigger id="bloodType">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a-positive">A+</SelectItem>
                        <SelectItem value="a-negative">A-</SelectItem>
                        <SelectItem value="b-positive">B+</SelectItem>
                        <SelectItem value="b-negative">B-</SelectItem>
                        <SelectItem value="ab-positive">AB+</SelectItem>
                        <SelectItem value="ab-negative">AB-</SelectItem>
                        <SelectItem value="o-positive">O+</SelectItem>
                        <SelectItem value="o-negative">O-</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organDonor">Organ Donor</Label>
                    <Select>
                      <SelectTrigger id="organDonor">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emergency" className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label>Primary Emergency Contact</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName1">Name</Label>
                      <Input id="emergencyName1" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation1">Relationship</Label>
                      <Input id="emergencyRelation1" placeholder="e.g., Spouse, Parent" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone1">Phone</Label>
                      <Input id="emergencyPhone1" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyEmail1">Email</Label>
                      <Input id="emergencyEmail1" type="email" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Secondary Emergency Contact</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyName2">Name</Label>
                      <Input id="emergencyName2" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyRelation2">Relationship</Label>
                      <Input id="emergencyRelation2" placeholder="e.g., Sibling, Friend" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    <div className="space-y-2">
                      <Label htmlFor="emergencyPhone2">Phone</Label>
                      <Input id="emergencyPhone2" type="tel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="emergencyEmail2">Email</Label>
                      <Input id="emergencyEmail2" type="email" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryPhysician">Primary Physician</Label>
                  <Input id="primaryPhysician" placeholder="Name of your doctor" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="physicianPhone">Physician Phone</Label>
                  <Input id="physicianPhone" type="tel" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={activeTab === "personal"}>
              Back
            </Button>
            <Button onClick={handleNext}>
              {activeTab === "emergency" ? (isLoading ? "Saving..." : "Complete Setup") : "Next"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

